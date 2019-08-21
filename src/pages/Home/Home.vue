<template>
  <div class="home">
    <header class="header">
      <HeaderTop>
        <div class="logo" slot="left">
          <a>
            <img src="../../common/images/logo-new.png" alt />
          </a>
        </div>
        <div class="menu" slot="right">
          <router-link to="/classify-search" class="menuicon glyphicon glyphicon-th"></router-link>
        </div>
      </HeaderTop>
    </header>
    <div class="recommend-tags">
      <router-link to="/food-list">川菜</router-link>
      <router-link to="/food-list">粤菜</router-link>
      <router-link to="/food-list">海鲜</router-link>
      <router-link to="/food-list">凉菜</router-link>
    </div>

    <Swiper />

    <div class="enters">
      <div class="enter" v-for="(hot,index) in hotList" :key="index" @click="goTo(pagePath[index])">
        <div class="enter_name">
          <a>
            <img :src="hot.enter_name" alt />
          </a>
        </div>
        <div class="enter_pic">
          <a>
            <img :src="hot.enter_pic" alt />
          </a>
        </div>
      </div>
    </div>

    <!-- <HotSale :hotPath="hotPath" /> -->
    <div class="recommend_recipes">
      <div class="tab">
        <ul>
          <li>
            <span>为你推荐</span>
          </li>
        </ul>
        <div class="refresh glyphicon glyphicon-refresh">
          <i>换一批</i>
        </div>
      </div>
      <Foods />
      <div class="tab">
        <ul>
          <li>
            <span>今日菜谱</span>
          </li>
        </ul>
        <div class="refresh glyphicon glyphicon-refresh">
          <i>换一批</i>
        </div>
      </div>
      <Foods />
    </div>
    <!-- 滑块区 -->
    <div class="foodsafety">
      <div class="sub-title">
        <h3>
          <span>食品安全</span>
        </h3>
        <p>实用百科 / 行家诀窍 / 食安头条</p>
        <!-- <a>查看更多</a> -->
      </div>
      <div class="swiper">
        <van-swipe :loop="false" :width="300" :show-indicators="false">
          <van-swipe-item class="item">
            <img src="../../common/images/safety01.jpg" alt />
            <h5 class="title">食品安全独门绝招，盘它！</h5>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
          <van-swipe-item class="item">
            <img src="../../common/images/safety02.jpg" alt />
            <h5 class="title">食品安全独门绝招，盘它！</h5>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
          <van-swipe-item class="item">
            <img src="../../common/images/safety03.jpg" alt />
            <h5 class="title">食品安全独门绝招，盘它！</h5>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
          <van-swipe-item class="item">
            <img src="../../common/images/safety04.jpg" alt />
            <h5 class="title">食品安全独门绝招，盘它！</h5>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="foodsafety">
      <div class="sub-title">
        <h3>
          <span>精选专题</span>
        </h3>
        <p>实用百科 / 行家诀窍 / 食安头条</p>
        <router-link to="/articles-list">查看更多</router-link>
      </div>
      <div class="swiper">
        <van-swipe :loop="false" :width="300" :show-indicators="false">
          <van-swipe-item class="item">
            <router-link to="/food-intro">
              <img src="../../common/images/safety01.jpg" alt />
              <h5 class="title">食品安全独门绝招，盘它！</h5>
            </router-link>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>

          <van-swipe-item class="item">
            <router-link to="/food-intro">
              <img src="../../common/images/safety02.jpg" alt />
              <h5 class="title">食品安全独门绝招，盘它！</h5>
            </router-link>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
          <van-swipe-item class="item">
            <img src="../../common/images/safety03.jpg" alt />
            <h5 class="title">食品安全独门绝招，盘它！</h5>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
          <van-swipe-item class="item">
            <img src="../../common/images/safety04.jpg" alt />
            <h5 class="title">食品安全独门绝招，盘它！</h5>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="foodsafety">
      <div class="sub-title">
        <h3>
          <span>热店招牌菜</span>
        </h3>
        <p>实用百科 / 行家诀窍 / 食安头条</p>
        <router-link to="/hot-food-list">查看更多</router-link>
      </div>
      <div class="swiper">
        <van-swipe :loop="false" :width="300" :show-indicators="false">
          <van-swipe-item class="item">
            <img src="../../common/images/safety01.jpg" alt />
            <h5 class="title">食品安全独门绝招，盘它！</h5>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
          <van-swipe-item class="item">
            <img src="../../common/images/safety02.jpg" alt />
            <h5 class="title">食品安全独门绝招，盘它！</h5>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
          <van-swipe-item class="item">
            <img src="../../common/images/safety03.jpg" alt />
            <h5 class="title">食品安全独门绝招，盘它！</h5>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
          <van-swipe-item class="item">
            <img src="../../common/images/safety04.jpg" alt />
            <h5 class="title">食品安全独门绝招，盘它！</h5>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="sub-title">
      <h3>
        <span>厨艺妙招</span>
      </h3>
      <p>提供各种食材菜谱的烹饪技巧与方法</p>
    </div>

    <div class="enters">
      <div
        class="enter"
        v-for="(tip,index) in cookingTips"
        :key="index"
        @click="goTo(cookPagePath[index])"
      >
        <div class="enter_name">
          <a>
            <img :src="tip.enter_name" alt />
          </a>
        </div>
        <div class="enter_pic">
          <a>
            <img :src="tip.enter_pic" alt />
          </a>
        </div>
      </div>
    </div>

    <!-- <HotSale :cookPath="cookPath" /> -->
    <!-- <HotSale /> -->
    <div class="foodsafety">
      <div class="sub-title">
        <h3>
          <span>酒店专区</span>
        </h3>
        <p>实用百科 / 行家诀窍 / 食安头条</p>
        <!-- <a>查看更多</a> -->
      </div>
      <div class="swiper">
        <van-swipe :loop="false" :width="300" :show-indicators="false">
          <van-swipe-item class="item">
            <img src="../../common/images/safety01.jpg" alt />
            <h5 class="title">食品安全独门绝招，盘它！</h5>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
          <van-swipe-item class="item">
            <img src="../../common/images/safety02.jpg" alt />
            <h5 class="title">食品安全独门绝招，盘它！</h5>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
          <van-swipe-item class="item">
            <img src="../../common/images/safety03.jpg" alt />
            <h5 class="title">食品安全独门绝招，盘它！</h5>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
          <van-swipe-item class="item">
            <img src="../../common/images/safety04.jpg" alt />
            <h5 class="title">食品安全独门绝招，盘它！</h5>
            <div class="content">
              <span>
                <p>想要最新最潮最权威的《餐饮服务食品安全操作规范》解读，戳我</p>
              </span>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import HotSale from "../../components/HotSale/HotSale.vue";
import Foods from "../../components/Foods/Foods.vue";
import Swiper from "../../components/Swiper/Swiper.vue";
export default {
  data() {
    selected: "1";
    return {
      // pageInfo: [{ num: 2, path: "/food-list" },{ num: 4, path: "/cooking-tips" }]
      pagePath: ["hot-food-list", "recipes"],
      cookPagePath: [
        "cooking-tips/cook-img",
        "cooking-tips/ingredients",
        "cooking-tips/formula",
        "cooking-tips/skills"
      ],
      hotList: [
        {
          enter_name:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-hotsale.png",
          enter_pic:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-garnishing-thumb.png"
        },
        {
          enter_name:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-library.png",
          enter_pic:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-library-thumb.png"
        }
      ],
      cookingTips: [
        {
          enter_name:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-garnishing.png",
          enter_pic:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-sauce-thumb.png"
        },
        {
          enter_name:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-ingredient.png",
          enter_pic:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-cooking-thumb.png"
        },
        {
          enter_name:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-sauce.png",
          enter_pic:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-hotsale-thumb.png"
        },
        {
          enter_name:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-cooking.png",
          enter_pic:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-ingredient-thumb.png"
        }
      ]
    };
  },
  components: {
    HeaderTop,
    HotSale,
    Foods,
    Swiper
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.home {
  padding-top: 56px;
  padding-bottom: 15px;
}
.header {
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
}
.logo {
  width: 24%;
  flex-shrink: 0;
  margin-right: 15px;
}
.logo img {
  display: block;
  width: 100%;
}
.recommend-tags {
  height: 60px;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to right, #ff6a00, #ff9700);
  padding: 0 15px 15px 15px;
  padding-bottom: 30px;
}
.recommend-tags a {
  display: block;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.3em;
  padding: 5px;
  width: 22%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  border-right-color: transparent;
  border-left-color: transparent;
}

/* 热门菜、菜谱库 */
.enters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 15px;
}
.enter {
  width: calc(50% - 5px);
  height: 65px;
  display: flex;
  align-items: flex-end;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 10px;
}
.enters .enter_name {
  width: 50%;
}
.enters img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.enters .enter_pic {
  width: 50%;
}

.recommend_recipes .tab {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin: calc(22.5px) 0;
}
.recommend_recipes .tab ul {
  display: flex;
  width: 50%;
}
.recommend_recipes .tab ul li {
  width: 100%;
  text-align: center;
  list-style-type: none;
  line-height: 1em;
  font-size: 18px;
  color: #857e76;
}
.recommend_recipes .tab ul li span {
  position: relative;
  color: #000000;
  font-size: 18px;
  font-weight: bold;
}
.recommend_recipes .tab ul li span::before {
  position: absolute;
  top: 0.6em;
  left: -2.4em;
  content: "";
  width: 1.8em;
  height: 2px;
  background: url(../../common/images/sub-title-left.png) left top / 100%;
}

.tab ul li span:after {
  position: absolute;
  top: 0.6em;
  right: -2.4em;
  content: "";
  width: 1.8em;
  height: 2px;
  background: url(../../common/images/sub-title-right.png) left top / 100% 100%
    no-repeat;
}
.tab .refresh {
  display: flex;
  align-items: center;
  position: absolute;
  right: 15px;
  font-size: 12px;
  top: 2px;
  color: #857e76;
}

/* 滑块 */
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
.sub-title p {
  font-size: 12px;
  color: #857e76;
}
.sub-title a {
  position: absolute;
  right: 0px;
  color: #ff8000;
  font-size: 12px;
  top: 4px;
}
.swiper {
  width: 100%;
  padding: 0 15px;
}
.swiper .van-swipe {
  width: 100%;
  height: 100%;
}
.swiper .van-swipe .item {
  display: block;
  padding-right: 10px;
}
.swiper .van-swipe .title {
  position: absolute;
  bottom: 54px;
  left: 0px;
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  padding: 15px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}

.swiper .van-swipe .content {
  background-color: #ffffff;
  padding: 8px 15px;
}
.swiper .van-swipe .content p {
  font-size: 12px;
  color: #857e76;
  line-height: 1.5em;
  height: 35px;
  overflow: hidden;
}
.swiper img {
  width: 100%;
  height: 100%;
}
</style>
