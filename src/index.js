import Layout from '../components/layout';

const components = [
    Layout,
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