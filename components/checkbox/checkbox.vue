<template>
    <label class="b-checkbox"
        :class="classNameCheckbox"
        role="checkbox"
        @click="handleClick">
        <span class="b-checkbox__inner"
            :class="classNameInner">
        </span>
        <input class="b-checkbox__input"
            type="checkbox"
            aria-hidden="true"
            :name="name"
            :value="value"
            :disabled="disabled"
            @input="handleInput"
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
        checked: Boolean,
        disabled: Boolean,
        intermediate: Boolean
    },
    data() {
        return {
            value: false
        };
    },
    computed: {
        classNameCheckbox() {
            return {
                "is-disabled": this.disabled
            };
        },
        classNameInner() {
            return {
                "is-checked": this.value,
                "is-disabled": this.disabled,
                "is-intermediate": this.intermediate && !this.value
            };
        }
    },
    methods: {
        handleClick(e) {
            const reg = /input/i;
            if (reg.test(e.target.tagName) && !this.disabled) {
                this.value = !this.value;
                this.$emit("click", e);
            }
        },
        handleChange(e) {
            this.$emit("change", e.target.checked, e);
        },
        handleInput(e) {
            this.$emit("input", e.target.checked, e);
        }
    },
    created() {
        this.value = this.checked || this.value;
    }
};
</script>
