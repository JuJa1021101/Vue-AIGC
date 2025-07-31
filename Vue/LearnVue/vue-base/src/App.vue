<template>
    <div>
        <h1>{{count}}</h1>
        <button @click="minus">-1</button>
        <button @click="add">+1</button>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    let count = ref(0);

    const minus = () =>{
        count.value--
    }
    const add = () =>{
        count.value++
    }
</script>

<!-- <script>
import { ref } from "vue";
export default {
    setup(){
        let count = ref(0)
        const minus = () =>{
            count.value--
        }
        const add = () => {
            count.value++
        }
        return {
            count.value,
            minus,
            add
        }
    }
}

</script> -->


<style lang="css" scoped>

</style>