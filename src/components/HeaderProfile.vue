<template>
  <div class="card row">

    <logo-card class="logo-card" :blackMode="false" :bordered="true"/>

    <div class="picture-box">
      <img class="picture" src="../assets/statics/avatar01.jpg">
    </div>

    <div class="info column bg-default" :class="{ 'active-bg' : isActive }">

      <div class="user-info column">
        <span class="title-3"> {{ name }} </span>
        <span class="subheading-2"> {{ category }} </span>
      </div>

      <div class="user-edit row">

        <div class="column">
          <span class="body-2 bold"> {{ email }} </span>
          <span class="caption"> {{ password }} </span>
        </div>

        <q-btn flat class="btn" v-on:click="opemEditInfo()" color="black">
          <!-- <span class="span-btn-form">Editar perfil</span> -->
          <q-icon name="settings" color="white"/>
        </q-btn>

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
      theme: 'bg-photography',
    };
  },
  props: ['name', 'email', 'password', 'category'],
  methods: {
    opemEditInfo() {
      this.$emit('callEditInfo');
    },
  },
};
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';
@import '../styles/mixins.scss';
$header-height: 190px;

.active-bg {
  background-color: $f;
}

* {
  box-sizing: border-box;
}

.card {
  height: $header-height;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  flex-wrap: nowrap;

  @include for-phone-only {
    flex-wrap: wrap;
  }
}

.logo-card {
  height: $header-height;
  margin-right: 8px;
  align-self: flex-end;

  @include for-phone-only {
    width: 50%;
  }
}

.picture-box {
  height: $header-height;

  @include for-phone-only {
    max-width: 50%;
  }
}

.picture {
  height: inherit;
  overflow: hidden;
  border: 1px solid $f;

  @include for-phone-only {
    height: 100%;
  }
}

.info {
  height: $header-height;
  padding: 16px;
  position: relative;
  box-sizing: border-box;
  width: 400px;

  @include for-phone-only {
    width: 100%;
  }

  @include for-tablet-portrait-up {
    min-width: 450px;
  }
}

span {
  color: white;
  font-family: Helvetica;
}

.user-info {
  position: absolute;
  top: 16px;
  align-self: flex-start;
  z-index: 1;
}

.user-edit {
  position: absolute;
  bottom: 16px;
  align-items: center;
}

</style>
