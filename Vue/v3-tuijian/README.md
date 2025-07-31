# 推荐算法

- posts 数据源
- 大前端
    v3 vue-router 单页应用
    backend ai 推荐


- router-link 高级用法
    <router-link :to="/">Home</router-link>
    动态
    /user/123
    {
        name:'user',
        path:'/user/:userId'
    }
    <router-link :to="{name:'user',params:{userId；123}}">User</router-link>


- axios vue/react 通用的请求器
     - baseURL 切换所有的请求
     - api/ 接管所有的请求