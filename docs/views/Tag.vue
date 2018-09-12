<template>
    <div>
        <div class="panel">
            <b-tag>default</b-tag>
            <b-tag type="primary">primary</b-tag>
            <b-tag type="success">success</b-tag>
            <b-tag type="warning">warning</b-tag>
            <b-tag type="danger">danger</b-tag>
            <b-tag type="info">info</b-tag>
        </div>

        <div class="panel">
            <b-tag deletable>default</b-tag>
            <b-tag type="primary" deletable>primary</b-tag>
            <b-tag type="success" deletable>success</b-tag>
            <b-tag type="warning" deletable>warning</b-tag>
            <b-tag type="danger" deletable>danger</b-tag>
            <b-tag type="info" deletable>info</b-tag>
        </div>

        <div class="panel">
            <p>
                <b-tag size="large">large</b-tag>
                <b-tag>default</b-tag>
                <b-tag size="small">small</b-tag>
            </p>
            <p>
                <b-tag size="large" type="primary" deletable>large</b-tag>
                <b-tag type="primary" deletable>default</b-tag>
                <b-tag size="small" type="primary" deletable>small</b-tag>
            </p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.b-tag + .b-tag {
    margin-left: 20px;
}
</style>
