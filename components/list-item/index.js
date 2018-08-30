import ListItem from './list-item.vue';

ListItem.install = function (Vue) {
    Vue.component(ListItem.name, ListItem);
}

export default ListItem;