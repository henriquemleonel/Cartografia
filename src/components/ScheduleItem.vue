<template>
  <div class="box" @click="expand()">

    <div class="context column" :style="{ 'background-color': background }">

      <span class="title-1 bolder line-h16"> {{ name }} </span>
      <span class="headline-3 bolder mg-top-8"> {{ category.value.toLowerCase() }} </span>

      <div class="row mg-top8">
        <span class="body-2 bold"> {{ date.value }} </span>
        <!-- <span class="body-2 bold"> {{ date.year }} </span> -->
        <span class="body-2 bold mg-left16"> {{ hour + 'h' }} </span>
      </div>

      <span class="body-2 bold spaced-32"> {{ description }} </span>

      <span class="body-2  bold spaced-16">Entrada: r${{ ticket }} </span>

      <div class="row spaced-8">
        <span class="body-2 bold"> {{ address.street }} - {{ address.neighborhood }} </span>
      </div>

      <div class="links row mg-top16">
        <a class=" link caption bold" target="blank" :href="link">.facebook</a>
        <a class=" link caption bold mg-left16" target="blank" :href="link">.facebook</a>
      </div>

    </div>

    <div class="img-box">
      <!-- <q-img :src="img" :ratio="16/9" placeholder-src="statics/avatar01.jpg"/> -->
      <img class="img" src="../assets/statics/avatar01.jpg"/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'schedule_Item',
  data() {
    return {
      id: this.item.id,
      name: this.item.name,
      date: this.item.date,
      hour: this.item.hour,
      address: this.item.address,
      ticket: this.item.ticket,
      link: this.item.link,
      description: this.item.description,
      category: this.item.category,
      img: this.item.imgUrl,
      background: this.bgColor,
    };
  },
  props: {
    item: {
      type: Object,
    },
    bgColor: {
      type: String,
    },
  },
  computed: {
  },
  methods: {
    expand() {
      console.log('expanded');
    },
  },
};
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';
@import '../styles/mixins.scss';

* {
  font-family: 'Helvetica';
  box-sizing: border-box;
}

.box {
  overflow: hidden;
  max-width: 350px;
  min-width: 290px;
  margin: 8px 0px 0px 4px;
  transition: transform .2s;

  @include for-phone-only {
    width: 350px;
    margin: 8px 4px 24px 4px;
  }
}

.context {
  padding: 24px;
}

.line-h16 {
  line-height: 1em;
}

.img-box {
  width: 350px;
  max-height: 280px;
  overflow: hidden;

  .img {
    height: auto;
    max-width: 350px;
  }
}

span {
  color: white;
}

.link {
  text-decoration: none;
  color: white;
}

</style>
