<template>
    <div class="b-collapse">
        <div class="b-collapse__title" @click="handleClick">{{title}}
            <b-icon name="right" class="b-collapse__icon" :class="{'active': show}"></b-icon>
        </div>
        <slot name="title" class="b-collapse__title" v-if="!title&&$slots.title"></slot>
        <b-collapse-transition>
            <slot class="b-collapse__content" v-if="show"></slot>
        </b-collapse-transition>
    </div>
</template>

<script>
import BIcon from "../icon";
import BCollapseTransition from "../transition";
export default {
  name: "BCollapse",
  componentName: "BCollapse",
  components: { BCollapseTransition, BIcon },
  props: {
    title: String,
    open: Boolean
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    }
  },
  created() {
    this.show = this.open;
  }
};
</script>

