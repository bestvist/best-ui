<template>
  <div id="app">
    <b-layout class="container">
      <b-header>header</b-header>
      <b-layout horizontal>
        <b-slider id="nav" :width="'200px'">
          <ul>
            <li v-for="(item,index) in nav" :key="index">
              <router-link :to="'/'+item.link">{{item.title}}</router-link>
            </li>
          </ul>
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
const nav = [
    {
        title: "Home 主页",
        link: ""
    },
    {
        title: "Layout 布局",
        link: "layout"
    },
    {
        title: "Grid 栅格",
        link: "grid"
    },
    {
        title: "Color 色彩",
        link: "color"
    }
];

export default {
    data() {
        return {
            nav: nav
        };
    }
};
</script>


<style lang="scss">
#app {
    height: 100%;
}

#nav {
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
