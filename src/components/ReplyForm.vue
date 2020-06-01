<template>
  <div class="reply-form">

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
      {{ loading ? 'Comentando...' : 'Comentar' }}
    </base-button>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
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
    ...mapActions(['addReply']),
    async reply() {
      this.$v.$touch();
      if (!this.$v.$anyError) {
        this.loading = true;
        try {
          await this.addReply({ data: { content: this.content } });
          this.content = '';
          this.$v.$reset();
          this.loading = false;
        } catch (err) {
          this.loading = false;
        }
      }
    },
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>

<style lang="scss" scoped>

.reply-form {
  display: flex;
  // justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 16px 0px 16px 0px;
  width: 90%;
}

.text-area {
  width: 100%;
}

.reply-button {
  align-self: flex-start;
  margin-top: 10px;
}

</style>
