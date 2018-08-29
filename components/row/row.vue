<template>
    <div class="b-row" :style="style">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BRow",
    componentName: 'BRow',
    props: {
        gutter: Number
    },
    computed: {
        style() {
            const margin = `-${this.gutter / 2}px`;
            return {
                marginLeft: margin,
                marginRight: margin
            };
        }
    }
};
</script>

