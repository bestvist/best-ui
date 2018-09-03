<template>
    <div>
        <div class="panel">
            <b-input v-model="value"></b-input>
        </div>
        <div class="panel">
            <b-input type="textarea"></b-input>
        </div>
        <div class="panel">
            <b-input prefix="$: "></b-input>
            <b-input suffix="qq.com"></b-input>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ""
        };
    },
    mounted() {
    }
};
</script>
<style lang="scss">
</style>
