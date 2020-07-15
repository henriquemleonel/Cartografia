<template>
  <div class="topics-list">
    <div
      v-if="topicsLoaded.length === 0"
      class="message"
    >
      Ainda não possuimos debates abertos.
    </div>

    <div
      v-else
      class="content"
    >
      <masonry
        class="grid"
        :cols="{ default: 3, 1200: 3, 1130: 2, 600: 1 }"
        :gutter="{ default: '16px', 1200: '4px', 1130: '8px', 600: '4px'}"
      >
        <!-- topic-item -->
        <topic-item
          v-for="topic in topics"
          ref="users"
          :key="topic._id"
          :topic="topic"
        />
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
  props: {
    filter: {
      type: String,
      default: () => 'mostRecents',
    },
  },
  data() {
    return {
      loading: false,
      filterOption: [{ type: 'mostRecents', streamCount: 0 }], // void array => mostRecents
      topicsLoaded: [], // array to be iterated
      streamCount: 0, // most actives
    };
  },
  computed: {
    ...mapState('topics', {
      topics: (state) => state.list,
    }),
    hasAnyFilter() {
      let filterState = false;
      if (this.filter.length !== 0) {
        filterState = true;
      }
      return filterState;
    },
    // ...mapGetters({
    //   topics: 'loadTopics',
    // }),
  },
  beforeMount() {
    this.getInitialTopics();
  },
  mounted() {
    this.$nextTick(function scrollListener() {
      window.addEventListener('scroll', this.onScroll);
      this.onScroll(); // needed for initial loading on page
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    getInitialTopics() {
      this.$store.dispatch('topics/loadInitialTopics')
        .then((response) => {
          this.filterOption[0] = { type: 'mostRecents', streamCount: 1 }; // records the value of the new streamCount
          this.topicsLoaded.push(response.data);
        })
        .catch((error) => {
          console.log('topicsList/getInitialTopics - ERROR', error.message);
        });
    },
    getMoreTopics() {
      if (!this.hasAnyFilter) {
        let currentOption;
        let currentStreamCount;
        if (this.filterOption[0] === 'mostReplyededs') {
          this.currentOption = 'mostRecents';
        } else if (this.filterOption[0] === 'mostActives') {
          this.currentOption = 'mostRecents';
        }
        this.$store.dispatch('topics/loadMoreTopics', {
          filterOption: currentOption,
          streamCount: currentStreamCount,
        })
          .then((response) => {
            this.topicsLoaded.push(response.data);
          })
          .catch((error) => {
            console.log('topicsList/getMoreTopics - ERROR', error.message);
          });
      } else {
        // stream get 'mostRecents'
        this.$store.dispatch('topics/loadMoreTopics', {
          // this.filterOption[0] {}
        })
          .then((response) => {
            this.topicsLoaded.push(response.data);
          })
          .catch((error) => {
            console.log('topicsList/getMoreTopics - ERROR', error.message);
          });
      }
    },
    onScroll() {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          console.log('onScroll - trigger');
          this.getMoreTopics();
        }
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.topics-list {
  width: 100%;
  height: inherit;
}

.content {
  overflow: hidden;
}

.grid {
  border-radius: 0px !important;
  box-shadow: none !important;
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
