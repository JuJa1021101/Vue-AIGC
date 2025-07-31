import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

//use 方法做了什么事
// vue只负责创建组件思想，mvvm 响应式 等核心
//其他交给生态系统，一起开源 vue-router 是vue生态中的路由模块、
// vue 和它生态的对接？ 就是这个use方法
app.use(router)
    .mount('#app')
