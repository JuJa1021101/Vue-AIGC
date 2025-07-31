<template>
    <div class="body">
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
    </div>
</template>

<script setup>
import { computed, defineProps,ref, watch,onBeforeUpdate } from 'vue';

const list = ref(['html','css'])
// const list = computed(()=>{
//   if(props.msg != ''){
//   _list.value.push(props.msg)
//   }
//   return [..._list.value]
// })


const props = defineProps({
    msg:''
})



watch(
  () => props.msg,
  (newVal,oldVal) =>{
    console.log(newVal)
    list.value.push(newVal)
  }
)
onBeforeUpdate(() =>{
  list.value.push(props.msg)
})
</script>

<style lang="css" scoped>

</style>