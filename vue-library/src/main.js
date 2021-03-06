import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios"
import router from './router'
import Router from 'vue-router'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')