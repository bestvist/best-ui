// import './styles/index.scss';
import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import Content from '../components/content';
import Slider from '../components/slider';


const components = [
    Layout,
    Header,
    Footer,
    Content,
    Slider
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