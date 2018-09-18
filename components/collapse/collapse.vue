<template>
    <div class="b-collapse">
        <div class="b-collapse__title">{{title}}</div>
        <slot name="title" class="b-collapse__title" v-if="!title&&$slots.title"></slot>
        <b-collapse-transition>
            <slot class="b-collapse__content" v-if="show"></slot>
        </b-collapse-transition>
    </div>
</template>

<script>
import BCollapseTransition from "../transition";
export default {
    name: "BCollapse",
    componentName: "BCollapse",
    components: { BCollapseTransition },
    props: {
        title: String,
        show: Boolean
    },
    computed: {}
};
</script>

