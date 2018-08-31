<template>
    <i class="b-icon" :class="className">
        <slot></slot>
    </i>
</template>

<script>
export default {
    name: "BIcon",
    componentName: "BIcon",
    props: {
        name: String
    },
    computed: {
        className() {
            const icon = `b-icon-${this.name}`;
            return {
                [icon]: this.name
            };
        }
    }
};
</script>

