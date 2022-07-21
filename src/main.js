import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
// 导入element-ui
// import ElementUI from 'element-ui'
// import 'element-plus/theme-chalk/index.css'
// import VXETable from 'vxe-table'
// Vue.use(ElementUI)
// Vue.use(VXETable)
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
const app = createApp(App).use(ElementPlus).mount('#app')
/* eslint-disable no-new */
