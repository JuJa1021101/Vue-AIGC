<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/discount">特惠专区</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/collection">我的收藏</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/trip">行程</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/account">我的账户</van-tabbar-item>
    </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref<number>(0)
import { toRefs } from 'vue'
import { useHomeStore } from '../../store/homeStore'
const homeStore = useHomeStore()
const searchField = ref('')
//碰到数据就加上类型
const {
    topBarState,
    navBarState,
    recentlyviewedState
} = toRefs(homeStore)

</script>

<style lang="less" scoped>

</style>