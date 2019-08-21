<template>
  <div>
    <div class="food-panel">
      <div class="food-list">
        <div
          class="item"
          v-for="(food,index) in foodlist"
          :key="index"
          @click="goTo('/food-details')"
        >
          <div class="thumb">
            <a>
              <img :src="food.foodPic" alt />
            </a>
          </div>
          <div class="content-area">
            <a>
              <h5>{{food.name}}</h5>
              <div class="rating">
                <span>{{food.rating}}人气值</span>
              </div>
              <div class="tags">
                <span class="tag" v-for="(tag,index) in food.tags">{{tag}}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodlist: [
        {
          foodPic:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/recipes/sxsyd/suanxiangsuyundou465x465.jpg",
          name: "水晶鹅肝冻",
          rating: 241,
          tags: ["川菜", "粤菜", "京菜"]
        },
        {
          foodPic:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/recipes/xjhey/jianjiaohaoeryu465x465.jpg",
          name: "水晶鹅肝冻",
          rating: 241,
          tags: ["川菜", "粤菜", "京菜"]
        },
        {
          foodPic:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/recipes/jlxmcyd/caoyuandu465-465.jpg",
          name: "水晶鹅肝冻",
          rating: 241,
          tags: ["川菜", "粤菜", "京菜"]
        },
        {
          foodPic:
            "https://www.unileverfoodsolutions.com.cn/content/ufs/zh/recipes/pgc/ysyr/_jcr_content/recipeMain/image.img.jpg/1559714766652.jpg",
          name: "水晶鹅肝冻",
          rating: 241,
          tags: ["川菜", "粤菜", "京菜"]
        }
      ]
    };
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.food-panel {
  padding: 0 15px;
}
.food-list {
  display: flex;
  flex-wrap: wrap;
}
.food-list .item {
  display: block;
  color: #000000;
  width: calc(50% - 5px);
  margin: 0 2.5px;
  margin-bottom: 15px;
}
.food-list .item .thumb {
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
}
.food-list img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.food-list .item .content-area {
  position: relative;
  background-color: #ffffff;
  height: 84px;
  width: calc(100% - 30px);
  margin-left: 15px;
  margin-top: -25px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}
.food-list .item .content-area a {
  color: #337ab7;
  text-decoration: none;
}

.food-list .item .content-area h5 {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-weight: bold;
  line-height: 1.2em;
  color: #2f2a26;
  margin: 0;
  margin-bottom: 5px;
}
.food-list .item .content-area .rating {
  display: flex;
  justify-content: center;
  height: 18px;
  margin-bottom: 5px;
}
.food-list .item .content-area .rating span {
  font-size: 12px;
  color: #ff8000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.food-list .item .content-area .tags {
  display: flex;
  justify-content: center;
  text-align: center;
}
.food-list .item .content-area .tags .tag {
  font-size: 12px;
  color: #857e76;
  background-color: #faf5ef;
  padding: 3px;
  margin: 0 3px;
  /* overflow: hidden; */
  white-space: nowrap;
}
</style>
