import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import mitt from 'mitt'


const emitter = mitt()
const app = createApp(App)

app.use(router)
app.config.globalProperties.emitter = emitter
app.mount('#app')

// createApp(App).use(router).mount('#app').config.globalProperties.emitter(emitter)
