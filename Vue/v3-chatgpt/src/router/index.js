// import {createRouter,createWebHashHistory} from 'vue-router'
// // 路由对象 
// const router = createRouter({
//     history : createWebHashHistory(),
//     routes :[
//         {
//             path:'/',
//             name:'home',
//             // 页面级别组件 views
//             component: () =>{import('../views/Home.vue')}
//         }
//     ]
// })


// export default router
//  / -> component
import {createRouter, createWebHashHistory} from 'vue-router'

// 路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            // 页面级别组件 views
            component: () => import('../views/Home.vue')
        },
        {
            path:'/about',
            name:'about',
            component:()=>import('../views/about.vue')
        }
    ]
})

export default router