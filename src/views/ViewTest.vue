<template>
  <div class="container">
    <div class="fixed-center">
      <progress-bar
        :step="currentStep"
        :steps-content="['passo 1', 'passo 2', 'passo 3']"
      />
      <div class="row">
        <base-button
          class=""
          theme="flat"
          @click="currentStep -= 1"
        >
          <!-- <i class="fas fa-plus reply-icon"></i> -->
          <span class="body-2 bolder text-black"> prev </span>
        </base-button>
        <base-button
          class=""
          theme="flat"
          @click="currentStep += 1"
        >
          <!-- <i class="fas fa-plus reply-icon"></i> -->
          <span class="body-2 bolder text-black"> next </span>
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '../components/BaseStepProgressBar.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'ViewTest',
  components: {
    ProgressBar,
    BaseButton,
  },
  data() {
    return {
      currentStep: 1,
    };
  },
  computed: {
    getUser() {
      return this.$store.state.currentUser;
    },
    getBg() {
      return this.$store.state.currentUser.category.color;
    },
    getPinUser() {
      return this.$store.state.currentUser.infoPin;
    },
  },
  methods: {
    addCategorie() {
      this.$store.dispatch('addCategorie', {
        name: this.category,
      })
        .then(() => {
          console.log('compTest : add categorie');
        });
    },
  },
};
</script>

<style lang="scss" scoped>

.container {
  width: 100%;
  height: 100vh;
  padding: 32px;
  background-color: #f5f5f5;
}

.fixed-center {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid pink;
  width: 500px;
  min-width: 200px;
  // height: 100%;
}

</style>
