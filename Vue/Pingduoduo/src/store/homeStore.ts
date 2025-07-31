import { defineStore } from "pinia";
//关键数据要限制类型

import { ref } from "vue";
import {
  FNavBarStateType,
  NavBarStateType
} from "../types/home.ts";

export const useHomeStore = defineStore('home', () => {
  //topBarState 响应式的状态   topBarState.value
  const topBarState = ref<NavBarStateType[]>([
    {
      title: "推荐",
    },
    {
      title: "百货",
    },
    {
      title: "食品",
    },
    {
      title: "手机",
    },
    {
      title: "运动",
    },
    {
      title:"电脑"
    },
    {
      title:"母婴"
    },
    {
      title:"家居"
    }

  ])
  const navBarState = ref<FNavBarStateType[]>([
    {
      title: "限时秒杀",
      icon: "#icon-xianshimiaosha",
    },
    {
      title: "充值中心",
      icon: "#icon-chongzhizhongxin",
    },
    {
      title: "现金大转盘",
      icon: "#icon-zhuanpan",
    },
    {
      title: "免费领水果",
      icon: "#icon-a-fruitetree",
    },
    {
      title: "其他",
      icon: "#icon-qita",
    },
  ])
  const productState = ref([
    { id: 1, name: 'Item 1', price: '¥71.1', desc: '清风抽纸',type:'百亿补贴' ,iscollect:0,count:'5w',thumb: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Item 2', price: '¥21.98', desc: '矿泉水', type:'百亿补贴' ,iscollect:0,count:'8w',thumb: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Item 3', price: '¥104.99', desc: '红牛饮料', type:'百亿补贴' ,iscollect:0,count:'6k',thumb: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Item 4', price: '¥18.99', desc: '纸巾', type:'百亿补贴' ,iscollect:0,count:'1w',thumb: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Item 5', price: '¥3.01', desc: '手帕纸', type:'百亿补贴' ,iscollect:0,count:'8k',thumb: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Item 6', price: '¥192', desc: '投影仪',type:'百亿补贴' , iscollect:0,count:'50',thumb: 'https://via.placeholder.com/150' },

  ])

  return {
    topBarState,
    navBarState,
    productState
  }
})