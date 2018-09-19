<template>
    <span class="b-time" v-on="$listeners">{{relativeTime}}</span>
</template>

<script>
import getRelativeTime from "./time";
export default {
  name: "BTime",
  componentName: "BTime",
  props: {
    time: [Number, Date, String]
  },
  computed: {
    relativeTime() {
      return getRelativeTime(this.time);
    }
  }
};
</script>

