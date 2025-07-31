<template>
  <div class="container">
    <div class="first-number-txt">请输入第1个数:<input v-model="firstNumber"></div>
    <div class="second-number-txt">请输入第2个数:<input v-model="secondNumber"></div>

    <div class="compare">
      比较大小
      <button @click="compareNumbers">比较</button>
    </div>

    <div class="result">比较的结果：{{ result }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const firstNumber = ref('');
const secondNumber = ref('');
const result = ref('');

const compareNumbers = () => {
  const a = parseFloat(firstNumber.value);
  const b = parseFloat(secondNumber.value);

  if (isNaN(a) || isNaN(b)) {
    result.value = '请输入有效的数字';
  } else if (a > b) {
    result.value = `${a} 大于 ${b}`;
  } else if (a < b) {
    result.value = `${a} 小于 ${b}`;
  } else {
    result.value = `${a} 等于 ${b}`;
  }
};
</script>

<style scoped>

</style>