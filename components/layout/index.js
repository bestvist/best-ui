import Layout from './index.vue';
import Header from '../header';
import Content from '../content';
import Slider from '../slider';
import Footer from '../footer';

const components = [
    Layout,
    Header,
    Content,
    Slider,
    Footer
]

Layout.install = function (Vue) {
    components.forEach(c => {
        Vue.component(c.name, Layout);
    })
}


export default Layout;