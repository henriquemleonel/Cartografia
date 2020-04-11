<template>
  <div class="card row">

    <div class="info column" :style="{ 'background-color' : bg }">

      <div class="user-info column">
        <span class="title-1 bolder"> {{ name }} </span>
        <span class="subheading-2 bold mg-top-n8"> {{ category }} </span>

        <q-btn flat round class="btn" size="1em" v-on:click="active" color="white">
          <!-- <span class="span-btn-form">Editar perfil</span> -->
          <q-icon name="fas fa-ellipsis-h" size="1.2em" color="white"/>
        </q-btn>

      </div>

      <div class="user-edit row" v-if="editActive">

        <div class="column">
          <!-- <span class="caption bold"> {{ email.toLowerCase() }} </span> -->

          <q-input class="input" v-model="email" color="white" label="email:" label-color="white" />

          <q-input class="input" v-model="email" color="white" label="senha:" label-color="white" />

        </div>

      </div>

      <div class="media">
        <!-- <taller-card> -->
        <!-- buttons social media? pq? -->
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'profile-card',
  data() {
    return {
      isActive: true,
      bg: this.info.category.color,
      name: this.info.name,
      category: this.info.category.value,
      email: this.info.email,
      password: this.info.password,
      editActive: false,
    };
  },
  props: {
    info: {
      type: Object,
    },
    bgColor: {
      type: String,
    },
  },
  methods: {
    active() {
      this.editActive = !this.editActive;
    },
  },
  computed: {
    // cutTitle() {
    //   const aux = this.name;
    //   if (this.aux.length > 24) {
    //     return this.aux.splice(22, 24, '..');
    //   }
    //   return this.aux;
    // },
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

.card {
  width: 100%;
  // height: 100%;
  display: flex;
  justify-content: flex-start;
  // overflow: hidden;
  flex-wrap: nowrap;

  @include for-phone-only {
    flex-wrap: wrap;
  }
}

.info {
  // height: $header-height;
  padding: 16px;
  position: relative;
  box-sizing: border-box;
  width: inherit;
  // height: inherit;
}

.user-info {
  align-self: flex-start;
}

.user-edit {
  width: 100%;
  margin-top: 16px;
  align-items: center;
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.input {
  width: 300px;
}

span {
  color: white;
}

.btn {
  position: absolute;
  top: 16px;
  right: 16px;
}

</style>
