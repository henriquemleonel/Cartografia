// import Vue from 'vue';
// import api from '../../config/index.js';

export default {
  namespaced: true,
  state: {
    list: [
      {
        topicId: '1',
        title: 'Dance_Fest',
        categoryId: 5,
        ownerName: 'jão',
        date: '28/04/2020',
        description: 'Festival de dança da comunidade para a comunidade, venha se divertir',
        likes: 1,
        dislikes: 2,
        suport: 234,
        repliesId: 1,
      },
      {
        topicId: '2',
        title: 'Festival Forró',
        categoryId: 2,
        ownerName: 'maria',
        date: '04/05/2020',
        description: 'pula fogueira',
        likes: 1,
        dislikes: 2,
        suport: 234,
        repliesId: 1,
      },
      {
        topicId: '3',
        title: '"Como não viver em isolamento"',
        categoryId: 2,
        ownerName: 'anna',
        date: '07/05/2020',
        description: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica ede impressos,',
        likes: 1,
        dislikes: 2,
        suport: 234,
        repliesId: 1,
      },
      {
        topicId: '4',
        title: 'Fashion Trends CG',
        categoryId: 2,
        ownerName: 'benta',
        date: '07/05/2020',
        description: 'indústria tipográfica ede impressos,',
        likes: 1,
        dislikes: 2,
        suport: 234,
        repliesId: 1,
      },
      {
        topicId: '5',
        title: 'Mis Hitchcok',
        categoryId: 2,
        ownerName: 'martiello',
        date: '07/05/2020',
        description: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto',
        likes: 1,
        dislikes: 2,
        suport: 234,
        repliesId: 1,
      },
      {
        topicId: '6',
        title: 'Festa Junina',
        categoryId: 2,
        ownerName: 'claudio',
        date: '07/05/2020',
        description: 'pula fogueira ',
        likes: 1,
        dislikes: 2,
        suport: 234,
        repliesId: 1,
      },
      {
        topicId: '7',
        title: 'Photo Export',
        categoryId: 2,
        ownerName: 'melissa',
        date: '07/05/2020',
        description: 'photo graph u',
        likes: 1,
        dislikes: 2,
        suport: 234,
        repliesId: 1,
      },
      {
        topicId: '7',
        title: 'Photo Export',
        categoryId: 2,
        ownerName: 'melissa',
        date: '07/05/2020',
        description: 'photo graph u',
        likes: 1,
        dislikes: 2,
        suport: 234,
        repliesId: 1,
      },
      {
        topicId: '7',
        title: 'Photo Export',
        categoryId: 2,
        ownerName: 'melissa',
        date: '07/05/2020',
        description: 'photo graph u',
        likes: 1,
        dislikes: 2,
        suport: 234,
        repliesId: 1,
      },
      {
        topicId: '7',
        title: 'Photo Export',
        categoryId: 2,
        ownerName: 'melissa',
        date: '07/05/2020',
        description: 'photo graph u',
        likes: 1,
        dislikes: 2,
        suport: 234,
        repliesId: 1,
      },
      {
        topicId: '7',
        title: 'Photo Export',
        categoryId: 2,
        ownerName: 'melissa',
        date: '07/05/2020',
        description: 'photo graph u',
        likes: 1,
        dislikes: 2,
        suport: 234,
        repliesId: 1,
      },
    ],
    current: null,
  },

  actions: {
    loadTopics(state, { commit }) {
      commit('SET_TOPICS_LIST', state.list);
    },

    loadCurrentTopic(state, { commit }, { topicId }) {
      const { topic } = state.list.map((e) => e.topicId).indexOf(topicId);
      commit('SET_CURRENT_TOPIC', { topic });
    },

    // async loadTopics({ commit }, { filters }) {
    //   // const topics = await apiClient.getTopics(filters)
    //   commit('SET_TOPICS_LIST', { topics });
    // },

    // async loadCurrentTopic({ commit }, { topicId }) {
    //   const topic = await apiClient.getTopic(topicId);
    //   commit('SET_CURRENT_TOPIC', { topic });
    // },

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

    // async addReply({ state, commit }, { data }) {
    //   const reply = await apiClient.addReply(state.current.id, data);
    //   commit('ADD_REPLY_TO_CURRENT_TOPIC', { reply });
    // },

    // async deleteReply({ state, commit }, { replyId }) {
    //   await apiClient.deleteReply(state.current.id, replyId);
    //   commit('DELETE_REPLY_FROM_CURRENT_TOPIC', { replyId });
    // },

    // async updateReply({ state, commit }, { replyId, data }) {
    //   await apiClient.updateReply(state.current.id, replyId, data);
    //   commit('UPDATE_REPLY', { replyId, data });
    //   return replyId;
    // },
  },

  mutations: {
    SET_TOPICS_LIST({ topics }) {
      this.state.list = topics;
    },

    SET_CURRENT_TOPIC({ topic }) {
      this.state.current = topic;
    },

    // ADD_REPLY_TO_CURRENT_TOPIC({ state }, { reply }) {
    //   state.current.replies = [
    //     ...state.current.replies,
    //     reply,
    //   ];
    // },

    // DELETE_REPLY_FROM_CURRENT_TOPIC({ state }, { replyId }) {
    //   state.current.replies = state.current.replies.filter(
    //     (reply) => reply.id !== replyId,
    //   );
    // },

    // UPDATE_REPLY({ state }, { replyId, data }) {
    //   const replyIndex = state.current.replies.map((reply) => reply.id).indexOf(replyId);
    //   if (replyIndex !== -1) {
    //     Vue.set(state.current.replies, replyIndex, { ...state.current.replies[replyIndex], ...data });
    //   }
    // },
  },

  getters: {
    loadTopics: ({ state }) => state.list,
  },
};