<template>
    <div>
        <div class="panel">
            <b-progress :percent="80"></b-progress>
            <b-progress type="primary" :percent="10"></b-progress>
            <b-progress type="success" :percent="20"></b-progress>
            <b-progress type="warning" :percent="30"></b-progress>
            <b-progress type="danger" :percent="40"></b-progress>
            <b-progress type="info" :percent="50"></b-progress>
        </div>

        <div class="panel">
            <b-progress :percent="80" stroke-width="20"></b-progress>
            <b-progress type="primary" :percent="10" stroke-width="20"></b-progress>
            <b-progress type="success" :percent="20" stroke-width="20"></b-progress>
            <b-progress type="warning" :percent="30" stroke-width="20"></b-progress>
            <b-progress type="danger" :percent="40" stroke-width="20"></b-progress>
            <b-progress type="info" :percent="50" stroke-width="20"></b-progress>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.b-progress + .b-progress {
    margin-top: 20px;
}
</style>
