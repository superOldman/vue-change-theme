import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { initThemeColor } from './utils/themeColorClient'
require('./style/index.scss');

Vue.config.productionTip = false
Vue.use(ElementUI);
initThemeColor();
new Vue({
  render: h => h(App),
}).$mount('#app')
