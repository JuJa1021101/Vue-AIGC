<template>
    <div :style="fontStyle">
        <div class="rate" @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
            <span class="hollow" :style="fontWidth">  <!-- class和id 有什么区别-->
                <span  @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
            </span>
        </div>
    </div>
    <!-- <button type="button" @click="onRate(2)">点击</button> -->
</template>

<script setup>
//新的需求 添加主题--不同风格的星星
import {  computed, defineEmits, ref } from 'vue';
//defineEmits 拿到父组件传过来的自定义事件 接收的是一个数组，数组里的自定义事件用""包起来

let props = defineProps({
    value: Number,
    theme: {type: String, default:'orange'}
})


let width = ref(props.value)//评分组件自身的状态
let fontWidth = computed(() =>`width: ${width.value}em;`)//em是相对于自身字体大小的等比例 rem是相对于html的等比例


let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5-props.value,10-props.value))

let themeObj = {
    orange : '#fa541c',
    blue : '#40a9ff',
    green : '#73d13d',
    black : '#000',
    red : '#f5222d',
    yellow : 'fadb14'
}

const fontStyle = computed(() => {
    return `color: ${props.theme}`
})

let emits = defineEmits(["update-rate"])

const onRate = (num) => {
    emits("update-rate",num)
}

function mouseOver(i){
    width.value = i;
}

function mouseOut(){
    width.value = props.value;
}
</script>

<style lang="css" scoped>

.rate{
    position: relative;/* 相对定位 在不同的层次 */
    display: block;
}

.rate span{
    /* letter-spacing: 3px; */
    display: inline-block;
    width: 1em;
    height: 22px;
}

.rate > span.hollow{
    position: absolute;
    display: inblock;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;/* 超出则隐藏 */
}

</style>