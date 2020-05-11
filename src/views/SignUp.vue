<template>
  <div class="container">
    <div id="content" class="content-center column" :class="{ 'bg-change' : active }">

      <!-- identidade da plataforma (selo) -->
      <logo-card class="header" :blackMode="true"/>

      <!-- color line -->
      <multicolor-line class="line mg-top8"/>

      <!-- informações da plataforma -->
      <div class="info">

        <div class="column mg-top16">
          <span class="headline bolder">Cartografia da Cultura - Campo Grande</span>
          <span class="body-2">
            Para o Fórum Municipal de Cultura é muito importante que você, sendo classe artística, produtor cultural,
              instituição ou responsável por estabelecimento, que promova arte e cultura na cidade, participe desta plataforma.
              A cartografia da cultura é uma maneira de dar voz e visibilidade a todos que produzem arte e cultura, sem hierarquias
              e com transparência.
          </span>
        </div>

        <div class="whitespace"></div>

        <div class="">
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

      <div class="whitespace"></div>

      <!-- formulário de cadastro -->
      <div class="form column">
        <span class="headline bolder">Insira suas informações:</span>

        <div class="row mg-top16" style="justify-content: space-between">

          <q-input
            class="input"
            ref="firstName"
            dense
            square
            outlined
            v-model="firstName"
            label="Nome*"
          />

          <q-input
            class="input"
            ref="lastName"
            dense
            square
            outlined
            v-model="lastName"
            label="Sobrenome*"
          />

        </div>

        <q-input
          class="input"
          ref="email"
          dense
          square
          outlined
          v-model="email"
          label="email*"
        />

        <q-input
          class="input"
          dense
          square
          outlined
          v-model="confirmEmail"
          label="confirme o email*"
        />

        <div class="row" style="justify-content: space-between">

          <q-input
            class="input"
            ref="password"
            dense
            square
            outlined
            v-model="password"
            label="senha*"
          />

          <q-input
            class="input"
            dense
            square
            outlined
            v-model="confirmPassword"
            label="confirme a senha*"
          />

        </div>

      </div>

      <div class="whitespace"></div>

      <!-- selecionar categoria -->
      <div id="target" class="category column">

        <span class="headline bold">Identifique sua categoria</span>
        <span class="body-2">(A categoria escolhida aparecerá no mapa quando você criar seu pin.
          Escolha sabiamente, não será possível mudar posteriormente).</span>

        <div class="list">
          <q-list id="item" v-for="item in options" :key="item.value">

            <q-item clickable @click="emit(item)">

              <q-item-section avatar>

                <!-- iconId -1 : index of array of icons (0 a 17) -->
                <icon-base :iconId="item.value -1" width="20" :setWhite="active" />

              </q-item-section>

              <q-item-section :id="item.value" class="body-2 bolder" :class="{ 'white' : active }"> {{ item.label }} </q-item-section>

            </q-item>

          </q-list>

        </div>

      </div>

      <!-- ações -->
      <div class="actions">

        <div class="terms row">

          <q-checkbox v-model="terms" color="black"  true-value="item.category"/>

          <span class="body-2 altoc">Eu li e concordo com os
              <router-link class="link" :to="{ path: '/terms', hash: '#terms'}">
                <span class="bolder" :class="{ white: active}">Termos de Uso</span>
              </router-link>
              e
              <router-link class="link" :to="{ path: '/terms', hash: '#privacity'}">
                <span class="bolder" :class="{ white: active}">Privacidade.</span>
              </router-link>

          </span>

        </div>

        <div class="erro-field mg-top16" v-if="errorMessage !== null">
          <span id="error" class="error-msg">
            {{ this.errorMessage }}
          </span>
        </div>

        <div class="btn-field">
          <!-- <q-btn class="btn-cancel">
            <span class="span-btn-cancel">Num quero</span>
          </q-btn> -->
          <q-btn flat @click="register()" class="btn-custom" color="black">
            <span class="span-btn">Cadastre-se</span>
          </q-btn>
        </div>

      </div>

      <div class="bottom-space"></div>

    </div>
  </div>
</template>
<script>
/* eslint-disable */
import iconBase from '../components/iconBase.vue';

export default {
  name: 'About',
  components: {
    iconBase,
  },
  data() {
    return {
      isValid: false,
      errorMessage: null,
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      selected: null, // --- selected category
      lastSelected: 0,
      active: false,
      terms: false, // ----- accept terms?
      options: [
        {
          label: 'Dança, Teatro e Circo',
          value: '1',
          color: '#683931',
        },
        {
          label: 'Escultura',
          value: '2',
          color: '#AD3B3B',
        },
        {
          label: 'Arte Urbana',
          value: '3',
          color: '#C95B40',
        },
        {
          label: 'Arte Digital',
          value: '4',
          color: '#DBB753',
        },
        {
          label: 'Cultura Popular',
          value: '5',
          color: '#E6B545',
        },
        {
          label: 'Museologia',
          value: '6',
          color: '#529E63',
        },
        {
          label: 'Artesanato',
          value: '7',
          color: '#49833A',
        },
        {
          label: 'Fotografia',
          value: '8',
          color: '#254C26',
        },
        {
          label: 'Literatura',
          value: '9',
          color: '#2F5497',
        },
        {
          label: 'Cinema e AudioVisual',
          value: '10',
          color: '#4692C1',
        },
        {
          label: 'Cultura e Representação',
          value: '11',
          color: '#86BCD3',
        },
        {
          label: 'Música',
          value: '12',
          color: '#D3869B',
        },
        {
          label: 'Folclore',
          value: '13',
          color: '#CB6883',
        },
        {
          label: 'Gastronomia',
          value: '14',
          color: '#C44B6E',
        },
        {
          label: 'Moda',
          value: '15',
          color: '#BD6A5C',
        },
        {
          label: 'Produtor Cultural',
          value: '16',
          color: '#AD3B3B',
        },
        {
          label: 'Estabelecimento',
          value: '17',
          color: '#653830',
        },
        {
          label: 'Instituição',
          value: '18',
          color: '#C95B40',
        },
      ],
    };
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn;
    },
    required() {
      return [
        v => !!v || 'requerido',
      ];
    },
    emailRules() {
      return [
        v => !!v || 'E-mail é requerido',
        v => /.+@.+/.test(v) || 'E-mail deve ser válido'
      ]
    },
    passwordRules() {
      return {
        required: value => !!value || 'Requerido.',
        min: v => v.length >= 8 || 'Mínimo 8 characters',
        emailMatch: () => ('O email ou senha estão incorretos'),
      }
    },
  },
  methods: {
    emit(el) {
      this.selected = el;
      this.active = true;
      // let teste = document.getElementById(`svg${el.value}`);
      // let val2 = teste.getElementsByTagName('g');
      // console.log(val2);
      if (el.value !== this.lastSelected) {
        document.getElementById('content').style.backgroundColor = this.selected.color;
        document.getElementById(`${this.lastSelected}`).style.color = '#fff';
        document.getElementById(`${el.value}`).style.color = '#000';
        this.lastSelected = this.selected.value;
      } else {
        this.lastSelected = 0;
      }
    },
    register() {
      if (this.email == '' || this.password == '' || this.firstName == '') {
        this.isValid = false;
        this.errorMessage = 'confira todos os campos'
        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      } else if (this.selected === null) {
        this.isValid = false;
        this.errorMessage = 'selecione ao menos uma categoria'
        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      } else if (this.terms === false) {
        this.errorMessage = 'você deve aceitar os Termos e Privacidade';
        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      } else {
        this.isValid = true;
      }
      if (this.isValid === true) {
        this.$store.
        dispatch('register', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          isValid: true,
          isAdmin: false,
          categoryId: this.selected.value,
        })
          .then(response => {
            this.errorMessage = null;
            this.$router.push({ name: 'Profile' })
          })
          .catch(error => {
          if (error.message === 'Request failed with status code 401') {
            this.errorMessage = 'email ou senha inválida';
          }
          if (error.message === 'Request failed with status code 400') {
            this.errorMessage = 'não encontramos uma conta para esse email';
          }
          console.log('error', error.response.data)
        });
        console.log('signUp : try signUp')
      }
    },
  },
  watch: {
    selected: function() {
      document.getElementById('error').style.color = '#fff';
    },
  },
};
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';
@import '../styles/mixins.scss';

* {
  font-family: 'Helvetica';
  box-sizing: border-box;
}

.white {
  color: #ffffff;
}

.bg-change {
  transition: .6s ease-in;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0.8;
	}
	100% {
		opacity: 1;
	}
}

.container {
  width: 100%;
}

.content-center {
  background-color: #f5f5f5;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  margin: 32px;
  padding: 32px;
  // clip-path: circle(30px at 90% 40px);
  z-index: 0;
  align-items: flex-start;

  @include for-phone-only {
    width: 100%;
    margin: 0px;
    padding: 32px;
  }

  @include for-tablet-portrait-only {
    width: 650px;
    margin-top: 16px;
    padding: 32px;
  }
}

.clip-path {
  // background-color: pink;
  clip-path: circle(100%);
  -webkit-transition: -webkit-clip-path 1s ease-out;
  transition: -webkit-clip-path 1s ease-out;
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

.item:hover {
  color: black;
}

.terms {
  align-items: center;
  margin-left: -8px;

  @include for-phone-only {
    margin-left: 0px;
  }
}

.headline {
  margin-bottom: 8px;
}

.input {
  margin-bottom: 16px;
  font-size: 1rem;
  min-width: 49%;

  @include for-phone-only {
    width: 100%;
  }
}

.context {
  margin-top: 8px;
  margin-left: 8px;

  @include for-phone-only {
    margin-left: 0px;
  }
}

// .body, .line, .form {
//   width: 600px;
// }

.terms {
  @include for-phone-only {
    flex-wrap: nowrap;
    align-items: flex-start;
    margin-left: -8px;

    .altoc {
      margin-top: 4px;
    margin-left: 8px;

    }
  }
}

.body-2 {
  text-align: justify;
}

.link {
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-family: 'Courier New', Courier, monospace;
}

.btn-custom {
  box-shadow: none;
  background-color: black;
  border-radius: 0px;
  height: 40px;
  width: 180px;
  margin-top: 8px;

  &:hover {
    transform: scale(50%);
  }

  @include for-phone-only {
    width: 100%;
  }
}

.error-field {
  margin-top: 8px;
  align-self: center;
  // transition: 1s ease-in;
}

.error-msg {
  color: #bb0000;
  animation: 1s fadeInOpacity ease-in;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.btn-custom:hover {
  transform: scale(1.05);
  transition: all 0.2s linear;
}

.span-btn {
  font-weight: bold;
  font-size: 1em;
  color: white;
}

.whitespace {
  height: 30px;

  @include for-phone-only {
    height: 16px;
  }

  @include for-tablet-portrait-only {
    height: 25px;
  }
}

.bottom-space {
  height: 60px;

  @include for-phone-only {
    height: 24px;
  }

  @include for-tablet-portrait-only {
    height: 32px;
  }
}

</style>
