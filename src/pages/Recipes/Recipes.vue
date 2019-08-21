<template>
  <div class="recipes">
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
          <router-link to="/hot-food-list/food">人气</router-link>
        </div>
        <div class="item active" slot="menu-item" :class="{on:!selected}" @click="selected=false">
          <router-link to="/hot-food-list/food">最新</router-link>
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
      tabTxt: ["默认", "人气", "最新"],
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
.recipes {
  padding-top: 117px;
  /* height: 1200px; */
}
.header {
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
}
</style>
