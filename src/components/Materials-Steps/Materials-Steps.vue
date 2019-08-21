<template>
  <div>
    <div class="food-essentials">
      <h5 class="title" ref="materials">食材用料</h5>
      <div class="material-intro">
        <div class="ingredients">
          <h6 class="subtitle">
            <i class="glyphicon glyphicon-leaf"></i>
            主料
          </h6>
          <div class="ingredient-list">
            <ul>
              <li>
                <span class="name">乳鸽(10天BB鸽)</span>
                <span class="value">1只</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="ingredients">
          <h6 class="subtitle">
            <i class="glyphicon glyphicon-leaf"></i>
            辅料
          </h6>
          <div class="ingredient-list">
            <ul>
              <li>
                <span class="name">家乐辣鲜露</span>
                <span class="value">5克</span>
              </li>
              <li>
                <span class="name">盐</span>
                <span class="value">3克</span>
              </li>
              <li>
                <span class="name">五香盐</span>
                <span class="value">5克</span>
              </li>
              <li id="step">
                <span class="name">脆皮水</span>
                <span class="value">100克</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="hr" />
      <h5 class="title" ref="step" id="step">烹饪步骤</h5>
      <div class="cooking-steps">
        <div class="step">
          <p>
            <em>1</em>把盐擦匀乳鸽外皮，腌10分钟。用80摄氏度-90摄氏度水烫过；
          </p>
        </div>
        <div class="step">
          <p>
            <em>2</em>再用家乐辣鲜露5克、五香盐5克、1味匙腌制乳鸽肚笼，约15分钟后，再用脆皮水（麦芽糖、白醋、红醋、白酒比例为1：13：1：1，隔热水温热调和直至麦芽糖溶解）上皮；
          </p>
        </div>
        <div class="step">
          <p>
            <em>3</em>待脆皮完全风干后，再用油温180摄氏度-210摄氏度炸至淡金黄色即可。
          </p>
        </div>
      </div>
      <hr class="hr" />
      <h5 class="title">烹饪要点</h5>
      <div class="cooking-steps">
        <div class="step">
          <p>
            <em>1</em>牛瓜条处理时筋膜要处理干净，以确保更好的口感。
          </p>
        </div>
        <div class="step">
          <p>
            <em>2</em>腌制好的牛肉先炸再切细条，可以确保牛肉煮制时更快入味，口感更干韧香口有汁水，并可将煮制时间缩短至20分钟。
          </p>
        </div>
        <div class="step" id="products">
          <p>
            <em>3</em>煮制后晾凉后口感更佳。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.food-essentials .title {
  font-size: 18px;
  margin: 0 0 30px;
  display: block;
  font-weight: bold;
}
.food-essentials .subtitle {
  font-size: 12px;
  font-weight: bold;
  color: #857e76;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 30px;
}
.food-essentials .subtitle i {
  font-size: 20px;
  color: #ff8000;
  width: 30px;
}
.food-essentials .ingredient-list {
  width: 100%;
  padding: 0 30px;
}
.food-essentials .ingredient-list ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.food-essentials .ingredient-list ul li {
  border-bottom: 1px solid #857e76;
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  border-color: #faf5ef;
}
.food-essentials .ingredient-list .name {
  width: 60%;
}
.food-essentials .ingredient-list .value {
  text-align: right;
  width: 40%;
}
.food-essentials .hr {
  width: calc(100% + 30px);
  margin-left: -15px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 0 solid #857e76;
  border-bottom: 1px solid #857e76;
  border-color: #faf5ef;
}

.food-essentials .cooking-steps p {
  font-size: 14px;
  color: #857e76;
  display: flex;
  margin: 15px 0;
  font-weight: normal;
}
.food-essentials .cooking-steps p em {
  width: 18px;
  height: 18px;
  margin-right: 8px;
  line-height: 18px;
  border-radius: 50%;
  background-color: #ff8000;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  flex-shrink: 0;
  font-style: normal;
}
</style>
