<template>
  <div class="topics-list">

    <div
      v-if="topics.length === 0"
      class="message"
    >
      Ainda não possuimos debates abertos.
    </div>

    <div
      v-else
      class="content"
    >

      <masonry class="grid" :cols="{ default: 3, 1200: 3, 1130: 2, 600: 1 }" :gutter="{ default: '16px', 1200: '4px', 1130: '8px', 600: '4px'}">

        <!-- topic-item -->
        <topic-item
          v-for="topic in topics"
          :key="topic._id"
          :topic="topic"
        />
      <!-- <span>{{ topics }}</span> -->
      </masonry>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import { mapGetters } from 'vuex';
import TopicItem from './TopicItem.vue';

export default {
  components: { TopicItem },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState('topics', {
      topics: (state) => state.list,
    }),
    // ...mapGetters({
    //   topics: 'loadTopics',
    // }),
  },
};
</script>

<style lang="scss" scoped>
.topics-list {
  width: 100%;
  height: inherit;
}

.content {
  box-shadow: 0 1px 5px 0 hsla(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
}

.topic-item + .topic-item {
  border-top: 1px solid #F0F0F0;
}

.topics-list-title {
  font-size: 18px;
  color: #777;
  font-weight: 400;
}

.message {
  text-align: center;
  font-size: 20px;
  color: #888;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 50px;
}
</style>
