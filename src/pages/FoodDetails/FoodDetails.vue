<template>
  <div class="food-details">
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
    <div class="food-img">
      <img src="../../common/images/food-01.jpg" alt />
    </div>

    <div class="food-info">
      <div class="basic">
        <div class="cont">
          <h5>咸蛋黄元宝虾</h5>
          <div class="tags">
            <span class="tag">东南亚</span>
            <span class="tag">海鲜</span>
            <span class="tag">咸鲜浓香</span>
            <span class="tag">热菜</span>
          </div>
        </div>
      </div>
      <div class="popularity">
        <p>
          <span>0</span>人气指数
        </p>
      </div>
      <div class="special">
        <p>在传统的茄子煲放入鲜蚝仔，用家乐双蚝蚝油更加提升了菜品的味道。</p>
      </div>
    </div>

    <div class="card">
      <h5>来自极客大厨</h5>
      <div class="cooker">
        <div class="cont">
          <div class="head">
            <a>
              <img src="../../common/images/cooker.jpg" />
            </a>
          </div>
          <div class="info">
            <h5>董金柱</h5>
            <p>后厨主管</p>
          </div>
          <div class="opt" id="materials">
            <a class="btn login-pop" id="no_login_follow">
              <i class="glyphicon glyphicon-plus"></i>
              <span>关注</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="tab">
      <ul>
        <li class="active">
          <a @click="goTo('materials')" class="meterials">食材用料</a>
        </li>
        <li>
          <a @click="goTo('step')">烹饪步骤</a>
        </li>
        <li>
          <a @click="goTo('products')">相关产品</a>
        </li>
        <li>
          <a @click="goTo('related')">相关菜式</a>
        </li>
      </ul>
    </div>
    <div class="tab2 fixing" v-show="isShow">
      <ul id="select">
        <li :class="{active:current_seleced_tab == 0?true:false}">
          <a @click="goTo('materials'), current_seleced_tab = 0">食材用料</a>
        </li>
        <li :class="{active:current_seleced_tab == 1?true:false}">
          <a @click="goTo('step') ,current_seleced_tab = 1">烹饪步骤</a>
        </li>
        <li :class="{active:current_seleced_tab == 2?true:false}">
          <a @click="goTo('products'), current_seleced_tab = 2">相关产品</a>
        </li>
        <li :class="{active:current_seleced_tab == 3?true:false}">
          <a @click="goTo('related') ,current_seleced_tab = 3">相关菜式</a>
        </li>
      </ul>
    </div>
    <div class="rm-border">
      <div class="recipe-more" ref="recipes">
        <MaterialsSteps />
      </div>
      <div class="sub-title" ref="products">
        <h3>
          <span>相关产品</span>
        </h3>
      </div>

      <div class="food-products">
        <div class="products-list">
          <a href class="product-item" v-for="item in 2">
            <div class="thumb-left">
              <img src="../../common/images/products-1.jpg" alt />
            </div>
            <div class="thumb-right">
              <h3 class="product-title">家乐金沙咸蛋黄风味调味料</h3>
              <p>为菜肴提供咸香四溢，蛋香浓郁的咸蛋黄风味以及酥沙的精致口感，使菜肴呈现金黄色泽，包裹性好。</p>
            </div>
          </a>
        </div>
      </div>
      <div class="sub-title" ref="related" id="related">
        <h3>
          <span>相关菜式</span>
        </h3>
      </div>

      <Foods />

      <!-- <div class="sub-title" id="leave" ref="leave">
        <h3>
          <span>留言评论</span>
        </h3>
      </div> -->
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import Foods from "../../components/Foods/Foods.vue";
import MaterialsSteps from "../../components/Materials-Steps/Materials-Steps.vue";
export default {
  data() {
    return {
      isShow: false,
      scrollTop: 0,
      // height: 0,
      current_seleced_tab: 0,
      tag_padding: 0
    };
  },
  components: {
    HeaderTop,
    Foods,
    MaterialsSteps
  },
  mounted() {
    this.scrollTop = 0;
    this.isShow = false;
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
      this.recipes_top =
        this.$refs.recipes.getBoundingClientRect().top + window.scrollY - 96;
        this.products = this.$refs.products.getBoundingClientRect().top+window.scrollY-116;
      this.related_top =
        this.$refs.related.getBoundingClientRect().top + window.scrollY - 116;

      // this.leave_top =
      //   this.$refs.leave.getBoundingClientRect().top + window.scrollY - 96;
      this.step_top =
        document.getElementById("step").getBoundingClientRect().top +
        window.scrollY -
        26;

      // 判断是否到达指定位置，显示隐藏tab
      if (this.scrollTop > this.recipes_top) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      // 判断是否滑到指定位置高度，修改tab样式
      if (this.scrollTop > this.step_top && this.scrollTop < this.products) {
        this.current_seleced_tab = 1;
      }else if(this.scrollTop >this.products && this.scrollTop <this.related_top){
        this.current_seleced_tab = 2;

      } else if (
        this.scrollTop > this.products
      ) {
        this.current_seleced_tab = 3;
      }else {
        this.current_seleced_tab = 0;
      }
    },
    goTo(tag) {
      var target = document.getElementById(tag);
      target.scrollIntoView();
      // target.style.paddingTop="10px"
    }
  }
};
</script>

<style scoped>
.food-details {
  padding-top: 56px;
}
.header {
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
}
.food-img {
  position: relative;
}
.food-img img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.food-img::after {
  position: absolute;
  width: 100%;
  height: 50%;
  left: 0;
  bottom: 0px;
  pointer-events: none;
  content: "";
  width: 100%;
  height: 50px;
  background: linear-gradient(to bottom, rgba(250, 245, 239, 0), #faf5ef);
}

.food-info {
  position: relative;
  background-color: #ffffff;
  border-radius: 5px;
  margin: -50px 10px 10px 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 30px 0;
}
.food-info .basic {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-top: 10px;
}
.food-info .basic .cont {
  width: 82%;
}
.food-info .cont h5 {
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  color: #2f2a26;
  margin-bottom: 8px;
}
.food-info .tags {
  display: flex;
  flex-wrap: wrap;
}
.food-info .tags .tag {
  font-size: 12px;
  color: #857e76;
  padding: 3px 8px;
  margin-right: 5px;
  background-color: #faf5ef;
  display: block;
}

.popularity {
  padding: 0 20px;
}
.popularity p {
  margin: 0;
  font-weight: normal;
  line-height: 1.3em;
  font-size: 12px;
  color: #857e76;
  letter-spacing: 0.04em;
}
.popularity p span {
  font-size: 20px;
  color: #ff8000;
  margin-right: 8px;
}
.special {
  position: relative;
  padding: 15px 4px;
  margin: 0 20px;
  margin-top: 30px;
  border: 1px solid #dfdedb;
  border-radius: 10px;
  border-left-color: transparent;
  border-right-color: transparent;
}
.special p {
  position: relative;
  color: #857e76;
  font-size: 12px;
  line-height: 1.5em;
  padding: 0 2.5em;
}

.card {
  position: relative;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 15px 10px 15px 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}
.card h5 {
  font-size: 13px;
  text-align: left;
  color: #857e76;
  margin: 0 20px;
  padding-bottom: 5px;
  display: block;
  line-height: 1em;
}
.card .cooker {
  position: relative;
  padding: 15px 4px;
  margin: 0 20px;
  border: none;
}
.card .cooker .cont {
  display: flex;
  align-items: center;
}
.card .cooker .cont .head {
  width: 40px;
  margin-right: 8px;
  flex-shrink: 0;
}
.card .cooker .cont .head img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.card .cooker .cont .info {
  width: 100%;
}
.card .cooker .cont .info h5 {
  margin: 0;
  font-size: 14px;
  color: #2f2a26;
  padding-bottom: 5px;
  text-align: left;
  line-height: 1em;
  font-weight: bold;
}
.card .cooker .cont .info p {
  font-size: 12px;
  color: #857e76;
  margin-bottom: 0 0 3px;
  display: block;
}
.card .cooker .cont .opt {
  display: flex;
  width: 70px;
  flex-shrink: 0;
}
.card .cooker .cont .opt .btn {
  padding: 4px 10px;
  border: 0 solid #857e76;
  color: #ff8000;
  font-size: 12px;
  background-color: #fdf3e5;
  border-radius: 3px;
}
.rm-border h5.above {
  padding-top: 40px;
}
.tab {
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin: calc(22.5px) 0;
}
.tab ul {
  width: 90%;
  display: flex;
  margin: 0;
  padding-left: 0;
  list-style: none;
  font-size: 14px;
}
.tab ul li {
  font-size: 12px;
  width: 25%;
  text-align: center;
  list-style-type: none;
  line-height: 1em;
  /* display: list-item; */
}
.tab ul li a {
  color: #857e67;
  text-decoration: none;
}
.tab ul li.active a {
  color: #ff8000;
}
.tab ul li .meterials{
  padding-bottom: 10px;
  border-bottom:2px solid #ff8000;
}

.tab2 {
  opacity: 1;
  pointer-events: all;
  padding: 0 20px;
  transition: opacity 0.2s linear;
  width: 100%;
  background: linear-gradient(to right, #ff6a00, #ff9700);
}
.tab2.fixing {
  max-width: 640px;
  min-width: 320px;
  position: fixed;
  /* left: 0px; */
  top: 56px;
  z-index: 8;
  top: 56px;
  height: 40px;
}
.tab2 ul {
  display: flex;
  width: 100%;
  margin: 0;
  list-style: none;
}
.tab2 ul li {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 33.3%;
}
.tab2 ul li a {
  padding: 10px 12px;
  font-size: 12px;
  border: 2px solid #857e76;
  border-color: rgba(0, 0, 0, 0);
  display: inline-block;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
}

.tab2 ul li.active a {
  color: #ffffff;
  border-bottom-color: white;
}

.rm-border {
  margin: 0 10px;
}
.recipe-more {
  padding: 15px;
  background-color: #ffffff;
  box-shadow: none;
  margin: 0;
  position: relative;
}
.sub-title {
  text-align: center;
  position: relative;
  margin: 22.5px 15px;
}
.sub-title h3 {
  font-size: 18px;
  color: #000000;
  margin-bottom: 10px;
  font-weight: bold;
}
.sub-title h3 span {
  position: relative;
}
.sub-title h3 span:before {
  position: absolute;
  top: 0.6em;
  left: -2.4em;
  content: "";
  width: 1.8em;
  height: 2px;
  background: url(../../common/images/sub-title-left.png) left top / 100% 100%
    no-repeat;
}
.sub-title h3 span:after {
  position: absolute;
  top: 0.6em;
  right: -2.4em;
  content: "";
  width: 1.8em;
  height: 2px;
  background: url(../../common/images/sub-title-right.png) left top / 100% 100%
    no-repeat;
}

.food-products {
  margin: 0 15px;
  background-color: #fff;
  border-radius: 15px;
  display: block;
  text-align: center;
  padding: 5px 0;
}
.food-products a {
  text-decoration: none;
}

.food-products .products-list {
  padding: 0 15px;
}

.food-products .products-list .product-item {
  padding: 10px 0;
  width: 100%;
  font-size: 0px;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  color: #000;
}

.product-item .thumb-left {
  display: flex;
  width: 30%;
}
.product-item .thumb-left img {
  width: 90%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.product-item .thumb-right {
  width: 70%;
  display: block;
  text-align: left;
}
.thumb-right .product-title {
  margin: 0;
  display: block;
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
}

.thumb-right > p {
  font-size: 12px;
  display: block;
  margin: 8px 15px 8px 0px;
  line-height: 16px;
  max-height: 48px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  /* overflow: hidden; */
  text-overflow: ellipsis;
}
</style>
