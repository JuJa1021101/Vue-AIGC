import { createStore, } from 'vuex'

import products from './module/products.js'
import cart from './module/cart.js'
// vuex pinia 复杂 ，中央仓库的概念 store 单例 单一状态树

//仓库
//分子仓库
export default createStore({
    //全局状态
    state:{
        count:0
    },
    //模块化状态
    modules:{
        cart,//购物车状态
        products//商品状态
    }

})