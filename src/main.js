import Vue from 'vue';
import VueRouter from 'vue-router';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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

import LogoCard from './components/Logo-Card.vue'; // ----------- logo da plataforma
import NavMenu from './components/Nav-Menu.vue'; // ------------- menu de navegação do mapa
import MulticolorLine from './components/Multicolor-Line.vue'; // linha colorida
import UserCard from './components/User-Card.vue'; // ----------- editor info do usuário
import PinProfile from './components/Pin-Profile.vue'; // ------- criador/editor pin no perfil
import EventProfile from './components/Event-Profile.vue'; // --- criador/editor eventos no perfil
import ShortEvent from './components/Short-Event.vue'; // ------- evento reduzido para tabela de eventos
import Filter from './components/Filter.vue'; // ---------------- filtro menu
import PinTeste from './components/pinTeste.vue'; // ------------ pin teste

Vue.component('logo-card', LogoCard);
Vue.component('user-card', UserCard);
Vue.component('pin-profile', PinProfile);
Vue.component('my-menu', NavMenu);
Vue.component('multicolor-line', MulticolorLine);
Vue.component('event-profile', EventProfile);
Vue.component('short-event', ShortEvent);
Vue.component('my-filter', Filter);


Vue.component('pin-teste', PinTeste); // pin teste


// leaflet map components
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-control-zoom', LControlZoom);
Vue.component('l-control-attribution', LControlAttribution);
Vue.component('l-popup', LPopup);

// font awesome setups
// library.add(faUserSecret);
// Vue.component('font-awesome-icon', FontAwesomeIcon);

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
