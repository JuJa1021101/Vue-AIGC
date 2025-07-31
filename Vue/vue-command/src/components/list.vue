<template>
    <ul>
        <li @click="showname(item.name)" v-for="(item,index) in list" key="item.id">{{ index+1 }}-{{ item.name }}</li>
    </ul>

    <button v-on:mouseleave="handle">确定</button>
</template>

<script setup>
const list = [
    {id:1,name:"庐山"},
    {id:2,name:"三清山"},
    {id:3,name:"武功山"},
    {id:4,name:"千水山"}
]

const handle = () =>{
    console.log("handle");
}
const showname = (a) =>{
    console.log(a);
}



</script>

<style lang="css" scoped>

</style>