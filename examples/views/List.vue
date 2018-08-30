<template>
    <div>
        <b-list>
            <b-list-item v-for="(item,index) in list1" :key="index" @click="handleClick" :to="''">
                {{item.label}}
                <b-list slot="children">
                    <b-list-item v-for="(item,index) in list2" :key="index" :to="''">
                        {{item.label}}
                    </b-list-item>
                </b-list>
            </b-list-item>
        </b-list>
    </div>
</template>
<script>
const list1 = [{ label: "list" }, { label: "list" }, { label: "list" }];
const list2 = [
    { label: "list-children" },
    { label: "list-children" },
    { label: "list-children" }
];
export default {
    data() {
        return {
            list1: list1,
            list2: list2
        };
    },
    methods:{
        handleClick(){
            
        }
    }
};
</script>

<style lang="scss">
</style>

