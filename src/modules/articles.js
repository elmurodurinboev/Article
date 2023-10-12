import ArticleService from "../service/articles.js"

const state = {
   data: null,
   isLoading: false,
   error: null,
}

const mutations = {
   getArticlesStart(state) {
      state.data = null
      state.isLoading = true
      state.errors = null
   },
   getArticlesSuccess(state, payload) {
      state.isLoading = false
      state.data = payload
   },
   getArticlesFailure(state, payload) {
      state.isLoading = false
      state.errors = payload
   },
}

const actions = {
   articles(contex) {
      contex.commit("getArticlesStart")
      return new Promise((resolve) => {
         ArticleService.articles()
            .then((response) => {
               contex.commit("getArticlesSuccess", response.data.articles)
               resolve(response.data.articles)
            })
            .catch((error) => contex.commit("getArticlesFailure", error))
      })
   },
}

export default {
   state,
   mutations,
   actions,
}
