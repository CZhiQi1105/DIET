<template>
  <div class="foodIItro">
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
    <div class="mui-content">
      <div class="mui-content-padded">
        <p>
          <img src="../../common/images/foodIntro01.jpg" />
        </p>
        <h3>令食客神往的一味好卤</h3>
        <p
          class="info"
        >中国的卤菜源远流长，它的魅力早已存在了上千年，秦惠王统治巴蜀时期，便已生产出四川最早的井盐，西晋时期的人们已经学会使用岩盐和花椒制造卤水，如今，卤菜在粤菜、湘菜、徽菜、川菜当中，都有很多出彩的表现，无论是城市乡间、酒楼饭店、还是街边小巷，食客们都好一口卤菜，它种类繁多，风味各异，清爽鲜香等特点，都备受食客的喜爱。</p>
        <p>
          <img src="../../common/images/foodIntro01.jpg" />
        </p>
        <p class="info">
          所谓“卤”，是将加工好的原料或预制后的半成品、熟料，放入提前熬好的卤水中加热使食材充分吸收卤味并成熟的烹调技法，而后经过改刀，即可食用。成菜具有干香脆嫩、酥烂爽滑、无汤不腻、食用方便等特点。
          <br />
          <br />其中，卤水可分为红卤和白卤。红卤即是加糖色卤制的食品，呈金黄色或咖啡色，如卤牛肉，卤肥肠等；白卤则是不加糖色卤制食品，呈无色或者本色，如白卤鸡，白卤牛肚等……
        </p>
        <p>
          <img src="../../common/images/foodIntro01.jpg" />
        </p>
        <p class="info">
          对于鱼肉食材来说：鱼皮发腥是因为烤得不够熟，适度切割，使得鱼皮更容易受热，水分更易蒸发，变得更加酥脆。同时，针对不同部位的鱼皮，也需要需要不同的火候控制，如鱼腹，皮比较薄，鱼身比较细的，比较容易熟，不能用大火，容易烤焦。当然，被喷枪处理过的鱼皮，局部高温加热，口感会更脆。
          <br />
          <br />接着就来看看有关完美脆皮的多种做法吧！
        </p>
      </div>
    </div>
    <div class="article-recipe" v-for="(item,index) in flags" :key="index">
      <div class="thumb">
        <a>
          <img src="../../common/images/article01.jpg" alt />
        </a>
      </div>
      <div class="cont">
        <h5>淮扬豉香卤水</h5>
        <p>
          经典的卤水菜式，卤水汁是整道菜的精华所在。
          各式香料的融合获得卤香十足的底味，让食材在烹煮的过程中卤香肉鲜，倍受饕客喜爱。
        </p>
      </div>
      <div class="recipe-more" v-show="item.flag">
        <MaterialsSteps />
      </div>
      <div class="bt" @click="changeContent(index)">
        <p>
          查看详细做法
          <i :class="iconClass[0]" v-if="!item.flag"></i>
          <i :class="iconClass[1]" v-else></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import MaterialsSteps from "../../components/Materials-Steps/Materials-Steps.vue";

export default {
  data() {
    return {
      flags: [{ flag: false }, { flag: false }, { flag: false }],
      iconClass: [
        "glyphicon glyphicon-chevron-down",
        "glyphicon glyphicon-chevron-up"
      ]
    };
  },
  components: {
    HeaderTop,
    MaterialsSteps
  },
  methods: {
    changeContent(index) {
      const temp = this.flags;
      temp[index].flag = !temp[index].flag;
      this.flags = temp;
    }
  }
};
</script>

<style scoped>
.mui-content {
  background-color: #faf5ef;
  /* padding-top: 56px; */
}
.mui-content-padded {
  margin: 0;
}
p img {
  max-width: 100%;
  height: auto;
}
.info {
  display: block;
  margin: 20px 15px;
  color: #857e76;
  font-size: 14px;
  line-height: 1.5em;
}
h3 {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}

.article-recipe {
  margin: 15px;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.article-recipe .thumb img {
  width: 100%;
  height: 100%;
  display: block;
}
.article-recipe .cont {
  display: block;
  background-color: #ffffff;
  position: relative;
  padding: 10px;
}
.article-recipe .cont h5 {
  font-size: 16px;
  margin: 0 auto 8px;
  display: block;
  font-weight: bold;
}
.article-recipe .cont p {
  display: block;
  margin: 0;
  font-size: 12px;
  color: #857e76;
  line-height: 1.8em;
}
.recipe-more {
  padding: 15px;
  background-color: #ffffff;
  box-shadow: none;
  margin: 0;
  position: relative;
}

.article-recipe .bt {
  display: block;
  background-color: #ffffff;
  border-top: 1px solid #857e76;
  border-color: #faf5ef;
}
.article-recipe .bt p {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #ff8000;
  padding: 12px 0;
  margin: 0;
}
</style>
