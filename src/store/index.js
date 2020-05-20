// -------------------------- ------- STORE ---------- ---------------------
/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import { Store } from  'vuex'
import router from '../router/index.js'
import createPersistedState from "vuex-persistedstate"
import api from '../apiClient/index.js'
import ModuleCategories from './modules/categories'
import ModuleTopics from './modules/topics'

Vue.use(Vuex)

const store = new Store({
  modules: {
    categories: ModuleCategories,
    topics: ModuleTopics,
    // users
  },

  state: {
    newKey: null,
    token: sessionStorage.getItem('access_token') || null,
    currentUser: null,
    isAdmin: null,
    myPin: [],
    myEvents: [],
    pins: [],
    events: [
      {
        id: '1',
        userRef: '',
        name:'Dance_Fest',
        date: { value: '28/04/2020' },
        hour: '13:00',
        address: {
          street: 'Rua do Dinar',
          neighborhood: 'Vila Carlota',
          city: 'campo grande'
        },
        ticket: '0',
        link: 'https://www.facebook.com/henriquemleonel',
        description: 'Festival de dança da comunidade para a comunidade, venha se divertir',
        category: { value: 'Dança', color: '#683931' },
        imgUrl: '../assets/statics/avatar01.jpg',
      },
      {
        id: '2',
        name:'Festival Forró',
        date: { value: '04/05/2020' },
        hour: '18:00',
        address: { street: 'rua festeja', neighborhood: 'centro', city: 'campo grande' },
        ticket: '0',
        link: 'https://www.facebook.com/henriquemleonel',
        description: 'pula fogueira',
        category: { value: 'Música', color: '#D3869B' },
        imgUrl: '../assets/statics/avatar01.jpg',
      },
      {
        id: '3',
        name:'"Como não viver em isolamento"',
        date: { value: '07/05/2020' },
        hour: '18:00',
        address: { street: 'rua festeja', neighborhood: 'centro', city: 'campo grande' },
        ticket: '0',
        link: 'https://www.facebook.com/henriquemleonel',
        description: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica ede impressos,',
        category: { value: 'Teatro', color: '#683931' },
        imgUrl: '../assets/statics/avatar01.jpg',
      },
      {
        id: '4',
        name:'Fashion Trends CG',
        date: { value: '12/05/2020' },
        hour: '18:00',
        address: { street: 'rua festeja', neighborhood: 'centro', city: 'campo grande' },
        ticket: '0',
        link: '',
        description: 'pula fogueira ',
        category: { value: 'Moda', color: '#BD6A5C' },
        imgUrl: '../assets/statics/avatar01.jpg',
      },
      {
        id: '5',
        name:'Mis Hitchcok',
        date: { value: '16/05/2020' },
        hour: '18:00',
        address: { street: 'rua festeja', neighborhood: 'centro', city: 'campo grande' },
        ticket: '0',
        link: '',
        description: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto',
        category: { value: 'Cinema', color: '#4692C1' },
        imgUrl: '../assets/statics/avatar01.jpg',
      },
      {
        id: '6',
        name:'Festa Junina',
        date: { value: '22/05/2020' },
        hour: '18:00',
        address: { street: 'rua festeja', neighborhood: 'centro', city: 'campo grande' },
        ticket: '0',
        link: '',
        description: 'pula fogueira ',
        category: { value: 'Cultura Popular', color: '#E6B545' },
        imgUrl: '../assets/statics/avatar01.jpg',
      },
      {
        id: '7',
        name:'Photo Export',
        date: { value: '23/05/2020' },
        hour: '18:00',
        address: { street: 'rua festeja', neighborhood: 'centro', city: 'campo grande' },
        ticket: '0',
        link: '',
        description: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto',
        category: { value: 'Fotografia', color: '#254C26' },
        imgUrl: '../assets/statics/avatar01.jpg',
      },
      {
        id: '8',
        name:'Print',
        date: { value: '28/05/2020' },
        hour: '18:00',
        address: { street: 'rua festeja', neighborhood: 'centro', city: 'campo grande' },
        ticket: '0',
        link: '',
        description: 'pula fogueira ',
        category: { value: 'Arte Digital', color: '#DBB753' },
        imgUrl: '../assets/statics/avatar01.jpg',
      },
      {
        id: '9',
        name:'Dance_Fest',
        date: { value: '30/05/2020' },
        address: { street: 'Rua do Dinar', neighborhood: 'Vila Carlota', city: 'campo grande' },
        ticket: '0',
        link: 'https://www.facebook.com/henriquemleonel',
        description: 'Festival de dança da comunidade para a comunidade, venha se divertir',
        category: { value: 'Dança', color: '#683931' },
        imgUrl: '../assets/statics/avatar01.jpg',
      },
      {
        id: '10',
        name:'Festival Forró',
        date: { value: '01/06/2020' },
        hour: '18:00',
        address: { street: 'rua festeja', neighborhood: 'centro', city: 'campo grande' },
        ticket: '0',
        link: 'https://www.facebook.com/henriquemleonel',
        description: 'pula fogueira',
        category: { value: 'Música', color: '#D3869B' },
        imgUrl: '../assets/statics/avatar01.jpg',
      },
      {
        id: '11',
        name:'"Como não viver em isolamento"',
        date: { value: '03/06/2020' },
        hour: '18:00',
        address: { street: 'rua festeja', neighborhood: 'centro', city: 'campo grande' },
        ticket: '0',
        link: 'https://www.facebook.com/henriquemleonel',
        description: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica ede impressos,',
        category: { value: 'Teatro', color: '#683931' },
        imgUrl: '../assets/statics/avatar01.jpg',
      },
    ]
  },

  plugins: [
    createPersistedState(),
  ],

  getters: {
    loggedIn(state) {
      return state.token || false;
    },
    isAdmin(state) {
      return state.isAdmin;
    },
    getKey(state) {
      return state.newKey;
    },
    currentUser(state) {
      return state.currentUser;
    },
    pinCompleted(state) {
      return state.pinCompleted;
    },
    myPin(state) {
      if (state.myPin === null) {
        return null;
      }
      return state.myPin.payload;
    },
    pinsFiltered(state) {
      if(state.filter === 'all') {
        return state.pins;
      }
      return state.pins;
    },
    myEvents(state) {
      return state.myEvents;
    },
    eventsFiltered(state) {
      if(state.filter === 'all') {
        return state.events;
      }
      return state.events;
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

