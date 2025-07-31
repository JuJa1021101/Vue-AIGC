import { createApp } from 'vue'
import store  from '../store'
import App from './App.vue'
import './assets/reset.css'
import './styles/main.css'
const app = createApp(App)


app.use(store)
.mount('#app')

