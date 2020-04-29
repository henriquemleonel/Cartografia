<template>
  <div class="container">

    <div class="content-center column">

      <logo-card class="logo" :blackMode="true"/>

      <div class="card column">

        <!-- <span class="title-2 bolder"> Bem vindo </span> -->

        <div class="input-field">

          <q-input
            v-model="email"
            class="input"
            outlined
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

        <div class="links column">

          <router-link to="/recover">
            <span class="link bold">Esqueceu a senha?</span>
          </router-link>

          <router-link to="/signUp">
            <span class="link bold">Não tem uma conta? Cadastre-se</span>
          </router-link>

        </div>

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
        email: this.email,
        password: this.password,
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
}

.container {
  background-color: black;
}

.content-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  padding: 32px;
  height: 100vh;
  align-items: flex-start;
}

.logo {
  margin-top: 0px;
  align-self: flex-start;
}

.card {
  width: 400px;
  padding: 0px;
  background-color: white;
  justify-content: center;
  align-items: flex-start;
  margin-top: 32px;
  // border: 2px solid green;
}

.input-field {
  width: 100%;
  margin-top: 16px;
}

.input {
  margin-bottom: 28px;
  width: inherit;
}

.links {
  align-items: center;
  width: 100%;
  margin-top: 8px;
  // border: 1px solid red;
}

.link {
  text-decoration: none;
  text-transform: lowercase;
  color: black;
  align-self: center;

  &:hover {
    color: gray;
  }
}

.btn {
  box-shadow: none;
  align-self: center;
  width: 120px;
  height: 40px;
  border-radius: 0px;
  background-color: black;
  margin-top: 16px;
}

.btn:hover {
  transform: scale(1.05);
  transition: all 0.2s linear;
}

.btn span {
  text-transform: lowercase;
}

</style>
