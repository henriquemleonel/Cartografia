import api from '../../../apiClient';
// import permissions from './Permissions';

export default {
  namespaced: true,

  state: {
    currentUser: null,
    isAdmin: null,
    myPin: null,
    myEvents: null,
    repliesLiked: [],
    topicsSupported: [],
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
    getMyLikes: (state) => state.repliesLiked,
    getMyVotes: (state) => state.topicsSupported,
    getUserReference(state) {
      const userRef = {
        id: state.currentUser.user.id,
        name: state.currentUser.user.firstName,
        categoryId: state.currentUser.user.categoryId,
        avatar: '',
      };
      return userRef;
    },

  },

  actions: {
    signUp(context, { credentials }) {
      // console.log('context', context);
      return new Promise((resolve, reject) => {
        api.post('/signup', {
          firstName: credentials.firstName,
          lastName: credentials.lastName,
          email: credentials.email,
          password: credentials.password,
          confirmPassword: credentials.confirmPassword,
          isValid: true,
          isAdmin: false,
          categoryId: credentials.categoryId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            console.log('users/signUp - response', response.data);
            const message = 'Action Completed';
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
      console.log('users/addLike');
    },

    removeLike({ commit }, { replyId }) {
      commit('REMOVE_LIKE', { replyId });
      console.log('remove like user action');
    },

    supportThis({ dispatch, commit }, { topicId, supportType }) {
      console.log('users/supportThis', topicId);
      const newSupport = { topicId, supportType };
      dispatch('topics/supportCurrentTopic', { supportType }, { root: true }); // dispatch supportType to increment or decrement topics/supportCount
      commit('ADD_SUPPORT', newSupport); // store support locally
    },

    addVote({ commit }, { topicId }) {
      commit('ADD_VOTE', { topicId });
      console.log('add vote user action');
    },

    removeVote({ commit }, { topicId }) {
      commit('REMOVE_VOTE', { topicId });
      console.log('remove vote user action');
    },
  },

  mutations: {

    SET_CURRENT_USER(state, user) {
      console.log('users/SET_CURRENT_USER', user);
      state.currentUser = {
        user,
      };
    },

    DESTROY_CURRENT_USER(state) {
      state.currentUser = null;
      state.myEvents = null;
      state.myPin = null;
      state.isAdmin = null;
      console.log('mutation : destroy currentUser');
    },

    ADD_SUPPORT(state, newSupport) {
      console.log('users/ADD_SUPPORT', newSupport);
      state.topicsSupported.push(newSupport);
    },

    REMOVE_VOTE(state, { topicId }) {
      const index = state.topicsSupported.findIndex((item) => item === topicId);
      if (state.topicsSupported !== null && state.topicsSupported.length !== 0) {
        state.topicsSupported.splice(index, 1);
      }
      console.log('array voted', state.topicsSupported);
    },

    ADD_LIKE(state, { replyId }) {
      state.repliesLiked.push(replyId);
      // console.log('array mylikes', state.repliesLiked);
    },

    REMOVE_LIKE(state, { replyId }) {
      const index = state.repliesLiked.findIndex((item) => item === replyId);
      if (state.repliesLiked !== null && state.repliesLiked.length !== 0) {
        state.repliesLiked.splice(index, 1);
        // console.log('array mylikes after remove', state.repliesLiked);
      }
    },
  },
};
