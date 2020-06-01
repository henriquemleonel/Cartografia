<template>
  <!-- item to be selected in topics-page -->
  <div class="topic-item" @click="emitThisTopic()" :style="{ 'background-color': category.color }">

    <div class="content column">

      <span class="big-title bolder"> {{ title }} </span>

      <span class="body-2 bolder mg-top32"> {{ category.label }} </span>
      <!-- topicOwner & date -->
      <div class="row">

        <span class="body-2 bold"> {{ user.name }} </span>

        <span class="body-2 bold  mg-left8">| {{ formatDate }} </span>

      </div>

      <span class="body-2 bold mg-top32"> {{ description }} </span>

      <div class="row mg-top32">
        <!-- <i class="far fa-thumbs-up"></i> -->
        <span class="caption bolder"> {{ likes }} likes </span>
        <span class="caption bolder mg-left8"> | </span>
        <span class="caption bolder mg-left8"> {{ dislikes }} dislikes </span>
      </div>

      <div class="row mg-top8">
        <span class="caption bolder"> {{ suport }} apoios </span>
        <span class="caption bolder mg-left8"> | </span>
        <span class="caption bolder mg-left8"> {{ numberOfReplies }} comentários </span>
      </div>

    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'topicItem',
  data() {
    return {
      id: this.topic.id,
      title: this.topic.title,
      user: this.topic.user,
      date: this.topic.date,
      description: this.topic.description,
      categoryId: this.topic.categoryId,
      likes: this.topic.likes,
      dislikes: this.topic.dislikes,
      suport: this.topic.suport,
      numberOfReplies: this.topic.numberOfReplies,
      category: {
        label: '',
        value: '0',
        color: '#000',
      },
    };
  },
  props: {
    topic: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters({
      options: 'categories/loadCategories',
    }),
    formatDate() {
      const d = new Date(this.date);
      const monthNames = ['Jan', 'Fev', 'Mar', 'Abril', 'Maio', 'Junho', 'Julho', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
      const month = monthNames[d.getMonth()];
      let day;
      if (d.getDate().toString().length === 1) {
        day = `0${d.getDate()}`;
      } else {
        day = d.getDate();
      }
      return `${day} de ${month}`;
    },
  },
  mounted() {
    this.setCategory();
  },
  methods: {
    ...mapActions('topics', [
      'loadCurrentTopic',
    ]),
    setCategory() {
      const vm = this;
      const el = this.options.find((item) => item.value === vm.categoryId.toString());
      this.category = el;
    },
    emitThisTopic() {
      console.log('topic_clicked', this.id);
      this.loadCurrentTopic({ topicId: this.id });
      this.$router.push({ name: 'TopicPage', params: { topicId: this.id } });
    },
  },
};
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';
@import '../styles/mixins.scss';

* {
  font-family: 'Helvetica';
  box-sizing: border-box;
}

.topic-item {
  overflow: hidden;
  width: 350px;
  margin: 8px 4px 0px 0px;
  transition: 0.2s ease-in;

  @include for-phone-only {
    width: 350px;
    margin: 8px 4px 24px 4px;
  }

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
}

.content {
  padding: 32px;
}

.line-h16 {
  line-height: 1em;
}

.img-box {
  display: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  max-height: 250px;
  overflow: hidden;

  .img {
    height: auto;
    width: 100%;
  }
}

span {
  color: white;
}

.link {
  text-decoration: none;
  color: white;
}

</style>
