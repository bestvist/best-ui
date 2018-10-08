import BestUI from '../../src/index';

import 'highlight.js/styles/agate.css';
import VueHighlightJS from 'vue-highlight.js';

export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    Vue.use(VueHighlightJS);
    Vue.use(BestUI);
}