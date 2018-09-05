<template>
    <label class="b-checkbox"
        :class="className"
        role="checkbox"
        @click="handleClick">
        <span class="b-checkbox__inner"
            :class="classNameInner">
        </span>
        <input class="b-checkbox__input"
            type="checkbox"
            aria-hidden="true"
            :name="name"
            :value="label"
            :disabled="disabled"
            :checked="currentValue"
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
    model: {
        prop: "checked",
        event: "change"
    },
    props: {
        label: String,
        name: String,
        checked: Boolean,
        disabled: Boolean,
        intermediate: Boolean
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
                "is-checked": this.currentValue,
                "is-disabled": this.disabled,
                "is-intermediate": this.intermediate && !this.currentValue
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
        handleChange(e){
            this.$emit("change", this.currentValue, e);
        }
    },
    created() {
        this.currentValue = this.checked;
    }
};
</script>
