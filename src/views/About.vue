<template>
  <div class="content">
    <logo-card :bordered="true"/>
    <h1 style="color: black">about page</h1>
    <div id="seila"></div>
    <div id="teste"></div>
    <div id="frm"/>
  </div>
</template>

<script>

export default {
  name: 'aboutPage',
  data() {
    return {
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/');
      const fromDepth = from.path.split('/');
      console.log(toDepth);
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    },
  },
  methods: {
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>

.content {
  //background: url('../assets/statics/unsplash02.jpg') no-repeat 50% 50%;
  // background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  background-color: #1d1e22;
  overflow-x: hidden;
}

#seila {
  height: 600px;
  background-color: yellow;
}

#teste {
  height: 800px;
}

#frm {
  height: 400px;
  background-color: red;
}

</style>
