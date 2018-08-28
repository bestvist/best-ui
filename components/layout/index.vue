<template>
    <section class="be-layout">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: "BeLayout"
};
</script>

<style lang="scss">
@include b(layout) {
    display: flex;
    flex: 1;
    flex-basis: auto;
    flex-direction: column;
    box-sizing: border-box;
}
</style>

