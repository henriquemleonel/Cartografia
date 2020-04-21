<template>
  <div class="container">

    <div class="content row no-wrap">

      <div class="column">

        <!-- identidada da plataforma e img -->
        <div class="row brand-box">

          <logo-card class="logo" :blackMode="false"/>

          <div class="user-img">
            <img src="../assets/statics/avatar01.jpg" style="width: 200px; height: 200px;"/>
          </div>

        </div>

        <!-- informaçoes do usuário (editáveis) -->
        <div class="user-info" >

          <user-card
            class="profile-card"
            :info="getUser"
            v-on:callEditInfo="showEditInfo()"
          />

        </div>

      </div>

      <!-- pin -->
      <div class="pin">

        <pin-profile :info="getPinUser"/>

      </div>

      <!-- evento (inserção/edição) -->
      <div class="event">
        <event-profile />
      </div>

      <!--  tabela de eventos -->
      <div class="events">
        <span>meus eventos</span>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
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
      return this.$store.state.currentUser;
    },
    getPinUser() {
      return this.$store.state.currentUser.infoPin;
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
  font-family: 'Helvetica-Bold';
  box-sizing: border-box;
}

.container {
  display: flex;
  // justify-content: center;
  align-items: flex-start;
  border-radius: 0px;
  // background-color: #f5f5f5;
  background-color: white;
  padding: 24px;
  width: 100%;
  // height: 100vh;

  @media screen and (max-width: 1200px) {
    align-items: flex-start;
  }
}

.content {
  width: 100%;
  height: 100%;
}

span {
  font-family: 'Helvetica-Normal';
  font-weight: bolder;
  font-size: 2em;
  color: white;
  margin: 16px;
}

// ------------------------- components -----------------------------------------------------

.brand-box {
  height: 200px;
  width: 400px;
  margin: 2px;
  overflow: hidden;

// .logo {
//   // background-color: #C95B40;
// }

// .user-img {
//   background-color: #529E63;
// }

}

.user-info {
  // background-color: #AD3B3B;
  margin: 2px;
}

.pin {
  // background-color: #254C26;
  margin: 2px;
  overflow: hidden;
}

.event {
  height: 100%;
  width: 200px;
  background-color: #BD6A5C;
  margin: 2px;
}

.events {
  height: 200px;
  width: 400px;
  background-color: #DBB753;
  margin: 2px;

  @media screen and (max-width: 1350px) {
  }
}

// .pin, .event, .events {
//   display: none;
// }

// ---------------------------------- others ---------------------------------------------
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
