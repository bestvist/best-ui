import Layout from './layout.vue';
import Header from '../header';
import Content from '../content';
import Slider from '../slider';
import Footer from '../footer';
import Row from '../row';
import Col from '../col';

const components = [
    Layout,
    Header,
    Content,
    Slider,
    Footer,
    Row,
    Col
]

Layout.install = function (Vue) {
    components.forEach(c => {
        Vue.component(c.name, c);
    })
}

export default Layout;