<template>
  <div class="container">
    <div class="content-center column" v-bind:class="{ 'clip-path' : active }">

      <logo-card class="header" :blackMode="true"/>

      <multicolor-line class="line mg-top8"/>

      <div class="info">

        <div class="column">
          <span class="headline bolder">Cartografia da Cultura - Campo Grande</span>
          <span class="body-2">
            Para o Fórum Municipal de Cultura é muito importante que você, sendo classe artística, produtor cultural,
              instituição ou responsável por estabelecimento, que promova arte e cultura na cidade, participe desta plataforma.
              A cartografia da cultura é uma maneira de dar voz e visibilidade a todos que produzem arte e cultura, sem hierarquias
              e com transparência.
          </span>
        </div>

        <div class="mg-top8">
          <span class="headline bold">O cadastro permitirá:</span>
        </div>

        <div class="context column">
          <span class="headline-3 bold">- mapa</span>
          <span class="body-2">
            Adicionar um pin no mapa (sua localização e informações que inserir serão vistos por todos).
            Cada cadastro permitirá que você insira um pin.
          </span>
        </div>

        <div class="context column">
          <span class="headline-3 bold">- agenda</span>
          <span class="body-2">
            Inserir na agenda os eventos que você irá participar ou produzir em Campo Grande. Além de ser mais um local de divulgação
            do seu trabalho, o visitante ao acessar a plataforma, poderá visualizar os eventos que acontecerão nos próximos dias, reunidos num só lugar.
          </span>
        </div>

        <div class="context column">
          <span class="headline-3 bold">- diálogo</span>
          <span class="body-2">
            Propor ou participar de debates que acontecem online, proposto pelo Fórum Municipal de Cultura ou pelos participantes, entre produtores
            artísticos e culturais da cidade.
          </span>
        </div>

      </div>

      <div class="form column">
        <span class="headline bolder">Insira suas informações:</span>

        <q-input dense square outlined class="input" v-model="name" label="Nome" />
        <q-input dense square outlined class="input" v-model="email" label="Email" />
        <q-input dense square outlined class="input" v-model="confirmEmail" label="Confirme seu Email" />

        <div class="row" style="justify-content: space-between">
          <q-input dense square outlined class="input" v-model="password" label="Senha" />
          <q-input dense square outlined class="input" v-model="confirmPassword" label="Confirme sua senha" />
        </div>

      </div>

      <div class="category column">

        <span class="headline bold">Identifique sua categoria</span>
        <span class="body-2">(A categoria escolhida aparecerá no mapa quando você criar seu pin.
          Escolha sabiamente, não será possível mudar posteriormente).</span>

        <div class="list">
          <q-list v-for="item in category" :key="item.category">

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

              <q-item-section class="body-2 bolder"> {{ item.category }} </q-item-section>
            </q-item>

          </q-list>

        </div>

      </div>

      <div class="actions">

        <div class="terms row">

          <q-checkbox v-model="terms" color="green-10"  true-value="item.category"/>
          <span class="body-2">Eu li e concordo com os
            <a class="link" href=""><strong>Termos de Uso</strong></a>
            e <a class="link" href="#"><strong>Privacidade.</strong></a>
          </span>

        </div>

        <div class="btn-field row">
          <!-- <q-btn class="btn-cancel">
            <span class="span-btn-cancel">Num quero</span>
          </q-btn> -->
          <q-btn flat class="btn-primary btn" color="black">
            <span class="span-btn">Concluir Cadastro</span>
          </q-btn>
        </div>

      </div>

      <div class="whitespace"></div>

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

@import '../styles/variables.scss';
@import '../styles/mixins.scss';

* {
  font-family: Helvetica, 'Roboto Mono';
  box-sizing: border-box;
}

.content-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  // border: 2px solid $f;
  padding: 32px;
  //clip-path: circle(30px at 90% 40px);
  z-index: 0;
  align-items: flex-start;
}

.line {
  margin-top: 32px;
  width: 100%;
}

.info, .form, .terms, .category, .actions {
  margin-top: 16px;
}

.btn-field, .list {
  margin-top: 8px;
}

.form {
  width: 100%;
}

.terms {
  align-items: center;
  margin-left: -8px;
}

.headline {
  margin-bottom: 8px;
}

.input {
  margin-bottom: 8px;
  font-size: 12px;
  min-width: 49%;
  font-family: 'Courier New', Courier, monospace;
}

.context {
  margin-top: 8px;
  margin-left: 16px;
}

// .body, .line, .form {
//   width: 600px;
// }

.body-2 {
  text-align: justify;
  font-family: 'Courier New', Courier, monospace;
}

.link {
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-family: 'Courier New', Courier, monospace;
}

.btn {
  box-shadow: none;
  background-color: black;
  border-radius: 0px;
  height: 50px;
  margin-top: 32px;

  &:hover {
    transform: scale(50%);
  }
}

.btn:hover {
  transform: scale(1.05);
  transition: all 0.2s linear;
}

.span-btn {
  font-family: Helvetica, 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 3px;
  color: white;
}

.whitespace {
  height: 150px;
}

.clip-path {
  background-color: pink;
  clip-path: circle(100%);
  -webkit-transition: -webkit-clip-path .6s ease-out;
  transition: -webkit-clip-path .6s ease-out;
}

</style>
