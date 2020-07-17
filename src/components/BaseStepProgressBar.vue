<template>
  <div class="app-component">
    <ul class="progressbar">
      <li
        v-for="(item, index) in stepsContent"
        :id="index + 1"
        :key="index"
        :class="{ 'active': currentStep === index + 1}"
      >
        <!-- <span> {{ index }} </span> -->
        <span> {{ item }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StepProgressBar',
  props: {
    step: {
      type: Number,
      default: 1,
    },
    stepsContent: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentStep: 1,
      lastStep: 0,
      count: 0,
    };
  },
  watch: {
    step() {
      console.log('prop', this.step);
      if (this.step <= this.stepsContent.length && this.step > 0) {
        // console.log('prop', this.step);
        if (this.step > this.lastStep && this.count < (this.stepsContent.length - 1)) {
          this.nextStep();
          this.count += 1;
          this.lastStep = this.step - 1;
        }
        if (this.step < this.lastStep && this.count > 0) {
          this.prevStep();
          this.count -= 1;
          this.lastStep = this.step + 1;
        }
        console.log('step local', this.currentStep);
        console.log('last step', this.lastStep);
      } else {
        console.log('estouro');
        this.lastStep = this.step + 1; // PENSA AI MANO
        
      }
    },
  },
  methods: {
    nextStep() {
      this.currentStep += 1;
    },
    prevStep() {
      this.currentStep -= 1;
    },
  },
};
</script>

<style lang="scss" scoped>

$height: 32px;
$width: 32px;
$line-height: 32px;
$color: #ddd;

.progressbar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  counter-reset: step;
}

.progressbar li {
  list-style-type: none;
  float: left;
  position: relative;
  text-align: center;
  width: 33.33%;
}

.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  height: $height;
  width: $width;
  line-height: $line-height;
  border: 1px solid $color;
  display: block;
  text-align: center;
  margin: 0 auto 8px auto;
  border-radius: 2px;
  background-color: white;
}

.progressbar li:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: $color;
  top: 16px;
  left: -50%;
  z-index: -1;
}

.progressbar li:first-child:after {
  content: none;
}

.progressbar li.active {
  color: green;
}

.progressbar li.active:before {
  border-color: green;
}
</style>
