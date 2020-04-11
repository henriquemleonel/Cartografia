<template>
  <div class="container">

    <div class="content grid">

      <!-- identidada da plataforma -->
      <div class="logo">
        <logo-card :blackMode="false"/>
      </div>

      <!-- imagem/foto do usuário -->
      <div class="user-img">
        <img src="../assets/statics/avatar01.jpg" style="width: 200px; height: 200px;"/>
      </div>

      <!-- informaçoes do usuário (editáveis) -->
      <div class="user-info" >

        <header-card
          class="profile-card"
          :info="getUser"
          v-on:callEditInfo="showEditInfo()"
        />

      </div>

      <!-- pin -->
      <div class="pin">

        <span>pin</span>
        <!-- <my-pin /> -->

      </div>

      <!-- evento (inserção/edição) -->
      <div class="event">
        <span>adicionar evento</span>
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
  padding: 32px;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 1200px) {
    align-items: flex-start;
  }
}

// .content {

//   // @include for-desktop-up {
//   //   max-width: 1400px;
//   // }
// }

span {
  font-family: 'Helvetica-Normal';
  font-weight: bolder;
  font-size: 2em;
  color: white;
  margin: 16px;
}

// ------------------------- my grid -----------------------------------------------------
.grid {
  display: grid;
  grid-template-columns: 12.5rem 12.5rem 21.875rem 21.875rem 12.5rem;  // 200 200 350 350 200 (px)
  grid-auto-rows: 200px;
  gap: 4px;
}

.logo {
  background-color: #C95B40;
  grid-column: 1/2;
  grid-row: 1/2;
}

.user-img {
  background-color: #529E63;
  grid-column: 2/3;
  grid-row: 1/2;
}

.user-info {
  // background-color: #AD3B3B;
  grid-column: 1/3;
  grid-row: 2/3;
}

.pin {
  background-color: #254C26;
  grid-column: 3/4;
  grid-row: 1/3;
}

.event {
  background-color: #BD6A5C;
  grid-column: 4/5;
  grid-row: 1/2;
}

.events {
  background-color: #DBB753;
  grid-column: 5/6;
  grid-row: 1/3;

  @media screen and (max-width: 1350px) {
    grid-column: 4/5;
    grid-row: 2/3;
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
