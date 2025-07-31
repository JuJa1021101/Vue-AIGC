<template>
  <div>
    <!-- <el-button >按钮</el-button> -->
    <router-view></router-view>
    <!-- <TestSlot>
      <div >默认SLOT</div>
      <template #header>
        <header>header slot</header>
      </template>
      <template #footer>
        <header>footer slot</header>
      </template>
    </TestSlot> -->
  </div>
</template>

<script setup>
import { useSidebarStore } from './store/sidebar';
// import TestSlot from './TestSlot.vue'
// use开头 hooks 函数式编程 sidebar 
const usesidebarStore = useSidebarStore();
console.log(usesidebarStore);


</script>

<style lang="css" scoped>

</style>