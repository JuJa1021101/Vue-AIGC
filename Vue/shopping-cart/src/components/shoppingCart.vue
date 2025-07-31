<!-- 
<template>
    <div class="cart bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        <h2 class="text-2xl font-semibold mb-4">Your Cart</h2>
        <p v-show="!products.length" class="text-gray-500 italic">
            <i>Please add some products to cart</i>
        </p>
        <ul class="list-disc pl-5 mb-4">
            <li v-for="(item, index) in products" :key="index" class="mb-2 border-b border-gray-200 pb-2">
                <span class="font-medium text-gray-800">{{ item.title }}</span>
                <span class="text-gray-600"> - {{ item.quantity }}</span>
            </li>
        </ul>
        <p class="font-bold text-lg">
            Total: <span class="text-green-600">{{ total }}</span>
        </p>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const products = computed(() =>store.getters['cart/cartProducts'])
const total = computed(() => store.getters['cart/cartTotalPrice'])


</script>

<style lang="scss" scoped>

</style>  -->
<template>
    <div class="cart bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto h-96 overflow-y-auto">
        <h2 class="text-2xl font-semibold mb-4">Your Cart</h2>
        <p v-show="!products.length" class="text-gray-500 italic">
            <i>Please add some products to cart</i>
        </p>
        <ul class="list-disc pl-5 mb-4">
            <li v-for="(item, index) in products" :key="index" class="mb-2 border-b border-gray-200 pb-2">
                <span class="font-medium text-gray-800">{{ item.title }}</span>
                <span class="text-gray-600"> - {{ item.quantity }}</span>
            </li>
        </ul>
        <p class="font-bold text-lg">
            Total: <span class="text-green-600">{{ total }}</span>
        </p>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const products = computed(() => store.getters['cart/cartProducts']);
const total = computed(() => store.getters['cart/cartTotalPrice']);
</script>



