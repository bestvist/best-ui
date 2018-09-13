import Alert from './alert.vue';
import Icon from '../icon';

Alert.install = function (Vue) {
    Vue.component(Alert.name, Alert);
    Vue.component(Icon.name, Icon);
}

export default Alert;