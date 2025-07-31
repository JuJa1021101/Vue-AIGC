import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'lib-flexible/flexible.js'
import './assets/reset.css'

import { Form, Field, CellGroup,Toast,Button,Icon,Uploader,Picker,Popup } from 'vant';


import 'vant/lib/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Toast)
app.use(Icon)
app.use(Uploader)
app.use(Picker)
app.use(Popup)

app.mount('#app')
