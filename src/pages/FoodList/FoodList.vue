<template>
  <div class="foodlist">
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
          :class="{on:current_seleced_tab ==0 ? true:false}"
          @click="current_seleced_tab=0"
        >
          <router-link to="/food-list/food">默认</router-link>
        </div>
        <div
          class="item active"
          slot="menu-item"
          :class="{on:current_seleced_tab ==1 ? true:false}"
          @click="current_seleced_tab=1"
        >
          <router-link to="/food-list/food">人气</router-link>
        </div>
        <div
          class="item active"
          slot="menu-item"
          :class="{on:current_seleced_tab ==2 ? true:false}"
          @click="current_seleced_tab=2"
        >
          <router-link to="/food-list/food">最新</router-link>
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
      current_seleced_tab: 0
    };
  },
  methods: {},
  components: {
    HeaderTop,
    Menu,
    Foods
  }
};
</script>

<style scoped>
.foodlist {
  padding-top: 117px;
  overflow: hidden;
}
.header {
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
}
</style>