// ts是js的超集  TypeScript 可以和现有的 JavaScript 代码无缝结合
// ts多了类型定义，写起来和java一样 静态的编译
// 将代码中的

import { createRouter,createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
//:后面声明了一个类型 RouteRecordRaw 一个route 类型 RouteRecordRaw[] route数组
const rootRoutes :RouteRecordRaw[]= [
    {
        path:'/home',
        name:'Home',
        component: () => import('@/views/Home/Home.vue'),
        meta:{
            cache:true
        }

    },
    {
        path: '/discount',
        name: 'Discount',
        meta: {
            cache: false
        },
        component: () => import('../views/Discount/Discount.vue')
    },
    
]

const routes :RouteRecordRaw[] = [
    {

        name:'',
        meta:{},
        //可写可不写
        path:'/',
        component:() =>import('../views/TheRoot.vue'),
        //一定要写
        redirect:'/home',
        children:rootRoutes
    },
    {
        path:'/login',
        name:'Login',
        meta:{
            cache:false
        },
        component:() => import('../views/login.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,

})

export default router;