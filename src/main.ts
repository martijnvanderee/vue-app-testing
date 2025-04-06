import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { router } from "./router.ts"

import { createPinia } from "pinia"

const pinia = createPinia()

const app = createApp(App)

pinia.use(piniaPluginPersistedstate)
app.use(pinia).use(router)
app.mount('#app')
