<template>
  <div class="container row no-wrap">

    <!-- <logo-card class="fixed-logo" :blackMode="true"/> -->

    <div class="aside column">

      <header class="spaced-32">

        <logo-card :blackMode="true"/>

      </header>

      <section class="recentes spaced-32">
        <span class="body-2 bolder">recentes</span>
      </section>

      <div class="white-space"></div>

    </div>

    <div class="content">

      <q-scroll-area
        class="scrollArea"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
      >

        <masonry class="items" :cols="{ default: 3, 900: 2, 600:1 }" :gutter="0">
          <div  v-for="item in allEvents" :key="item.id">
            <my-event class="item" :item="item" :bgColor="item.category.color"/>
          </div>
        </masonry>

      </q-scroll-area>

    </div>

  </div>
</template>

<script>

export default {
  name: 'schedulePage',
  components: {
  },
  data() {
    return {
      newEvent: '',
      thumbStyle: {
        right: '2px',
        borderRadius: '0px',
        backgroundColor: '#111111',
        width: '9px',
        heigth: '8px',
        opacity: 0.75,
      },
      barStyle: {
        right: '2px',
        borderRadius: '0px',
        backgroundColor: '#eeeeee',
        width: '9px',
        opacity: 0.2,
      },
    };
  },
  computed: {
    allEvents() {
      return this.$store.getters.eventsFiltered;
    },
  },
  methods: {
  },
  watch: {
  },
};
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.container {
  width: 100%;
  height: 100vh;
  padding: 0px;
  // display: flex;
  // justify-content: center;
}

.aside {
  background-color: white;
  height: 100vh;
  flex-basis: 22%;
  min-width: 250px;
  padding: 16px;
  align-items: center;
}

.content {
  // background-color: white;
  background-color: #f5f5f5; //gelo
  height: 100%;
  flex-basis: 75%;
  overflow-X: hidden;
}

.scrollArea {
  height: 100vh;
  width: 100%;
}

span {
  color: white;
}

.white-space {
  height: 60px;
  //border: 2px solid green;
}

</style>
