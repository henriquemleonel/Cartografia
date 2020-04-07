<template>
  <div class="container">

    <!-- <logo-card class="fixed-logo" :blackMode="true"/> -->
    <div class="content-center column">

      <header class="spaced-32">
        <logo-card :blackMode="true"/>

        <multicolor-line class="line mg-top32"/>
      </header>

      <section class="column spaced-32">

        <span class="title-1 bolder"> Perguntas Frequentes </span>

        <span class="body-2 bold mg-top32"></span>
        <p class="body-2 font2 mg-top8">
          1. A navegação pelas informações disponíveis na Plataforma Cartografia da Cultura é anônima.
        </p>

      </section>

      <div class="white-space"></div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'termsPage',
  data() {
    return {
    };
  },
  watch: {
  },
  methods: {
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.container {
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.content-center {
  // background-color: black;
  // position: absolute;
  // left: 50%;
  // transform: translateX(-50%);
  width: 800px;
  padding: 16px;
  z-index: 0;
  align-items: flex-start;
  //border: 2px solid white;
}

span, p, a {
  color: black;
}

a {
  text-decoration: none;
}

.link {
  align-items: center;
}

.align-center {
  align-items: center;
}

.white-space {
  height: 60px;
  //border: 2px solid green;
}

header, .plat, .team, .contato, .colabor {
  width: 100%;
}

.line {
  height: 3px;
  background-color: white;
}

// ----------------- transitions ------------------
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0%{
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.moveUp-leave-active {
  animation: moveUp 0.5s linear;
}

@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(-500px);
  }
}
</style>
