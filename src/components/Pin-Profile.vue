<template>

  <div class="box" :style="{ 'background-color' : background }">

    <div class="first" v-if="step==0" :class="{ 'active' : active }">

        <div class="header column">

          <span class="title-1 bolder line-h16">Adicionar Pin</span>

        </div>

        <q-btn flat class="reset-btn btn" ref="btnFirst" @click="firstEdit()">
          <span class="body2 bolder">+</span>
        </q-btn>

    </div>

    <div class="edit" v-if="step==1">

      <div class="input-content">

        <span class="body-2 bolder">Edite seu Pin</span>

        <!-- pin name -->
        <div class="column mg-top16">
          <span class="subheading-2">nome do pin</span>
          <q-input
            class="input"
            dense
            v-model="name"
            input-class="text-white"
            color="white"/>
        </div>

        <!-- email -->
        <div class="column mg-top8">
          <span class="subheading-2">email</span>
          <q-input
            class="input"
            dense
            v-model="email"
            type="email"
            input-class="text-white"
            color="white"
          />
        </div>

        <!-- phone -->
        <div class="column mg-top8">
          <span class="subheading-2">telefone</span>
          <q-input class="input" dense v-model="phone" type="tel" mask="(##) ##### - ####" input-class="text-white" color="white"/>
        </div>

        <!-- address -->
        <div class="column mg-top8">
          <span class="subheading-2">rua - logradouro</span>
          <q-input class="input" dense v-model="street" input-class="text-white" color="white"/>
        </div>

        <div class="column mg-top8">
          <span class="subheading-2">bairro</span>
          <q-input class="input" dense v-model="neighborhood" input-class="text-white" color="white"/>
        </div>

        <!-- number & cep -->
        <div class="row justify-between mg-top8">

          <div class="column">
            <span class="subheading-2">número</span>
            <q-input class="input2" dense v-model="number" input-class="text-white" color="white"/>
          </div>

          <div class="column">
            <span class="subheading-2">cep</span>
            <q-input class="input2" dense v-model="cep" input-class="text-white" color="white"/>
          </div>

        </div>

        <!-- description -->
        <div class="column mg-top8">
          <span class="subheading-2">descrição</span>

          <q-input
            autogrow
            class="f-size"
            dense
            v-model="description"
            hint="Máximo 2000 caracteres"
            :rules="[ val => val.length <= 2000 || 'Máximo de 2000 caracteres']"
            input-class="text-white"
            color="white"/>

        </div>

        <!-- links -->
        <div class="column mg-top8">
          <span class="subheading-2">link</span>
          <q-input class="input" dense v-model="linkPagina" input-class="text-white" color="white"/>
        </div>

        <div class="column mg-top8">
          <span class="subheading-2">facebook</span>
          <q-input class="input" dense v-model="linkFacebook" input-class="text-white" color="white"/>
        </div>

        <div class="column mg-top8">
          <span class="subheading-2">instagram</span>
          <q-input class="input" dense v-model="linkInstagram" input-class="text-white" color="white"/>
        </div>

        <!-- file picker -->
        <q-file
          label="Insira uma imagem"
          v-model="file"
          :max-file-size="2048"
          counter
          color="white"
          input-class="text-white"
        >
          <template v-slot:prepend>
            <!-- <q-icon name="attach_file" /> -->
          </template>
        </q-file>

      </div>

      <!-- actions edit -->
      <div class="mg-top32" align="right">

        <q-btn class="mg-right8" flat color="white" @click="cancelEdit()">
          <span class="caption">Cancelar</span>
        </q-btn>

        <q-btn outline color="white" @click="confirmEdit()">
          <span class="caption">Finalizar</span>
        </q-btn>

      </div>

    </div>

    <div class="ready" v-if="step==2">

      <div class="context column">
        <span class="title-1 bolder line-h16"> {{ this.name }} </span>
        <!-- <span class="body-2 bold mg-n-8"> {{ category.value.toLowerCase() }} </span> -->

        <span class="body-2 bold spaced-32"> {{ this.description }} </span>

        <div class="row spaced-16">
          <span class="body-2 bold"> {{ this.street }} - {{ this.neighborhood }} - {{ this.number }} </span>
        </div>

        <span class="body-2 bold spaced-16"> {{ phoneMask }} </span>

        <div class="links row mg-top16">
          <a class="link caption bold" target="blank" :href="this.linkFacebook">.facebook</a>
          <a class="link caption bold mg-left16" target="blank" :href="this.linkInstagram">.instagram</a>
          <a class="link caption bold mg-left16" target="blank" :href="this.linkPagina">.link</a>
        </div>

        <!-- <div class="img-box">
          <q-img :src="imgUrl" :ratio="16/9" placeholder-src="statics/avatar01.jpg"/>
        </div> -->

      </div>

      <div class="action">
        <q-btn class="btn-edit" flat color="white" @click="reEdit()">
          <span class="overline bold">editar</span>
        </q-btn>
      </div>

    </div>

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
      step: 0,
      lastStep: '',
      active: false,
      background: this.bgColor,
      name: '',
      email: '',
      phone: '',
      street: '',
      neighborhood: '',
      streetNumber: '',
      city: '',
      cep: '',
      description: '',
      links: '',
      linkPagina: '',
      linkInstagram: '',
      linkFacebook: '',
      file: null,
      imgUrl: '',
    };
  },
  props: {
    info: {
      type: Object,
      default: null,
    },
    bgColor: {
      type: String,
      default: '#254C26',
    },
  },
  created() {
    this.fetchData();
  },
  computed: {
    phoneMask() {
      let str = '';
      const p = this.phone;
      const ddd = p.slice(0, 2);
      const prefix = p.slice(2, 7);
      const sufix = p.slice(7, 11);
      str = str.concat(ddd).concat(' ').concat(prefix).concat(' ')
        .concat(sufix);
      console.log(str);
      return str;
    },
  },
  methods: {
    fetchData() {
      if (this.info !== null) {
        this.name = this.info.name;
        this.email = this.info.email;
        this.phone = this.info.phone;
        this.street = this.info.address.street;
        this.number = this.info.address.number;
        this.neighborhood = this.info.address.neighborhood;
        this.city = this.info.address.city;
        this.cep = this.info.address.cep;
        this.description = this.info.description;
        this.linkPagina = this.info.links.otherLink;
        this.linkFacebook = this.info.links.linkF;
        this.linkInstagram = this.info.links.linkIG;
        this.step = 2;
        this.lastStep = 2;
      }
    },
    firstEdit() {
      if (this.step === 0) {
        this.lastStep = 0;
        // this.active = true;
        const a = this;
        setTimeout(() => { a.step = 1; }, 1000);
        console.log('iniciando primeira edição', this.lastStep, this.step);
      }
    },
    reEdit() {
      this.lastStep = 2;
      const a = this;
      setTimeout(() => { a.step = 1; }, 1000);
      console.log('reeditando', this.lastStep, this.step);
    },
    cancelEdit() {
      console.log('cancelando', this.lastStep, this.step);
      if (this.lastStep === 0) {
        const a = this;
        setTimeout(() => { a.step = 0; }, 1000);
        this.lastStep = 1;
        console.log('cancelando primeira edição', this.lastStep);
      }
      if (this.lastStep === 2) {
        const a = this;
        setTimeout(() => { a.step = 2; }, 1000);
        console.log('cancelando reedição');
        this.lastStep = 2;
      }
    },
    confirmEdit() {
      // this.editFinished = true;
      // this.name = this.info.name;
      // this.email = this.info.email;
      // this.phone = this.info.phone;
      // this.street = this.info.address.street;
      // this.neighborhood = this.info.address.neighborhood;
      // this.streetNumber = this.info.address.number;
      // this.cep = this.info.address.cep;
      // this.description = this.info.description;
      // this.links = this.info.links;
      // this.linkPagina = this.info.links.otherLink;
      // this.linkInstagram = this.info.links.linkI;
      // this.linkFacebook = this.info.links.linkF;
      // this.img = this.info.imgUrl;
      this.lastStep = 1;
      const a = this;
      setTimeout(() => { a.step = 2; }, 1000);
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
}

.input {
  width: 100%;
  // height: 40px;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: -8px;
}

.input2 {
  width: 140px;
  // height: 35px;
  font-size: 1.2rem;
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
