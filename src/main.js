import Vue from "vue"
import app from './app.vue'

import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

// 导入MUI样式
import './lib/mui/css/mui.min.css'

var vm = new Vue({
    el:'#app',
    render:c=>c(app)
})