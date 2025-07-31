<template>
  <div class="confirmation-page">
    <h1 class="title">订单确认</h1>
    <div class="details">
      <p class="detail-item">
        <span class="label">姓名:</span>
        <span>{{ orderStore.name }}</span>
      </p>
      <p class="detail-item">
        <span class="label">电话:</span>
        <span>{{ orderStore.telephone }}</span>
      </p>
      <div class="detail-list">
        <h2 class="list-title">菜品:</h2>
        <ul>
          <li v-for="(item, index) in orderStore.items" :key="index" class="list-item">{{ item }}</li>
        </ul>
      </div>
      <div class="detail-list">
        <h2 class="list-title">特殊要求:</h2>
        <ul>
          <li v-for="(spec, index) in orderStore.specials" :key="index" class="list-item">{{ spec }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrderStore } from '../stores/useOrderStore'; // 导入你的store

const orderStore = useOrderStore(); // 使用store


</script>
<style scoped>
/* styles.css */
.confirmation-page {
  height: 100vh;
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #666;
}

.label {
  font-weight: bold;
  color: #333;
}

.detail-list {
  display: flex;
  flex-direction: column;
}

.list-title {
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
}

.list-item {
  list-style-type: none;
  padding-left: 20px;
  position: relative;
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    top: 5px;
    color: #666;
  }
}
</style>