import { createApp } from "vue"
import { createPinia } from "pinia"
import antdv from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import App from "./App.vue"
import router from "./router"

import "./assets/main.css"
import "@icon-park/vue-next/styles/index.css"

const app = createApp(App)

app.use(antdv)
app.use(createPinia())
app.use(router)

app.mount("#app")
