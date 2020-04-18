<template>
  <div class="">

    <q-expansion-item class="box" :style="{ 'background-color' : bg }" expand-icon-class="text-white">
        <template v-slot:header>

          <q-item-section class="column">
            <span class="title-1 bolder"> {{ name }} </span>
            <span class="subheading-2 bold mg-top-n8 mg-left8"> {{ category }} </span>
          </q-item-section>

        </template>

        <q-card class="card column" :style="{ 'background-color' : bg }">
          <q-card-section>

            <div class=" user-info row">
              <q-input class="input" readonly v-model="email" color="white" label="Sua conta" label-color="white" />
              <!-- <q-btn flat size="0.8rem">
                <q-icon name="far fa-trash-alt" size="1rem"/>
                <q-icon name="delete_outline" />
              </q-btn> -->
            </div>

          </q-card-section>
          <q-card-section>

            <q-input class="input" v-model="password" color="white" label="senha:" label-color="white" />
          </q-card-section>
        </q-card>
      </q-expansion-item>

  </div>
</template>

<script>
export default {
  name: 'user-Card',
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

.box {
  width: 100%;
  padding: 0px;
  box-sizing: border-box;
  width: inherit;
  // height: inherit;
}

.card {
  width: 100%;
}

.user-info {
  width: 100%;
}

.user-edit {
  width: 100%;
  margin-top: 16px;
  align-items: center;
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.input {
  width: 300px;
  font-family: 'Helvetica';
  font-weight: bold;
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
