import AuthService from "../service/auth"

const state = {
   isLoading: false,
   user: null,
   errors: null
}

const mutations = {
   registerStart(state) {
      state.isLoading = true
      state.user = null
      state.errors = null
   },
   registerSuccess(state,payload) {
      state.isLoading = false
      state.user = payload
   },
   registerFailure(state,payload) {
      state.isLoading = false
      state.errors = payload
   },
}

const actions = {
   register(context,user) {
      context.commit("registerStart")
      return new Promise((resolve,reject)=>{
         AuthService.register(user).then(response=>{
            console.log(response.data.user);
            context.commit("registerSuccess",response.data.user)
            resolve(response.data.user)
         }).catch(error=>{
            console.log(error.response.data.errors);
            context.commit("registerFailure",error.response.data.errors)
            reject(error.response.data.errors)
         })

      })
   },
}
export default { state, mutations, actions }
