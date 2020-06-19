<template>
  <div class="reply-form">

    <span class="body-2 bolder">Deixe seu comentário</span>

    <q-input
      v-model="content"
      ref="input"
      class="text-area"
      placeholder="Escreva aqui..."
      :errors="$v.content"
      :disabled="loading"
      filled
      square
    />

    <base-button
      class="reply-button"
      :disabled="loading"
      @click="reply"
    >
      <span class="caption bolder"> {{ loading ? 'Comentando...' : 'Comentar' }} </span>
    </base-button>

  </div>
</template>

<script>
// import { mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';

import BaseButton from './BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      content: '',
      loading: false,
    };
  },
  validations: {
    content: { required },
  },
  methods: {
    reply() {
      this.$v.$touch();
      if (!this.$v.$anyError) {
        this.loading = true;
        this.$store.dispatch('topics/addReply', { data: this.content })
          .then(() => {
            this.content = '';
            this.$v.$reset();
            this.loading = false;
          })
          .catch((error) => {
            console.log(error);
            this.loading = false;
          });
      }
    },
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.reply-form {
  display: flex;
  // justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 32px 0px 32px 0px;
  width: 100%;
}

.text-area {
  margin-top: 8px;
  width: calc(100% - 16px);
}

.reply-button {
  align-self: flex-start;
  margin-top: 10px;
}

</style>
