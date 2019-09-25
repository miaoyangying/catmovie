import Vue from 'vue'
import App from './App.vue'
import router from "./Router/router"

import './assets/css/reset.css'
import './assets/js/rem'
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})