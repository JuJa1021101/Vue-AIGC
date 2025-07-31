<template>

    <Header :seller = "sellerDate"></Header>
    <div class="tab">
      <div class="tab-wrap">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-wrap">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab-wrap">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <RouterView :seller="sellerDate"></RouterView>
</template>

<script setup>
import Header from './components/header/index.vue'
import { getSeller } from './api';
import { ref } from 'vue';

let sellerDate = ref({})


getSeller().then(res =>{
  // console.log(res);
  console.log(res)
  sellerDate.value = res
  // const state = computed(() => {
  //   return res;
    // console.log(state)
  
})


// console.log(state)






</script>

<style lang="less" scoped>
@import './assets/variable.less';
  .tab{
    display: flex;
    height: 36px;
    &-wrap{
      flex: 1;
      a{
        width: 100%;
        height: 100%;
        display: block;
        text-align: center;
        line-height: 36px;
        text-decoration: none;
        color: @color-red;
        &.router-link-exact-active{
          color: @color-red;
          border-bottom: 2px solid @color-red;
        }
      }
    }

  }
</style>
