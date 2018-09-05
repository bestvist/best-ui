<template>
    <div>
        <div class="panel">
            <b-switch checked v-model="value" @change="handleChange"></b-switch>
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
    methods:{
        handleChange(){
            // console.log(this.value);
        }
    },
    mounted() {
        // setInterval(() => {
        //     this.value = !this.value;
        // }, 1000);
    }
};
</script>

<style lang="scss">
</style>
