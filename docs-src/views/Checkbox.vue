<template>
    <div>
        <div class="panel">
            <b-checkbox label="复选框" v-model="value"></b-checkbox>
        </div>

        <div class="panel">
            <b-checkbox label="复选框"
                disabled></b-checkbox>
            <b-checkbox label="复选框"
                checked
                disabled></b-checkbox>
        </div>

        <div class="panel">
            <b-checkbox label="复选框"
                intermediate></b-checkbox>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: false
        };
    },
    methods: {
    },
    mounted() {}
};
</script>

<style lang="scss">
.b-checkbox + .b-checkbox {
    margin-left: 20px;
}
</style>
