import './assets/main.css';
import './assets/common.scss';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import setRem from './rem.js';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}