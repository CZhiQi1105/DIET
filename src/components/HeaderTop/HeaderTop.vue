<template>
  <div class="h_nav">
    <slot name="left"></slot>
    <router-link to="/food-search" class="search">
      <input
        class="search-input"
        type="text"
        placeholder="搜索菜谱和问答..."
        value="粤菜"
        disabled="disabled"
      />
      <div class="search-icon">
        <i class="icon glyphicon glyphicon-search"></i>
      </div>
    </router-link>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.h_nav {
  height: 56px;
  min-width: 340px;
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 15px;
  background: linear-gradient(to right, #ff6a00, #ff9700);
}
.h_nav .prevs {
  width: 12%;
}
.h_nav .prevs a {
  display: flex;
  color: #ffffff;
  font-size: 18px;
}
.h_nav .search {
  position: relative;
  width: 100%;
  text-decoration: none;
}
.h_nav .search .search-input {
  display: block;
  color: #ffffff;
  border: 0 solid #857e76;
  font-size: 12px;
  background: linear-gradient(to right, #ffa358, #f7b966);
  padding: 8px 12px;
  padding-left: 35px;
  margin: 0em;
  width: 100%;
  border-radius: 3px;
  height: 28px;
}
.search .search-icon {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  /* width: 100%; */
  display: flex;
}
.search .search-icon .icon {
  position: absolute;
  left: 0;
  top: 8px;
  color: #ffffff;
  font-style: normal;
  display: block;
  margin-left: 10px;
  opacity: 0.6;
}
.h_nav .menu {
  width: 30px;
  flex-shrink: 0;
  margin-left: 15px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}
.h_nav .menu .menuicon {
  font-size: 22px;
  color: #ffffff;
  display: block;
  font-weight: normal;
}
.h_nav .menu span {
  font-size: 14px;
  display: block;
}
</style>
