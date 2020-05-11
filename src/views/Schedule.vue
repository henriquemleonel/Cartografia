<template>
  <div class="container">

    <!-- <logo-card class="fixed-logo" :blackMode="true"/> -->

    <div class="aside">

      <header>

        <logo-card :blackMode="true"/>

      </header>

      <div class="white-space"></div>

      <section class="filter" v-if="!handleResize">
        <span class="body-2 bolder">+</span>
      </section>

    </div>

    <div class="filter-mobile" v-if="handleResize">
      <span class="body-2 bolder">+</span>
    </div>

    <div class="content">

      <q-scroll-area
        class="scrollArea"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        v-if="!handleResize"
      >

        <masonry class="items" :cols="{ default: 3, 1100: 2, 900: 1 }" :gutter="0">
          <div  v-for="item in allEvents" :key="item.id" v-intersection="onIntersection">
            <transition name="q-transition--scale">
              <my-event class="item" :item="item" v-if="allEvents[item.id - 1]" :bgColor="item.category.color"/>
            </transition>
          </div>
        </masonry>

      </q-scroll-area>

      <div class="mobile-items" v-if="handleResize">

        <masonry class="items" :cols="{ default: 3, 900: 2, 700:1 }" :gutter="0">

          <div  v-for="item in allEvents" :key="item.id" v-intersection="onIntersection">
            <transition name="q-transition--scale">
              <my-event class="item" :item="item" v-if="allEvents[item.id - 1]" :bgColor="item.category.color"/>
            </transition>
          </div>

        </masonry>

      </div>

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
        right: '0px',
        borderRadius: '0px',
        backgroundColor: '#111111',
        width: '9px',
        heigth: '8px',
        opacity: 0.75,
      },
      barStyle: {
        right: '0px',
        borderRadius: '0px',
        backgroundColor: '#eeeeee',
        width: '9px',
        opacity: 0.2,
      },
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    allEvents() {
      const eventsToShow = this.$store.getters.eventsFiltered;
      return eventsToShow;
    },
  },
  methods: {
    onIntersection(entry) {
      const index = parseInt(entry.target.dataset.id, 10);
      setTimeout(() => {
        this.allEvents.splice(index, 3, entry.isIntersecting);
      }, 50);
    },
    handleResize() {
      const size = window.innerWidth;
      if (size > 600) {
        return false;
      }
      return true;
    },
  },
  watch: {
  },
};
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.container {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100vh;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @include for-phone-only {
    height: 100%;
    flex-direction: column;
  }
}

.aside {
  position: relative;
  background-color: white;
  height: 100vh;
  flex-basis: 22%;
  min-width: 250px;
  padding: 16px;
  align-items: center;
  z-index: 1;

  @include for-phone-only {
    height: 80px;
    padding: 16px 16px 8px 16px;
    flex-direction: column;
    align-items: flex-start;
  }

  header {
    @include for-phone-only {
      width: 100%;
      padding: 0px;
      flex-direction: column;
    }
  }

  .filter {
     @include for-phone-only {
      width: 100%;
    }
  }
}

.content {
  // background-color: white;
  position: relative;
  // background-color: #f5f5f5; //gelo
  height: 100%;
  flex-basis: 75%;
  overflow-X: hidden;
  z-index: 1;

  @include for-phone-only {
    width: 100%;
    padding: 8px;
  }

  @media (min-width: 600px) and (max-width: 1200px) {
    align-items: center;
  }
}

.scrollArea {
  height: 100vh;
  width: 100%;
  padding-right: 8px;

  @include for-phone-only {
    display: none;
    padding: 4px 8px 4px 8px;
  }
}

.filter-mobile {
  display: none;

  @include for-phone-only {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    z-index: 2;
    position: relative;
    // position: -webkit-sticky;
    top: 32px;
    right: 32px;
    background: black;
  }
}

span {
  color: white;
}

.white-space {
  height: 60px;
  //border: 2px solid green;

  @include for-phone-only {
    display: none;
  }
}

</style>
