<template>
    <transition name="b-slide">
        <div class="b-carousel-item" v-if="visible">
            <slot></slot>
        </div>
    </transition> 
</template>

<script>
export default {
  name: "BCarouselItem",
  componentName: "BCarouselItem",
  data() {
    return {
      visible: true
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.visible = false;
    // }, 2000);
  }
};
</script>

