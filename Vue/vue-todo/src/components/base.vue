<template>
    <div>
        <h2>{{ temp }}</h2>
        <h5>{{ suggest }}</h5>
        <button @click="add">+5</button>
        <button @click="minus">-5</button>
    </div>
</template>

<script setup>
import { computed, ref,watch } from 'vue';
let temp = ref(10)
// let suggest = ref(null)
const add = () =>{
    temp.value += 5

}
const minus = () =>{
    temp.value -= 5
}
const suggest = computed(() => {
    if( temp.value>= 30){
        return '短袖'
    }else if(temp.value >= 20){
        return '夹克'
    }else if(temp.value >=10){
        return '羽绒服'
    }else{
        return '别出门了'
    }
})
// watch(temp,(newVal,oldVal) =>{
//     if(newVal >= 30){
//         suggest.value = '短袖'
//     }else if(newVal >= 20){
//         suggest.value = '夹克'
//     }else if(newVal >=10){
//         suggest.value = '羽绒服'
//     }else{
//         suggest.value = '别出门了'
//     }
// },{immediate:true})

 
</script>

<style lang="css" scoped>

</style>