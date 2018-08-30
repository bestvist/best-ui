<template>
  <div id="app">
    <b-layout class="container">
      <b-header>Best UI</b-header>
      <b-layout horizontal>
        <b-slider id="nav" :width="'200px'">
          <!-- <ul>
            <li v-for="(item,index) in nav" :key="index">
              <router-link :to="item.path">{{item.meta.title}}</router-link>
            </li>
          </ul> -->
          <b-list>
              <b-list-item v-for="(item,index) in nav" :key="index" :to="item.path">{{item.meta.title}}</b-list-item>
          </b-list>
        </b-slider>
        <b-content>
          <router-view/>
        </b-content>
      </b-layout>
      <b-footer>
        <a href="https://github.com/bestvist/best-ui" target="_blank">GitHub</a>
      </b-footer>
    </b-layout>
  </div>
</template>

<script>

export default {
    data() {
        return {
            nav: []
        };
    },
    mounted() {
        this.nav = this.$router.options.routes;
    }
};
</script>


<style lang="scss">
#app {
    height: 100%;
}

#nav {
    padding-left: 20px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);

    ul {
        list-style: none;
    }
    li {
        a {
            display: block;
            padding: 10px;
            color: #5f5f5f;
            &.router-link-exact-active {
                color: #ff9800;
            }
        }
    }
}

.container {
    min-height: 100%;
}
</style>
