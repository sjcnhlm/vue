import Vue from "vue"
import app from './app.vue'

import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

// 导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

var vm = new Vue({
    el:'#app',
    render:c=>c(app)
})