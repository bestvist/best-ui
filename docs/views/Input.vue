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
    mounted() {
    }
};
</script>
<style lang="scss">
</style>
