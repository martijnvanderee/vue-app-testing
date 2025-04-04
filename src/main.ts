import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { createPinia } from "pinia"

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.mount('#app')
