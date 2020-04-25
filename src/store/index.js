// -------------------------- ------- STORE ---------- ---------------------
/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import { Store } from  'vuex'
import createPersistedState from "vuex-persistedstate"
import axios from 'axios'
import api from '../config/index.js'

Vue.use(Vuex)

const store = new Store({
  state: {
    newKey: null,
    token: null,
    // token: '',
    currentUser: {
      name: 'Juliana Trujillo',
      email: 'JulianaTrujillo@email.com',
      category: { value: 'Cinema e AudioVisual', color: '#254C26'},  // *** transforma category em um id numérico
      isValid: true, // check do fórum quanto ao usuário, começa com true
      isAdmin: false,
      pinCompleted: false,
      // password: '123umdoistres',
    },
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
        imgUrl: 'https://placeimg.com/500/300/nature',
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
        imgUrl: 'https://placeimg.com/500/300/nature',
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
        imgUrl: 'https://placeimg.com/500/300/nature',
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
        imgUrl: 'https://placeimg.com/500/300/nature',
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
        imgUrl: 'https://placeimg.com/500/300/nature',
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
        imgUrl: 'https://placeimg.com/500/300/nature',
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
        imgUrl: 'https://placeimg.com/500/300/nature',
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
        imgUrl: 'https://placeimg.com/500/300/nature',
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
        imgUrl: 'https://placeimg.com/500/300/nature',
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
        imgUrl: 'https://placeimg.com/500/300/nature',
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
        imgUrl: 'https://placeimg.com/500/300/nature',
      },
    ]
  },

  plugins: [
    createPersistedState(),
  ],

  getters: {
    pinsFiltered(state) {
      if(state.filter === 'all') {
        return state.pins;
      }
      return state.pins;
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
      state.token = payload;
      localStorage.setItem('access_token', payload);
      console.log('mutations -> state/newKey : _SETKEY');
      console.log('mutations -> localStorage : _SETKEY');
    },
    logout (state) {
      state.newKey = null;
      state.token = null;
      localStorage.removeItem('access_token');
      console.log('resert key e token');
    },
    addPin(state, payload) {
      if (state.currentUser.pinCompleted === false && state.myPin[0] !== null) {
        state.myPin.push(payload);
        state.currentUser.pinCompleted = true;
        console.log('mutation -> state/myPin[] : first-write', state.myPin);
      } else {
        state.myPin.splice(0, 1, payload);
        console.log('mutation -> state/myPin[] : editing', state.myPin);
      }
    },
    addEvent(state, payload) {

      console.log('mutation -> state/myEvents[] : add', payload);
      state.myEvents.push({
        id: payload.id, // onde gerar id ? no component : na store
        name: payload.name,
        date: { value: payload.data.value },
        hour: payload.hour,
        address: {
          street: payload.address.street,
          neighborhood: payload.address.neighborhood,
          city: payload.address.city,
        },
        ticket: payload.ticket,
        link: payload.link,
        description: payload.description,
        category: {
          value: payload.category.value,
          color: payload.category.color
        },
        imgUrl: payload.imgUrl,
      })

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
    logout (context) {
      context.commit('logout');
    },
    retrieveToken(context, credentials) {

      return new Promise((resolve, reject) => {
        api.post('/signin', {
                email: credentials.email,
                password: credentials.password,
            })
            .then(response => {
                console.log(response)
                const token = response.data.token
                console.log(token)
                    // localStorage.setItem('access_token', validateToken)
                    // context.commit('retrieveToken', token)
                resolve(response)
            })
            .catch(error => {
                console.log(error)
                reject(error)
            })
      })

    },
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/logout')
            .then(response => {
              //localStorage.removeItem('access_token')
              context.commit('destroyToken')
              resolve(response)
              // console.log(response);
              // context.commit('addTodo', response.data)
            })
            .catch(error => {
              //localStorage.removeItem('access_token')
              context.commit('destroyToken')
              reject(error)
            })
        })
      }
    },
    addPin(context, payload) {
      console.log('action>mutation:addPin(payload)', payload)
      context.commit('addPin', payload);
      localStorage.setItem('myPin', payload);
    },
    addPinPost(context, payload) {
      
      api.post('/pin', {
        userRef: payload.userRef,
        completed: payload.completed,
        name: payload.name,
        email: payload.email,
        phone: pyaload.phone,
        address: {
          street: payload.street,
          neighborhood: payload.neighborhood,
          number: payload.number,
          city: payload.city,
          cep: payload.cep,
        },
        coordinates: {
          lat: payload.lat,
          long: payload.long,
        },
        description: '',
        links: {
          linkF: '',
          linkIG: '',
          otherLink: ''
        },
        imgUrl: payload.imgUrl,
      })
        .then(response => {
          console.log(response)
          context.commit('addPin', response.data)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
      

    },
  },
  modules: {}
});

export default store;

