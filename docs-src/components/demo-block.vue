<template>
    <div class="demo-block" :class="[{ 'hover': hovering }]" @mouseenter="hovering = true" @mouseleave="hovering = false">
        <slot name="source"></slot>
        <div class="meta" ref="meta">
            <div class="description" v-if="$slots.default">
                <slot></slot>
            </div>
            <slot name="highlight"></slot>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
    data() {
        return {
            hovering: false
        };
    }
};
</script>