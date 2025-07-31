<template>
    <div>
        <h2>home page</h2>
        <button @click="gohot">去沸点</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()



    const gohot = () =>{
        console.log(router)
        // router.push('/hot')
        // router.push({path:'./hot',query:{id:123}})
        router.push({name :'hot',params:{id:123}})
    }
</script>

<style lang="css" scoped>

</style>