<template>
    <section class="b-layout"
        :class="{'is-horizontal':horizontal}">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: "BLayout",
    props: {
        horizontal: Boolean
    }
};
</script>

