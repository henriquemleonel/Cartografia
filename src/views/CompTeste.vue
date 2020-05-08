<template>
  <div class="container">

    <div class="fixed-center">

      <!-- <my-filter/> -->
      <div class="add">
        <!-- <span class="spaced-32"> {{ this.category }} </span>
        <q-input dense square outlined class="input mg-top16" v-model="category" label="Nome" />

        <q-btn outlined @click="addCategorie()" class="btn-primary btn" color="black">
          <span class="span-btn">adicionar categoria</span>
        </q-btn> -->
        <div class="categorys" v-for="(n, index) in 18" :key="index">
          <icon-base :iconId="index" width="32"/>
        </div>

        <!-- <icon-base :iconId="1" width="32"/> -->

      </div>
    </div>

  </div>
</template>

<script>
import iconBase from '../components/iconBase.vue';

export default {
  name: 'comp-Teste',
  components: {
    iconBase,
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
  height: 100%;
}

</style>
