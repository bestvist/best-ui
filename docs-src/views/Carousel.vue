<template>
    <div>
        <div class="panel">
            <b-carousel>
                <b-carousel-item v-for="i in 4" :key="i" v-if="visible">
                    {{i}}
                </b-carousel-item>

                <b-carousel-item v-if="!visible">
                    123
                </b-carousel-item>
            </b-carousel>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            visible: true,
        }
    },
    mounted(){
        setInterval(()=>{
            this.visible = !this.visible;
        },2000);
    }
}
</script>


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
