import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import UI from "./UI"

const app = createApp(App)

UI.map((component) => app.component(component.name, component))
app.use(router)
app.use(store)
app.mount("#app")
