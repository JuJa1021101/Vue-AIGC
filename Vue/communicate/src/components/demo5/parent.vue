<template>
  <child ref="childRef"></child>

  <div class="body">
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import child from './child.vue';

const childRef = ref(null)

onMounted(() => {
  
})

</script>

<style lang="css" scoped>

</style>