<template>
  <div class="container">

    <div class="overlay" ref="overlay">
      <!-- <img class="imgPresentation" src="../assets/esboco.png" alt=""> -->
      <h1 class="presentation" ref="presentation">CULTURA</h1>
    </div>

    <div class="aside column">

      <logo-card/>

      <my-menu/>

      <!-- <div class="row space-around social-media">
        <q-btn flat round type="a" target="_blank" size="1.1em" href="https://www.facebook.com/AlgoRitmo.ufms/">
          <q-icon size="1.3em" name="fab fa-facebook-square" color="white"></q-icon>
        </q-btn>
        <q-btn flat round  type="a" target="_blank" size="1.1em" href="https://www.instagram.com/algo.ritmo_/">
          <q-icon size="1.3em" name="fab fa-instagram" color="white"></q-icon>
        </q-btn>
      </div> -->

    </div>

    <div class="wrapper">
    </div>

    <div class="map-container">
      <l-map
        style="width: 100%, height: 100%"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        :min-zoom="13"
        :max-zoom="16"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        ></l-tile-layer>
        <l-control-zoom position="topright" ></l-control-zoom>
        <l-marker class="" :lat-lng="markerLatLng">
          <l-popup class="align-center hover-scale05" style="max-width: 230px; padding: 0px">
            <div class="column" style="width: 100%">
              <div class="row align-center" style="justify-content: flex-start;">
                <q-avatar class="" size="60px;" style="width: 60px">
                  <img src="../assets/statics/avatar01.jpg">
                </q-avatar>
                <span style="margin-left: 16px; font-size: 15px; font-weight: bold">Pin de exemplo</span>
              </div>
              <div class="description-pin">
                <p style="font-size: 13px; ">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div class="actions flex flex-end">
                <q-btn rounded color="teal" >
                  <q-icon size="1.2em" name="fas fa-arrow-right" />
                </q-btn>
              </div>
            </div>
          </l-popup>
        </l-marker>
        <!-- <l-control-attribution position="topleft" prefix="Algo+Ritmo - Research Group" /> -->
      </l-map>
    </div>
  </div>
</template>

<script>
import {
  LMap, LTileLayer, LMarker, LControlZoom, LPopup,
} from 'vue2-leaflet';

import { gsap, TweenMax, Expo } from 'gsap/all';

gsap.registerPlugin(TweenMax, Expo);

export default {
  name: 'Homepage',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlZoom,
    LPopup,
  },
  data() {
    return {
      // url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', // url Standard tileLayer
      // url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      zoom: 15,
      mapOptions: {
        zoomSnap: 0.5,
        zoomControl: false,
      },
      center: [-20.460277, -54.612277],
      markerLatLng: [-20.460277, -54.612277],
      bounds: null,
      // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    };
  },
  mounted() {
    const { overlay, presentation, title } = this.$refs;

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

    TweenMax.staggerFrom(title, 2, {
      delay: 2.4, opacity: 0, y: 20, ease: Expo.easeInOut,
    }, 0.2);
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    onChange(message) {
      console.log(message);
    },
    showNav() {
      this.showSideBar = !this.showSideBar;
    },
    showFilterBar() {
      this.showFilter = !this.showFilter;
    },
  },
};
</script>

<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css?family=Monoton|Righteous&display=swap');
@import '../styles/variables.scss';
@import '../styles/mixins.scss';


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
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
  height: 100vh;
  width: 200px;
  // border: 1px solid black;
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 2;
  overflow: hidden;
  flex-wrap: nowrap;
}

.nav {
  width: inherit;
}

// .wrapper {
//   // background: url('../assets/unsplash02.jpg') no-repeat 50% 50%;
//   // background-size: cover;
//   height: 100vh;
// }

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

</style>
