// -------------------------- ------- STORE ---------- ---------------------
/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// axios.defaults.baseURL = 'http://localhost:4000'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    signedIn: false,
    pins: []
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
        // axios.post('/signin', {
        //     username: credentials.username,
        //     password: credentials.password,
        //   })
        axios({
          method: 'post',
          url: 'http://localhost:4000/signin',
          data: {
            username: credentials.username,
            password: credentials.password,
          }
        })
          .then(response => {
            console.log(response)
            const token = response.token
            console.log(token)
            localStorage.setItem('access_token', validateToken)
            context.commit('retrieveToken', token)
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
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              resolve(response)
              // console.log(response);
              // context.commit('addTodo', response.data)
            })
            .catch(error => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              reject(error)
            })
        })
      }
    },
  },
  modules: {}
})
