import Vue from 'vue'
import App from './App.vue'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'

Vue.config.productionTip = false
Vue.use(VueFullPage)

new Vue({
    render: h => h(App),
}).$mount('#app')