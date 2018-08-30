import Transition from './collapse-transition.vue';

const components = [
    Transition
]

Transition.install = function (Vue) {
    components.forEach(c => {
        Vue.component(c.name, c);
    })
}

export default Transition;