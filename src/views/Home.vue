<template>
  <div class="container">

    <div class="overlay" ref="overlay">
      <!-- <img class="imgPresentation" src="../assets/esboco.png" alt=""> -->
      <h1 class="presentation" ref="presentation">CULTURA</h1>
    </div>

    <!-- aside menu (for web only) -->
    <div class="aside column">

      <logo-card/>

      <my-menu/>

    </div>

    <!-- nav menu (for phone only) -->
    <div class="nav" :class="{ 'opemNav' : opemNav }">

      <div id="nav-icon" @click="opem()" :class="{ 'open' : opemNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="nav-menu" v-if="opemNav">

        <logo-card class="logo" :blackMode="true"/>

        <div class="routes column">

          <router-link class="link mg-top32" to="/about">
            <span class="body-2">Sobre</span>
          </router-link>

          <router-link class="link mg-top32" to="/schedule">
            <span class="body-2">Agenda</span>
          </router-link>

          <router-link class="link mg-top32" to="/debates">
            <span class="body-2">Debates</span>
          </router-link>

          <router-link class="link mg-top32" to="/about">
            <span class="body-2">sei lá</span>
          </router-link>

        </div>

      </div>

    </div>

    <!-- start button area -->
    <div class="button-area">

      <router-link to="/signIn" v-if="!isLoggedIn">
        <template>
          <q-btn flat class="btn-custom">
            <span class="subheading-2 bold normal" to="/singIn">Entrar</span>
          </q-btn>
        </template>
      </router-link>

      <router-link to="/profile" v-if="isLoggedIn">
        <template>
          <q-btn flat class="btn-custom">
            <span class="subheading-2 bold normal" to="/singIn">Perfil</span>
          </q-btn>
        </template>
      </router-link>

    </div>
    <!-- end button area -->

    <!-- start map -->
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

        <l-control-zoom v-if="handleResize()" position="bottomright" ></l-control-zoom>

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
    <!-- end map -->

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
      loggedIn: false,
      opemNav: false,
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
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
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
  computed: {
    isLoggedIn() {
      if (this.$store.getters.loggedIn) {
        return true;
      }
      return false;
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

  @media screen and (max-width: 1200px) {
    display: none;
  }
}

// -------------------------------------- nav-menu for phone -------------------
.nav {
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

.button-area {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 2;
  overflow: hidden;

  @include for-phone-only {
    display: none;
  }
}

.btn-custom {
  box-shadow: none;
  width: 120px;
  height: 45px;
  border-radius: 0px;
  background-color: black;

  span {
    font-family: 'Helvetica';
    font-weight: 700;
    font-size: 1.025rem;
    color: white;
  }
}

.normal {
  text-transform: none;
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
