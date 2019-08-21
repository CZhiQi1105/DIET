<template>
  <div class="food-search">
    
    <header class="header">
      
      <div class="search-bar">
        
        <div class="back">
          <a @click="$router.back()">
            <i class="glyphicon glyphicon-chevron-left"></i>
          </a>
        </div>
        
        <div class="search-box">
          <input
            type="text"
            class="text search-text"
            placeholder="家乐脆香猪软骨"
            autofocus="autofocus"
            v-model="dishesName"
          />
          <div class="search-icon">
            <i class="icon glyphicon glyphicon-search"></i>
          </div>
        </div>
        <div class="cancel">
          <span @click="$router.back()" v-show="dishesName ===''">取消</span>
          <span @click="goTo('/food-list')" v-show="dishesName !==''">搜索</span>
        </div>
      </div>
    </header>
    <div class="tab-pane">
      <div class="content">
        <!-- 无结果提示 -->
        <div class="no-result" style="display:none">
          <img src="../../common/images/no-result.png" alt />
          <p>想要查找的内容暂时不存在</p>
          <p>搜索其他关键词 或者提个问试试</p>
          <a class="btn btn-warning">快速提问</a>
        </div>
        <!-- 推荐 -->
        <div class="recommend-list" style="display:block">
          <h5>大家都在搜</h5>
          <div class="tags">
            <span class="tag" v-for="item in 10">粤菜1</span>
          </div>
          <h5>历史搜索</h5>
          <div class="tags">
            <span class="tag" v-for="item in 10">川菜1</span>
          </div>
          <div class="btns">
            <router-link class="btn btn-warning" to="/classify-search">查看全部分类</router-link>
          </div>
        </div>
        <!-- 搜索提示 -->
        <div class="search-list" style="display:none">
          <ul>
            <li v-for="item in 8">
              <a>客家人炒面</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dishesName: ""
    };
  },
  mounted() {

  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.food-search {
  padding-top: 56px;
  min-height: 820px;
}
.header {
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
}
.search-bar {
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

.search-bar .back {
  width: 12%;
}
.search-bar .back a {
  display: flex;
  color: #ffffff;
  font-size: 18px;
}
.search-bar .cancel {
  width: 30px;
  flex-shrink: 0;
  margin-left: 15px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}
.search-bar .cancel span {
  font-size: 14px;
  display: block;
}
.search-bar .search-box {
  position: relative;
  width: 100%;
  text-decoration: none;
}
.search-bar .search-box .search-text {
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
  -webkit-text-fill-color: #ffffff;
}
.search-bar .search-icon {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  /* width: 100%; */
  display: flex;
}
.search-bar .search-icon .icon {
  position: absolute;
  left: 0;
  top: 8px;
  color: #ffffff;
  font-style: normal;
  display: block;
  margin-left: 10px;
  opacity: 0.6;
}

.content {
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
}
.no-result {
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.no-result img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90px;
  height: auto;
  margin-bottom: 15px;
}
.no-result p {
  display: block;
  color: #857e76;
  font-size: 14px;
  margin-bottom: 0 0 5px;
}
.recommend-list .btns {
  text-align: center;
}
.content .btn {
  font-size: 12px;
  border-radius: 3px;
}
.recommend-list h5 {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  padding: 15px 0;
  margin: 0;
}
.recommend-list .tags {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.recommend-list .tags .tag {
  color: #857e76;
  font-size: 14px;
  border: 1px solid #857e76;
  border-radius: 5px;
  border-color: #c2bcb5;
  padding: 4px 10px;
  margin: 0 8px 8px 0;
}
.search-list {
  width: 100%;
}
.search-list {
  display: block;
  width: 100%;
}
.search-list ul {
  display: block;
  margin: 0;
  padding-left: 0;
  padding-bottom: 50px;
  list-style: none;
}
.search-list ul li {
  font-size: 14px;
  border-bottom: 1px solid #857e76;
  border-color: #c2bcb5;
}
.search-list ul li a {
  width: 100%;
  display: block;
  padding: 15px 0;
  padding-bottom: 0;
  color: #2f2a26;
  text-decoration: none;
}
.search-list ul li span {
  color: #ff8000;
}
</style>
