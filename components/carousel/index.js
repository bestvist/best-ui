import Carousel from './carousel.vue';
import CarouselItem from '../carousel-item';
import Icon from '../icon';

Carousel.install = function (Vue) {
    Vue.component(Carousel.name, Carousel);
    Vue.component(CarouselItem.name, CarouselItem);
    Vue.component(Icon.name, Icon);
}

export default Carousel;