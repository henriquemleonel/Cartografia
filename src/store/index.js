/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import { Store } from  'vuex'
import router from '../router/index.js'
import createPersistedState from "vuex-persistedstate"
import api from '../apiClient/index.js'
import ModuleUsers from './modules/users'
import ModuleCategories from './modules/categories'
import ModuleTopics from './modules/topics'
import ModulePins from './modules/pins'
import ModuleEvents from './modules/events'

Vue.use(Vuex)

const store = new Store({
  modules: {
    categories: ModuleCategories,
    topics: ModuleTopics,
    pins: ModulePins,
    events: ModuleEvents,
    users: ModuleUsers,
  },

  state: {
    namespaced: true,
    newKey: null,
    nextRoute: null,
  },

  plugins: [
    createPersistedState(),
  ],

  getters: {
    getKey(state) {
      return state.newKey;
    },
  },

  mutations: {
    setKey (state, payload) {
      state.newKey = payload;
      console.log('mutations -> state/newKey : _SETKEY');
    },
    setCurrentUser (state, setNewUser) {
      state.currentUser = setNewUser;
    },
    setIsAdmin (state, adminValue) {
      state.isAdmin = adminValue;
    },
    addPin(state, payload) {
      if (state.currentUser.pinCompleted === false && state.myPin !== null) {
        state.push(payload);
        state.currentUser.pinCompleted = true;
        console.log('mutation -> state/myPin[] : first-write', state.myPin);
      } else {
        state.myPin = payload;
        localStorage.removeItem('myPin');
        localStorage.setItem('myPin', payload);
        console.log('mutation -> state/myPin[] : editing', state.myPin);
      }
    },
    addEvent(state, payload) {
      console.log('mutation -> state/myEvents[] : add', payload);
      state.myEvents.push(payload.newEvent);
    },

    SET_NEXT_ROUTE (state, { route }) {
      state.nextRoute = route
    }
  },

  actions: {
    setKey (context) {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let autoId = ''
      for (let i = 0; i < 20; i++) {
        autoId += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      let key = autoId
      console.log('rootState/KEY', key)
      context.commit('setKey', key);
    },    
    addPinCommit(context, payload) {
      console.log('action>mutation:addPin(payload)', payload)
      context.commit('addPin', payload);
    },
    addPin(context, payload) {

      // const authorization = sessionStorage.getItem('access_token');
      api.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
      return new Promise((resolve, reject) => {
        console.log('action : addPin')
        api.post('/pins', {
          category: payload.category,
          // completed: payload.completed,
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          street: payload.street,
          neighborhood: payload.neighborhood,
          cep: payload.cep,
          number: payload.number,
          city: payload.city,
          imgUrl: payload.imgUrl,
          // lat: payload.lat,
          // long: payload.long,
          description: payload.description,
          linkF: payload.linkF,
          linkIG: payload.linkIG,
          otherLink: payload.otherLink,
          // userRef: payload.userRef,
          userId: payload.userId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': authorization,
          }
        })
          .then(response => {
            console.log('action addpin response', response)
            context.commit('addPin', response.data)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    addEvent(context, payload) {
      console.log('action -> mutation/myEvents : addEvent', payload)
      context.commit('addEvent', payload);
    },
    addEventPost(context, payload) {
      
      api.post('/event', {
        // id: payload.id,
        userRef: payload.userRef,
        name: payload.name,
        date: payload.date,
        time: payload.time,
        street: payload.street,
        neighborhood: payload.neighborhood,
        number: payload.number,
        city: payload.city,
        cep: payload.cep,
        ticket: payload.ticket,
        description: payload.description,
        link: payload.link,
        imgUrl: payload.imgUrl,
      })
        .then(response => {
          console.log(response)
          context.commit('addEvent', response.data)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    },

    setNextRoute ({ commit }, { route }) {
      commit('SET_NEXT_ROUTE', { route })
    }
  },
});

export default store;

