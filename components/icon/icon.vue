<template>
    <svg class="b-icon" aria-hidden="true" v-on="$listeners">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
    name: "BIcon",
    componentName: "BIcon",
    props: {
        name: String
    },
    computed: {
        iconName() {
            return `#icon-${this.name}`;
        }
    }
};
</script>

