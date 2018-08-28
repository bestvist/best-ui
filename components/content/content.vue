<template>
    <main class="be-content">
        <slot></slot>
    </main>
</template>

<script>
export default {
    name: "BeContent"
};
</script>

<style lang="scss">
@include b(content) {
    padding: $padding;
}
</style>
