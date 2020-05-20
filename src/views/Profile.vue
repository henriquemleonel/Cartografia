<template>
  <div class="app-page">

    <div class="content row no-wrap">

      <div class="column">

        <!-- identidada da plataforma e img -->
        <div class="row brand-box">

          <logo-card class="logo" :blackMode="true"/>

          <div class="user-img">
            <img src="../assets/statics/avatar01.jpg" style="width: 200px; height: 200px;"/>
          </div>

        </div>

        <!-- informaçoes do usuário (editáveis) -->
        <div class="user-info">

          <user-card
            class="profile-card"
            :info="getUser"
            v-on:emitLogout="logout()"
          />

        </div>

      </div>

      <!-- pin -->
      <div class="pin">

        <user-pin v-if="!1"/>
        <pin-teste :fetch="getPinStatus" :item="getPinUser"/>

      </div>

      <!-- evento (inserção/edição) -->
      <div class="event">
        <event-form/>
      </div>

      <!--  tabela de eventos -->
      <div class="events">

        <q-scroll-area
          class="scrollArea"
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
        >

          <div class="event-item" v-for="item in getMyEvents" :key="item.id">
            <short-event :item="item"/>
            <!-- <span> {{ item.newEvent }} </span> -->
          </div>

        </q-scroll-area>
      </div>

    </div>

    <div class="show column">
      <!-- <q-btn outlined @click="login()" label="login" style="heigth: 30px; width: 60px; background-color: white;"/> -->
      <!-- <q-btn outlined @click="logout()" label="logout" style="heigth: 30px; width: 60px; background-color: white;"/> -->
      <!-- show pin status and data -->
      <!-- <span class="status"> pin:store:status = {{ userPinStatus }} </span> -->
      <!-- <span class="pin-status"> {{ getPinUser }} </span> -->

      <!-- show my events lenght and data -->
      <!-- <span class="status"> store -> token = {{ getStateToken }} <br> </span> -->
      <!-- <span class="status"> store -> key = {{ getKeyToken }} <br> </span> -->
      <!-- <span class="status"> myEvents size = {{ myEventsSize }} <br> </span> -->
      <!-- <span class="pin-status"> {{ getMyEvents }} </span> -->
    </div>

  </div>
</template>

<script>
import UserCard from '../components/User-Card.vue';
import UserPin from '../components/Pin-Profile.vue';
import EventForm from '../components/Event-Profile.vue';
import ShortEvent from '../components/Short-Event.vue';
import PinTeste from '../components/pinTeste.vue';

export default {
  name: 'Profile',
  components: {
    UserCard,
    UserPin,
    EventForm,
    ShortEvent,
    PinTeste,
  },
  data() {
    return {
      thumbStyle: {
        right: '0px',
        borderRadius: '0px',
        backgroundColor: '#111111',
        width: '9px',
        heigth: '5px',
        opacity: 0.75,
      },
      barStyle: {
        right: '0px',
        borderRadius: '0px',
        backgroundColor: '#f5f5f5',
        width: '9px',
        opacity: 0.2,
      },
    };
  },
  computed: {
    signedIn() {
      return this.$store.getters.signedIn;
    },
    // props de user-card
    getUser() {
      return this.$store.getters.currentUser;
    },
    // props de pin-profile
    getPinUser() {
      return this.$store.getters.myPin;
    },
    getPinStatus() {
      return this.$store.getters.pinCompleted; // verifica se o usuário possui um pin
    },
    // show infos from store
    myEventsSize() {
      return this.$store.state.myEvents.length;
    },
    getMyEvents() {
      const showMyEvents = this.$store.getters.myEvents;
      return showMyEvents;
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
    setNewkey() {
      this.$store.dispatch('setKey');
      console.log('setNewKey');
    },
    logout() {
      this.$store.dispatch('destroyToken');
      console.log('profile : try logout');
    },
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

.show {
  position: absolute;
  top: 500px;
  left: 24px;
  // height: 200px;
  width: 400px;
  background-color: #000;

  .status {
    color: red;
    font-size: 0.9rem;
  }

  .pin-status {
    color: white;
    font-size: 0.9rem;
  }
}

.app-page {
  display: flex;
  // justify-content: center;
  align-items: flex-start;
  border-radius: 0px;
  // background-color: #f5f5f5;
  background-color: white;
  padding: 24px;
  width: 100%;
  // height: 100vh;

  @media screen and (min-width: 1200px) {
    align-items: center;
    justify-content: center;
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
  // width: 100%;
  // max-width: 350px;
  margin: 2px;
  overflow: hidden;
}

.event {
  // height: 100%;
  // width: 100%;
  // background-color: #BD6A5C;
  margin: 2px;
}

.events {
  height: 100%;
  // max-width: 410px;
  margin: 2px;
  position: relative;

  .scrollArea {
    height: 600px;
    width: 212px;
  }

  .event-item {
    width: 200px;
    height: 200px;
    margin-bottom: 4px;
    margin-right: 4px;
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
