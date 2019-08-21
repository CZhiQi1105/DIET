<template>
  <div>
    <div class="enters">
      <div class="enter" v-for="(hot,index) in hotList" :key="index" @click="goTo(pageInfo.path)">
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
  </div>
</template>

<script>
export default {
  props: {
    pageInfo: Object
  },
  data() {
    return {
      hotList: [
        {
          enter_name:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-hotsale.png",
          enter_pic:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-garnishing-thumb.png"
        },
        {
          enter_name:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-hotsale.png",
          enter_pic:
            "https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/Homepage/enter-garnishing-thumb.png"
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
</style>
