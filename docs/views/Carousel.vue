<template>
    <div>
        <div class="panel">
            <b-carousel>
                <b-carousel-item v-for="i in 4" :key="i">
                    {{i}}
                </b-carousel-item>
            </b-carousel>
        </div>
    </div>
</template>

<style lang="scss">
.b-carousel-item {
    text-align: center;
    line-height: 400px;
}

.b-carousel-item:nth-of-type(2n-1) {
    background: #eee;
}

.b-carousel-item:nth-of-type(2n) {
    background: #ccc;
}
</style>
