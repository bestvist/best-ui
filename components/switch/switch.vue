<template>
    <label class="b-switch"
        :class="className"
        role="checkbox"
        @click="handleClick">
        <span class="b-switch__inner"
            :class="classNameInner">
        </span>
        <input class="b-switch__input"
            type="checkbox"
            aria-hidden="true"
            :name="name"
            :value="label"
            :disabled="disabled"
            :checked="currentValue"
            @change="handleChange">
        <span class="b-switch__label"
            v-if="$slots.default || label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
export default {
    name: "BSwitch",
    componentName: "BSwitch",
    model: {
        prop: "checked",
        event: "change"
    },
    props: {
        label: String,
        name: String,
        checked: Boolean,
        disabled: Boolean
    },
    data() {
        return {
            currentValue: false
        };
    },
    computed: {
        className() {
            return {
                "is-disabled": this.disabled
            };
        },
        classNameInner() {
            return {
                "is-on": this.currentValue,
                "is-disabled": this.disabled
            };
        }
    },
    methods: {
        handleClick(e) {
            if (/input/i.test(e.target.tagName) && !this.disabled) {
                this.currentValue = !this.currentValue;
                this.$emit("click", e);
            }
        },
        handleChange(e) {
            this.$emit("change", this.currentValue, e);
        }
    },
    created() {
        this.currentValue = this.checked;
    }
};
</script>
