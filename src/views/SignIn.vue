<template>
  <div class="container column">

    <div class="identity">
       <logo-card class="logo" :blackMode="true"/>
    </div>

    <div class="content-center column">

      <div class="card column">

        <span class="title big-title bolder"> Bem vindo. </span>
        <router-link class="link" to="/signUp">
          <span>Novo Usuário? Cadastre-se</span>
        </router-link>

        <div class="input-field">

          <q-input
            v-model="email"
            class="input"
            outlined
            clearable
            clear-icon="close"
            square
            type="email"
            :rules="emailRules"
            lazy-rules
            label="Email"
            color="black"
            required
          />

          <q-input
            v-model="password"
            class="input"
            outlined
            clearable
            clear-icon="close"
            square
            label="Senha"
            :type="isPwd ? 'password' : 'text'"
            hint="Mínimo de 8 caracteres"
            color="black"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                size="18px"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

        </div>

        <div class="error-field" v-if="errorMessage !== null">
          <span class="error-msg">* {{ errorMessage }}</span>
        </div>

        <div class="links column">

          <router-link class="link" to="/recover">
            <span>Esqueceu a senha?</span>
          </router-link>

          <!-- <router-link to="/signUp">
            <a class="link">Novo Usuário? Cadastre-se</a>
          </router-link> -->

          <q-btn
            flat
            class="btn"
            color="white"
            @click="signIn()"
          >
            <span class="body bold">entrar</span>
          </q-btn>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SignInPage',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      isPwd: true,
      passwordVisible: false,
      errorMessage: null,
    }
  },
  created() {},
  computed: {
    isValid() {
      if (this.email !== '' && this.password !== '') {
        this.valid = true;
      } else {
        this.valid = false;
      }
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
        emailMatch: () => 'O email ou senha estão incorretos'
      }
    }
  },
  methods: {
    signIn() {
      this.$store.
       dispatch('retrieveToken', {
        email: this.email,
        password: this.password,
      })
        .then(response => {
          this.errorMessage = null;
          const hasPermission = response.data.isAdmin;
          if (hasPermission) {
            this.$router.push({ name: 'Dashboard' })
          } else {
            this.$router.push({ name: 'Profile' })
          }
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
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  background-color: white;
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
  padding: 32px;
  position: relative;
}

.identity {
  position: absolute;
  width: 100%;
  top: 32px;
  left: 32px;

  .logo {
    margin-top: 0px;
    align-self: flex-start;
  }

  @include for-phone-only {
    align-self: center;
    margin-left: 8px;
  }
}

.content-center {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 350px;
  align-items: flex-start;
  animation: 0.5s fadeInOpacity ease-in;

  @include for-phone-only {
    margin-top: 64px;
  }

  @include for-tablet-portrait-only {
    margin-top: 64px;
  }
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.card {
  width: 90%;
  padding: 0px;
  background-color: white;
  justify-content: center;
  align-items: flex-start;
  margin-top: 32px;
  // border: 2px solid green;
}

.title {
  // align-self: center;
  margin-bottom: 8px;
  animation: 0.4s fadeInOpacity ease-in;
}

.input-field {
  width: 100%;
  margin-top: 32px;
}

.input {
  margin-bottom: 24px;
  width: inherit;
}

.error-field {
  margin-top: 8px;
  align-self: center;
}

.error-msg {
  color: #bb0000;
  animation: 0.3s fadeInOpacity ease-in;
}

.links {
  align-items: center;
  width: 100%;
  margin-top: 16px;
  // border: 1px solid red;
}

.link {
  font-family: 'Helvetica';
  font-weight: bold;
  text-decoration: none !important;
  text-transform: lowercase;
  color: black;

  &:hover {
    color: gray;
  }
}

.btn {
  box-shadow: none;
  align-self: center;
  width: 180px;
  height: 40px;
  border-radius: 0px;
  background-color: black;
  margin-top: 8px;
}

.btn:hover {
  transform: scale(1.05);
  transition: all 0.2s linear;
}

.btn span {
  text-transform: lowercase;
}

</style>
