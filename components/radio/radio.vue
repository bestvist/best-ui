<template>
    <label class="b-radio"
        :class="className"
        role="radio"
        @click="handleClick">
        <span class="b-radio__inner"
            :class="classNameInner">
        </span>
        <input class="b-radio__input"
            type="radio"
            aria-hidden="true"
            :name="name"
            :value="label"
            :checked="value === label"
            :disabled="disabled"
            @change="handleChange">
        <span class="b-radio__label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
export default {
    name: "BRadio",
    componentName: "BRadio",
    model: {
        event: "change"
    },
    props: {
        label: String,
        value: {},
        name: String,
        checked: Boolean,
        disabled: Boolean
    },
    data() {
        return {};
    },
    computed: {
        className() {
            return {
                "is-disabled": this.disabled
            };
        },
        classNameInner() {
            return {
                "is-checked": this.value === this.label,
                "is-disabled": this.disabled
            };
        }
    },
    methods: {
        handleClick(e) {
            if (/input/i.test(e.target.tagName) && !this.disabled) {
                this.$nextTick(() => {
                    this.$emit("click", e);
                });
            }
        },
        handleChange(e) {
            this.$emit("change", this.label, e);
        }
    }
};
</script>
