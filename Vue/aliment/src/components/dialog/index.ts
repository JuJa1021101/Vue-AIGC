import { App } from 'vue';
import Dialog from './Dialog.vue';

export default {
    install(app:App){
        //全局组件
        //ts的功能  ts比js开发效率高，类型推断
        //大型项目，类很多，来自好多同事的合作，
            app.component(Dialog.name as string, Dialog);

    }
}