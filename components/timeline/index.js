import Timeline from './timeline.vue';
import TimelineItem from '../timeline-item';
import Icon from '../icon';

Timeline.install = function (Vue) {
    Vue.component(Timeline.name, Timeline);
    Vue.component(TimelineItem.name, TimelineItem);
    Vue.component(Icon.name, Icon);
}

export default Timeline;