// import { createStore } from 'vuex'

// //全局状态管理
// //不再有父兄子 陌生人
// const state = {
//     count:0//计数状态
// }

// export default createStore({
//     state
// })
import { createStore } from 'vuex'

// 全局状态
// 不再有父兄子 默生人 login 
const state = {
    count: 0 ,// 计数状态
    user:null
}
//修改 要按流程
const actions = {
    increment: ( commit ) => commit('increment')
}
//所有的状态修改要经过mutations
const mutations = {
    increment(state){
        state.count++
    }
}
const store = createStore(
    state,
    actions,
    mutations
)
export default {
    store
};