import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import store from "./store/index.js"
import "./assets/resets.css"
Vue.config.productionTip = false
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import {Lazyload} from 'vant';
import error from "./assets/error.jpg"
import loading from "./assets/loading.gif"
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
Vue.use(Lazyload,{
  preLoad: 1.3,
  error: error,
  loading: loading,
  attempt: 3
});
import { Field } from 'vant';
Vue.use(Field);
import { Icon } from 'vant';
Vue.use(Icon);
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);
import { NavBar } from 'vant';
Vue.use(NavBar);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);
import { Loading } from 'vant';
Vue.use(Loading);
import { Toast } from 'vant';
Vue.use(Toast);
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);
import 'amfe-flexible/index.js'
router.beforeEach((to, from, next) => {
  // window.console.log(to.meta.title)
  document.title = to.meta.title
  // window.console.log(next) 
  // 这个函数里面必须执行next，否则不显示！！！
  next()
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
