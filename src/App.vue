<template>
  <div id="app">
    <transition name="moveUp">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<style lang="scss">
@import './styles/variables.scss';
@import './styles/mixins.scss';

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// ----------------- typograph styleguide -------------------
* {
  font-family: Helvetica, 'Roboto Mono';
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.content {
  border-radius: 0px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.container {
  @include for-desktop-up {
    max-width: 1000px;
  }
}

// ------------------- animations ---------------------------
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0%{
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}

@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}

// ---------------- patterns components -------------------
.button {
    border-radius: 0px !important;
    box-shadow: none;
}

// --------------- flexbox instances ----------------------
.column {
display: flex;
flex-direction: column;
}

.row {
display: flex;
flex-direction: row;
}

// ------------------- margins ---------------------------
.margin-top8 {
  margin-top: 8px;
}

// ------------- spaced -> mix margins -------------------
.spaced-8 {
  margin: 4px;
  margin-bottom: 4px;
  margin-left: 0;
}


// ----------------- paddings ----------------------------
.padding-0 {
  padding: 0px;
}

.padding-8 {
  padding: 8px;
}

</style>
