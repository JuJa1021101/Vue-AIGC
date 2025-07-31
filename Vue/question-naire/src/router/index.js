import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:() =>import('@/views/Home.vue')
    },
    {
      path:'/item',
      component:() =>import('@/views/Item.vue')
    },
    {
      path:'/score',
      component:() =>import('@/views/Score.vue')
    },
  ]
})
router.beforeEach(() =>{
  NProgress.start();
  
})
router.afterEach(() =>{
  NProgress.done()
})


export default router
