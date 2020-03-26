<template>

  <div class="box">

    <div class="header expansion-off row" :class="{ 'expansion-on' : state }" @click="expand()">

        <!-- <q-icon icon="marker" color="yellow" size="20px"/> -->
        <i class="fas fa-map-marker"></i>
        <span> Meu Pin  </span>

    </div>

    <div class="card" v-if="this.state === true">
          <div>
            <div class="title">Faça parte da Cartografia</div>
          </div>

          <div class="card-section">

            <span class="subtitle"> Este pin te localiza no mapa com os dados inseridos abaixo</span>

            <div class="column margin-top8">
              <!-- <span class="input-info">Nome do Pin</span> -->
              <q-input outlined class="input" v-model="myPinName" label="Nome destinado ao pin" color="white"/>

              <!-- <span class="input-info">Email </span> -->
              <q-input outlined class="input" v-model="myPinEmail" label="Email para contato" color="white"/>

              <!-- <span class="input-info">Telefone </span> -->
              <q-input outlined class="input" v-model="myPinPhone" label="Telefone para contato" color="white"/>

              <!-- <span class="input-info">Rua </span> -->
              <q-input outlined class="input" v-model="myPinStreet" label="Rua" color="white"/>

              <!-- <span class="input-info">Número </span> -->
              <q-input outlined class="input" v-model="myPinStreetNumber" label="Número" color="white"/>

              <!-- <span class="input-info">Cep </span> -->
              <q-input outlined class="input" v-model="myPinCep" label="Cep" color="white"/>

              <span class="input-info margin-top8">Descrição* (até 300 caracteres) </span>
              <q-input outlined type="textarea" class="input" v-model="myPinDescription" color="white"/>

            </div>

            <div class="row margin-top8">
              <q-icon name="fas fa-link"/>
              <div class="column">
                <span class="input-info">Página (opcional) </span>
                <q-input outlined class="input" v-model="linkPagina" color="white"/>
              </div>
            </div>

            <div class="row margin-top8">
              <q-icon name="fab fa-instagram"/>
              <div class="column">
                <!-- <span class="input-info">Instagram (opcional) </span> -->
                <q-input outlined class="input" v-model="linkInstagram" label="Instagram (Opcional)" color="white"/>
              </div>
            </div>

            <div class="row margin-top8">
              <q-icon name="fab fa-facebook"/>
              <div class="column">
                <!-- <span class="input-info">Facebook (opcional) </span> -->
                <q-input outlined class="input" v-model="linkFacebook" label="Facebook (Opcional)" color="white"/>
              </div>
            </div>

          </div>

          <q-separator style="margin-top: 50px;"/>
          <div  class="actions" align="right">
            <q-btn color="black" v-if="opemBoxPin" >Finalizar</q-btn>
            <q-btn v-if="opemBoxPin" @click="opemBoxPin=false">Cancelar</q-btn>
          </div>
        </div>

  </div>

</template>

<script>

export default {
  name: '',
  components: {
  },
  data() {
    return {
      state: false,
      userName: 'Juliana Trujillo',
      userCategory: 'Cinema e AudioVisual',
      userEmail: 'JulianaTrujillo@email.com',
      userPassword: 'senha legal',
      toggleState: 'one',
      opemBoxPin: false,
      addPin: false,
      opemBoxEvent: false,
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
  methods: {
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
  font-family: Helvetica, sans-serif;
}

.expansion-off {
  //border: 1px solid black;
  height: 50px;
  width: 220px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  background-color: yellow;
}

.expansion-on {
  width: 400px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.bg-active {
  background-color: yellow !important;
}

.card {
  max-width: 400px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  background-color: yellow;

  .title {
    font-size: 25px;
  }
}

.column, .row {
  align-items: center;
}

.input {
  margin-top: 8px;
  width: 90%;
}

</style>
