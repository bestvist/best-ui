<template>
  <div class="b-progress">
    <div class="b-progress-bar" :class="barClassName">
      <div class="b-progress-bar__outer" :style="{height:strokeWidth+'px'}">
        <div class="b-progress-bar__inner" :style="{width:percentText}"></div>
      </div>
    </div>
    <span v-if="percent || percent==0" class="b-progress__text">{{percentText}}</span>
  </div>
</template>

<script>
export default {
    name: "BProgress",
    componentName: "BProgress",
    props: {
        type: String,
        percent: Number,
        strokeWidth: [Number,String]
    },
    computed: {
        percentText() {
            let percent = this.percent || 0;
            percent = percent > 100 ? 100 : percent;
            return `${percent}%`;
        },
        barClassName() {
            return {
                [`b-progress-bar--${this.type}`]: this.type
            };
        }
    }
};
</script>

