<template>
    <label class="b-checkbox"
        :class="classNameCheckbox"
        role="checkbox"
        @click="handleClick">
        <span class="b-checkbox__inner"
            :class="classNameInner">
        </span>
        <input class="b-checkbox__input"
            type="text"
            aria-hidden="true"
            :name="name"
            :value="label"
            :disabled="disabled"
            :checked="currentValue">
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
        value: Boolean,
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
        classNameCheckbox() {
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
    watch: {
        value() {
            if (this.currentValue !== this.value) {
                this.currentValue = this.value;
            }
        },
        currentValue() {
            const val = this.currentValue;
            this.$emit("input", val);
            this.$emit("change", val);
        }
    },
    methods: {
        handleClick(e) {
            if (/input/i.test(e.target.tagName) && !this.disabled) {
                this.currentValue = !this.currentValue;
                this.$emit("click", e);
            }
        }
    },
    created() {
        this.currentValue = this.checked || this.value;
    }
};
</script>
