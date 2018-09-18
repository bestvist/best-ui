<template>
    <div>
        <div class="panel">
            <b-collapse :title="'b-collapse'" :show="true">
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

<style lang="scss">
.b-collapse + .b-collapse {
    margin-bottom: 20px;
}
</style>

