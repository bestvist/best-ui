<template>
    <span class="b-popover">
        <div class="b-popover__ref" ref="reference" @click="handleClick" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <slot></slot>
        </div>
        <transition name="b-fade">
            <div class="b-popover__popper" :class="popperClass" :style="{width: width}" ref="popper" v-show="visible"  @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="b-popover__title" v-if="$slots.title||title">
                    <slot class="b-popover__title" name="title" v-if="$slots.title"></slot>
                    <template v-if="!$slots.title&&title">{{title}}</template>
                </div>
                <slot name="content"></slot>

            </div>
        </transition>
    </span>
</template>

<script>
import Popper from "../../src/utils/popper";
import { on, off } from "../../src/utils/dom";
export default {
    name: "BPopover",
    componentName: "BPopover",
    mixins: [Popper],
    props: {
        trigger: {
            type: String,
            default: "click"
        },
        popClass: String,
        title: String,
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
                [`${this.popClass}`]: !!this.popClass
            };
        }
    },
    methods: {
        handleClick() {
            if (this.trigger === "click") {
                this.visible = !this.visible;
            }
        },
        handleDocumentClick(e) {
            let reference = this.reference || this.$refs.reference;
            const popper = this.popper || this.$refs.popper;
            if (
                !reference &&
                this.$slots.reference &&
                this.$slots.reference[0]
            ) {
                reference = this.referenceElm = this.$slots.reference[0].elm;
            }
            if (
                !this.$el ||
                !reference ||
                this.$el.contains(e.target) ||
                reference.contains(e.target) ||
                !popper ||
                popper.contains(e.target)
            )
                return;
            this.visible = false;
        },
        handleMouseEnter() {
            if (this.trigger === "hover") {
                clearTimeout(this._timer);
                this.visible = true;
            }
        },
        handleMouseLeave() {
            if (this.trigger === "hover") {
                clearTimeout(this._timer);
                this._timer = setTimeout(() => {
                    this.visible = false;
                }, 200);
            }
        }
    },
    mounted() {
        if (this.trigger === "click") {
            on(document, "click", this.handleDocumentClick);
        }
    },
    destroyed() {
        off(document, "click", this.handleDocumentClick);
    }
};
</script>
