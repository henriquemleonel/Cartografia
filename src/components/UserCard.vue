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

          <!-- actions perfil -->
          <q-card-section class="padding-0">

            <div class="row justify-items-end full-width">

              <button class="btn-edit btn-options" @click="activeEdit()">
                <span class="overline">editar senha</span>
              </button>

              <button class="btn-edit btn-options" @click="emitLogout()">
                <span class="overline">sair</span>
              </button>

            </div>

          </q-card-section>

          <!-- user info ( no edit ) -->
          <q-card-section class="padding-0 mg-top16">

            <div class="user-info mg-top16">

              <div class="column">
                <span class="overline"> sua conta: </span>
                <span class="caption"> {{ email }} </span>
              </div>

              <!-- <q-input class="input" readonly v-model="email" color="white" label="Sua conta" label-color="white" /> -->
              <!-- <q-btn flat size="0.8rem">
                <q-icon name="far fa-trash-alt" size="1rem"/>
                <q-icon name="delete_outline" />
              </q-btn> -->
            </div>

          </q-card-section>

          <!-- user info ( edit ) -->
          <q-card-section class="user-edit al-items-end mg-top32" v-if="editing">

            <!-- inputs -->
            <div class="row">

              <div class="">
                <span class="overline">nova senha </span>
                <q-input dense filled square class="input" v-model="newPassword" bg-color="grey-1" color="white" />
              </div>

              <div class="">
                <span class="overline">repita sua senha</span>
                <q-input dense filled square class="input" v-model="checkNewPassword" bg-color="grey-1" color="white" />
              </div>

            </div>

            <!-- actions inputs -->
            <div class="row al-self-end">

              <button class="secondary-action mg-top16" @click="cancelPasswordEdit()">
                <span class="overline text-secondary-action">cancelar</span>
              </button>

              <button class="primary-action mg-top16 mg-left8 mg-right8" @click="confirmPasswordEdit()">
                <span class="overline">confirmar</span>
              </button>

            </div>

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
      bg: '#254C26',
      // bg: this.info.category.color,
      // name: this.info.name,
      // category: this.info.category.value,
      name: this.info.firstName.concat(' ').concat(this.info.lastName),
      category: 'categoria teste',
      email: this.info.email,
      password: this.info.password,
      newPassword: '',
      checkNewPassword: '',
      editing: false,
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
    emitLogout() {
      this.$emit('emit-logout');
    },
    passwordEdit() {
      console.log('editar senha');
    },
    activeEdit() {
      this.editing = true;
    },
    cancelPasswordEdit() {
      this.editing = false;
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
  max-width: 400px;
  padding: 0px;
  box-sizing: border-box;
  width: inherit;
  // height: inherit;
}

.card {
  width: 100%;
  padding: 16px 16px 32px 16px;
}

.btn-edit {
  height: 25px;
  min-width: 60px;
  margin: 0px 8px 0px 8px;
}

.user-info {
  width: 100%;
}

.user-edit {
  width: 100%;
  margin-top: 24px;
  // padding-left: 8px !important;
  padding: 0px;
  align-items: center;
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  // border-left: 2px solid white !important;
  // background-color: #778899;
}

.input {
  margin-top: 8px;
  width: 95%;
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
