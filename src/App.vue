<template>
  <div id="app">
    <transition name="">
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
}

.content-center {
  // background-color: white;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
}

.fixed-logo {
  position: absolute;
  top: 32px;
  left: 32px;
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
  animation: moveUp 0.5s linear;
}

@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(-500px);
  }
}

// ---------------- buttons -------------------------
.btn-primary {
  box-shadow: none;
  // width: 150px;
  height: 50px;
  border-radius: 0px;
  background-color: black;
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

.space-around {
  justify-content: space-around;
}

.space-between {
  justify-content: space-between;
}

// ------------------- margins ---------------------------
.margin-top8 {
  margin-top: 8px;
}

.margin-top16 {
  margin-top: 16px;
}

.margin-top32 {
  margin-top: 32px;
}

.margin-left8 {
  margin-left: 8px;
}

.margin-left16 {
  margin-left: 16px;
}

.margin-rigth16 {
  margin-right: 16px;
}

// ------------- spaced -> mix margins -------------------
.spaced-8 {
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 0;
}

.spaced-16 {
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 0;
}

.spaced-32 {
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 0;
}


// ----------------- paddings ----------------------------
.padding-0 {
  padding: 0px;
}

.padding-8 {
  padding: 8px;
}

// ---------------- borders -----------------------------

.border-white {
  border: 2px solid white;
}

</style>
