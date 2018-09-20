<template>
    <div>
        <div class="panel">
            <b-timeline>
                <b-timeline-item>
                    <h3>2016</h3>
                    <p>first</p>
                </b-timeline-item>
                <b-timeline-item>
                    <h3>2017</h3>
                    <p>second</p>
                </b-timeline-item>
                <b-timeline-item>
                    <h3>2018</h3>
                    <p>third</p>
                </b-timeline-item>
            </b-timeline>
        </div>

        <div class="panel">
            <b-timeline>
                <b-timeline-item color="green">
                    <h3>2016</h3>
                    <p>first</p>
                </b-timeline-item>
                <b-timeline-item color="blue">
                    <h3>2017</h3>
                    <p>second</p>
                </b-timeline-item>
                <b-timeline-item>
                    <h3>2018</h3>
                    <p>third</p>
                </b-timeline-item>
            </b-timeline>
        </div>

        <div class="panel">
            <b-timeline>
                <b-timeline-item color="green" icon="undo">
                    <h3>2016</h3>
                    <p>first</p>
                </b-timeline-item>
                <b-timeline-item color="blue" icon="redo">
                    <h3>2017</h3>
                    <p>second</p>
                </b-timeline-item>
                <b-timeline-item icon="sync">
                    <h3>2018</h3>
                    <p>third</p>
                </b-timeline-item>
            </b-timeline>
        </div>
    </div>
</template>

<style lang="scss">
h3 {
    display: inline-block;
    margin: 0;
}
</style>
