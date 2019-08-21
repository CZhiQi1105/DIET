<template>
  <div class="hot-food">
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
        <div class="item active" slot="menu-item" :class="{on:selected}" @click="selected=true">
          <router-link to="/hot-food-list/food">最新</router-link>
        </div>
        <div class="item active" slot="menu-item" :class="{on:!selected}" @click="selected=false">
          <router-link to="/hot-food-list/food">城市</router-link>
        </div>
      </Menu>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import Menu from "../../components/Menu/Menu.vue";
import Foods from "../../components/Foods/Foods.vue";
export default {
  data() {
    return {
      selected: true
    };
  },
  components: {
    HeaderTop,
    Menu,
    Foods
  }
};
</script>

<style scoped>
.hot-food {
  padding-top: 117px;
}
.header {
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
}
</style>
