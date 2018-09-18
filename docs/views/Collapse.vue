<template>
    <div>
        <div class="panel">
            <b-collapse :title="'b-collapse'" v-model="visible">
                <div>
                    <ul>
                        <li>collapse1</li>
                        <li>collapse2</li>
                        <li>collapse3</li>
                        <li>collapse4</li>
                    </ul>
                </div>
            </b-collapse>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            visible: true
        }
    }
}
</script>


<style lang="scss">
.b-collapse + .b-collapse {
    margin-bottom: 20px;
}
</style>

