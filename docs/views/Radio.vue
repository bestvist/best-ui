<template>
    <div>
        <div class="panel">
            <b-radio label="1"
                v-model="radio1"
                @click="handleClick"
                @change="handleChange">单选框</b-radio>
            <b-radio label="2"
                v-model="radio1">单选框</b-radio>
        </div>

        <div class="panel">
            <b-radio disabled></b-radio>
            <b-radio label="单选框"
                checked
                disabled></b-radio>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radio1: "1"
        };
    },
    methods: {
        handleClick() {
            console.log("click", this.radio1);
        },
        handleChange() {
            console.log("change", this.radio1);
        }
    },
    mounted() {
    }
};
</script>

<style lang="scss">
.b-radio + .b-radio {
    margin-left: 20px;
}
</style>
