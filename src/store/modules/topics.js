// import Vue from 'vue';
import api from '../../apiClient';

export default {
  namespaced: true,

  state: {
    list: [
      {
        id: 1,
        title: 'Dance Fest',
        categoryId: 1,
        user: {
          name: 'jão', // implement user name
          id: 12,
        },
        createdAt: '2020/04/28', // implements full date, with time too
        content: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográplesmente uma simulação de texto da indústria tipográfica ede impressos,',
        positiveSupports: 170,
        negativeSupports: 65,
        numberOfReplies: 2,
        views: 0,
      },
      {
        id: 2,
        title: 'Festival Forró',
        categoryId: 5,
        user: {
          name: 'maria',
          id: 19,
        },
        createdAt: '2020/05/04',
        content: 'pula fogueira',
        positiveSupports: 170,
        negativeSupports: 64,
        numberOfReplies: 12,
        views: 0,
      },
      {
        id: 3,
        title: 'Como não viver em isolamento',
        categoryId: 1,
        user: {
          name: 'anna',
          id: 28,
        },
        createdAt: '2020/05/07',
        content: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográplesmente uma simulação de texto da indústria tipográfica ede impressos,',
        positiveSupports: 170,
        negativeSupports: 64,
        numberOfReplies: 12,
        views: 0,
      },
      {
        id: 4,
        title: 'Fashion Trends CG',
        categoryId: 15,
        user: {
          name: 'benta',
          id: 32,
        },
        createdAt: '2020/05/13',
        content: 'indústria tipográfica ede impressos,',
        positiveSupports: 170,
        negativeSupports: 64,
        numberOfReplies: 12,
        views: 0,
      },
      {
        id: 5,
        title: 'Mis Hitchcok',
        categoryId: 10,
        user: {
          name: 'martiello',
          id: 67,
        },
        createdAt: '2020/05/22',
        content: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto',
        positiveSupports: 170,
        negativeSupports: 64,
        numberOfReplies: 12,
        views: 0,
      },
      {
        id: 6,
        title: 'Festa Junina',
        categoryId: 5,
        user: {
          name: 'claudio',
          id: 189,
        },
        createdAt: '20202/05/28',
        content: 'pula fogueira ',
        positiveSupports: 170,
        negativeSupports: 64,
        numberOfReplies: 12,
        views: 0,
      },
      {
        id: 7,
        title: 'Photo Export',
        categoryId: 8,
        user: {
          name: 'mellisa',
          id: 78,
        },
        createdAt: '2020/06/01',
        content: 'photo graph u',
        positiveSupports: 170,
        negativeSupports: 64,
        numberOfReplies: 12,
        views: 0,
      },
      {
        id: 8,
        title: 'Praça Imigrantes',
        categoryId: 7,
        user: {
          name: 'enzo',
          id: 45,
        },
        createdAt: '2020/06/05',
        content: 'photo graph u',
        positiveSupports: 170,
        negativeSupports: 64,
        numberOfReplies: 12,
        views: 0,
      },
      {
        id: 9,
        title: 'Morada Baís',
        categoryId: 6,
        user: {
          name: 'marcio',
          id: 7,
        },
        createdAt: '2020/07/05',
        content: 'photo graph u',
        positiveSupports: 170,
        negativeSupports: 64,
        numberOfReplies: 12,
        views: 0,
      },
    ],
    replies: [
      {
        id: 1,
        topicId: 1,
        user: {
          id: 2,
          name: 'Juliana Trujillo',
          categoryId: 8,
          avatar: '',
        },
        replyTag: null,
        content: 'Expedita aliquid at suscipit molestias eos dicta, sed iste quidem blanditiis quod.',
        createdAt: '2019-03-27',
        numberOfLikes: 12,
      },
      {
        id: 2,
        topicId: 1,
        user: {
          id: 27,
          name: 'Henrique Leonel',
          categoryId: 15,
          avatar: '',
        },
        replyTag: null,
        content: 'Aperiam minima autem aliquam alias consequuntur quas magnam?',
        createdAt: '2019-03-27',
        numberOfLikes: 0,
      },
      {
        id: 3,
        topicId: 3,
        user: {
          id: 2,
          name: 'Juliana Trujillo',
          categoryId: 8,
          avatar: '',
        },
        replyTag: null,
        content: 'Expedita aliquid at suscipit molestias eos dicta, sed iste quidem blanditiis quod.',
        createdAt: '2019-03-27',
        numberOfLikes: 12,
      },
      {
        id: 4,
        topicId: 3,
        user: {
          id: 27,
          name: 'Henrique Leonel',
          categoryId: 15,
          avatar: '',
        },
        replyTag: null,
        content: 'Aperiam minima autem aliquam alias consequuntur quas magnam?',
        createdAt: '2019-03-27',
        numberOfLikes: 0,
      },
      {
        id: 5,
        topicId: 3,
        user: {
          id: 2,
          name: 'Juliana Trujillo',
          categoryId: 8,
          avatar: '',
        },
        replyTag: null,
        content: 'Expedita aliquid at suscipit molestias eos dicta, sed iste quidem blanditiis quod.',
        createdAt: '2019-03-27',
        numberOfLikes: 12,
      },
      {
        id: 6,
        topicId: 3,
        user: {
          id: 43,
          name: 'fulano',
          categoryId: 15,
          avatar: '',
        },
        replyTag: 5,
        content: 'Aperiam minima autem aliquam alias consequuntur quas magnam?',
        createdAt: '2019-03-27',
        numberOfLikes: 3,
      },
    ],
    key: null,
    currentTopic: null,
    currentTopicReplies: null,
  },

  getters: {
    loadTopics: (state) => state.list,
    getCurrentTopic: (state) => state.currentTopic,
    getCurrentTopicReplyes: (state) => state.currentTopicReplies,
  },

  actions: {

    // TO BE DELETED
    // this action is applied only in the local implementation.
    localLoadCurrentTopic({ state, commit }, { topicId }) {
      let data = {};
      data = state.list.find((el) => el.id === topicId);
      commit('SET_CURRENT_TOPIC', data); // update local storage
    },

    // TO BE DELETED
    localLoadCurrentTopicReplyes({ state, commit }, { topicId }) {
      console.log('topics/localLoadCurrentReplies', topicId);
      const data = state.replies.filter(
        (reply) => reply.topicId === topicId,
      );
      commit('SET_CURRENT_TOPIC_REPLYES', data);
    },

    // TO BE IMPLEMENTED
    loadCurrentTopics({ commit }, { filters }) {
      // this action is performed every time the user reaches the last topic on the topics page.
      // api get 12 topics elements as object array, in ascending order by date, based on current filter. *** this appears like unsplash loading.
      let currentTopics = [];
      if (filters === 'noFilters') {
        currentTopics = api.get('NoFilters');
      } else if (filters === 'moreActives') {
        currentTopics = api.get('moreActive');
      } else if (filters === 'mostReplyededs') {
        currentTopics = api.get('mostReplyeds');
      } else if (filters === 'mostRecents') {
        currentTopics = api.get('mostRecents');
      }
      commit('SET_TOPICS_LIST', { currentTopics });
    },

    // TO BE REWIWED
    loadCurrentTopic({ commit }, { topicId }) {
      // api get, this topic to be set as currentTopic. and get replies array of this topic.
      Promise((resolve, reject) => {
        api.get('/getCurrentTopic', {
          topicId,
        })
          .then((response) => {
            console.log('topics/loadCurrentTopic - response', response.data);
            commit('SET_CURRENT_TOPIC', response.data);
            resolve(response);
          })
          .catch((error) => {
            console.log(error.message);
            reject(error);
          });
      });
      console.log('topics/loadCurrentTopic LOG');
    },

    // TO BE REWIWED
    loadCurrentTopicReplyes({ commit }, { topicId }) {
      Promise((resolve, reject) => {
        api.get('/getCurrentTopicReplyes', {
          topicId,
        })
          .then((response) => {
            console.log('topics/loadCurrentTopicReplyes - response', response.data);
            commit('SET_CURRENT_TOPIC_REPLYES', response.data);
            resolve(response);
          })
          .catch((error) => {
            console.log(error.message);
            reject(error);
          });
      });
    },

    // OK
    createNewTopic({
      state,
      commit,
      dispatch,
      rootGetters,
    }, { data }) {
      // generate new key to being used as id, on this new topic.
      dispatch('setKey'); // TO BE DELETED
      const topicId = state.key; // TO BE DELETED
      // get data from current user, to reference this topic. contains { id, name, categoryId, avatarUrl}
      const userRef = rootGetters['users/getUserReference'];
      // get current date and time
      const today = new Date();
      const date = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
      // mount reply object
      const newTopic = {
        id: topicId, // TO BE DELETED
        title: data.title,
        categoryId: data.categoryId,
        user: userRef,
        createdAt: date,
        content: data.content,
        positiveSupports: 0,
        negativeSupports: 0,
        numberOfReplies: 0,
        views: 0,
      };
      console.log('topics/createNewTopic', newTopic);
      commit('ADD_NEW_TOPIC', { newTopic }); // TO BE DELETED
      // post to api topic object, to be added on serve and storage response.
      // Promise((resolve, reject) => {
      //   api.post('/createNewTopic', {
      //     newTopic,
      //   })
      //     .then((response) => {
      //       console.log('topics/createNewTopic - response', response.data);
      //       commit('ADD_NEW_TOPIC', response.data);
      //       resolve(response);
      //     })
      //     .catch((error) => {
      //       console.log(error.message);
      //       reject(error);
      //     });
      // });
    },

    // TO BE IMPLEMENTED
    // async updateTopic({ commit }, { topicId, data }) {
    //   await apiClient.updateTopic(topicId, data);
    //   return topicId;
    // },

    // TO BE IMPLEMENTED
    // async deleteTopic({ commit }, { topicId }) {
    //   await apiClient.deleteTopic(topicId);
    // },

    // OK
    supportCurrentTopic({ state, commit }, { supportType }) {
      // call this action from usersModule, after conditions are processed.
      // post to api, this current topic id, to be supported (approved/true || notApproved/false).
      const newSupport = { topicId: state.currentTopic.id, support: supportType };
      // Promise((resolve, reject) => {
      //   api.post('/supportThisTopic', {
      //     newSupport,
      //   })
      //     .then((response) => {
      //       console.log('topics/supportThis - RESPONSE');
      //       commit('ADD_SUPPORT', supportType);
      //       resolve(response);
      //     })
      //     .catch((error) => {
      //       console.log(error.message);
      //       reject(error);
      //     });
      // });
      console.log('topics/supportCurrentTopic', newSupport);
      commit('ADD_SUPPORT', { supportType });
    },

    // OK
    changeSupportCurrentTopic({ state, commit }, { newSupportType }) {
      // call this action from usersModule, after conditions are processed.
      // switch support count
      // if supportType == true, (increment positiveSupports, decrement negativeSupport)
      const newSupport = { topicId: state.currentTopic.id, support: newSupportType };
      // Promise((resolve, reject) => {
      //   api.post('/updateSupportThisTopic', {
      //     newSupport,
      //   })
      //     .then((response) => {
      //       console.log('topics/updateThisSupport - RESPONSE');
      //       commit('CHANGE_SUPPORT', newSupportType);
      //       resolve(response);
      //     })
      //     .catch((error) => {
      //       console.log(error.message);
      //       reject(error);
      //     });
      // });
      console.log(newSupport); // TO BE DELETED
      console.log('topics/supportCurrentTopic', { newSupportType }); // TO BE DELETED
      commit('CHANGE_SUPPORT', newSupportType); // TO BE DELETED
    },

    // OK
    addReply({
      state,
      commit,
      dispatch,
      rootGetters,
    }, { data }) {
      // generate new key to being used as id, on this new reply. LOCAL IMPLEMENTATION ONLY
      dispatch('setKey'); // TO BE DELETED
      const replyId = state.key; // TO BE DELETED
      // get data from current user, to reference this reply.
      const userRef = rootGetters['users/getUserReference'];
      // get current date and time
      const today = new Date();
      const date = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
      // mount reply object
      const newReply = {
        id: replyId, // TO BE DELETED
        topicId: state.currentTopic.id,
        user: userRef,
        replyTag: data.replyTag,
        content: data.content,
        createdAt: date,
        numberOfLikes: 0,
      };
      console.log('topics/addReply', newReply);
      // post to api - newReply object to be added, and this topic id as reference.
      // Promise((resolve, reject) => {
      //   api.get('/addNewReply', {
      //     newReply,
      //   })
      //     .then((response) => {
      //       console.log('topics/loadCurrentTopicReplyes - response', response.data);
      //       commit('ADD_REPLY_TO_CURRENT_TOPIC', response.data);
      //       resolve(response);
      //     })
      //     .catch((error) => {
      //       console.log(error.message);
      //       reject(error);
      //     });
      // });
      commit('ADD_REPLY_TO_CURRENT_TOPIC', newReply); // TO BE DELETED
    },

    // TO BE REWIEWED
    deleteReply({ commit }, { replyId }) {
      // post to api, this reply id to be deleted.
      // Promise((resolve, reject) => {
      //   api.post('/deleteReply', {
      //     replyId,
      //   })
      //     .then((response) => {
      //       console.log('topics/deleteReply - response', response);
      //       commit('DELETE_REPLY', { replyId });
      //       resolve(response);
      //     })
      //     .catch((error) => {
      //       console.log(error.message);
      //       reject(error);
      //     });
      // });
      console.log('topics/deleteReply', replyId);
      commit('DELETE_REPLY', { replyId });
    },

    // TO BE REWIEWED
    updateReply({ commit }, { replyId, data }) {
      console.log('topics/updateReply', replyId);
      // console.log('topics/updateReply', data);
      // post to api, this reply id and newData to be updated.
      // api post action HERE ------ (replyId, data);
      // then
      commit('UPDATE_REPLY', { replyId, data }); // update local storage.
    },

    // TO BE REWIEWED
    likeReply({ dispatch, commit }, { replyId }) {
      // post to api, a reply element on this topic, to be liked.
      // then
      dispatch('users/addLike', { replyId }, { root: true }); // add from local user register like to this reply
      commit('LIKE_REPLY', { replyId });
      return replyId;
    },

    // TO BE REWIEWED
    unlikeReply({ dispatch, commit }, { replyId }) {
      // post to api, reply element on this topic, to be unliked.
      // then
      dispatch('users/removeLike', { replyId }, { root: true }); // remove from local user register like to this reply
      commit('UNLIKE_REPLY', { replyId });
      return replyId;
    },

    // TO BE REWIEWED
    getReplyTag({ state }, { replyTagId }) {
      // find reply element to being tagged
      const data = state.currentTopicReplies.find((el) => el.id === replyTagId);
      console.log('topics/getReplyTag', data);
      return data;
    },

    // OK
    setKey({ commit }) {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let autoId = '';
      for (let i = 0; i < 20; i += 1) {
        autoId += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      const key = autoId;
      console.log('generated KEY', key);
      commit('SET_KEY', { newKey: key });
    },
  },

  mutations: {
    // OK
    SET_TOPICS_LIST(state, { data }) {
      state.list = data;
    },

    // OK
    SET_CURRENT_TOPIC(state, data) {
      state.currentTopic = data;
    },

    // OK
    SET_CURRENT_TOPIC_REPLYES(state, data) {
      state.currentTopicReplies = data;
    },

    // TO BE REWIEWED
    ADD_NEW_TOPIC(state, { data }) {
      state.list.push(data);
    },

    // TO BE REWIEWED
    ADD_SUPPORT(state, { supportType }) {
      console.log('melao');
      if (supportType) {
        // approved
        state.currentTopic.positiveSupports += 1;
      } else {
        // not approved
        state.currentTopic.negativeSupports += 1;
      }
    },

    // TO BE REWIWED
    CHANGE_SUPPORT(state, newSupportType) {
      console.log('banana', newSupportType);
      if (newSupportType) {
        console.log('topics/CHANGE_SUPPORT: F => T');
        state.currentTopic.positiveSupports += 1;
        state.currentTopic.negativeSupports -= 1;
        // commit('NEGATIVE_SUPPORT_DECREMENT');
      } else {
        console.log('topics/CHANGE_SUPPORT: T => F');
        state.currentTopic.negativeSupports += 1;
        state.currentTopic.positiveSupports -= 1;
        // commit('POSITIVE_SUPPORT_DECREMENT');
      }
    },

    // OK
    POSITIVE_SUPPORT_DECREMENT(state) {
      state.currentTopic.positiveSupports -= 1;
    },

    // OK
    NEGATIVE_SUPPORT_DECREMENT(state) {
      state.currentTopic.negativeSupports -= 1;
    },

    // OK
    ADD_REPLY_TO_CURRENT_TOPIC(state, data) {
      console.log('ADD_REPLY_TO_CURRENT_TOPIC', data);
      // state.currentTopicReplies.push(data);
      state.replies.push(data); // TO BE DELETED
    },

    // Ok
    DELETE_REPLY(state, { replyId }) {
      console.log('topics/DELETE_REPLY', replyId);
      // const replyIndex = state.currentTopicReplies.findIndex((reply) => reply.id === replyId);
      // state.currentTopicReplies.splice(replyIndex, 1);
      const replyIndex = state.replies.findIndex((reply) => reply.id === replyId); // TO BE DELETED
      state.replies.splice(replyIndex, 1); // TO BE DELETED
    },

    // TO BE IMPLEMENTED
    UPDATE_REPLY(state, { replyId, data }) {
      // const replyIndex = state.currentTopicReplies.findIndex((reply) => reply.id === replyId);
      // state.currentTopicReplies[replyIndex].content = data;
      const replyIndex = state.replies.findIndex((reply) => reply.id === replyId); // TO BE DELETED
      state.replies[replyIndex].content = data; // TO BE DELETED
    },

    // OK
    LIKE_REPLY(state, { replyId }) {
      const replyIndex = state.currentTopicReplies.findIndex((reply) => reply.id === replyId);
      state.currentTopicReplies[replyIndex].numberOfLikes += 1;
    },

    // OK
    UNLIKE_REPLY(state, { replyId }) {
      const replyIndex = state.currentTopicReplies.findIndex((reply) => reply.id === replyId);
      state.currentTopicReplies[replyIndex].numberOfLikes -= 1;
    },

    // OK
    SET_KEY(state, { newKey }) {
      state.key = newKey;
      console.log('topics/setKey', newKey);
    },
  },

};
