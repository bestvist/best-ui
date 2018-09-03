<template>
    <div class="b-input">
        <template v-if="type!=='textarea'">
            <span v-if="prefix"
                ref="prefix"
                class="b-input__prefix">{{prefix}}</span>
            <input ref="input"
                class="b-input__inner"
                :value="value"
                :name="name"
                :minlength="min"
                :maxlength="max"
                :disabled="disabled"
                :readonly="readonly"
                :step="step"
                :autofocus="autofocus"
                :autocomplete="autocomplete"
                :placeholder="placeholder"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @chang="handleChange"
                @compositionstart="handleComposition"
                @compositionupdate="handleComposition"
                @compositionend="handleComposition" />
            <span v-if="suffix"
                ref="suffix"
                class="b-input__suffix">{{suffix}}</span>
        </template>
        <textarea v-else
            class="b-textarea__inner"
            :style="{'height':height}"
            :class="className"
            :value="value"
            :name="name"
            :minlength="min"
            :maxlength="max"
            :disabled="disabled"
            :readonly="readonly"
            :step="step"
            :autofocus="autofocus"
            :placeholder="placeholder"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @chang="handleChange"
            @compositionstart="handleComposition"
            @compositionupdate="handleComposition"
            @compositionend="handleComposition"></textarea>
            <span class="b-input__error-msg" v-if="errorMsg"></span>
    </div>
</template>

<script>
export function isKorean(text) {
    const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
    return reg.test(text);
}
export default {
    name: "BInput",
    componentName: "BInput",
    props: {
        type: {
            type: String,
            default: "input"
        },
        value: [String, Number],
        name: String,
        min: Number,
        max: Number,
        placeholder: String,
        disabled: Boolean,
        readonly: Boolean,
        resize: {
            type: Boolean,
            default: false
        },
        step: [String, Number],
        autofocus: Boolean,
        height: String, // default: 80px
        autocomplete: {
            type: String,
            default: "off"
        },
        prefix: String,
        suffix: String,
        prefixIcon: String,
        suffixIcon: String,
        errorMsg:''
    },
    data() {
        return {
            currentValue:
                this.value === void 0 || this.value === null ? "" : this.value,
            isOnComposition: false,
            valueBeforeComposition: null
        };
    },
    computed: {
        className() {
            return {
                "is-resize": this.resize
            };
        }
    },
    methods: {
        handleInput(e) {
            const value = e.target.value;
            this.setCurrentValue(value);
            if (this.isOnComposition) return;
            this.$emit("input", value);
        },
        handleFocus(e) {
            this.$emit("focus", e);
        },
        handleBlur(e) {
            this.$emit("blur", e);
        },
        handleChange(e) {
            this.$emit("change", e.target.value);
        },
        handleComposition(e) {
            if (e.type === "compositionend") {
                this.isOnComposition = false;
                this.currentValue = this.valueBeforeComposition;
                this.valueBeforeComposition = null;
                this.handleInput(e);
            } else {
                const value = e.target.value;
                const lastChar = value[value.length - 1] || "";
                this.isOnComposition = !isKorean(lastChar);
                if (this.isOnComposition && e.type === "compositionstart") {
                    this.valueBeforeComposition = value;
                }
            }
        },
        setCurrentValue(value) {
            if (this.isOnComposition && value === this.valueBeforeComposition)
                return;
            this.currentValue = value;
        },
        computeOffset($input, place) {
            const rect =
                this.$refs[place] && this.$refs[place].getBoundingClientRect();
            let padding = rect ? `${rect.right - rect.left + 10}px` : null;

            if (place === "prefix") {
                $input.style.paddingLeft = padding;
            } else {
                $input.style.paddingRight = padding;
            }
        },
        updateOffset() {
            const input = this.$refs["input"];
            if (input) {
                this.computeOffset(input, "prefix");
                this.computeOffset(input, "suffix");
            }
        }
    },
    mounted() {
        this.updateOffset();
    },
    updated() {
        this.$nextTick(() => {
            this.updateOffset();
        });
    }
};
</script>

