<template>
  <div class="box" :class="{ 'black-mode' : blackMode, 'bordered' : bordered }" @click="goToHome()">

    <div class="top">
      <span class="title"> {{ title }} </span>
      <!-- <div class="whitespace"></div> -->
    </div>

    <div class="bottom column">
      <span class="subtitle"> Fórum municipal <br/> de Cultura <br/> de Campo Grande </span>
      <span class="nd-sub"> {{ subtitle }} </span>
      <div class="line"></div>
      <span class="text"> {{ text }} </span>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Cartografia da Cultura.',
      subtitle: 'Fórum Municipal de Cultura de Campo Grande',
      text: 'cultura em movimento',
    };
  },
  props: {
    blackMode: Boolean,
    bordered: Boolean,
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';
@import '../styles/mixins.scss';

* {
  font-family: Helvetica;
  box-sizing: border-box;
  color: black;
}

.box {
  //background-color: white;
  overflow: hidden;
  padding: 16px;
  height: 200px;
  width: 200px;
  // border: 2px solid black;
  background-color: white;
  position: relative;

  @include for-phone-only {
    align-items: left;
  }

  &:hover {
    cursor: pointer;
  }
}

.top, .bottom {
  text-align: left;
}

.bottom {
  flex-wrap: nowrap;
  line-height: 16px;
  position: absolute;
  bottom: 16px;

  @include for-phone-only {
    justify-content: flex-end;
  }
}

.title {
  font-weight: 750;
  font-size: 2em; // 32px
  line-height: 1.875rem;

  @include for-phone-only {
    font-size: 2.5em;
  }
}

.subtitle {
  font-size: 0.75rem;
  font-weight: 700;

  @include for-phone-only {
    display: none;
  }
}

.nd-sub {
  font-size: 0.75rem;
  font-weight: 700;
  display: none;

  @include for-phone-only {
    display: block;
  }
}

.line {
  height: 2px;
  // background-color: black;
  width: 100%;
  background-color: black;
}

.text {
  font-size: 0.625rem;
  font-weight: 700;
}

.black-mode {
  background-color: black;

  .line {
    background-color: white;
  }

  .title, .subtitle, .text, .nd-sub {
    color: white;
  }
}

.bordered {
  border: 2px solid black;
}

</style>
