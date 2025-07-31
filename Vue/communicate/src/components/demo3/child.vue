<template>
  <div class="header">
      <input type="text" v-model="newMsg">
      <button @click="add">确定</button>
    </div>
    
</template>

<script setup>
import {  defineEmits,ref } from 'vue';

const newMsg = ref('')

const emits = defineEmits(['addMsg']);//定义的事件
const add = () =>{
  emits('addMsg',newMsg.value)//发布某个事件
}
</script>

<style lang="css" scoped>

</style>