<template>
  <div class="app-page">
    <div id="content" class="content-center column" :class="{ 'bg-change' : active }">

      <!-- identity (seal) -->
      <logo-card class="header" :blackMode="true"/>

      <!-- color line -->
      <multicolor-line class="line mg-top8"/>

      <!-- info -->
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

      <!-- form -->
      <div class="form column">

        <span class="headline bolder">Insira suas informações:</span>

        <div class="row field" style="justify-content: space-between">

          <!-- first name -->
          <q-input
            class="input"
            dense
            square
            filled
            v-model="username"
            label="Sobrenome*"
            bottom-slots
            @blur="$v.username.$touch"
            :error="$v.username.$error"
            :error-message="usernameErrorMessage"
          />

          <!-- last name -->
          <q-input
            class="input"
            dense
            square
            filled
            v-model="lastname"
            label="Sobrenome*"
            bottom-slots
            @blur="$v.lastname.$touch"
            :error="$v.lastname.$error"
            :error-message="lastnameErrorMessage"
          />

        </div>

        <!-- email -->
        <q-input
          class="input"
          dense
          square
          filled
          v-model="email"
          label="email*"
          @blur="$v.email.$touch"
          :error="$v.email.$error"
          :error-message="emailErrorMessage"
          lazy-rules
        />

        <!-- confirm email -->
        <q-input
          class="input"
          dense
          square
          filled
          v-model="emailConfirmation"
          label="confirme o email*"
          @blur="$v.emailConfirmation.$touch"
          :error="$v.emailConfirmation.$error"
          :error-message="emailConfirmationErrorMessage"
        />

        <div class="row field" style="justify-content: space-between">

          <!-- password -->
          <q-input
            class="input"
            dense
            square
            filled
            v-model="password"
            label="senha*"
            @blur="$v.password.$touch"
            :error="$v.password.$error"
            :error-message="passwordErrorMessage"
          />

          <!-- confirm password -->
          <q-input
            class="input"
            dense
            square
            filled
            v-model="passwordConfirmation"
            label="confirme a senha*"
            @blur="$v.passwordConfirmation.$touch"
            :error="$v.passwordConfirmation.$error"
            :error-message="passwordConfirmationErrorMessage"
          />

        </div>
        <!-- end row -->

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
                <icon-base :iconId="item.value -1" width="16" :setWhite="active" />

              </q-item-section>

              <q-item-section :id="item.value" class="body-3 bolder" :class="{ 'white' : active }"> {{ item.label }} </q-item-section>

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

        <div class="btn-field">

          <q-btn
            flat
            disable
            v-if="!formIsValid"
            class="btn-custom-disable"
            color="black"
          >
            <span class="span-btn">Preencha todos os campos</span>
          </q-btn>

          <q-btn
            flat
            @click="register()"
            v-if="formIsValid"
            class="btn-custom"
            color="black"
          >
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
import { mapGetters } from 'vuex';
import iconBase from '../components/iconBase.vue';
import { dirty, required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators';

export default {
  name: 'SignUp',
  components: {
    iconBase,
  },
  data() {
    return {
      loading: false,
      username: '',
      lastname: '',
      email: '',
      emailConfirmation: '',
      password: '',
      passwordConfirmation: '',
      selected: null, // --- selected category?
      lastSelected: 0,
      active: false,
      terms: false, // ----- accept terms?
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(3),
      validChars: (value) => {
        return (/^[a-zA-Z0-9_]+$/ig).test(value)
      }
    },
    lastname: {
      required,
      validChars: (value) => {
        return (/^[a-zA-Z0-9_]+$/ig).test(value)
      }
    },
    email: {
      required,
      email,
      maxLength: maxLength(30)
    },
    emailConfirmation: {
      required,
      sameAsPassword: sameAs('email')
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(15)
    },
    passwordConfirmation: {
      required,
      sameAsPassword: sameAs('password')
    }
  },
  computed: {
    ...mapGetters({
      options: 'loadCategories',
    }),
    signedIn() {
      return this.$store.state.signedIn;
    },
    formIsValid() {
      if (this.$v.$anyError || this.selected === null || this.terms === false ) {
        return false
      } else {
        return true
      }
    },
    usernameErrorMessage () {
      if (!this.$v.username.required) {
        return 'Esse campo é requerido'
      } else if (!this.$v.username.validChars) {
        return 'Este campo deve conter apenas letras, números e underline'
      } else if (!this.$v.username.minLength) {
        return 'Mínimo de três dígitos'
      }
    },
    lastnameErrorMessage () {
      if (!this.$v.lastname.required) {
        return 'Campo requerido'
      } else if (!this.$v.lastname.validChars) {
        return 'Este campo deve conter apenas letras, números e underline'
      }
    },
    emailErrorMessage () {
      if (!this.$v.email.required) {
        return 'Email é requerido'
      } else if (!this.$v.email.email) {
        return 'Por favor insira um email válido'
      }
    },
    emailConfirmationErrorMessage () {
      if (!this.$v.emailConfirmation.required) {
        return 'Confirmação de email é requerida'
      } else if (!this.$v.emailConfirmation.sameAsEmail) {
        return 'Email não confere'
      }
    },
    passwordErrorMessage () {
      if (!this.$v.password.required) {
        return 'Senha é requerida'
      } else if (!this.$v.password.minLength) {
        return 'Mínimo de 8 dígitos'
      } else if (!this.$v.password.maxLength) {
        return 'Máximo de 15 dígitos'
      }
    },
    passwordConfirmationErrorMessage () {
      if (!this.$v.passwordConfirmation.required) {
        return 'Confirmação de senha é requerida'
      } else if (!this.$v.passwordConfirmation.sameAsPassword) {
        return 'Senha não confere'
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
      this.$v.touch();
      if (!this.$v.$anyError) {
        this.loading = true;
        this.$store.
        dispatch('register', {
          username: this.username,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          passwordConfirmation: this.passwordConfirmation,
          isValid: true,
          isAdmin: false,
          categoryId: this.selected.value,
        })
          .then(response => {
            this.errorMessage = null;
            this.$router.push({ name: 'SignIn' })
          })
          .catch(error => {
            if (error.message === 'Request failed with status code 401') {
              this.errorMessage = 'email ou senha inválida';
            }
            if (error.message === 'Request failed with status code 400') {
              this.errorMessage = 'não encontramos uma conta para esse email';
            }
            console.log('error', error.response)
          });
        console.log('signUp : try signUp')
      }
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

.app-page {
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

.btn-custom-disable {
  box-shadow: none;
  background-color: black;
  border-radius: 0px;
  height: 40px;
  margin-top: 8px;
}

.field {
  height: 60px;
}

.input {
  font-family: 'Helvetica-Normal';
  font-size: 1.02rem;
  min-width: 49%;
  max-height: 50px;
  margin-top: 16px;

  @include for-phone-only {
    width: 100%;
  }
}

.error-message {
  // color: #bb0000;
  color:black;
  margin-top: 8px;
  margin-left: -8px;
  // animation: 1s fadeInOpacity ease-in;
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
