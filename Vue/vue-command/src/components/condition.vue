<template>
   <h2 @click="happy">{{ count }}</h2>
    <!-- <h3 v-if="count<30">happy</h3>
    <h3 v-else-if="count<=40">unhappy</h3>
    <h3 v-else>very unhappy</h3> -->

    <h4 v-show="count<30">happy</h4>
</template>

<script setup>
import { ref } from 'vue';
let count = ref(25)

const happy = () =>{
    count.value++
    
}


</script>

<style lang="css" scoped>

</style>