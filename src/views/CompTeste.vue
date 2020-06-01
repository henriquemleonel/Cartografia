<template>
  <div class="container">

    <div class="fixed-center">

      <my-menu/>

    </div>

  </div>
</template>

<script>
import MyMenu from '../components/Menu.vue';

export default {
  name: 'comp-Teste',
  components: {
    MyMenu,
  },
  data() {
    return {
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
  min-width: 200px;
  // height: 100%;
}

</style>
