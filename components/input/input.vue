<template>
    <div class="b-input">
        <template v-if="type!=='textarea'">
            <span></span>
            <input class="b-input__inner"
                :value="value"
                :disabled="disabled"
                :readonly="readonly"
                :autocomplete="autocomplete"
                :placeholder="placeholder" />
        </template>
        <textarea class="b-textarea__inner"
            v-else
            :value="value"
            :disabled="disabled"
            :readonly="readonly"
            :resize="'none'"
            :placeholder="placeholder"></textarea>
    </div>
</template>

<script>
export default {
    name: "BInput",
    componentName: "BInput",
    props: {
        type: {
            type: String,
            default: "input"
        },
        value: [String, Number],
        placeholder: String,
        disabled: Boolean,
        readonly: Boolean,
        resize: {
            type: Boolean,
            default: false
        },
        autocomplete: {
            type: String,
            default: "off"
        },
        prefix: String,
        suffix: String,
        prefixIcon: String,
        suffixIcon: String
    }
};
</script>

