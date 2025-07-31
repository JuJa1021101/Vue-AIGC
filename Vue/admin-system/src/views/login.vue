<template>
    <div class="login-bg">
        <div class="bg-blur">
        <div class="login-container">
            <header class="login-header">
                <img src="../assets/images/logo.svg" alt="" class="logo mr10">
                <div class="login-title">米奇妙妙屋</div>
            </header>
            <el-form size="large" :model="param" :rules="rules" ref="login">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="param.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <div class="pwd-tips">
                    <el-checkbox 
                        class="pwd-checkbox" 
                        v-model="checked"
                        label="记住密码"
                    ></el-checkbox>
                    <el-link type="primary" >忘记密码</el-link>
                </div>
                <el-button 
                    class="login-btn" 
                    type="primary" 
                    size="large"
                    @click="submitForm(login)"
                >登录</el-button>
                <p class="login-text">
                    没有账号？<el-link type="primary">立即注册</el-link>
                </p>
            </el-form>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { reactive,ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePermissStore } from '../store/permiss';

const router = useRouter();
const permissStore = usePermissStore();

const login = ref(null) //绑定form元素
const param = reactive({
    username:'',
    password:''
})

const rules = {
    username:[
        {
            required:true,
            message:'请输入用户名',
            trigger:'blur'
        }
    ],
    password:[
        {
            required:true,
            message:'请输入密码',
            trigger:'blur'
        },
        {
            min:6,
            message:'密码长度不小于6位',
            trigger:'blur'
        }
    ]
}
const checked = ref(false)
const submitForm = (formEL) =>{
    formEL.validate((valid) =>{
        if(valid){
            console.log(formEL)
            ElMessage.success('登录成功')
            localStorage.setItem('ms_name',param.username)
            const keys = permissStore.defaultList[param.username]
            permissStore.handleSet(keys)
            router.push('/')
        }else{
            // alert('无效的账号密码')
            ElMessage.error('登录失败')
        }
    })
}
</script>

<style lang="css" scoped>
.login-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: url(../assets/images/login-bg.jpg) center/cover no-repeat;

}
.bg-blur{
    position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(255, 255, 255, .5);
            display: flex;
    align-items: center;
    justify-content: center;
}

.login-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
}

.logo {
    width: 35px;

}

.login-title {
    font-size: 22px;
    color: #333;
    font-weight: bold;
}

.login-container {
    width: 450px;
    border-radius: 5px;

    padding: 40px 50px 50px;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255,0.8);
    box-shadow: 0 25px 45px rgba(0,0,0,0.1);
    /* backdrop-filter: blur(2px); */

}

.pwd-tips {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin: -10px 0 10px;
    color: #787878;
}

.pwd-checkbox {
    height: auto;
}

.login-btn {
    display: block;
    width: 100%;
}

.login-tips {
    font-size: 12px;
    color: #999;
}

.login-text {
    display: flex;
    align-items: center;
    margin-top: 20px;
    font-size: 14px;
    color: #787878;
}
</style>