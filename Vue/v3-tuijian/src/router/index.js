import { createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            component:() => import('../views/Home.vue')
        },
        {
            path:'/post/:id',
            name:'Detail',
            component:() => import('../views/Detail.vue')
        },
        {
            path:'/login',
            name:'Login',
            component:() => import('../views/Login.vue')
        },
        {
            path:'/cart',
            name:'Cart',
            component: () => import('../views/Cart.vue'),
            meta:{
                requireAuth:true
            }

        }
    ]
})
//路由守卫
// router.beforeEach((to,from,next)=>{
//     console.log(to,from,'??????????')
//     // next({path:'/Login'})
//     if(to.meta.requiresAuth){
//         if(localStorage.getItem('isLogin')){
//             next()
//         }else{
//             next({path:'/login'})
//         }

//     }else{
//         next()
//     }
// })
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (localStorage.getItem('isLoggedIn')) {
            next()
        } else {
            next({path: '/login'})
        }
    } else {
        next()
    }
    
})


export default router;