<script setup>
import { ref } from 'vue';


const name = 'slh'
const isActive = ref(true)

const toggleEmoji = () =>{
  isActive.value = !isActive.value
  //ref和reactive ref需要.value
}
</script>

<template>
<div class="page">
  <div class="card">
    <div class="card__header">
      <h3 class="card-title">{{ name }}
      </h3>
      <div class="card-subtitle">Transiton and Animation</div>
    </div>
    <div class="card__content">
      <!-- <div :class="['emoji',{pulse:!isActive}]">💖</div> -->
       <!-- <Transition name="pulse">
        <div class='emoji '  v-if="isActive">💖</div>
         一定要加v-if 或v-show  -->
       <!-- </Transition>  -->

       <Transition
          class="animate__tada"
          enter-active-class="animate__animated animate__tada"
          leave-active-class="animate__animated animate__bounce"
       >
        <div class='emoji '  v-if="isActive">💖</div>
       </Transition>
    </div>
    <div class="card__action">
      <button type="button" @click="toggleEmoji">请按这里</button>
    </div>
  </div>
</div>
</template>

<style scoped>
/* 分门别类 */
@import './styles/app.css';
@import './styles/card.css';
@import './styles/animation.css';

/*全局的样式*/
</style>
