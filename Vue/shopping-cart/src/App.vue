<template>
  <div id="app" >
    <h1 class="text-center">Shopping Cart Example</h1>
    <hr />
    <h2 >Product</h2>
    <ProductList></ProductList>
    <hr />
    <h3 >Carting</h3>
    <shoppingCart></shoppingCart>
  </div>
</template>

<script setup>
// import { computed } from 'vue';
// import { useStore } from 'vuex';
import ProductList from './components/productList.vue'
import shoppingCart from './components/shoppingCart.vue';

// const store = useStore()
// const products = computed(() => store.state.products.all) 
// console.log(products,'---------');
// // commit mutation dispatch 派出一个action 
// store.dispatch('products/getAllProducts');
</script>

<style lang="less" scoped>

</style>