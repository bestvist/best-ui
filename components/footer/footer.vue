<template>
    <footer class="b-footer"
        :style="{height:height}">
        <slot></slot>
    </footer>
</template>

<script>
export default {
    name: "BFooter",
    props: {
        height: String
    }
};
</script>
