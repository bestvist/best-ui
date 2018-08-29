<template>
    <div>
        <div class="panel">
            <b-row :gutter="20">
                <b-col>
                    <div class="docs-col"></div>
                </b-col>
            </b-row>
        </div>
        <div class="panel">
            <b-row :gutter="20">
                <b-col :span="12" :offset="6">
                    <div class="docs-col"></div>
                </b-col>
                <b-col :span="4" :push="8">
                    <div class="docs-col"></div>
                </b-col>
            </b-row>
        </div>
        <div class="panel">
            <b-row>
                <b-col :span="3" :pull="1">
                    <div class="docs-col"></div>
                </b-col>
                <b-col :span="17">
                    <div class="docs-col"></div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "docs-grid"
};
</script>

<style lang="scss">
.docs-col {
    height: 50px;
    border-radius: 3px;
    background: #eee;
}
</style>

