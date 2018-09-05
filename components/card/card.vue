<template>
    <div class="b-card">
        <div class="b-card__header"
            v-if="$slots.header||title">
            <slot name="header"></slot>
            <template v-if="!$slots.header">{{title}}</template>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BCard",
    componentName: "BCard",
    props: {
        title: String
    }
};
</script>

