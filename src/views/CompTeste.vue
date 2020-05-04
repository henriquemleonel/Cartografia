<template>
  <div class="container">

    <div class="fixed-center">

      <my-filter/>

    </div>

  </div>
</template>

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

<script>
export default {
  name: 'comp-Teste',
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
};
</script>
