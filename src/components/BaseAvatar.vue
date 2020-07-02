<template>
  <div
    class="base-avatar"
    :class="{ 'name': !src }"
    :style="{
      'background-image': `url(${src})`,
      'background-color': !src ? backgroundColor : '',
      'width': `${size}px`,
      'min-width': `${size}px`,
      'height': `${size}px`,
      'min-height': `${size}px`
    }"
  >
    <span
      v-if="!src && name"
      class="name-letter"
      :style="{
        'font-size': `${.45 * size}px`
      }"
    >
      {{ name[0] }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 40,
    },
  },
  computed: {
    backgroundColor() {
      return '#151515';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

$primaryColor: #151515;

.base-avatar {
  border-radius: 0px;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.base-avatar.name {
  display: flex;
  align-items: center;
  justify-content: center;
}

.name-letter {
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  user-select: none;
  text-transform: uppercase;
}

</style>
