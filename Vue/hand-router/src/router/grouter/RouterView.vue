<template>
    <!-- 动态组件 -->
    <component :is="component"></component>
</template>

<script setup>
import { useRouter } from './index.js';
import { computed } from 'vue';

const router = useRouter();

// router-view 动态组件 展示 依赖于url的变化
// 不能式私有的响应式 useRouter 是大家共有的, 
const component = computed(() => {
   const route = router.routes.find(
    (route) => route.path == router.current.value
   )
   return route? route.component:null
})
</script>

<style lang="css" scoped>

</style>