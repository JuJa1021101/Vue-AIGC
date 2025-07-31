import { createRouter,createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
//:后面声明了一个类型 RouteRecordRaw 一个route 类型 RouteRecordRaw[] route数组


const routes :RouteRecordRaw[] = [
    {
        name:'',
        //可写可不写
        path:'/home',
        component:() =>import('../views/Dialogue.vue'),
        //一定要写
    },

]

const router = createRouter({
    history:createWebHistory(),
    routes,

})

export default router;