<template>
    <div class="body">
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    list:{
        type:Array,
        default: () => []
    }
})
</script>

<style lang="css" scoped>

</style>