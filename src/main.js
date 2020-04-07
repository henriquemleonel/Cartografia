import Vue from 'vue';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  LMap, LTileLayer, LMarker, LControlZoom, LControlAttribution, LPopup,
} from 'vue2-leaflet';
// import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import VueMasonry from 'vue-masonry-css';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// import axios from 'axios'
import './quasar';

import HeaderCard from './components/HeaderProfile.vue';
import LogoCard from './components/LogoCard.vue';
import PinProfile from './components/PinProfile.vue';
import Menu from './components/Menu.vue';
import MulticolorLine from './components/Multicolor-Line.vue';
import Event from './components/Event.vue';

Vue.component('logo-card', LogoCard);
Vue.component('header-card', HeaderCard);
Vue.component('my-pin', PinProfile);
Vue.component('my-menu', Menu);
Vue.component('multicolor-line', MulticolorLine);
Vue.component('my-event', Event);

// leaflet map components
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-control-zoom', LControlZoom);
Vue.component('l-control-attribution', LControlAttribution);
Vue.component('l-popup', LPopup);

// delete Icon.Default.prototype.getIconUrl;

// Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// font awesome setups
library.add(faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon);

window.eventBus = new Vue();
// export const EventBus = new Vue();

// masonry grid setup
Vue.use(VueMasonry);

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = new VueRouter({
  router,
  mode: 'history',
});

routes.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'SignIn',
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'Home',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
