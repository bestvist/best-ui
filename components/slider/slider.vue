<template>
    <aside class="be-slider">
        <slot></slot>
    </aside>
</template>

<script>
export default {
    name: "BeSlider"
};
</script>

<style lang="scss">
@include b(slider) {
    padding: $padding;
}
</style>
