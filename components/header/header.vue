<template>
    <header class="be-header" :style="{height:height}">
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: "BeHeader",
    props: {
        height: {
            type: String
        }
    }
};
</script>

<style lang="scss">
@include b(header) {
    padding: $padding;
    background: $bg;
}
</style>

