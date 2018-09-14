<template>
    <div v-show="visible" class="b-alert" :class="className" role="alert">
        <b-icon v-if="icon && iconName" :name="iconName" class="b-alert__icon"></b-icon>
        <div class="b-alert__content">
            <div v-if="title" class="b-alert__title">{{title}}</div>
            <slot name="title" v-if="!title && $slots.title" class="b-alert__title"></slot>
            <slot class="b-alert__description"></slot>
        </div>

        <b-icon v-if="deletable" name="close-circle-fill" class="b-alert__delete" @click="handleDelete"></b-icon>
    </div>
</template>

<script>
import BIcon from "../icon";
export default {
    name: "BAlert",
    componentName: "BAlert",
    components: {
        BIcon
    },
    props: {
        title: String,
        type: String,
        icon: Boolean,
        center: Boolean,
        deletable: Boolean
    },
    data() {
        return {
            visible: true
        };
    },
    computed: {
        className() {
            return {
                [`b-alert--${this.type}`]: this.type,
                "is-center": this.center
            };
        },
        iconName() {
            const icon = {
                success: "check-circle-fill",
                warning: "warning-circle-fill",
                danger: "close-circle-fill",
                info: "info-circle-fill"
            };
            return icon[this.type];
        }
    },
    methods: {
        handleDelete() {
            console.log('ece')
            this.visible = false;
            this.$emit("delete");
        }
    }
};
</script>

