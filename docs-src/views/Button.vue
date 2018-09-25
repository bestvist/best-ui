<template>
    <div>
        <!-- type -->
        <div class="panel">
            <b-btn class="docs-button" v-for="(item,index) in button1" :key="index" :type="item.type">{{item.label}}</b-btn>
        </div>
        <!-- link -->
        <div class="panel">
            <b-btn class="docs-button" v-for="(item,index) in button2" :key="index" :href="item.link">{{item.label}}</b-btn>
        </div>
        <!-- size -->
        <div class="panel">
            <b-btn class="docs-button" v-for="(item,index) in button3" :key="index" :size="item.size">{{item.label}}</b-btn>
        </div>
        <!-- round -->
        <div class="panel">
            <b-btn class="docs-button" v-for="(item,index) in button1" :key="index" round :type="item.type">{{item.label}}</b-btn>
        </div>
        <!-- circle -->
        <div class="panel">
            <b-btn class="docs-button" v-for="(item,index) in button3" :key="index" circle :size="item.size">{{item.label}}</b-btn>
        </div>
        <!-- flat -->
        <div class="panel">
            <b-btn class="docs-button" v-for="(item,index) in button1" :key="index" flat :type="item.type">{{item.label}}</b-btn>
        </div>
        <!-- full -->
        <div class="panel">
            <b-btn class="docs-button" full>full</b-btn>
        </div>
        <!-- disabled -->
        <div class="panel">
            <b-btn class="docs-button" v-for="(item,index) in button1" :key="index" disabled :type="item.type">{{item.label}}</b-btn>
        </div>
    </div>
</template>

<script>
const button1 = [
    { label: "default", type: "default" },
    { label: "primary", type: "primary" },
    { label: "success", type: "success" },
    { label: "warning", type: "warning" },
    { label: "danger", type: "danger" },
    { label: "info", type: "info" },
    { label: "text", type: "text" }
];

const button2 = [{ label: "link", link: "list" }];

const button3 = [
    { label: "large", size: "large" },
    { label: "normal", size: "normal" },
    { label: "small", size: "small" },
    { label: "mini", size: "mini" }
];

export default {
    data() {
        return {
            button1: button1,
            button2: button2,
            button3: button3
        };
    }
};
</script>


<style lang="scss">
.docs-button {
    margin: 10px;
}
</style>
