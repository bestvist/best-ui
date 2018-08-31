<script>
export default {
    name: "BButton",
    componentName: "BButton",
    props: {
        color: String,
        textColor: String,
        icon: String,
        size: String,
        type: String,
        round: Boolean,
        circle: Boolean,
        flat: Boolean,
        full: Boolean,
        disabled: Boolean,
        loading: Boolean,
        href: String,
        nativeType: String // 原生type
    },
    computed: {
        className() {
            return {
                [`b-button--${this.type}`]: this.type,
                [`b-button--${this.size}`]: this.size,
                "is-disabled": this.disabled,
                "is-loading": this.loading,
                "is-round": this.round,
                "is-circle": this.circle,
                "is-flat": this.flat,
                "is-full": this.full
            };
        }
    },
    methods: {
        handleClick(e) {
            this.$emit("click", e);
        }
    },
    render(h) {
        let tagName = this.href ? "a" : "button";
        return h(
            tagName,
            {
                attrs: {
                    type: this.nativeType,
                    disabled: this.disabled || this.loading
                },
                staticClass: "b-button",
                class: this.className,
                style: {
                    "background-color": this.color,
                    color: this.textColor
                },
                on: {
                    click: this.handleClick
                }
            },
            this.$slots.default
        );
    }
};
</script>

