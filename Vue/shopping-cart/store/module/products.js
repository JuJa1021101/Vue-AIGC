import  API  from '../../api/shop'
const state = {
    all: []
}

const getters = {

}

const actions = {
    // api请求 -> 提交mutations
    // commit ? vuex给actions 可以commit mutations 的API
    getAllProducts({commit}){
        API.getProducts((products) =>{
            console.log(products);
            commit('setProducts',products)
            
        })
    }
}
//比pinia更复杂
const mutations = {
    //vuex mutations api 第一个参数是state 第二个执行mutations 的commit
    setProducts(state,products){
        state.all = products
    },
    decrementProductInventory(state, { id }) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    },
    incrementProductInventory(state,{ id }) {
        const product = state.all.find(product => product.id === id)
        product.inventory++
    }
}
// store.product.all
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}

