import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button } from 'vant'
import { Field, CellGroup } from 'vant';
import { Checkbox, CheckboxGroup,Icon } from 'vant';
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)
app.use(Field)
app.use(CellGroup)
app.use(Checkbox)
app.use(CheckboxGroup)
app.use(Icon)
app.mount('#app')
