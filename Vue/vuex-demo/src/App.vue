<template>
{{ count }}
<button @click="increment"></button>
<app-header></app-header>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import AppHeader from './components/AppHeader.vue'

const store = useStore(); // hooks 编程
console.log(store,'////////');
const count = computed(() => store.state.count)
const increment = () =>{
    store.dispatch('increment')
}
</script>

<style lang="css" scoped>

</style>