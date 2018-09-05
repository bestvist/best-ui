import Card from './card.vue';
import CardContent from '../card-content';

const components = [
    Card,
    CardContent,
]

Card.install = function (Vue) {
    components.forEach(c => {
        Vue.component(c.name, c);
    })
}

export default Card;