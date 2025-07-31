<template>
    <div class="cart-control">
        <Transition name="move">
        <div class="cart-decrease" v-show="food.count" @click="decreaseCart">
            <i class="iconfont icon-jianhao"></i>
        </div>
        </Transition>

        <div class="cart-count" v-show="food.count">
            {{ food.count }}
        </div>

        <div class="cart-add" @click="addCart">
            <i class="iconfont icon-jiahao"></i>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    food:{
        type: Object,
        default: () => {}
    }
})//这个数据是响应式的??

const emits = defineEmits(['update:food'])//固定写法：要修改父组件的数据，并让父组件知道  写了update源码会认为是要修改父组件的值
const addCart = () => {
    const obj = props.food
    if( ! obj.count){
        obj.count = 1
    }else{
        obj.count++
    }
    emits('update:food',obj)
}
const decreaseCart = () => {
    const obj = props.food
    if(obj.count){
        obj.count--
    }
    emits('update:food',obj)
}
</script>

<style lang="less" scoped>
.cart-control {
  display: flex;
  align-items: center;

  .cart-decrease {
    padding: 6px;
    opacity: 1;
    transform: translateX(0);

    &.move-enter-active,
    &.move-leave-active {
      transition: all 0.4s linear;
    }

    &.move-enter-from,
    &.move-leave-to {
      opacity: 0;
      transform: translateX(24px) rotate(180deg);
    }


    .icon-jianhao {
      font-size: 18px;
      color: rgb(0, 160, 220);
    }
  }

  .cart-count {
    padding: 6px;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .cart-add {
    padding: 6px;

    .icon-jiahao {
      font-size: 20px;
      color: rgb(0, 160, 220);
    }
  }
}
</style>