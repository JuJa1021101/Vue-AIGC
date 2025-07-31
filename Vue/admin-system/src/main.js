import { createApp } from 'vue'
import { createPinia} from 'pinia'
import * as ElmentPlusIconsVue from '@element-plus/icons-vue'
console.log(ElmentPlusIconsVue);
// * as 引入全部组件库
//vue 组件库
import {
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElLink,
    ElIcon,
    ElAvatar,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElMenuItem,
    ElSubMenu,
    ElMenu
} from 'element-plus';
import router from './router';
// import elementplus from 'element-plus'
//按需加载
import 'element-plus/dist/index.css';
import './assets/styles/variable.css'
import App from './App.vue';

const app = createApp(App)
for( const [key,component] of Object.entries(ElmentPlusIconsVue)){
    app.component(key,component)
}
// Object.entries能拿到键值对的

app.use(createPinia())
    .use(ElIcon)
    .use(ElButton)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElCheckbox)
    .use(ElLink)
    .use(ElAvatar)
    .use(ElDropdown)
    .use(ElDropdownItem)
    .use(ElDropdownMenu)
    .use(ElMenuItem)
    .use(ElSubMenu)
    .use(ElMenu)
    .use(router)
//自定义指令
import { usePermissStore } from './store/permiss';
const permissStore = usePermissStore();
app.directive('permiss',{
    mounted(el,binding){
        if(binding.value && 
            !permissStore.key.includes(String(binding.value))
        ){
            el['hidden'] = true
        }
    }
})


app
    .mount('#app')