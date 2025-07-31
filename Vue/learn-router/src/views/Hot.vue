<template>
    <div>
        hot page ----- {{ $route.query.id }}
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router';

const route = useRoute()

console.log(route.query.id)
</script>

<style lang="css" scoped>

</style>