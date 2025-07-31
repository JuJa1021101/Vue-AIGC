import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path:'/',
    redirect:'/Login'
  },
  {
    path: '/Login',
    component: () => import('../views/Login.vue')
  },
  {
    path:'/Home',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path:'/Home',
        redirect:'/class'
      },
      {
        path:'/class',
        component: () =>import('../views/pages/Class.vue')
      }
    ]
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
export default router;
