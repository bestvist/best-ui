<template>
    <li class="b-timeline-item">
        <div class="b-timeline-item__icon"></div>
        <div class="b-timeline-item__line"></div>
        <div class="b-timeline-item__content">
            <slot></slot>
        </div>
    </li>
</template>

<script>
export default {
    name: "BTimelineItem",
    componentName: "BTimelineItem"
};
</script>

