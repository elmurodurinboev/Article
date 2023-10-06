import { setItem } from "../helpers/persistaneStorage"
import AuthService from "../service/auth"
import { gettersTypes } from "./types"

const state = {
   isLoading: false,
   user: null,
   errors: null,
   isLoggedIn: null,
}

const getters = {
   [gettersTypes.currentUser]: (state) => {
      return state.user
   },
   [gettersTypes.isLoggedIn]: (state) => {
      return Boolean(state.isLoggedIn)
   },
   [gettersTypes.isAnonymous]: (state) => {
      return state.isLoggedIn == false
   },
}

const mutations = {
   registerStart(state) {
      state.isLoading = true
      state.user = null
      state.errors = null
      state.isLoggedIn = null
   },
   registerSuccess(state, payload) {
      state.isLoading = false
      state.user = payload
      state.isLoggedIn = true
   },
   registerFailure(state, payload) {
      state.isLoading = false
      state.errors = payload.errors
      state.isLoggedIn = false
   },

   loginStart(state) {
      state.isLoading = true
      state.user = null
      state.errors = null
      state.isLoggedIn = null
   },

   loginSuccess(state, payload) {
      state.isLoading = false
      state.user = payload
      state.isLoggedIn = true
   },

   loginFailure(state, payload) {
      state.isLoading = false
      state.errors = payload.errors
      state.isLoggedIn = false
   },

   currentUserStart(state) {
      state.isLoading = true
   },
   currentUserSuccess(state, payload) {
      state.isLoading = false
      state.isLoggedIn = true
      state.user = payload
   },
   currentUserFailure(state) {
      state.isLoggedIn = false
   },
}

const actions = {
   register(context, user) {
      context.commit("registerStart")
      return new Promise((resolve, reject) => {
         AuthService.register(user)
            .then((response) => {
               context.commit("registerSuccess", response.data.user)
               setItem("token", response.data.user.token)
               resolve(response.data.user)
            })
            .catch((error) => {
               context.commit("registerFailure", error.response.data)
               reject(error.response.data)
            })
      })
   },

   login(context, user) {
      context.commit("loginStart")
      return new Promise((resolve, reject) => {
         AuthService.login(user)
            .then((response) => {
               context.commit("loginSuccess", response.data.user)
               setItem("token", response.data.user.token)
               resolve(response.data.user)
            })
            .catch((error) => {
               context.commit("loginFailure", error.response.data)
               reject(error.response.data)
            })
      })
   },

   getUser(context) {
      context.commit("currentUserStart")
      return new Promise((resolve) => {
         AuthService.getUser()
            .then((response) => {
               context.commit("currentUserSuccess", response.data.user)
               resolve(response.data.user)
            })
            .catch(() => {
               context.commit("currentUserFailure")
            })
      })
   },
}
export default { state, mutations, actions, getters }
