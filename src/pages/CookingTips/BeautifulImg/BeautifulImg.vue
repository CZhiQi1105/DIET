<template>
  <div class="beautiful-img">
     <div class="item" v-for="item in 22">
        <div class="thumb">
          <img src="https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/zhuangpanmeitu/haozaijian.jpg" alt />
        </div>
      </div>
      <div class="item">
        <div class="thumb">
          <img src="https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/zhuangpanmeitu/haozaijian.jpg" alt />
        </div>
      </div>
      <div class="item">
        <div class="thumb">
          <img src="https://www.unileverfoodsolutions.com.cn/content/dam/ufs/images/zhuangpanmeitu/haozaijian.jpg" alt />
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  data(){
   return {

   }
  },
}
</script>

<style scoped>
.beautiful-img {
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  background: #faf5ef;
}

.beautiful-img .item {
  display: block;
  color: #000000;
  width: calc((100% - 20px) / 3);
  height: calc((100% - 20px) / 3);
  margin-right: 10px;
  margin-bottom: 10px;
}
.item:nth-child(3n) {
  margin-right: 0;
}

.beautiful-img .item .thumb {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 3px;
}
.beautiful-img .item .thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
