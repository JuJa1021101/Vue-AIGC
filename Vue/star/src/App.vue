<script setup>
// import Rate from './components/Rate0.vue'
import Rate from './components/Rate1.vue'
import { ref } from 'vue'

let score = ref(3)
function update(num){
  score.value = num//在父组件中修改数据
}
</script>

<template>
  <div>
    <!-- v-bind -->
    <!-- <Rate :value="5" />
    <Rate :value="4" />
    <Rate :value="3" />
    <Rate :value="2" />
    <Rate :value="1" /> -->
    <Rate :value="score" theme="blue" @update-rate="update"/>
    <!-- <Rate :value="4" theme="yellow"/> -->


  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>