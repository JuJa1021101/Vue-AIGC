<template>
    <div class="form-container">
        <van-cell-group inset>
            <!-- 姓名 -->
            <van-field v-model="text" label="姓名" input-align="center" placeholder="请输入姓名" />
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field v-model="tel" type="tel" label="手机号" input-align="center" placeholder="请输入手机号" />

            <!-- 菜品 多选框 -->
            <div class="section-title">菜品
                <van-icon name="cart-o" v-on:click="" />
            </div>
            <van-checkbox-group v-model="goods">
                <van-checkbox name="辣椒炒肉">辣椒炒肉</van-checkbox>
                <van-checkbox name="红烧牛肉">红烧牛肉</van-checkbox>
                <van-checkbox name="水煮肉片">水煮肉片</van-checkbox>
            </van-checkbox-group>

            <!-- 特殊要求 复选框 -->
            <div class="section-title">备注
                <van-icon name="comment-o" />
            </div>
            <van-checkbox-group v-model="special">
                <van-checkbox name="少辣">少辣 </van-checkbox>
                <van-checkbox name="多葱">多葱</van-checkbox>
            </van-checkbox-group>

            <!-- 提交按钮 -->
            <van-button type="primary" @click="submitForm" :disabled="!canSubmit">提交订单</van-button>
        </van-cell-group>
    </div>
</template>

<script setup>
import { showSuccessToast, showFailToast } from 'vant';
import { ref } from 'vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useOrderStore } from '../stores/useOrderStore'; // 假设你已经创建了store文件

// 表单字段
const text = ref('');
const tel = ref('');
const goods = ref([]);
const special = ref([]);

const orderStore = useOrderStore()
const router = useRouter()


// 校验逻辑：确保姓名、手机号和菜品必须填写
const canSubmit = computed(() => {
    return text.value && tel.value && goods.value.length > 0;
});

// 表单提交
const submitForm = () => {
    if (canSubmit.value) {
        // 可以根据实际需求进行业务处理
        orderStore.setName(text.value);
        orderStore.setTelephone(tel.value);
        orderStore.setItems(goods.value);
        orderStore.setSpecials(special.value);
        showSuccessToast('订单提交成功');
        //   alert(`提交成功: 姓名: ${text.value}, 手机号: ${tel.value}, 菜品: ${goods.value.join(', ')}`);
        router.push('/about')
    } else {
        showFailToast('订单提交失败');
    }
};
</script>

<style scoped>
.form-container {
    padding: 20px;
    max-width: 500px;
    margin: auto;
}

.section-title {
    margin: 10px 0;
    font-weight: bold;
}

.img-icon {
    height: 20px;
    width: 20px;
}

.van-button {
    margin-top: 20px;
}
</style>