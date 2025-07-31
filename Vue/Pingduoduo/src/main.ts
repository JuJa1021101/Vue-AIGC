import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '//at.alicdn.com/t/c/font_4642325_kjsgiqyf6g.js'

const app = createApp(App)
app
    .use(createPinia())
    .use(router)

    .mount('#app')