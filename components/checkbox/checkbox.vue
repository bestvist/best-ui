<template>
    <label class="b-checkbox"
        role="checkbox"
        @click="handleClick">
        <span class="b-checkbox__inner"
            :class="classNameInner">

        </span>
        <input class="b-checkbox__input"
            type="checkbox"
            aria-hidden="true"
            :name="name"
            :checked="checked"
            @change="handleChange">
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
        name: String,
        checked: Boolean
    },
    computed: {
        classNameInner() {
            return {
                "is-checked": this.checked
            };
        }
    },
    methods: {
        handleClick(e) {
            this.checked = !this.checked;
            this.$emit("click", e);
        },
        handleChange(e) {
            this.$emit("change", e.target.checked, e);
        }
    }
};
</script>
