import api from '../../../apiClient';

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
      const token = sessionStorage.getItem('access_token');
      return (state.currentUser !== null) && (token !== null);
    },
    isAdmin(state) {
      return (state.isAdmin !== null);
    },
    getCurrentUser: (state) => state.currentUser,
    getMyPin: (state) => state.myPin,
    getMyPinState: (state) => state.myPin !== null,
    getMyEvents: (state) => state.myPin,

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
            console.log('reponse', response.data);
            const { token } = response.data.token;
            const currentUser = response.data;
            console.log('token', token);
            commit('retrieveToken', token);
            commit('setCurrentUser', currentUser);
            sessionStorage.setItem('isAdmin', currentUser.isAdmin);
            sessionStorage.setItem('access_token', token);
            resolve(response);
          })
          .catch((error) => {
            console.log(error.message);
            reject(error);
          });
      });
    },
  },

  mutations: {
    setCurrentUser(state, { user }) {
      state.currentUser = user;
    },
  },
};
