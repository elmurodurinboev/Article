import ArticleService from "../service/articles.js"

const state = {
   data: null,
   isLoading: false,
   error: null,
   article: null
}

const mutations = {
   getArticlesStart(state) {
      state.data = null
      state.isLoading = true
      state.errors = null
      state.article = null
   },
   getArticlesSuccess(state, payload) {
      state.isLoading = false
      state.data = payload
   },
   getArticlesFailure(state, payload) {
      state.isLoading = false
      state.errors = payload
   },

   getArticleDetailStart(state) {
      state.data = null
      state.isLoading = true
      state.article = null
   },
   getArticleDetailSuccess(state, payload) {
      state.isLoading = false
      state.article = payload
   },
   getArticleDetailFailure(state, payload) {
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

   articleDetail(contex,slug) {
      contex.commit("getArticleDetailStart")
      return new Promise((resolve) => {
         ArticleService.articleDetail(slug)
            .then((response) => {
               contex.commit("getArticleDetailSuccess", response.data.article)
               resolve(response.data.article)
            })
            .catch((error) => contex.commit("getArticleDetailFailure", error))
      })
   },
}

export default {
   state,
   mutations,
   actions,
}
