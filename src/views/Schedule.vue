<template>
  <div class="app-page">

    <!-- <logo-card class="fixed-logo" :blackMode="true"/> -->

    <div class="aside">

      <logo-card class="identity" :blackMode="true"/>

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
        v-if="handleResize"
      >

        <masonry class="items" :cols="{ default: 3, 1200: 3, 1130: 2, 600: 1 }" :gutter="{ default: '8px' }">
          <div  v-for="item in events" :key="item.id">

            <schedule-item class="item" :item="item" v-if="events[item.id - 1]"/>

          </div>
        </masonry>

      </q-scroll-area>

      <div class="mobile-items" v-if="!handleResize">

        <masonry class="items" :cols="{ default: 3, 1320: 2, 600: 1 }" :gutter="0">

          <div  v-for="item in events" :key="item.id">
            <transition name="q-transition--scale">
              <my-event class="item" :item="item" v-if="events[item.id - 1]"/>
            </transition>
          </div>

        </masonry>

      </div>

    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ScheduleItem from '../components/ScheduleItem.vue';

export default {
  name: 'Schedule_Page',
  components: {
    ScheduleItem,
  },
  data() {
    return {
      newEvent: '',
      thumbStyle: {
        right: '0px',
        top: '16px',
        borderRadius: '0px',
        backgroundColor: '#111111',
        width: '9px',
        heigth: '8px',
        opacity: 0.75,
      },
      barStyle: {
        right: '0px',
        top: '16px',
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
    ...mapGetters({
      events: 'events/loadEvents',
    }),
  },
  methods: {
    onIntersection(entry) {
      const index = parseInt(entry.target.dataset.id, 10);
      setTimeout(() => {
        this.events.splice(index, 3, entry.isIntersecting);
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
@import '../styles/typo.scss';

.app-page {
  z-index: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @include for-phone-only {
    height: 100%;
    flex-direction: column;
  }
}

.aside {
  background-color: white;
  height: 100%;
  width: 350px;
  padding: 16px;
  margin: 8px 8px 0px 0px;
  z-index: 1;
  display: flex;
  flex-direction: column;

  @include for-phone-only {
    height: 80px;
    padding: 16px 16px 8px 16px;
    flex-direction: column;
  }

  @include for-tablet-portrait-only {
    margin: 0px 4px 0px 0px;
    padding: 16px 0px 8px 16px;
  }

  @include for-desktop-up {
    margin: 0px;
    padding: 24px 32px 8px 32px;
    align-self: flex-start;
  }

  .identity {
    align-self: center;
    // margin-top: 32px;

    @include for-phone-only {
      width: 100%;
      padding: 0px;
      align-self: center;
    }
  }

  .filter {
     @include for-phone-only {
      width: 100%;
    }
  }
}

.content {
  height: 100vh;
  width: calc(100% - 350px);
  padding: 8px 0px 0px 0px;
  overflow: hidden;
  z-index: 1;

  @include for-phone-only {
    width: 100%;
    padding: 8px;
  }

  @include for-desktop-up {
    align-self: center;
    margin: 0px;
    padding: 16px 8px 8px 0px;
    max-width: 1240px;
  }
}

.item {
  margin: 8px;
}

.scrollArea {
  height: 100%;
  width: 100%;
  padding-right: 16px;

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
