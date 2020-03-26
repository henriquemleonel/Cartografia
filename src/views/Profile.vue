<template>
  <div class="content">
    <!-- <q-btn class="outline pulse" filled to="/" text-color="white" style="background-color: transparent; width: 60px; min-height: 150px;
     position: absolute; top: 64px; left: 62px; border: 2px solid white; border-radius: 20px; padding: 10px; z-index: 1;">
      <div class="column space-around" style="height: 100%;">
        <q-icon name="keyboard_arrow_left"></q-icon>
        <span style="writing-mode: vertical-rl; text-orientation: upright; font-size: 18px; font-weight: 800">Mapa</span>
      </div>
    </q-btn> -->

    <div class="container">

      <header class="column" >

        <header-card
          class="profile-card"
          v-bind:name="this.userName"
          v-bind:email="this.userEmail"
          v-bind:password="this.userPassword"
          v-bind:category="this.userCategory"
          v-on:callEditInfo="showEditInfo()"
        />

      </header>

      <div class="context">

        <my-pin />

      </div>

      <footer style="heigth: 250px;"/>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      userName: 'Juliana Trujillo',
      userCategory: 'Cinema e AudioVisual',
      userEmail: 'JulianaTrujillo@email.com',
      userPassword: '**********',
      opemEditInfo: false,
      opemBoxPin: false,
      opemBoxEvent: false,
      addPin: false,
      addEvent: false,
      nomeEvento: '',
      localEvento: '',
      dataEvento: '',
      filter: '',
      myPinName: '',
      myPinEmail: '',
      myPinPhone: '',
      myPinStreet: '',
      myPinStreetNumber: '',
      myPinCep: '',
      myPinDescription: '',
      linkFacebook: '',
      linkInstagram: '',
      linkPagina: '',
    };
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn;
    },
    getUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    // logout() {
    //   this.$store.dispatch('destroyToken')
    //   .then(response => {
    //       this.$router.push({ name: 'Home' })
    //   })
    // },
    // changeColor() {
    //   if(this.className = 'is-blue'){
    //       this.className = 'is-red';
    //   }
    //   else
    //     this.className = 'is-blue';
    // }
    showEditInfo() {
      this.opemEditInfo = !this.opemEditInfo;
    },
  },
};
</script>
<style lang="scss" scoped>

@import '../styles/variables.scss';
@import '../styles/mixins.scss';

* {
  font-family: helvetica;
  box-sizing: border-box;
}

.content {
  border-radius: 0px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.container {
  width: 90%;

  @include for-desktop-up {
    max-width: 1000px;
  }
}

.edit-info {
  height: 0px;
  width: 100%;
  margin-top: 8px;
  background-color: $edit;
  transition: 1.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 1;
}

.active-edit-info {
  height: 50px;
}

// --------------------------------- start container components --------------------------
.context {
  margin-top: 8px;
  width: 100%;
  height: 100%;
  padding: 0px;
  //background-color: $f;
  //border: 1px solid black;

  @include for-desktop-up {
  }
}

</style>
