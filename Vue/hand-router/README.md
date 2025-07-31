# vue-router 手写

- router 初始化及配置


- 路由守卫
    - router-beforeEach

- 路由的懒加载

    更快的看到首页
    {
        path :'/about',
        component:() =>import('./views/About.vue')//懒加载的关键核心
    }


- router-link   router-view
- vue 组件
    自定义组件
    transition 内置组件
    - 全局组件 可在任何地方都可以直接访问
        app.component('router-link',RouterLink)
        - 如果组件没有被解析，DOM树就会把它当成一般标签解析
        - app.component怎么来的
        - app.use(router)

- router-link 是怎么工作的
    - 来自于vue-router
    - vue.component() 全局组件的理解
    - vue.use()  vue 同插件生态注入
    - Router 插件 准备好install方法

- <slot /> 
    - 插槽
    - 组件内部交给外部去自定义
    - 提升了组件的可复用性


- 
    - 协议 
    - 域名
    - 端口号
    - hash
    - path
    - params
    - query


- 高级的响应式
    - ref/reactive
    