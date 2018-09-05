<template>
    <div>
        <div class="panel">
            <b-switch v-model="value"
                @change="handleChange"></b-switch>
        </div>

        <div class="panel">
            <b-switch disabled></b-switch>
            <b-switch disabled
                checked></b-switch>
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
        handleChange() {
            console.log(this.value);
        }
    },
    mounted() {}
};
</script>

<style lang="scss">
.b-switch + .b-switch {
    margin-left: 20px;
}
</style>
