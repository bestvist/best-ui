import Collapse from './collapse.vue';
import Icon from '../icon';

Collapse.install = function (Vue) {
    Vue.component(Collapse.name, Collapse);
    Vue.component(Icon.name, Icon);
}

export default Collapse;