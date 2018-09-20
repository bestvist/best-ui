<template>
    <li class="b-timeline-item">
        <b-icon :name="icon||'circle'" class="b-timeline-item__icon" :style="{color: color}"></b-icon>
        <div class="b-timeline-item__line"></div>
        <div class="b-timeline-item__content">
            <slot></slot>
        </div>
    </li>
</template>

<script>
import BIcon from "../icon";
export default {
    name: "BTimelineItem",
    componentName: "BTimelineItem",
    components: { BIcon },
    props: {
        color: String,
        icon: String
    }
};
</script>

