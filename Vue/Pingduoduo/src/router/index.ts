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
            cache:true,
            title:'首页',
        }

    },
    {
        path: '/videos',
        name: 'Videos',
        meta: {
            cache: false,
            title:'视频',
        },
        component: () => import('@/views/Videos/videos.vue')
    },
    {
        path: '/specialSell',
        name: 'SpecialSell',
        meta: {
            cache: false,
            title:'热卖',
        },
        component: () => import('@/views/SpecialSell/specialSell.vue')
    },
    {
        path:'/chat',
        name:'Chat',
        meta:{
            cache:true,
            title:'聊天',
        },
        component: () => import('@/views/Chat/Chat.vue')
    },
    {
        path:'/account',
        name:'Account',
        meta:{
            cache: false,
            title:'个人中心',
        },
        component: () => import('@/views/Account/account.vue')
    }
    
]

const routes :RouteRecordRaw[] = [
    {

        name:'',
        meta:{
        },
        //可写可不写
        path:'/',
        component:() =>import('@/views/TheRoot.vue'),
        //一定要写
        redirect:'/home',
        children:rootRoutes
    },
    {
        path:'/login',
        name:'Login',
        meta:{
            cache:false,
            title:'登录',

        },
        component:() => import('@/views/Login.vue')
    },
    {
        path:'/productDetail',
        name:'ProductDetail',
        meta:{
            cache:false,
            title:'商品详细',
        },
        component:() => import('@/views/productDetail.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,

})

const whitePath = ['/login','/register','/home','/videos','/specialSell','/productDetail']
router.beforeEach((to,from,next) =>{
    console.log(from);
  document.title = <string>to.meta.title
  if(!whitePath.includes(to.path)){//需要登录
    //判断浏览器存了userinfo没
    if(!localStorage.getItem('userInfo')){//没登录
      router.push('/login')
      return
    }
    next()
    return
  }
  next()
})


export default router;