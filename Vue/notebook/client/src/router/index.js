import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/noteClass'
    },
    {
      path:'/login',
      component:()=>import('@/views/login.vue'),
      meta:{
        title:'登录'
      }
    },
    {
      path:'/noteClass',
      component:()=>import('@/views/noteClass.vue'),
      meta:{
        title:'首页'
      }
    },
    {
      path:'/register',
      component:()=>import('@/views/register.vue'),
      meta:{
        title:'注册'
      }
    },
    {
      path:'/noteList',
      component:() =>import('@/views/noteList.vue'),
      meta:{
        title:'笔记列表'
      }

    },
    {
      path:'/noteDetail',
      component:() =>import('@/views/noteDetail.vue'),
      meta:{
        title:'笔记详细'
      }
    },
    {
      path:'/notePublish',
      component:() =>import('@/views/notePublish.vue'),
      meta:{
        title:'发布笔记'
      }
    },

  ]
})

//全局的路由守卫
const whitePath = ['/login','/register','/noteClass']
router.beforeEach((to,from,next) =>{
  document.title = to.meta.title
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

export default router
