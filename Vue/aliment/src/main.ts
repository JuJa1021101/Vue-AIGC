import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ELDialog from './components/dialog'

createApp(App)
    .use(ELDialog)
    .mount('#app')
