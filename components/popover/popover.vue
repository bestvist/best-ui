<template>
    <div class="b-popover">
        <button ref="reference" @click="handleClick">button</button>
        <div ref="popper" v-show="visible" placement="top">
            <ul>
                <li>111</li>
                <li>222</li>
                <li>333</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Popper from "../../src/utils/popper";
export default {
    name: "BPopover",
    componentName: "BPopover",
    mixins: [Popper],
    props: {
        trigger: {
            type: String,
            default: "click"
        },
        title: String,
        content: String,
        placement: String,
        offset: Number,
        width: [String, Number],
        popperClass: String,
        options: Object
    },
    data() {
        return {
            visible: false
        };
    },
    methods: {
        handleClick() {
            this.visible = !this.visible;
        }
    }
};
</script>
