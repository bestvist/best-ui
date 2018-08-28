<template>
    <footer class="be-footer" :style="{height:height}">
        <slot></slot>
    </footer>
</template>

<script>
export default {
    name: "BeFooter",
    props: {
        height: {
            type: String
        }
    }
};
</script>

<style lang="scss">
@include b(footer) {
    padding: $padding;
    background: $bg;
}
</style>
