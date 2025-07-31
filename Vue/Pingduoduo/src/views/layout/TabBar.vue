<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="video-o" to="/videos">多多视频</van-tabbar-item>
        <van-tabbar-item icon="hot-sale-o" to="/specialSell">9块9特卖</van-tabbar-item>
        <van-tabbar-item icon="chat-o" to="/chat">聊天</van-tabbar-item>
        <van-tabbar-item icon="user-circle-o" to="/account">个人中心</van-tabbar-item>
    </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref<number>(0)




</script>

<style lang="less" scoped>

</style>