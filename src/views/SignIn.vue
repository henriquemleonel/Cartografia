<template>
  <div class="content">
    <!-- <q-btn
      class="btn-back"
      round
      to="/"
      size="1.5em"
      style="position: fixed; top: 32px; left: 32px; z-index: 1; box-shadow: none;"
    >
      <img src="../assets/icons/keyboard_arrow_left_black.png" />
    </q-btn> -->
    <div class="container-center">
      <div class="card column">
        <h2 class="ttl">
          Seja Bem Vindo!
        </h2>
        <q-input
          v-model="userEmail"
          class="input"
          outlined
          :rules="emailRules"
          label="login"
          color="black"
          required
        />
        <q-input
          v-model="userPassword"
          class="input"
          outlined
          label="senha"
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

        <div class="btn-field column">
          <router-link to="/Recover">
            <span class="link">Esqueceu sua conta?</span>
          </router-link>
          <router-link to="/Register">
            <span class="link">Cadastre-se</span>
          </router-link>

          <q-btn
            class="btn-login"
            color="black"
            @click="signIn()"
          >
            <span class="span">LOGAR</span>
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
      userEmail: '',
      userPassword: '',
      isPwd: false,
      passwordVisible: false
    }
  },
  created() {},
  computed: {
    signedIn() {
      return this.$store.state.signedIn
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
        email: this.userEmail,
        password: this.userPassword,
      })
        .then(response => {
          this.$router.push({ name: 'Profile' })
        })
      console.log('try Login')
      
    },
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;
}

.btn-back:hover::before {
  content: 'Voltar';
  font-family: 'Courier new';
  font-size: 1.2em;
  font-weight: 900;
  letter-spacing: 4px;
  margin-left: 45px;
  color: black;
  box-shadow: none;
}

.content {
  width: 100%;
  height: 100vh !important;
  border-radius: 0px !important;
  font-family: 'Poppins';
  // background-image: url(../assets/bg01.jpg);
}

.container-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  width: 500px;
  padding: 16px;
  background-color: yellow;
  justify-content: center;
  align-items: center;
}

.ttl {
  font-size: 55px;
  color: black;
  text-align: center;
  margin-bottom: 16px;
  font-family: 'Monoton';
  letter-spacing: 2px;
}

.input {
  margin: 8px;
  width: 350px;
  font-size: 18px;
  font-family: 'Courier New', Courier, monospace;
}

.btn-field {
  margin-top: 16px;
  padding: 8px;
}

.link {
  text-decoration: none !important;
  font-weight: 300;
  font-size: 18px;
  color: black;
  align-self: center;
}

.link:hover {
  // color: grey;
  font-weight: 700;
  transform: scaleY(1.1);
  transition: all 0.2s linear;
}

.btn-login {
  align-self: center;
  width: 150px;
  height: 50px;
  margin-top: 16px;
  border-radius: 25px;
  box-shadow: none;
}

.btn-login:hover {
  transform: scale(1.05);
  transition: all 0.2s linear;
}

.span {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 400;
  text-transform: lowercase;
  font-size: 1.4em;
}
</style>
