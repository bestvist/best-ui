<template>
    <li class="b-list-item">
        <router-link v-if="to" :style="style"
            class="b-list-item__inner"
            :to="to"
            :class="className">
            <slot></slot>
        </router-link>

        <a v-else :style="style"
            class="b-list-item__inner"
            @click="handleClick"
            :class="className">
            <slot></slot>
        </a>
        <b-collapse-transition>
            <slot name="children"
                v-if="open"></slot>
        </b-collapse-transition>
    </li>
</template>

<script>
import BCollapseTransition from "../transition";
export default {
  name: "BListItem",
  componentName: "BListItem",
  components: { BCollapseTransition },
  props: {
    to: [String, Object], // 路由地址
    default: ""
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    tabIndex() {
      let index = 1;
      let parent =
        this.$parent && this.$parent.$parent && this.$parent.$parent.$parent;
      while (parent && parent.$options.componentName === "BListItem") {
        index++;
        parent =
          parent.$parent && parent.$parent.$parent && parent.$parent.$parent.$parent;
      }
      return index;
    },
    nested() {
      return this.$slots.children;
    },
    style() {
      return {
        paddingLeft: this.tabIndex * 10 + "px"
      };
    },
    className() {
      return {
        "is-open": this.open
      };
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
      this.itemClick();
    },
    itemClick() {
      this.open = this.nested && !this.open;
      this.$router.push({
        path: this.to
      });
    }
  }
};
</script>

