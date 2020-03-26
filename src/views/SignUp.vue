<template>
  <div class="content">
    <div class="container" v-bind:class="{ 'clip-path' : active }">

      <div class="wrapper">

        <logo-card class="header" :blackMode="true"/>

        <multicolor-line class="line"/>

        <div class="body">

          <span class="body-1">O Cadastro Permitirá:</span>

          <div class="context column">
            <span class="body-large">Mapa</span>
            <span class="body-2">
              Adicionar um pin no mapa (sua localização e informações que inserir serão vistos por todos).
              Para o Fórum Municipal de Cultura é muito importante que você, sendo classe artística, produtor cultural,
              instituição ou responsável por estabelecimento, que promova arte e cultura na cidade, participe desta plataforma.
              A cartografia da cultura é uma maneira de dar voz e visibilidade a todos que produzem arte e cultura, sem hierarquias
              e com transparência.
              Cada cadastro permitirá que você insira um pin.
            </span>
          </div>

          <div class="context column">
            <span class="body-large">Agenda</span>
            <span class="body-2">
              Inserir na agenda os eventos que você irá participar ou produzir em Campo Grande. Além de ser mais um local de divulgação
              do seu trabalho, o visitante ao acessar a plataforma, poderá visualizar os eventos que acontecerão nos próximos dias, reunidos num só lugar.
            </span>
          </div>

          <div class="context column">
            <span class="body-large">Diálogo</span>
            <span class="body-2">
              Propor ou participar de debates que acontecem online, proposto pelo Fórum Municipal de Cultura ou pelos participantes, entre produtores
              artísticos e culturais da cidade.
            </span>
          </div>

        </div>

        <div class="form column">

          <q-input outlined class="input" v-model="name" label="Nome" />
          <q-input outlined class="input" v-model="email" label="Email" />
          <q-input outlined class="input" v-model="confirmEmail" label="Confirme seu Email" />

          <div class="row">
            <q-input outlined class="input" v-model="password" label="Senha" />
            <q-input outlined class="input" v-model="confirmPassword" label="Confirme sua senha" />
          </div>

        </div>

        <div class="category column">

          <span class="body-large">Identificação ou Área de atuação</span>
          <span class="body-2">(A categoria escolhida aparecerá no mapa quando você criar seu pin.
            Escolha sabiamente, não será possível mudar posteriormente.)</span>

          <q-list class="list" v-for="item in category" :key="item.category">

            <q-item clickable @click="emit(item.category)">

              <q-item-section avatar>

                <q-icon color="pink" size="1rem">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-pin"
                    class="svg-inline--fa fa-map-pin fa-w-9" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512">
                    <path fill="currentColor" d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97
                    0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47
                    144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z">
                    </path>
                  </svg>

                </q-icon>

              </q-item-section>

              <q-item-section class="body-2 bold"> {{ item.category }} </q-item-section>
            </q-item>

          </q-list>

        </div>

        <div class="actions">

          <div class="row">

            <q-checkbox v-model="terms" color="teal"  true-value="item.category"/>
            <span class="terms">Eu li e concordo com os
              <a id="link" href="#"><strong>Termos de Uso</strong></a>
              e <a id="link" href="#"><strong>Privacidade</strong></a>
            </span>

          </div>

          <div class="btn-field row">
            <!-- <q-btn class="btn-cancel">
              <span class="span-btn-cancel">Num quero</span>
            </q-btn> -->
            <q-btn class="btn-finalizar" color="black">
              <span class="span-btn">Concluir Cadastro</span>
            </q-btn>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'About',
  data() {
    return {
      logou: false,
      name: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      selected: null,
      active: false,
      terms: false,
      category: [
        { category: 'Dança, teatro e circo', path: '' },
        { category: 'Cultural e escultura', path: '' },
        { category: 'Arte Urbana', path: '' },
        { category: 'Arte Digital', path: '' },
        { category: 'Cultura Popular', path: '' },
        { category: 'Museologia e preservação', path: '' },
        { category: 'Artesanato', path: '' },
      ],
    };
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn;
    },
  },
  methods: {
    emit(el) {
      this.selected = el;
      this.active = true;
      console.log(el);
      console.log('selected', this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>

// @import '../styles/variables.scss';
@import '../styles/mixins.scss';

* {
  font-family: Helvetica, 'Roboto Mono';
  box-sizing: border-box;
}

.container {
  // border: 2px solid $f;
  padding: 32px;
  //clip-path: circle(30px at 90% 40px);
  z-index: 0;
}

.wrapper {
  z-index: 1;
}

.line {
  margin-top: 8px;
}

.clip-path {
  background-color: pink;
  clip-path: circle(100%);
  -webkit-transition: -webkit-clip-path .6s ease-out;
  transition: -webkit-clip-path .6s ease-out;
}

.body {
  width: 600px;
}

#link {
  color: black;
  text-decoration: none;
}

</style>
