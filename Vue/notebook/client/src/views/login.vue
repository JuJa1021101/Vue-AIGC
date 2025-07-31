<template>
    <div class="login">
        <h1>登录</h1>
        <div class="login-wrapper">
            <div class="avatar">
                <img src="https://gd-hbimg.huaban.com/b536a68de74d7f6470d761f69c66a19f37e626a62891f-bgRRVD_fw236" alt="">
            </div>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field
                    v-model="username"
                    name="username"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                    />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                    登录
                    </van-button>
                </div>
            </van-form>

        </div>
        
        <p class="register" @click="router.push('/register')">没有账号？点这里注册</p>
        

    </div>
</template>

<script setup>
import axios from '@/api';
import { ref } from 'vue';
const username = ref('');
const password = ref('');
import { useRouter } from 'vue-router'
const router = useRouter()

const onSubmit = async (values) => {
    console.log(values);
    const res = await axios.post('/user/login',values)
    console.log(res);
    localStorage.setItem('userInfo',JSON.stringify(res.data))
    localStorage.setItem('token',res.token)
    router.push('/noteClass')

}


</script>

<style lang="less" scoped>
.login{
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 0 0.3rem;//上下0 左右0.3
    box-sizing: border-box; //IE的标准执行
    overflow: hidden; // 1.超出隐藏 2.把容器置为BFC容器
    h1{
        height: 0.6933rem;
        font-size: 0.48rem;
        text-align: center; //水平居中
        line-height: 0.6933rem;
        margin-top: 1.12rem; //margin重叠 子容器把父容器带下来了 ---> 用BFC
    }
    .login-wrapper{
        width: 7.44rem;
        border: 1px solid rgba(187, 187, 187, 1); //边框
        margin: 0 auto; //水平居中：或者把父容器login设置为弹性  或者用定位
        margin-top: 1.7rem;
        border-radius: 0.3rem;
        box-shadow:0 0 0.533rem 0 rgba(170,170,170,1); //x轴偏移量 y轴偏移量 阴影扩散范围 阴影的宽度
        padding-bottom: 15px;
        .avatar{
            height: 2.4rem;
            width: 2.4rem;
            margin: 1rem auto 0.77rem;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
    }
    .register{
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);//移回自身一半
    }
    
}

//修改ui库组件的样式 要用:deep()
:deep(.van-field__label){
  width: 45px;
}
</style>