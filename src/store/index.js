import { createStore } from "vuex"
import auth from "../modules/auth"
import articles from "../modules/articles.js";

// Create a new store instance.
const store = createStore({
   state: {},
   mutations: {},
   actions: {},
   modules: { auth,articles },
})

export default store
