<template>
  <div class="content">

    <div class="container column">

      <logo-card class="fixed-logo" :blackMode="true"/>

      <div class="box column">

        <div class="card">

          <div class="header-card column">
            <span class="title-2 bolder"> Primeiro vamos localizar sua conta </span>
            <span class="headline-3"> insira seu email </span>
          </div>

          <div class="input-field">

            <q-input v-model="email" class="input" outlined square type="email" :rules="emailRules" label="Email" color="black" required/>

          </div>

          <div class="actions-card row">

            <q-btn flat class="btn-secondary" color="white" @click="signIn()">
              <span class="body bold">entrar</span>
            </q-btn>

            <q-btn flat class="btn-primary btn" color="white" @click="signIn()">
              <span class="body bold">entrar</span>
            </q-btn>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Recover',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    // myRule(val) {
    //   // simulating a delay
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(!!val || '* Required');
    //     }, 5000);
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  background-color: black;
  padding: 32px;
  width: 100%;
  height: 100vh;
  align-items: center;
}

.card {
  width: 100%;
  padding: 32px;
  justify-content: center;
  align-items: flex-start;
}

.input-field {
  width: 100%;
  margin-top: 16px;
}

.input {
  margin-bottom: 28px;
  width: inherit;
}

.scale-effect:hover {
  transform: scale(1.05);
  transition: all 0.2s linear;
}

.btn-login span {
  text-transform: lowercase;
}

</style>
