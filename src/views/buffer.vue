<template>
  <div class="app-page">

    <div class="overlay" ref="overlay">
      <!-- <img class="imgPresentation" src="../assets/esboco.png" alt=""> -->
      <h1 class="presentation" ref="presentation">cartografia da cultura</h1>
    </div>

    <div class="aside column">

      <logo-card/>

      <my-menu/>

    </div>

    <!-- start map -->
    <div class="map-container">

      <l-map
        style="width: 100%, height: 100%"
        :zoom="zoomSet.zoom"
        :center="mapOptions.center"
        :options="zoomSet.options"
        :min-zoom="zoomSet.minZoom"
        :max-zoom="zoomSet.maxZoom"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >

        <l-tile-layer
          :url="layers.carto.url"
          :attribution="mapOptions.attribution"
        ></l-tile-layer>

        <l-control-zoom v-if="handleResize()" position="bottomright" ></l-control-zoom>

        <div class="my-markes">

          <l-marker class="marker-item" v-for="item in markers" :key="item.id" :lat-lng="item.coordinates">

            <l-icon
              class="icon-marker"
              :icon-size="iconSet.iconSize"
              :icon-anchor="iconSet.iconAnchor"
            >
              <img
                :id="`img-icon#${item.id}`"
                class="img-icon"
                :height="iconSet.iconSize[0]"
                :width="iconSet.iconSize[1]"
                v-bind:src="require(`../assets/icons/pins/${item.categoryId}.png`)"
              >

            </l-icon>

            <l-popup :options="popupOptions">
              <pin-view :pinView="getPinById(item.id)"/>
            </l-popup>

          </l-marker>

        </div>

        <!-- <l-control-attribution position="topleft" prefix="Algo+Ritmo - Research Group" /> -->
      </l-map>

    </div>
    <!-- end map -->

  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LControlZoom,
  LPopup,
  LIcon,
} from 'vue2-leaflet';

import { mapGetters } from 'vuex';
import { gsap, TweenMax, Expo } from 'gsap';

import PinView from '../components/PinView.vue';

gsap.registerPlugin(TweenMax, Expo);

export default {
  name: 'Homepage',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlZoom,
    LPopup,
    LIcon,
    PinView,
  },
  data() {
    return {
      opemNav: false,
      oldCenter: [-20.460277, -54.612277],
      mapOptions: {
        center: [-20.455662, -54.592933],
        bounds: null,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      },
      layers: {
        standard: {
          url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        },
        stadia: {
          name: 'alidade-smooth',
          url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
        },
        carto: {
          url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        },
      },
      zoomSet: {
        zoom: 14,
        minZoom: 13,
        maxZoom: 16,
        options: {
          zoomSnap: 0.5,
          zoomControl: false,
        },
      },
      iconSet: {
        iconSize: [24, 24],
        iconAnchor: [15, -8],
      },
      popupOptions: {
        autoPan: true,
        keepInView: true,
        autoPanPaddingTopLeft: [240, 16],
        closeButton: false,
        className: 'my-custom-popup',
      },
      markers: [],
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  mounted() {
    this.homeTransition();
    this.setCoordinates();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      loadPins: 'loadPins',
    }),
    isLoggedIn() {
      if (this.$store.getters.loggedIn) {
        return true;
      }
      return false;
    },
    currentLayer() {
      return this.layers.carto.url;
    },
  },
  methods: {
    opem() {
      this.opemNav = !this.opemNav;
    },
    handleResize() {
      const size = window.innerWidth;
      if (size < 1200) {
        return false;
      }
      return true;
    },
    setCoordinates() {
      const vm = this;
      this.loadPins.forEach((item) => vm.markers.push({ id: item.id, categoryId: item.categoryId, coordinates: item.coordinates }));
    },
    getPinById(id) {
      const target = this.loadPins.find((item) => item.id === id);
      return target;
    },
    zoomUpdated(newZoom) {
      this.zoomSet.zoom = newZoom;
    },
    centerUpdated(newCenter) {
      this.mapOptions.center = newCenter;
    },
    boundsUpdated(newBounds) {
      this.mapOptions.bounds = newBounds;
    },
    homeTransition() {
      const { overlay, presentation } = this.$refs;

      TweenMax.to(presentation, 2, {
        opacity: 0,
        y: -60,
        ease: Expo.easeInOut,
      });

      TweenMax.to(overlay, 2, {
        delay: 1,
        top: '-100%',
        ease: Expo.easeInOut,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';
@import '../styles/typo.scss';

* {
  box-sizing: border-box;
  font-family: 'Helvetica';
}

.app-page {
  position: relative;
  font-family: 'Poppins';
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.overlay {
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #fff;
  top: 0%;
  display: none;
}

.overlay img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.overlay h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  color: black;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 14px;
  text-transform: uppercase;
  // font-size: 3.25rem;
  // font-weight: 900;
  // padding: 0.5em 1em;
  // color: #1d1e22;
  // background-color: #f4f4f4;
  // mix-blend-mode: screen;
  // border-radius: 0.2em;
  // pointer-events: none;
  // user-select: none;
}

.aside {
  // height: 100%;
  width: 200px;
  // border: 1px solid black;
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  overflow: hidden;
  flex-wrap: nowrap;

  @media screen and (max-width: 1200px) {
    display: none;
  }
}

.map-container {
  position: absolute;
  z-index: 0;
  top: 0px;
  // left: 50%;
  // transform: translate(-50%, -50%);
  height: 100vh;
  width: 100%;
  // overflow: hidden;
}

.marker-item {
  display: none !important;
  z-index: 1;
  height: 50px;
  width: 50px;
  transition: transform 0.5s;
}

.img-icon {
  display: block;

  &:hover {
    transform: scale(1.2);
  }
}

// .pin-view {
//   position: relative;
//   top: 0px;
//   left: 0px;
//   z-index: 2;
// }

.button-area {
  position: absolute;
  top: 24px;
  right: 16px;
  z-index: 2;
  overflow: hidden;

  @include for-phone-only {
    display: none;
  }
}

.btn-custom {
  box-shadow: none;
  height: 40px;
  min-width: 100px;
  border-radius: 0px;
  background-color: black;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }

  span {
    font-family: 'Helvetica';
    text-transform: none;
    font-weight: 700;
    color: white;
  }
}

// -------------------------------------- for phone view -------------------
.nav-phone {
  width: 50px;
  height: 50px;
  z-index: 3;
  position: absolute;

  @include for-phone-only {
    top: 0px;
    left: 0px;
  }

  @media (min-width: 600px) and (max-width: 1200px) {
    top: 16px;
    left: 16px;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
  // border: 2px solid pink;
}

.opemNav {
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
  overflow: hidden;
  background-color: #f5f5f5;
  animation: 0.2s fadeInOpacity ease-in;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#nav-icon {
  position: relative;
  top: 8px;
  left: 8px;
  width: 32px;
  height: 32px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

#nav-icon span {
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background: black;
  border-radius: 0px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#nav-icon span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon span:nth-child(2) {
  top: 10px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon span:nth-child(3) {
  top: 20px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 10px;
  left: 8px;

  @media (min-width: 600px) and (max-width: 1200px) {
    top: 16px;
    left: 24px;
  }
}

#nav-icon.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

#nav-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 32px;
  left: 8px;

  @media (min-width: 600px) and (max-width: 1200px) {
    top: 38px;
    left: 24px;
  }
}

.nav-menu {
  position: relative;
  top: 64px;
  left: 0px;
  width: inherit;
  padding: 0px 32px 32px 32px;
  animation: 0.8s fadeInOpacity ease-in;

  .logo {
    position: relative;
    left: 0px;
  }

  @media (min-width: 600px) and (max-width: 1200px) {
    position: relative;
    top: 64px;
    left: 64px;
  }
}

.link {
  text-decoration: none;

  span {
    font-size: 2rem;
    font-weight: bolder;
    color: black;
  }
}

// ---------------------------------- end nav-menu for phone ----------------

</style>
