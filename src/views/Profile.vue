<template>
  <div class="about">
    <h1>this is a profile</h1>
    <h2 v-if="signedIn">veio com o login</h2>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
    }
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn
    },
  },
  methods: {
      logout() {
        this.$store.dispatch('destroyToken')
        .then(response => {
            this.$router.push({ name: 'home' })
        })
      }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: black;
}
</style>