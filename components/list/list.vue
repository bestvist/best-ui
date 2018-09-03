<template>
    <ul class="b-list"
        :class="className">
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: "BList",
    componentName: "BList",
    computed: {
        nested() {
            let parent = this.$parent.$parent; // this.$parent: transition
            return parent && parent.$options.componentName === "BListItem";
        },
        className() {
            return {
                "is-nested": this.nested
            };
        }
    }
};
</script>

