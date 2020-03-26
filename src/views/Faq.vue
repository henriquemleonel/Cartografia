<template>

  <div class="content">
    <logo-card :bordered="true"/>
    <h1 style="color: black">faq page h1</h1>
    <div class="column">
      <span class="big-title"> bigtitle</span>
      <span class="title-1"> title1</span>
      <span class="title-2"> title2</span>
      <span class="title-3"> title3</span>
      <span class="subheading"> subheading</span>
      <span class="subheading-2"> subheading2</span>
      <span class="body-text"> body-text</span>
      <span class="body-large"> body-large</span>
      <span class="caption"> caption</span>
      <span class="overline"> overline</span>
      <span class="button-text"> button</span>
    </div>
    <div id="teste"></div>
    <div id="frm"/>
  </div>

</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';
@import '../styles/mixins.scss';


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
