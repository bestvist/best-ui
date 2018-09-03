<template>
    <header class="b-header"
        :style="{height:height}">
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: "BHeader",
    props: {
        height: String
    }
};
</script>

