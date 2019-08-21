<template>
  <div class="class-search">
    <header class="header">
      <HeaderTop>
        <div class="prevs" slot="left">
          <a @click="$router.back()">
            <i class="glyphicon glyphicon-chevron-left"></i>
          </a>
        </div>
        <div class="menu" slot="right">
          <span @click="$router.back()">取消</span>
        </div>
      </HeaderTop>
    </header>
    <div class="content">
      <div class="tab-list">
        <p>菜系</p>
        <ul>
          <li
            v-for="(item,index) in 16"
            :class="{active:current_seleced_tab1 == index ? true:false}"
            @click="current_seleced_tab1=index"
          >{{index}}</li>
        </ul>
      </div>
      <div class="tab-list">
        <p>食材</p>
        <ul>
          <li
            v-for="(item,index) in 16"
            :class="{active:current_seleced_tab2 == index ? true:false}"
            @click="current_seleced_tab2=index"
          >{{index}}</li>
        </ul>
      </div>
      <div class="tab-list">
        <p>菜式</p>
        <ul>
          <li
            v-for="(item,index) in 30"
            :class="{active:current_seleced_tab3 == index ? true:false}"
            @click="current_seleced_tab3=index"
          >{{index}}</li>
        </ul>
      </div>
    </div>
    <div class="search-footer">
      <ul>
        <li class="back" @click="$router.back()">取消</li>
        <li class="all">
          <a>查看全部</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
export default {
  data() {
    return {
      current_seleced_tab1: 0,
      current_seleced_tab2: 0,
      current_seleced_tab3: 0
    };
  },
  components: {
    HeaderTop
  }
};
</script>

<style scoped>
.class-search {
  padding-top: 56px;
}
.header {
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
}
.content {
  padding: 0 15px;
  background-color: #fff;
  padding-bottom: 50px;
}
.content .tab-list {
  width: 100%;
  height: auto;
}
.content .tab-list p {
  height: 45px;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  color: #2f2a26;
  font-size: 16px;
  line-height: 45px;
}
.content .tab-list ul {
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  color: #2f2a26;
  margin: 0;
  list-style: none;
}

.content .tab-list ul li {
  width: 22%;
  border: 1px solid #c2bcb5;
  border-radius: 4px;
  text-align: center;
  padding: 5px 0;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
  margin-right: 7px;
  width: calc((100% - 28px) / 4);
}

.content .tab-list ul .active {
  background: #ff8000;
  color: #ffffff;
  border: none;
}
.search-footer {
  position: fixed;
  z-index: 11;
  bottom: 0;
  /* left: 0; */
  height: 50px;
  font-size: 16px;
  width: 100%;
  min-width: 340px;
  max-width: 640px;
  margin: 0 auto;
}
.search-footer ul {
  margin: 0;
  display: flex;
  padding-left: 0;
  line-height: 50px;
  text-align: center;
}
.search-footer ul .back {
  width: 40%;
  height: 50px;
  text-align: center;
  background: #fff4e8;
  color: #ff8000;
}
.search-footer ul .all {
  width: 60%;
  color: #ffffff;
  background: #ff8000;
}
.search-footer ul .all a {
  color: #ffffff;
  text-decoration: none;
}
</style>
