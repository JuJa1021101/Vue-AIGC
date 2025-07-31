<template>
    <a :href="'#' + $props.to">
        <slot></slot>
    </a>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    to:{
        type:String,
        requried:true
    }
})
</script>

<style lang="css" scoped>

</style>