import api from '../../../apiClient';
import permissions from './Permissions';

export default {
  namespaced: true,
  state: {
    currentUser: null,
    isAdmin: null,
    myPin: null,
    myEvents: null,
    myLikes: [],
  },

  getters: {
    isLoggedIn(state) {
      const token = localStorage.getItem('access_token');
      return (state.currentUser !== null) && (token !== null);
      // return (token !== null);
    },
    isAdmin(state) {
      return (state.isAdmin !== null);
    },
    getCurrentUser: (state) => state.currentUser,
    getMyPin: (state) => state.myPin,
    getMyPinState: (state) => state.myPin !== null,
    getMyEvents: (state) => state.myEvents,
    getMyLikes: (state) => state.myLikes,
    getUserRefToReply(state) {
      const userRef = {
        id: state.currentUser.user.id,
        name: state.currentUser.user.firstName,
        categoryId: state.currentUser.user.categoryId,
        avatar: '',
      };
      // console.log('userRef reply', userRef);
      return userRef;
    },

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
    destroyToken({ commit }) {
      localStorage.removeItem('access_token');
      commit('DESTROY_CURRENT_USER');
      console.log('logout');
    },
    addLike({ commit }, { replyId }) {
      commit('ADD_LIKE', { replyId });
      console.log('add like user action');
    },
    removeLike({ commit }, { replyId }) {
      commit('REMOVE_LIKE', { replyId });
      console.log('remove like user action');
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

    ADD_LIKE(state, { replyId }) {
      state.myLikes.push(replyId);
      console.log('array mylikes', state.myLikes);
    },

    REMOVE_LIKE(state, { replyId }) {
      const index = state.myLikes.findIndex((item) => item === replyId);
      console.log('array mylikes before remove', state.myLikes);
      console.log('item to remove', state.myLikes[index]);
      if (state.myLikes !== null && state.myLikes.length !== 0) {
        state.myLikes.splice(index, 1);
        console.log('array mylikes after remove', state.myLikes);
      }
    },
  },
};
