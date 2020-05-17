<template>
  <!-- item to be selected in topics-page -->
  <div class="topic-item" @click="emitThisTopic()">

    <div class="content column">

      <span class="title-1 bolder line-h16"> {{ title }} </span>
      <span class="headline-3 bolder mg-top-8"> {{ category }} </span>

      <!-- topicOwner & date -->
      <div class="row mg-top8">

        <span class="body-2 bold"> {{ owner }} </span>

        <span class="body-2 bold  mg-left16"> {{ date }} </span>

      </div>

      <span class="body-2 bold spaced-32"> {{ description }} </span>

      <div class="row spaced-8">
        <span class="body-2 bold"> likes </span>
        <span class="body-2 bold"> deslikes </span>
      </div>

      <div class="row spaced-8">
        <span class="body-2 bold"> apoios </span>
        <span class="body-2 bold"> comentários </span>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'topicItem',
  data() {
    return {
      id: this.topic.id,
      title: this.topic.title,
      owner: this.topic.topicOwner,
      category: this.topic.category,
      date: this.topic.date,
      description: this.topic.description,
      background: this.bgColor,
    };
  },
  props: {
    topic: {
      type: Object,
      default: () => ({}),
    },
    bgColor: {
      type: String,
    },
  },
  methods: {
    emitThisTopic() {
      console.log('topic_id_name', this.title);
      this.$router.push({ name: 'Dashboard', params: { topicId: this.id } });
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
  max-width: 350px;
  max-height: 290px;
  background-color: #C95B40;
  margin: 8px 4px 0px 0px;
  transition: transform .2s;

  @include for-phone-only {
    width: 350px;
    margin: 8px 4px 24px 4px;
  }
}

.content {
  padding: 24px;
}

.line-h16 {
  line-height: 1em;
}

.img-box {
  width: 350px;
  max-height: 280px;
  overflow: hidden;

  .img {
    height: auto;
    max-width: 350px;
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
