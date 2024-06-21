import './assets/style/common.less'

import { createApp } from 'vue'
import App from './App.vue'
// 引入过滤器
import * as Filters from './utils/filters.js';
// 全局引入Vant组件
import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
// 将vant注册成vue的插件全局使用
app.use(Vant)   

//试着注册一个过滤器的函数作为vue实例的全局属性
app.config.globalProperties.$priceFormat = Filters.priceFormat;

app.mount('#app')
