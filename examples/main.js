import Vue from 'vue';
import App from './App';
import router from './router';
import Shui from '../packages';
import demoBlock from './components/demo-block';
import '../packages/theme-default/src/index.scss';

Vue.use(Shui);
Vue.component('demo-block', demoBlock);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
