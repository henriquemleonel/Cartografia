<template>
  <div class="container">

    <div class="fixed-center">

      <pin-profile :bgColor="getBg" :info="getPinUser"/>

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
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid green;
  width: 80%;
  height: 100%;
  overflow: hidden;
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
