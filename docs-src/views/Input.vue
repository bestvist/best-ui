<template>
    <div>
        <div class="panel">
            <b-input v-model="value"
                @input="handleInput"></b-input>
        </div>
        <div class="panel">
            <b-input type="textarea"></b-input>
        </div>
        <div class="panel">
            <b-input prefix="$: "></b-input>
            <b-input suffix="qq.com"></b-input>
        </div>
        <div class="panel">
            <b-input :error-msg="`用户名错误<a href='/list'>链接</a>`"></b-input>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "input"
        };
    },
    methods: {
        handleInput() {
            console.log(this.value);
        }
    },
    mounted() {}
};
</script>
<style lang="scss">
</style>
