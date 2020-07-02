import api from '../../../apiClient';
import permissions from './Permissions';

export default {
  namespaced: true,
  state: {
    currentUser: null,
    isAdmin: null,
    myPin: null,
    myEvents: null,
    repliesLiked: [],
    topicsVoted: [],
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
    getMyVotes: (state) => state.topicsVoted,
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
    signUp({ credentials }) {
      console.log('users/register (data)', credentials);
      Promise((resolve, reject) => {
        api.post('/signup', { credentials },
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
      console.log('users/addLike');
    },

    removeLike({ commit }, { replyId }) {
      commit('REMOVE_LIKE', { replyId });
      console.log('remove like user action');
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

    ADD_VOTE(state, { topicId }) {
      state.topicsVoted.push(topicId);
      console.log('topic id to be voted', topicId);
    },

    REMOVE_VOTE(state, { topicId }) {
      const index = state.topicsVoted.findIndex((item) => item === topicId);
      if (state.topicsVoted !== null && state.topicsVoted.length !== 0) {
        state.topicsVoted.splice(index, 1);
      }
      console.log('array voted', state.topicsVoted);
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
