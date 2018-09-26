<template>
    <div>
        <div class="panel">
            <b-popover placement="bottom" pop-class="popover">
                <b-btn>click trigger</b-btn>
                <p slot="title">Popover</p>
                <p slot="content">这是一个click popover</p>
            </b-popover>

            <b-popover placement="right" trigger="hover">
                <b-btn>hover trigger</b-btn>
                <p slot="title">Popover</p>
                <p slot="content">这是一个hover popover</p>
            </b-popover>
        </div>

    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.b-popover + .b-popover {
    margin-left: 20px;
}
</style>
