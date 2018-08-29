<template>
    <div class="b-col" :class="className" :style="style">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BCol",
    componentName: "BCol",
    props: {
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        },
        push: {
            type: Number,
            default: 0
        },
        pull: {
            type: Number,
            default: 0
        }
    },
    computed: {
        gutter() {
            let parent = this.$parent;
            while (parent && parent.$options.componentName !== "BRow") {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        },
        style() {
            const padding = `${this.gutter / 2}px`;
            return {
                paddingLeft: padding,
                paddingRight: padding
            };
        },
        className() {
            const classList = [];
            ["span", "offset", "push", "pull"].forEach(item => {
                if (this[item]) {
                    item === "span"
                        ? classList.push(`b-col-${this.span}`)
                        : classList.push(`b-col-${item}-${this[item]}`);
                }
            });
            return classList.join(" ");
        }
    }
};
</script>

