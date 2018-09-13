<template>
    <div>
        <div class="panel">
            <b-alert type="success" title="success">This is success alert.</b-alert>
            <b-alert type="warning" title="warning">This is warning alert.</b-alert>
            <b-alert type="danger" title="danger">This is danger alert.</b-alert>
            <b-alert type="info" title="info">This is info alert.</b-alert>
        </div>
        <div class="panel">
            <b-alert type="success" icon center title="success"></b-alert>
            <b-alert type="warning" icon center title="warning"></b-alert>
            <b-alert type="danger" icon center title="danger"></b-alert>
            <b-alert type="info" icon center title="info"></b-alert>
        </div>
        <div class="panel">
            <b-alert type="success" icon deletable title="success">This is success alert,deletable.</b-alert>
            <b-alert type="warning" icon deletable title="warning">This is warning alert,deletable.</b-alert>
            <b-alert type="danger" icon deletable title="danger">This is danger alert,deletable.</b-alert>
            <b-alert type="info" icon deletable title="info">This is info alert,deletable.</b-alert>
        </div>
    </div>
</template>

<style lang="scss">
.b-alert {
    margin-bottom: 20px;
}
</style>

