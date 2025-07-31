// sidebar 模块的共享状态
import { defineStore } from "pinia";

export const useSidebarStore = defineStore('sidebar',{
    //计算属性的写法
    state:() =>{
        return {
            isCollapse:false
        }
    },
    actions:{
        //状态的改变 
        handleCollapse(){
            this.collapse = !this.collapse
        }
    }
})
// import { defineStore } from "pinia";

// export const useSidebarStore = defineStore('sidebar',{
//     state:() =>{
//         return {
//             isCollapse:false
//         }
//     },
//     actions:{
//         handleCollapse(){
//             this.collapse = !this.collapse
//         }
//     }
// })