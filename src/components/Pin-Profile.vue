<template>

  <div class="box" :class="{ 'active' : isActive }" :style="{ 'background-color' : background }">

    <div class="first" v-if="initialState">

        <div class="header column" v-bind:class="{ 'roll-out' : editMode }">

          <span class="title-1 bolder line-h16">Adicionar Pin</span>

        </div>

        <q-btn flat class="reset-btn btn" ref="btnFirst" @click="showEdit()">
          <span class="body2 bolder">+</span>
        </q-btn>

    </div>

    <div class="edit" v-if="editMode">

      <div class="input-container">
        <!-- pin name -->
        <q-input
          ref="input"
          class="input mg-top32"
          v-model="name"
          :error="isValid"
          label="Nome do Pin"
          input-class="text-white"
          color="white"/>


        <!-- email -->
        <q-input
          class="input mg-top16"
          v-model="email"
          :error="!isValid"
          type="email"
          label="Email"
          input-class="text-white"
          color="white"
        />


        <!-- phone -->
        <q-input class="input mg-top16" v-model="phone" type="tel" mask="(##) #### - ####" label="Telefone" input-class="text-white" color="white"/>


        <!-- address -->
        <div class="input-field mg-top8">
          <!-- <input class="input" type="text" v-model="rua" required/> -->
          <label class="input-label body-2 bolder"> Rua / Logradouro </label>
        </div>

        <!-- <input class="input" v-model="streetNumber" label="Número" color="white"/> -->
        <div class="input-field mg-top8">
          <!-- <input class="input" type="number" v-model="streetNumber" mask="'##/##/####'" required/> -->
          <label class="input-label body-2 bolder"> Telefone </label>
        </div>

        <q-input v-model="streetNumber" label="Standard" input-class="text-white" color="white"/>

        <!-- <input class="input" v-model="neighborhood" label="Bairro" color="white"/> -->

        <!-- cep -->
        <!-- <input class="input" v-model="cep" label="Cep" color="white"/> -->

        <!-- description -->
        <!-- <input autogrow class="input" v-model="description" label="Descrição" color="white"/> -->

        <!-- link pagina -->
        <!-- <input class="input" v-model="linkPagina" label="link para página" color="white"/> -->

        <!-- link instagram -->
        <!-- <input class="input" v-model="linkInstagram" label="Instagram (Opcional)" color="white"/> -->

        <!-- link facebook -->
        <!-- <input class="input" v-model="linkFacebook" label="Facebook (Opcional)" color="white"/> -->

        <!-- <q-file color="white" v-model="model" label="Insira uma imagem">
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file> -->

      </div>

      <!-- <q-separator class="mg-top32"/> -->

      <!-- <div  class="actions" align="right">

        <q-btn flat color="black" @click="confirmEdit()">Finalizar</q-btn>
        <q-btn flat @click="opemBoxPin=false">Cancelar</q-btn>

      </div> -->

    </div>

    <!-- <div class="ready" :style="{ 'background-color' : background }">

      <div class="context column">
        <span class="title-1 bolder line-h16"> {{ name }} </span>
        <span class="body-2 bold mg-n-8"> {{ category.value.toLowerCase() }} </span>

        <span class="body-2 bold spaced-32"> {{ description }} </span>

        <div class="row spaced-16">
          <span class="body-2 bold"> {{ street }} - {{ neighborhood }} </span>
        </div>

        <div class="links row mg-top16">
          <a class=" link caption bold" target="blank" :href="links.faceLink">.facebook</a>
          <a class=" link caption bold mg-left16" target="blank" :href="links.instaLink">.instagram</a>
          <a class=" link caption bold mg-left16" target="blank" :href="links.otherLink">.instagram</a>
        </div>

        <div class="img-box">
          <q-img :src="imgUrl" :ratio="16/9" placeholder-src="statics/avatar01.jpg"/>
        </div>

      </div>

    </div> -->

  </div>

</template>

<script>

// import { gsap, TweenMax, Expo } from 'gsap/all';

// gsap.registerPlugin(TweenMax, Expo);

export default {
  name: 'pin-Profile',
  components: {
  },
  data() {
    return {
      valid: true,
      initialState: true,
      isActive: false,
      editMode: false,
      finished: false,
      background: this.bgColor,
      name: '',
      email: '',
      phone: '',
      street: '',
      neighborhood: '',
      streetNumber: '',
      cep: '',
      description: '',
      links: '',
      linkPagina: '',
      linkInstagram: '',
      linkFacebook: '',
      imgUrl: '',
    };
  },
  props: {
    info: {
      type: Object,
    },
    bgColor: {
      type: String,
      default: '#254C26',
    },
  },
  computed: {
  },
  methods: {
    showEdit() {
      this.isActive = true;
      this.initialState = false;
      const vm = this;
      setTimeout(() => { vm.editMode = true; }, 1000);
      // this.editMode = true;
    },
    confirmEdit() {
      this.editFinished = true;
      this.name = this.info.name;
      this.email = this.info.email;
      this.phone = this.info.phone;
      this.street = this.info.address.street;
      this.neighborhood = this.info.address.neighborhood;
      this.streetNumber = this.info.address.number;
      this.cep = this.info.address.cep;
      this.description = this.info.description;
      this.links = this.info.links;
      this.linkPagina = this.info.links.otherLink;
      this.linkInstagram = this.info.links.linkI;
      this.linkFacebook = this.info.links.linkF;
      this.img = this.info.imgUrl;
    },
    expand() {
      this.state = !this.state;
    },
    isValid() {
      return this.model.length <= 3;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

* {
  font-family: 'Helvetica';
}

.box {
  height: 200px;
  width: 200px;
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.active {
  width: 350px;
  height: 800px;
  // transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  animation: expand 1s ease-in-out;
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
    height: 400px;
  }
}

.edtiMode {
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

  .header {
    align-self: center;
    position: relative;
  }

  .btn {
    height: 40px;
    width: 40px;
    position: absolute;
    bottom: 32px;
    right: 32px;
  }
}

.edit, .ready {
  width: 350px;
  height: 100%;
  padding: 16px;
}

.input-container {
  width: 350px;
}

// .edit {
//   background-color: #E6B545;
// }

.ready {
  height: 600px;
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
