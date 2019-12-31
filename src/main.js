import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import store from "./store/index.js"
Vue.config.productionTip = false
import { Button } from 'vant';
Vue.use(Button)
import { Switch } from 'vant';
Vue.use(Switch);
import 'amfe-flexible/index.js'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
