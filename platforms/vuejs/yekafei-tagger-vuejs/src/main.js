import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'



import FrameDefault from '@/components/frames/default/index.vue'
import FrameEmpty from '@/components/frames/empty/index.vue'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.component('empty-frame', FrameEmpty)
app.component('default-frame', FrameDefault)
app.component('admin-frame', FrameDefault)
app.component('user-frame', FrameDefault)
app.component('main-frame', FrameDefault)

app.mount('#app')
