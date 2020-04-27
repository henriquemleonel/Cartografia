<template>

  <div class="box">

    <div class="first" v-if="showThisShort" :style="{ 'background-color': background }">

        <div class="header column">

          <span class="title-2 bolder line-h16"> {{ name }} </span>

          <div class="row spaced-32">
            <span class="body-2 bold"> {{ date }} </span>
            <!-- <span class="body-2 bold"> {{ date.year }} </span> -->
            <span class="body-2 bold mg-left16"> {{ hour }} </span>
          </div>

          <!-- <div class="column spaced-16">
            <span class="body-2 bold"> {{ this.item.street }} - {{ this.item.number }} </span>
            <span class="body-2 bold"> {{ this.item.neighborhood }} </span>
          </div> -->

        </div>

        <q-btn flat class="reset-btn btn" ref="btnFirst" @click="editThisShort()">
          <span class="body2 bolder">+</span>
        </q-btn>

    </div>

  </div>

</template>

<script>

// import { gsap, TweenMax, Expo } from 'gsap/all';

// gsap.registerPlugin(TweenMax, Expo);

export default {
  name: 'short-Event',
  components: {
  },
  data() {
    return {
      id: this.item.id,
      showThisShort: true,
      background: this.item.bg,
      name: this.item.name,
      date: this.item.date,
      hour: this.item.hour,
    };
  },
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  computed: {
  },
  methods: {
    editThisShort() {
      this.$emit('eventToEdit', this.id);
      console.log('shortEvent to edit : (id)', this.id); // emitindo que o shortEvent a ser editado
      // this.showThisShort = false;
    },
    expand() {
      this.state = !this.state;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

* {
  font-family: 'Helvetica';
  color: white;
}

.box {
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.active {
  // width: 350px;
  // height: 100%;
  // transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  animation: expand 1s linear;
}

@keyframes expand {
  0%{
    width: 200px;
    height: 200px;
  }
  50% {
    width: 350px;
  }
  100% {
    width: 350px;
    height: 100%;
  }
}

.editMode {
  height: 100%;
  width: 350px !important;
}

.first {
  height: 200px;
  width: 200px;
  padding: 16px;
  overflow: hidden;
  position: relative;
  // border: 2px solid white;;
  background-color: #b8cad4;

  .header {
    align-self: center;
    position: relative;
  }

  .btn {
    height: 40px;
    width: 40px;
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
}

.edit, .ready {
  width: 350px;
  height: 100%;
}

.edit {
  align-items: center;
  padding: 24px;
  transition: 1s expand linear;
}

.input {
  width: 100%;
  // height: 40px;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 4px;
}

.input2 {
  width: 140px;
  // height: 35px;
  font-size: 1rem;
}

.f-size {
  font-size: 1rem;
}

// .edit {
//   background-color: #E6B545;
// }

.ready {
  padding: 32px;
  height: 100%;
  position: relative;

  .context {
    position: relative;
  }

  .action {
    position: absolute;
    top: 16px;
    right: 16px;

    .btn-edit {
      height: 30px;
      width: 60px;
      border-radius: 0px;
    }
  }
}

.link {
  text-decoration: none;
  color: white;
}

.img-box {
  width: 100%;
}

.roll-out {
  animation: roll-out 1.5s linear;
}

.roll-in {
  animation: roll-out 1s linear reverse;
}


@keyframes roll-out {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(0.6);
  }
  75% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(0.6);
  }
}

span {
  color: white;
}

</style>
