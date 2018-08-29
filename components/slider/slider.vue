<template>
    <aside class="b-slider" :style="{width:width}">
        <slot></slot>
    </aside>
</template>

<script>
export default {
    name: "BSlider",
    props: {
        width: String
    }
};
</script>
