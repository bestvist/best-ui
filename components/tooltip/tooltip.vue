<template>
    <span class="b-tooltip">
        <div class="b-tooltip__ref" ref="reference" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <slot></slot>
        </div>
        <transition name="b-fade">
            <div class="b-tooltip__popper" :class="popperClass" :style="{width: width}" ref="popper" v-show="visible" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" role="tooltip" aria-hidden="true">
                <slot name="content" v-if="$slots.content"></slot>
                <template v-if="!$slots.content&&content">{{content}}</template>
            </div>
        </transition>
    </span>
</template>

<script>
import Popper from "../../src/utils/popper";
export default {
    name: "BTip",
    componentName: "BTip",
    mixins: [Popper],
    props: {
        theme: String,
        popClass: String,
        content: String,
        placement: {
            type: String,
            default: "bottom"
        },
        width: [String, Number]
    },
    data() {
        return {
            visible: false
        };
    },
    computed: {
        popperClass() {
            return {
                [`${this.popClass}`]: !!this.popClass,
                "is-light": this.theme === "light"
            };
        }
    },
    methods: {
        handleMouseEnter() {
            clearTimeout(this._timer);
            this.visible = true;
            document.body.appendChild(this.$refs['popper']);
        },
        handleMouseLeave() {
            clearTimeout(this._timer);
            this._timer = setTimeout(() => {
                this.visible = false;
            }, 200);
        }
    },
    mounted() {
        
    }
};
</script>
