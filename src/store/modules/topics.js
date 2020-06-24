// import Vue from 'vue';
// import api from '../../config/index.js';

export default {
  namespaced: true,
  state: {
    list: [
      {
        id: 1,
        title: 'Dance_Fest',
        categoryId: 1,
        user: {
          name: 'jão',
          id: 12,
        },
        date: '2020/04/28',
        description: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográplesmente uma simulação de texto da indústria tipográfica ede impressos,',
        likes: 170,
        dislikes: 65,
        repliesId: 1,
        numberOfReplies: 2,
        views: 0,
        replies: [
          {
            id: 1,
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
        ],
      },
      {
        id: 2,
        title: 'Festival Forró',
        categoryId: 5,
        user: {
          name: 'maria',
          id: 19,
        },
        date: '2020/05/04',
        description: 'pula fogueira',
        likes: 170,
        dislikes: 64,
        repliesId: 1,
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
        date: '2020/05/07',
        description: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográplesmente uma simulação de texto da indústria tipográfica ede impressos,',
        likes: 170,
        dislikes: 64,
        repliesId: 1,
        numberOfReplies: 12,
        views: 0,
        replies: [
          {
            id: 3,
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
            id: 8,
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
      },
      {
        id: 4,
        title: 'Fashion Trends CG',
        categoryId: 15,
        user: {
          name: 'benta',
          id: 32,
        },
        date: '2020/05/13',
        description: 'indústria tipográfica ede impressos,',
        likes: 170,
        dislikes: 64,
        repliesId: 1,
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
        date: '2020/05/22',
        description: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto',
        likes: 170,
        dislikes: 64,
        repliesId: 1,
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
        date: '20202/05/28',
        description: 'pula fogueira ',
        likes: 170,
        dislikes: 64,
        repliesId: 1,
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
        date: '2020/06/01',
        description: 'photo graph u',
        likes: 170,
        dislikes: 64,
        repliesId: 1,
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
        date: '2020/06/05',
        description: 'photo graph u',
        likes: 170,
        dislikes: 64,
        repliesId: 1,
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
        date: '2020/07/05',
        description: 'photo graph u',
        likes: 170,
        dislikes: 64,
        repliesId: 1,
        numberOfReplies: 12,
        views: 0,
      },
    ],
    current: null,
    Key: null,
  },

  actions: {
    loadTopics(state, { commit }) {
      commit('SET_TOPICS_LIST', state.list);
    },

    // loadCurrentTopic(state, { commit }, { id }) {
    //   const { topic } = state.list.map((e) => e.id).indexOf(id);
    //   console.log('current', topic);
    //   commit('SET_CURRENT_TOPIC', { topic });
    // },

    // async loadTopics({ commit }, { filters }) {
    //   // const topics = await apiClient.getTopics(filters)
    //   commit('SET_TOPICS_LIST', { topics });
    // },

    // loadCurrentTopic({ commit }, { topicId }) {
    //   // get topic data from api
    //   commit('SET_CURRENT_TOPIC', { topic }) // seta o topico recebido como o atual
    // },

    loadCurrentTopic({ state, commit }, { topicId }) {
      console.log('store/topics: topicId', topicId);
      // const { topic } = state.list.find((item) => item.id === topicId.toString());
      const topic = state.list.find((el) => el.id === topicId);
      console.log('current', topic);
      commit('SET_CURRENT_TOPIC', { topic }); // seta o topico recebido como o atual
    },

    // async createTopic({ commit }, { data }) {
    //   const topicId = (await apiClient.createTopic(data)).id;
    //   return topicId;
    // },

    // async updateTopic({ commit }, { topicId, data }) {
    //   await apiClient.updateTopic(topicId, data);
    //   return topicId;
    // },

    // async deleteTopic({ commit }, { topicId }) {
    //   await apiClient.deleteTopic(topicId);
    // },

    // addReply({ state, commit }, { data }) {
    //   const reply = await apiClient.addReply(state.current.id, data);
    //   commit('ADD_REPLY_TO_CURRENT_TOPIC', { reply });
    // },

    addReply({
      state,
      commit,
      dispatch,
      rootGetters,
    }, { data }) {
      dispatch('setKey');
      const replyId = state.Key;
      const userRef = rootGetters['users/getUserRefToReply'];
      const today = new Date();
      const date = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
      const reply = {
        id: replyId,
        user: userRef,
        replyTag: data.replyTag,
        content: data.content,
        createdAt: date,
        numberOfLikes: 0,
      };
      console.log('reply', reply);
      commit('ADD_REPLY_TO_CURRENT_TOPIC', { reply });
    },

    deleteReply({ commit }, { replyId }) {
      // await apiClient.deleteReply(state.current.id, replyId);
      commit('DELETE_REPLY_FROM_CURRENT_TOPIC', { replyId });
    },

    // async updateReply({ state, commit }, { replyId, data }) {
    //   await apiClient.updateReply(state.current.id, replyId, data);
    //   commit('UPDATE_REPLY', { replyId, data });
    //   return replyId;
    // },

    likeReply({ dispatch, commit }, { replyId }) {
      // await apiClient.updateReply(state.current.id, replyId, data);
      dispatch('users/addLike', { replyId }, { root: true });
      commit('LIKE_REPLY', { replyId });
      return replyId;
    },

    unlikeReply({ dispatch, commit }, { replyId }) {
      // await apiClient.updateReply(state.current.id, replyId, data);
      dispatch('users/removeLike', { replyId }, { root: true });
      commit('UNLIKE_REPLY', { replyId });
      return replyId;
    },

    getReplyTag({ state }, { replyTagId }) {
      const data = state.current.replies.find((el) => el.id === replyTagId);
      console.log('topics/replyTag', data);
      return data;
    },

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
    SET_TOPICS_LIST(state, { topics }) {
      state.list = topics;
    },

    SET_CURRENT_TOPIC(state, { topic }) {
      state.current = topic;
    },

    ADD_REPLY_TO_CURRENT_TOPIC(state, { reply }) {
      state.current.replies = [
        ...state.current.replies,
        reply,
      ];
    },

    DELETE_REPLY_FROM_CURRENT_TOPIC(state, { replyId }) {
      state.current.replies = state.current.replies.filter(
        (reply) => reply.id !== replyId,
      );
      // console.log('after delete', state.current.replies);
    },

    // UPDATE_REPLY({ state }, { replyId, data }) {
    //   const replyIndex = state.current.replies.map((reply) => reply.id).indexOf(replyId);
    //   if (replyIndex !== -1) {
    //     Vue.set(state.current.replies, replyIndex, { ...state.current.replies[replyIndex], ...data });
    //   }
    // },

    LIKE_REPLY(state, { replyId }) {
      const replyIndex = state.current.replies.findIndex((reply) => reply.id === replyId);
      state.current.replies[replyIndex].numberOfLikes += 1;
    },

    UNLIKE_REPLY(state, { replyId }) {
      const replyIndex = state.current.replies.findIndex((reply) => reply.id === replyId);
      state.current.replies[replyIndex].numberOfLikes -= 1;
    },

    SET_KEY(state, { newKey }) {
      state.Key = newKey;
      console.log('topics/setKey', newKey);
    },
  },

  getters: {
    loadTopics: (state) => state.list,
    getCurrentTopic: (state) => state.current,
  },
};
