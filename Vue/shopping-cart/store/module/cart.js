
const state = {
    items: []
}

const getters = {
    cartProducts:(state,getters,rootState) => {
        return state.items.map(({id,quantity}) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
                id:product.id,
                title:product.title,
                price:product.price,
                quantity
            }
        })
    },
    cartTotalPrice:(state,getters) => {
        //reduce()将数组消灭 累加和
        return getters.cartProducts.reduce((total,product) => {
            return total + product.price * product.quantity
        },0)
    }
}

const actions = {
    addProductToCart({commit,state},product){
        if(product.inventory > 0){
            const cartItem = state.items.find(item => item.id === product.id)
            if(!cartItem){//没存过的新添加进来
                commit('pushProductToCart',{ id:product.id })
            }else{
                commit('incrementItemQuantity',cartItem)
            }
            commit('products/decrementProductInventory',{id:product.id},{root:true})
        }
    },
    deleteProductToCart({commit,state},product){
        const cartItem = state.items.find(item => item.id === product.id)
        if(cartItem){
            commit('decrementItemQuantity',cartItem)
            commit('products/incrementProductInventory',{id:product.id},{root:true})
        }
    }
}
//比pinia更复杂
const mutations = {
    pushProductToCart(state,{ id }){
        state.items.push({
            id,
            quantity:1
        })
    },
    incrementItemQuantity(state,cartItem){
        // const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity ++
    },
    decrementItemQuantity(state,cartItem){
        cartItem.quantity --
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

