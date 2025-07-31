<template>
    <div class="container w-full max-w-4xl h-80 overflow-auto p-4 bg-gray-100">
        <ul>
            <li v-for="(item, index) in products" :key="index" class="mb-4 p-4 border rounded bg-white">
                {{ item.title }} - {{ item.price }}
                <br>
                <button :class="[
                    'px-4 py-2 border rounded',
                    getProductInventory(item) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                ]" :disabled="!getProductInventory(item)" @click="addProductToCart(item)">
                    添加一个
                </button>
                <button :class="[
                    'px-4 py-2 border rounded ml-2',
                    getProductQuantity(item) > 0 ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                ]" :disabled="getProductQuantity(item) === 0" @click="deleteProductToCart(item)">
                    减小一个
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed,onMounted } from 'vue';
import { useStore } from 'vuex'


const store = useStore()
const products = computed(() => store.state.products.all)
const cartProducts = computed(() =>store.getters['cart/cartProducts'])

onMounted(() => {
    store.dispatch('products/getAllProducts');
})

const addProductToCart = (product) =>{
    //修改inventory -1 库存减一 cart + 1
    //修改 dispatch action -> commit mutation
    store.dispatch('cart/addProductToCart',product)
}

const deleteProductToCart = (product) => {
    store.dispatch('cart/deleteProductToCart',product)
}
const getProductQuantity = (product) => {
    const cartProduct = cartProducts.value.find(p => p.id === product.id)
    return cartProduct ? cartProduct.quantity : 0
}

const getProductInventory = (product) => {
    return product.inventory > 0
}
</script>

<style lang="scss" scoped>

</style>