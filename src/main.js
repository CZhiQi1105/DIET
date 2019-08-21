// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
Vue.config.productionTip = false

//导入mint-ui 
import { Navbar, TabItem ,TabContainer,TabContainerItem,Cell} from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);

// 导入vant
import { Swipe, SwipeItem, Tab, Tabs, Tabbar, TabbarItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)
Vue.use(Tab).use(Tabs)
Vue.use(Tabbar).use(TabbarItem);

// 路由跳转默认置顶
router.afterEach((to,from,next)=>{
  window.scrollTo(0,0);
})

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import 'bootstrap/dist/css/bootstrap.min.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
