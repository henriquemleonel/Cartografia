<template>
  <div class="app-component">

    <div class="content" :style="{ 'background-color' : category.color }">
      <span class="title-1 bolder line-h16"> {{ this.item.title }} </span>
        <!-- <span class="body-2 bold mg-n-8"> {{ category.value.toLowerCase() }} </span> -->

        <span class="body-2 bold spaced-32"> {{ this.item.description }} </span>

        <div class="row spaced-16">
          <span class="body-2 bold"> {{ this.item.street }} - {{ this.item.neighborhood }} - {{ this.item.number }} </span>
        </div>

        <span class="body-2 bold spaced-16"> {{ this.item.phone }} </span>

        <div class="links row mg-top16">
          <a class="link caption bold" target="blank" :href="this.item.linkF">.facebook</a>
          <a class="link caption bold mg-left16" target="blank" :href="this.item.linkIG">.instagram</a>
          <a class="link caption bold mg-left16" target="blank" :href="this.item.otherLink">.link</a>
        </div>

      </div>

      <div class="img-box">
        <q-img :src="this.item.imgUrl" :ratio="16/9" />
      </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'pinView',
  data() {
    return {
      categoryId: this.item.categoryId,
      title: '',
      email: '',
      phone: '',
      street: '',
      neighborhood: '',
      number: '',
      city: '',
      cep: '',
      description: '',
      linkF: '',
      linkIG: '',
      otherLink: '',
      imgUrl: '',
      category: {
        label: '',
        value: '',
        color: '#b8cad4',
      },
    };
  },
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  // mounted() {
  //   this.setCategory();
  // },
  computed: {
    ...mapGetters({
      options: 'loadCategories',
    }),
  },
  // methods: {
  //   setCategory() {
  //     const index = this.options.findIndex((e) => e.value === this.categoryId);
  //     this.category = this.options[index];
  //   },
  // },
};
</script>

<style lang="scss" scoped>

</style>
