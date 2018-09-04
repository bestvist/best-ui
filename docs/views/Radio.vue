<template>
    <div>
        <div class="panel">
            <b-radio label="1"
                v-model="radio1"
                @click="handleClick">单选框</b-radio>
            <b-radio label="2"
                v-model="radio1"
                @click="handleClick">单选框</b-radio>
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
            radio1: "1",
            value: true
        };
    },
    methods: {
        handleClick() {
            console.log(this.radio1);
        }
    }
};
</script>

<style lang="scss">
.b-radio + .b-radio {
    margin-left: 20px;
}
</style>
