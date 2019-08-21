<template>
  <div class="cooking-tips">
    <header class="header">
      <HeaderTop>
        <div class="prevs" slot="left">
          <a @click="$router.back()">
            <i class="glyphicon glyphicon-chevron-left"></i>
          </a>
        </div>
        <div class="menu" slot="right">
          <router-link to="/classify-search" class="menuicon glyphicon glyphicon-th"></router-link>
        </div>
      </HeaderTop>
      <Menu>
        <div
          class="item active"
          slot="menu-item"
          :class="{on:'/cooking-tips/cook-img' === $route.path ? true:false}"
        >
          <router-link to="/cooking-tips/cook-img">装盘美图</router-link>
        </div>
        <div
          class="item active"
          slot="menu-item"
          :class="{on:'/cooking-tips/ingredients' === $route.path ? true:false}"
        >
          <router-link to="/cooking-tips/ingredients">食材杂谈</router-link>
        </div>
        <div
          class="item active"
          slot="menu-item"
          :class="{on:'/cooking-tips/formula' === $route.path ? true:false}"
        >
          <router-link to="/cooking-tips/formula">汁酱配方</router-link>
        </div>
        <div
          class="item active"
          slot="menu-item"
          :class="{on:'/cooking-tips/skills' === $route.path ? true:false}"
        >
          <router-link to="/cooking-tips/skills">烹饪技巧</router-link>
        </div>
      </Menu>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import Menu from "../../components/Menu/Menu.vue";

export default {
  data() {
    return {};
  },

  methods: {},
  components: {
    HeaderTop,
    Menu
  }
};
</script>

<style scoped>
.cooking-tips {
  padding-top: 96px;
}
.header {
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
}
</style>
