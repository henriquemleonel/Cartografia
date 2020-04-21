// -------------------------- ------- STORE ---------- ---------------------
/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from '../config/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    signedIn: false,
    currentUser: {
      name: 'Juliana Trujillo',
      category: { value: 'Cinema e AudioVisual', color: '#254C26'},
      email: 'JulianaTrujillo@email.com',
      password: '123umdoistres',
      infoPin: {
        name: 'brava',
        email: 'email',
        phone: '67993036371',
        address: { street: 'rua 0', neighborhood: 'centro', number: '322', city: 'cg', cep: '1111' },
        description: 'lugar legal',
        links: { linkF: 'face', linkIG: 'ig', otherLink: 'link' },
        imgUrl: 'https://placeimg.com/500/300/nature',
      }
    },
    pins: [
      {}
    ],
    events: [
      {
        id: '1',
        name:'Dance_Fest',
        date: { month: 'Abril', day: '15', year: '2020', hour: '13:00' },
        address: { street: 'Rua do Dinar', neighborhood: 'Vila Carlota', city: 'campo grande' },
        ticket: '0',
        link: 'https://www.facebook.com/henriquemleonel',
        description: 'Festival de dança da comunidade para a comunidade, venha se divertir',
        category: { value: 'Dança', color: '#683931' },
        imgUrl: 'https://placeimg.com/500/300/nature',
      },
      {
        id: '2',
        name:'Festival Forró',
        date: { month: '05', day: '15', year: '2020', hour: '18:00' },
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
        date: { month: '05', day: '15', year: '2020', hour: '18:00' },
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
        date: { month: '05', day: '15', year: '2020', hour: '18:00' },
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
        date: { month: '05', day: '15', year: '2020', hour: '18:00' },
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
        date: { month: '05', day: '15', year: '2020', hour: '18:00' },
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
        date: { month: '05', day: '15', year: '2020', hour: '18:00' },
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
        date: { month: '05', day: '15', year: '2020', hour: '18:00' },
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
        date: { month: 'Abril', day: '15', year: '2020', hour: '13:00' },
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
        date: { month: '05', day: '15', year: '2020', hour: '18:00' },
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
        date: { month: '05', day: '15', year: '2020', hour: '18:00' },
        address: { street: 'rua festeja', neighborhood: 'centro', city: 'campo grande' },
        ticket: '0',
        link: 'https://www.facebook.com/henriquemleonel',
        description: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica ede impressos,',
        category: { value: 'Teatro', color: '#683931' },
        imgUrl: 'https://placeimg.com/500/300/nature',
      },
    ]
  },

  getters: {
    loggedIn(state) {
      return state.token !== null
    },
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
    addEvent(state, events) {
      state.events.push({
        id: events.id,
        title: events.title,
        completed: false,
        editing: false,
      })
    },
    addEvent(state, pins) {
      state.pins.push({
        id: pins.id,
        title: pins.title,
        completed: false,
        editing: false,
      })
    },
  },
  actions: {
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
  },
  modules: {}
})
