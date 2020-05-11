<template>
  <div class="box" :class="{ 'black-mode' : blackMode, 'bordered' : bordered }" @click="goToHome()">

    <div class="top">
      <span id="title" class="title-2 bolder"> Cartografia da Cultura. </span>
      <span id="m-title" class="title-2 bolder"> Carto CG. </span>
      <!-- <div class="whitespace"></div> -->
    </div>

    <div class="bottom column">
      <span class="heading bold"> Fórum municipal <br/> de Cultura <br/> de Campo Grande </span>
      <div class="line"></div>
      <span class="caption bold"> cultura em movimento </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'logo-card',
  data() {
    return {
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
@import '../styles/typo.scss';

* {
  font-family: 'Helvetica';
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
    height: 120px;
    width: 120px;
    padding: 32px 16px 8px 16px;
  }

  &:hover {
    cursor: pointer;
  }
}

.top, .bottom {
  text-align: left;
}

#title {
  line-height: 1.875rem;

  @include for-phone-only {
    display: none;
  }
}

#m-title {
  display: none;

  @include for-phone-only {
    display: block;
    font-size: 2rem;
    line-height: 2.2rem;
    font-weight: 700;
  }
}

.bottom {
  flex-wrap: nowrap;
  line-height: 16px;
  position: absolute;
  bottom: 16px;

  @include for-phone-only {
    justify-content: flex-end;
    display: none;
  }
}

.line {
  height: 2px;
  margin-top: 4px;
  margin-bottom: 4px;
  // background-color: black;
  width: 100%;
  background-color: black;
}

.black-mode {
  background-color: black;

  .line {
    background-color: white;
  }

  .title-2, .heading, .caption, .overline, .nd-sub {
    color: white;
  }
}

.bordered {
  border: 2px solid black;
}
</style>
