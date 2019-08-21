<template>
  <div id="app" ref="app">
    <div class="back-to-top" @click="backToTop()" v-if="scrollTop>770">
      <i class="glyphicon glyphicon-menu-up"></i>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      scrollTop: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    backToTop() {
      this.$refs.app.scrollIntoView();
    }
  }
};
</script>

<style>
#app {
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  margin: 0 auto;
  background: #faf5ef;
  overflow: hidden;
}
.back-to-top {
  position: fixed;
  right: 20px;
  bottom: 90px;
  height: 40px;
  width: 40px;
  z-index: 500;
  border: 0.5px solid #ff9700;
  border-radius: 50%;
  background-color: #fffffd;
  text-align: center;
  line-height: 45px;
  font-size: 18px;
  color: #ff9700;
}
</style>
