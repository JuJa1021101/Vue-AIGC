import { createApp } from 'vue'
import './style.css'
import store from './store'//状态仓库
import App from './App.vue'

const app = createApp(App)
app
    .use(store)
    .mount('#app')
