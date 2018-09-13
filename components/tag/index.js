import Tag from './tag.vue';
import Icon from '../icon';

Tag.install = function (Vue) {
    Vue.component(Tag.name, Tag);
    Vue.component(Icon.name, Icon);
}

export default Tag;