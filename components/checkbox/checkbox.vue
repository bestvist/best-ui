<template>
    <label class="b-checkbox"
        role="checkbox">
        <span class="b-checkbox__inner">

        </span>
        <input class="b-checkbox__input"
            type="checkbox"
            aria-hidden="true"
            :name="name">
        <span class="b-checkbox__label"
            v-if="$slots.default || label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
export default {
    name: "BCheckbox",
    componentName: "BCheckbox",
    props: {
        label: String,
        name: String
    }
};
</script>
