<template>
    <transition name="b-slide">
        <div class="b-carousel-item">
            <slot></slot>
        </div>
    </transition> 
</template>

<script>
export default {
  name: "BCarouselItem",
  componentName: "BCarouselItem",
  
};
</script>

