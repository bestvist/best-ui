<template>
  <div>
    <div class="panel">
      <b-layout>
        <b-header>header</b-header>
        <b-content class="content"></b-content>
        <b-footer>footer</b-footer>
      </b-layout>
    </div>
    <div class="panel">
      <b-layout>
        <b-header>header</b-header>
        <b-layout horizontal>
          <b-slider class="slider" width="200px">

          </b-slider>
          <b-content class="content">

          </b-content>
        </b-layout>
        <b-footer>footer</b-footer>
      </b-layout>
    </div>

  </div>
</template>

<script>
export default {
    name: "docs-layout",
    components: {}
};
</script>

<style lang="scss">
.content {
    height: 300px;
    background: rgb(247, 230, 186);
}

.slider {
    background: rgb(172, 199, 240);
}
</style>

