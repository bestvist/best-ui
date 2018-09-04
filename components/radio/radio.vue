<template>
    <label class="b-radio"
        :class="classNameCheckbox"
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
            @input="handleInput"
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
        classNameCheckbox() {
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
            const reg = /input/i;
            if (reg.test(e.target.tagName) && !this.disabled) {
                this.$nextTick(() => {
                    this.$emit("click", e);
                });
            }
        },
        handleChange(e) {
            this.$emit("change", this.label, e);
        },
        handleInput(e) {
            this.$emit("input", this.label, e);
        }
    }
};
</script>
