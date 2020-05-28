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
    destroyCurrentUser (state) {
      state.currentUser = null;
      state.myEvents = null;
      state.myPin = null;
      console.log('mutation : destroy currentUser');
    },
    retrieveToken(state, token) {
      state.token = token;
      console.log('mutation : retrieveToken');
    },
    destroyToken (state) {
      state.token = null;
      console.log('mutation : destroy token');
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
  },

  actions: {
    setKey (context) {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let autoId = ''
      for (let i = 0; i < 20; i++) {
        autoId += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      let key = autoId
      console.log('KEY DO NOVO EVENTO:', key)
      context.commit('setKey', key);
    },
    register(context, data) {
      // console.log('data register', data);
      return new Promise((resolve, reject) => {
        console.log('promise')
        api.post('/signup', {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          isValid: data.isValid,
          isAdmin: data.isAdmin,
          categoryId: data.categoryId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then(response => {
            console.log('reponse', response.data)
            // const currentUser = response.data
            // context.commit('setCurrentUser', currentUser)
            // const token = response.data.token
            // context.commit('retrieveToken', token)
            // sessionStorage.setItem('access_token', token)
            resolve(response)
          })
          .catch(error => {
            console.log(error.message)
            reject(error)
          })
      })
    },
    retrieveToken(context, credentials) {

      return new Promise((resolve, reject) => {
        api.post('/signin', {
                email: credentials.email,
                password: credentials.password,
            })
            .then(response => {
                console.log('reponse', response.data)
                const token = response.data.token
                const currentUser = response.data
                console.log('token', token)
                context.commit('retrieveToken', token)
                context.commit('setCurrentUser', currentUser)
                sessionStorage.setItem('isAdmin', currentUser.isAdmin)
                sessionStorage.setItem('access_token', token)
                resolve(response)
            })
            .catch(error => {
                console.log(error.message)
                reject(error)
            })
      })

    },
    destroyToken(context) {

      sessionStorage.removeItem('access_token')
      context.commit('destroyToken')
      context.commit('destroyCurrentUser')
      router.push({ name: 'SignIn' })
      console.log('logout')

      // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      // if (context.getters.loggedIn) {
      //   return new Promise((resolve, reject) => {
      //     axios.post('/logout')
      //       .then(response => {
      //         localStorage.removeItem('access_token')
      //         context.commit('destroyToken')
      //         resolve(response)
      //         console.log('responde destroyToken', response);
      //         // context.commit('addTodo', response.data)
      //       })
      //       .catch(error => {
      //         console.log('error logout')
      //         localStorage.removeItem('access_token')
      //         context.commit('destroyToken')
      //         router.push({ name: 'SignIn' })
      //         reject(error)
      //       })
      //   })
      // }
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
  },
});

export default store;

