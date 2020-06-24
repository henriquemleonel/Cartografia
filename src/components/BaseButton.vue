<template>
  <button
    v-if="!to"
    class="base-button"
    :class="[
      theme,
      { 'disabled': disabled }
    ]"
    @click="$emit('click')"
  >
    <slot/>
  </button>
  <router-link
    v-else
    class="base-button"
    :class="[
      theme,
      { 'disabled': disabled }
    ]"
    :to="to"
  >
    <slot/>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      default: null,
    },
    theme: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: #000;
$secondaryColor: #D0D0D0;

.base-button {
  border: 0;
  padding: 8px 12px;
  border-radius: 0px;
  outline: none;
  cursor: pointer;
  transition: 0.2s background ease-out;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  min-width: 80px;
}

.base-button.disabled {
  background: #D0D0D0;
  color: #888;
  cursor: default;
}

.base-button:not(.disabled).flat {
  background: transparent;
  color: #FFF;
  height: 24px;
  margin-top: -8px;
}

// Primary
.base-button:not(.disabled).primary {
  background: $primaryColor;
  color: #FFF;
  text-transform: lowercase;
}

.base-button:not(.disabled).primary:hover {
   background: lighten($primaryColor, 7%);
}

// secondary
.base-button:not(.disabled).secondary {
  text-transform: lowercase;
  background: transparent;
  color: #000;
  border: 2px solid black;
}

.base-button:not(.disabled).secondary:hover {
  background: lighten($secondaryColor, 2%);
}

// Borderless
.base-button:not(.disabled).borderless {
  background: transparent;
  color: $primaryColor;
}

.base-button:not(.disabled).borderless:hover {
  background: lighten($primaryColor, 90%);
}

</style>
