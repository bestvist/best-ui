import List from './list.vue';
import ListItem from '../list-item';

const components = [
    List,
    ListItem,
]

List.install = function (Vue) {
    components.forEach(c => {
        Vue.component(c.name, c);
    })
}


export default List;