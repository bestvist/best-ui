<template>
    <div class="b-progress" :class="className">
        <div class="b-progress-bar">
            <div class="b-progress-bar__outer">
                <div class="b-progress-bar__inner"></div>
            </div>
        </div>
        <span class="b-progress__text">{{percent}}%</span>
    </div>
</template>

<script>
export default {
  name: "BProgress",
  componentName: "BProgress",
  props: {
    type: String,
    percent: Number
  },
  computed: {
    className() {
      return {
        [`b-progress--${this.type}`]: this.type
      };
    }
  }
};
</script>

