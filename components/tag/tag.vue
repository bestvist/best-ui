<template>
    <span class="b-tag" :class="className">
        <slot></slot>
        <b-icon v-if="deletable" name="close-circle-fill" class="b-tag__delete" @click="handleClose"></b-icon>
    </span>
</template>

<script>
import bIcon from "../icon";
export default {
    name: "BTag",
    componentName: "BTag",
    components: {
        bIcon
    },
    props: {
        type: String,
        size: String,
        deletable: Boolean
    },
    computed: {
        className() {
            return {
                [`b-tag--${this.type || "default"}`]: true,
                [`b-tag--${this.size}`]: this.size
            };
        }
    },
    methods: {
        handleClose() {
            this.$emit("delete");
        }
    }
};
</script>

