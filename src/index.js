import './styles/index.scss';

import Col from '../components/col';
import Content from '../components/content';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Row from '../components/row';
import Slider from '../components/slider';

const components = [
    Col,
    Content,
    Footer,
    Header,
    Layout,
    Row,
    Slider,
]

const install = function (Vue) {
    components.forEach(c => {
        Vue.component(c.name, c);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const ui = {
    version: process.env.VERSION,
    install,
    ...components,
}

export default ui;