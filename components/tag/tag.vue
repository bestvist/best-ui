<template>
    <div class="b-tag"
        :style="style">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BTag",
    componentName: "BTag",
    computed: {
        style() {
            return {
                
            };
        }
    }
};
</script>

