<template>
    <div>
        <!-- type -->
        <div class="panel">
            <b-button class="docs-button" v-for="(item,index) in button1" :key="index" :type="item.type">{{item.label}}</b-button>
        </div>
        <!-- link -->
        <div class="panel">
            <b-button class="docs-button" v-for="(item,index) in button2" :key="index" :href="item.link">{{item.label}}</b-button>
        </div>
        <!-- size -->
        <div class="panel">
            <b-button class="docs-button" v-for="(item,index) in button3" :key="index" :size="item.size">{{item.label}}</b-button>
        </div>
        <!-- round -->
        <div class="panel">
            <b-button class="docs-button" v-for="(item,index) in button1" :key="index" round :type="item.type">{{item.label}}</b-button>
        </div>
        <!-- circle -->
        <div class="panel">
            <b-button class="docs-button" v-for="(item,index) in button3" :key="index" circle :size="item.size">{{item.label}}</b-button>
        </div>
        <!-- full -->
        <div class="panel">
            <b-button class="docs-button" full>full</b-button>
        </div>
        <!-- disabled -->
        <div class="panel">
                <b-button class="docs-button" v-for="(item,index) in button1" :key="index" disabled :type="item.type">{{item.label}}</b-button>
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
