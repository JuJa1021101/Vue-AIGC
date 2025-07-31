<!-- <template>
<img v-bind:src="pic" alt="">
<a :href="url">百度</a>
<h2 @click="handle" :class="[active ? 'red' : 'green']">去打游戏了</h2>
<input type="text" @input="onchange" :value="val">
<h4 @click="changeVal">{{ val }}</h4>
</template>

<script setup>
import { ref } from 'vue';
const pic='https://img.zcool.cn/community/01e4315542ab990000019ae99f4ef0.jpg@1280w_1l_2o_100sh.jpg'
const url = 'https://www.baidu.com'
let active = ref(false)
let val = ref(null)
// let name = ref(null)

const handle = () =>{
    active.value=!active.value;
}
const onchange = (e) =>{
    val.value = e.target.value
    console.log(e)
}
const changeVal = () =>{
    val.value += 'o';
}
</script>

<style lang="css" scoped>
img{
    width: 200px;

}
.red{
    color: red;
}
.green{
    color: green;
}
</style> -->


<template>
    <div>
        <h2 @click = "handle">{{ msg }}</h2>
        <input type="text" v-model="msg">
    </div>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('hello')
const handle = () =>{
    msg.value += 'o';
}

</script>

<style lang="css" scoped>

</style>