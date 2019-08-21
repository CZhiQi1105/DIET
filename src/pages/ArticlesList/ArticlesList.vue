<template>
  <div class="articles-list">
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
    </header>
    <ArticlesCard />
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ArticlesCard from "../../components/Articles-Card/Articles-Card.vue";
export default {
  data() {
    return {};
  },
  components: {
    HeaderTop,
    ArticlesCard
  }
};
</script>

<style scoped>
.articles-list {
  padding-top: 56px;
}
.header {
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
}
</style>
