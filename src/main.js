import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import StatusBar from '@/components/StatusBar';
import Veil from '@/components/Veil';

Vue.component('Veil', Veil);

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faDownload,
  faUpload,
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import {
  faApple,
  faWindows,
  faLinux
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faDownload);
library.add(faUpload);
library.add(faArrowUp);
library.add(faArrowDown);
library.add(faArrowLeft);
library.add(faArrowRight);
library.add(faApple);
library.add(faWindows);
library.add(faLinux);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

new Vue({
  render: h => h(StatusBar)
}).$mount('#status-app');
