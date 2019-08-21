<template>
  <div>
    <div class="menu-nav">
      <slot name="menu-item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabTxt: Array
  },
  data() {
    return {
      selected: "1"
    };
  },
  methods: {}
};
</script>

<style scoped>
.menu-nav {
  height: 40px;
  background: linear-gradient(to right, #ff6a00, #ff9700);
  width: 100%;
  display: flex;
  min-width: 340px;
  max-width: 640px;
  margin: 0 auto;
}
.menu-nav .item {
  flex: 1;
  /* margin: 0 5px; */
  justify-content: center;
  text-align: center;
}

.menu-nav .item a {
  padding: 10px 12px;
  font-size: 12px;
  border: 2px solid #857e76;
  border-color: rgba(0, 0, 0, 0);
  display: inline-block;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
}
/* .menu-nav .item.active a {
  color: #ffffff;
  border-bottom-color: white;
  border-bottom: 2px solid white;
} */

.menu-nav .item.active.on > a {
  color: #ffffff;
  border-bottom-color: white;
}
.menu-nav .item.active a {
  color: rgba(255, 255, 255, 0.6);
}
</style>
