import TimelineItem from './timeline-item.vue';
import Icon from '../icon';

TimelineItem.install = function (Vue) {
    Vue.component(TimelineItem.name, TimelineItem);
    Vue.component(Icon.name, Icon);
}

export default TimelineItem;