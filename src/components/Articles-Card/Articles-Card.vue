<template>
  <div class="articles-card">
    <div class="articles">
      <a class="mui-card" v-for="item in 5" @click="goTo('/food-intro')">
        <div class="mui-card-content">
          <img src="../../common/images/foodIntroList-01.jpg" alt />
          <h5 class="title">“皮脆肉嫩又多汁”的秘籍都在这儿</h5>
        </div>
        <div class="mui-card-footer">
          <p>
            <br />都说广东人天生“嘴刁”，其实这种“嘴刁”是被粤菜惯出来的，广东人从小就被教育“鸡要有鸡味、鱼要有鱼味”，也就是回归食材本味，讲究不时不食，这也正是粤菜的精髓所在，自秦汉开始，中原汉人不断南迁进入广州，带来了"烩不厌细，食不厌精"的中原饮食风格。多年来“粥粉面饭”也能做出“鲍参翅肚”的味道，成就了众多广东老字号的“街坊口碑”。
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.articles {
  background: #faf5ef;
  padding: 0 15px 15px 15px;
}
.articles a {
  text-decoration: none;
}
.mui-card {
  margin: 15px 0;
  display: block;
}
.mui-card-content {
  position: relative;
}
.mui-card-content img {
  width: 100%;
}
.mui-card-content .title {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  padding: 15px;
  margin: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}
.mui-card-footer {
  padding: 8px 15px;
}
.mui-card-footer p {
  height: 36px;
  font-size: 12px;
  color: #857e76;
  line-height: 18px;
  display: -webkit-box;
  margin: 0;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
