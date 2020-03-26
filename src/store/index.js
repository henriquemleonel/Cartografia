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
    currentUser: {},
    allPins: [],
    AllEvents: []
  },

  getters: {
    loggedIn(state) {
      return state.token !== null
    },
  },

  mutations: {},
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
