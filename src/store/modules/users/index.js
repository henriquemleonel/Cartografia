import api from '../../../apiClient';
import permissions from './Permissions';

export default {
  namespaced: true,
  state: {
    currentUser: null,
    isAdmin: null,
    myPin: null,
    myEvents: null,
  },

  getters: {
    isLoggedIn(state) {
      const token = localStorage.getItem('access_token');
      return (state.currentUser !== null) && (token !== null);
    },
    isAdmin(state) {
      return (state.isAdmin !== null);
    },
    getCurrentUser: (state) => state.currentUser,
    getMyPin: (state) => state.myPin,
    getMyPinState: (state) => state.myPin !== null,
    getMyEvents: (state) => state.myEvents,

  },

  actions: {
    register({ data }) {
      return new Promise((resolve, reject) => {
        console.log('promise/signup');
        api.post('/signup', { data },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            console.log('reponse', response.data);
            const message = 'ok';
            resolve(response);
            return message;
          })
          .catch((error) => {
            console.log(error.message);
            reject(error);
          });
      });
    },
    retrieveToken({ commit }, { credentials }) {
      return new Promise((resolve, reject) => {
        api.post('/signin', {
          email: credentials.email,
          password: credentials.password,
        })
          .then((response) => {
            console.log('reponse LOGIN', response.data);
            // const { token } = response.data.token;
            // const { currentUser } = response.data;
            commit('SET_CURRENT_USER', response.data);
            localStorage.setItem('access_token', response.data.token);
            resolve(response);
          })
          .catch((error) => {
            console.log(error.message);
            reject(error);
          });
      });
    },
    destroyToken(state) {
      localStorage.removeItem('access_token');
      state.commit('destroyToken');
      state.commit('destroyCurrentUser');
      console.log('logout');
    },
  },

  mutations: {

    SET_CURRENT_USER(state, user) {
      console.log('mutation set current user', user);
      state.currentUser = {
        user,
        permissions,
      };
    },

    DESTROY_CURRENT_USER(state) {
      state.currentUser = null;
      state.myEvents = null;
      state.myPin = null;
      state.isAdmin = null;
      console.log('mutation : destroy currentUser');
    },
  },
};
