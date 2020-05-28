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
        owner: 'jão',
        date: '2020/04/28',
        description: 'Festival de dança da comunidade para a comunidade, venha se divertir',
        likes: 170,
        dislikes: 64,
        suport: 234,
        repliesId: 1,
        numberOfReplies: 12,
      },
      {
        id: 2,
        title: 'Festival Forró',
        categoryId: 5,
        owner: 'maria',
        date: '2020/05/04',
        description: 'pula fogueira',
        likes: 170,
        dislikes: 64,
        suport: 234,
        repliesId: 1,
        numberOfReplies: 12,
      },
      {
        id: 3,
        title: '"Como não viver em isolamento"',
        categoryId: 1,
        owner: 'anna',
        date: '2020/05/07',
        description: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica ede impressos,',
        likes: 170,
        dislikes: 64,
        suport: 234,
        repliesId: 1,
        numberOfReplies: 12,
      },
      {
        id: 4,
        title: 'Fashion Trends CG',
        categoryId: 15,
        owner: 'benta',
        date: '2020/05/13',
        description: 'indústria tipográfica ede impressos,',
        likes: 170,
        dislikes: 64,
        suport: 234,
        repliesId: 1,
        numberOfReplies: 12,
      },
      {
        id: 5,
        title: 'Mis Hitchcok',
        categoryId: 10,
        owner: 'martiello',
        date: '2020/05/22',
        description: 'pula fogueira Lorem Ipsum é simplesmente uma simulação de texto',
        likes: 170,
        dislikes: 64,
        suport: 234,
        repliesId: 1,
        numberOfReplies: 12,
      },
      {
        id: 6,
        title: 'Festa Junina',
        categoryId: 5,
        owner: 'claudio',
        date: '20202/05/28',
        description: 'pula fogueira ',
        likes: 170,
        dislikes: 64,
        suport: 234,
        repliesId: 1,
        numberOfReplies: 12,
      },
      {
        id: 7,
        title: 'Photo Export',
        categoryId: 8,
        owner: 'melissa',
        date: '2020/06/01',
        description: 'photo graph u',
        likes: 170,
        dislikes: 64,
        suport: 234,
        repliesId: 1,
        numberOfReplies: 12,
      },
      {
        id: 8,
        title: 'Praça Imigrantes',
        categoryId: 7,
        owner: 'melissa',
        date: '2020/06/05',
        description: 'photo graph u',
        likes: 170,
        dislikes: 64,
        suport: 234,
        repliesId: 1,
        numberOfReplies: 12,
      },
      {
        id: 9,
        title: 'Morada Baís',
        categoryId: 6,
        owner: 'melissa',
        date: '2020/07/05',
        description: 'photo graph u',
        likes: 170,
        dislikes: 64,
        suport: 234,
        repliesId: 1,
        numberOfReplies: 12,
      },
    ],
    current: null,
  },

  actions: {
    loadTopics(state, { commit }) {
      commit('SET_TOPICS_LIST', state.list);
    },

    loadCurrentTopic(state, { commit }, { id }) {
      const { topic } = state.list.map((e) => e.id).indexOf(id);
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
    loadTopics: (state) => state.list,
  },
};
