<template>
    <div class="header">
      <input type="text" v-model="newMsg">
      <button @click="add">确定</button>
    </div>
  

  </template>
  
  <script setup>
  import { provide, ref } from 'vue';
  
  const newMsg = ref('')
  const list = ref(['html', 'css'])
  provide("list")
  const add = () => {
    list.value.push(newMsg.value)
  }
  </script>
  
  <style lang="css" scoped>
  
  </style>