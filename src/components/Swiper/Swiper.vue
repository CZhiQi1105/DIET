<template>
  <!--轮播图-->
  <div class="jd_banner">
    <ul class="clearfix">
      <li>
        <a href>
          <img src="../../common/images/banner05.jpg" alt />
        </a>
      </li>
      <li>
        <a href>
          <img src="../../common/images/banner01.jpg" alt />
        </a>
      </li>
      <li>
        <a href>
          <img src="../../common/images/banner02.gif" alt />
        </a>
      </li>
      <li>
        <a href>
          <img src="../../common/images/banner03.jpg" alt />
        </a>
      </li>
      <li>
        <a href>
          <img src="../../common/images/banner04.jpg" alt />
        </a>
      </li>
      <li>
        <a href>
          <img src="../../common/images/banner05.jpg" alt />
        </a>
      </li>
      <li>
        <a href>
          <img src="../../common/images/banner01.jpg" alt />
        </a>
      </li>
    </ul>
    <ul>
      <li class="now"></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // 获取需要操作的dom元素
    // 大容器
    var banner = document.querySelector(".jd_banner");

    //  轮播图宽度
    var width = banner.offsetWidth;

    // 图片容器
    var imageBox = banner.querySelector("ul:first-child");

    // 点容器
    var pointBox = banner.querySelector("ul:last-child");

    // 所有的点
    var points = pointBox.querySelectorAll("li");

    // 提几个公用方法

    // 加过渡
    var addTransition = function() {
      imageBox.style.transition = "all 0.2s";
      imageBox.style.webkitTransition = "all 0.2s";
    };

    //清过渡
    var removeTransition = function() {
      imageBox.style.transition = "none";
      imageBox.style.webkitTransition = "none";
    };

    // 设置位移
    var setTranslateX = function(translateX) {
      imageBox.style.webkitTransform = "translateX(" + translateX + "px)";
      imageBox.style.transform = "translateX(" + translateX + "px)";
    };

    // 1.无缝滚动&无缝滑动   定时器  过渡  位移
    var index = 1;
    var timer = setInterval(() => {
      index++;

      // 过渡
      // imageBox.style.transition = 'all 0.2s';
      // imageBox.style.webkitTransition = 'all 0.5s';
      addTransition();

      //  位移
      // imageBox.style.webkitTransform = 'translateX(' + (-index * width) + 'px)';
      // imageBox.style.transform = 'translateX(' + (-index * width) + 'px)';
      setTranslateX(-index * width);
    }, 3000);

    // 怎么监听过渡结束这个时间点     过渡结束事件
    imageBox.addEventListener("transitionend", function() {
      if (index >= 6) {
        // 瞬间定位到第一张
        index = 1;

        // 清除过渡
        // imageBox.style.transition = 'none';
        // imageBox.style.webkitTransition = 'none';
        removeTransition();

        // 瞬间定位

        // imageBox.style.webkitTransform = 'translateX(' + (-index * width) + 'px)';
        // imageBox.style.transform = 'translateX(' + (-index * width) + 'px)';
        setTranslateX(-index * width);
      } else if (index <= 0) {
        index = 5;
        removeTransition();
        setTranslateX(-index * width);
      }

      // index取值范围 1~8  对应点取值范围 0~7
      setPoint();
    });

    // 2.点盒子对应改变（改变样式）
    var setPoint = function() {
      // index 1~8
      // 去除所有的now样式ni
      for (var i = 0; i < points.length; i++) {
        points[i].classList.remove("now");
      }
      points[index - 1].classList.add("now");
    };

    // 3.可以滑动 （touch事件  监听触摸点坐标的改变距离，位移）
    var startX = 0;
    var distanceX = 0; // 记录坐标轴的改变
    // 严谨判断
    var isMove = false;
    imageBox.addEventListener("touchstart", function(e) {
      clearInterval(timer);
      startX = e.touches[0].clientX;
    });
    imageBox.addEventListener("touchmove", function(e) {
      var moveX = e.touches[0].clientX;
      distanceX = moveX - startX;

      // distanceX 大于0的时候， 向左滑动
      // distanceX 小于0的时候，向右滑动

      // 基于当前位置
      // 计算将要去做的定位

      var translateX = -index * width + distanceX;
      // 取消过渡，否则卡顿
      removeTransition();
      setTranslateX(translateX);
      isMove = true;
    });
    imageBox.addEventListener("touchend", function() {
      // 滑动事件之后判断当前滑动的距离
      // 有一个范围，如果大于三分之一切换图片，反之吸附回去
      if (isMove) {
        if (Math.abs(distanceX) < width / 3) {
          // 4. 当前移动距离小于1/3  吸附回去  （过渡  位移）

          // 过渡
          addTransition();
          // 位移（到当前位置 -index*width）
          setTranslateX(-index * width);
        } else {
          // 5. 当前滑动距离够了的时候， 跳转   上一张   下一站  （判断反向  过渡  位移）
          if (distanceX > 0) {
            // 向右滑，切换到上一张
            index--;
          } else {
            // 向左滑    切换到下一张
            index++;
          }
          // 加过渡
          addTransition();
          // 定位
          setTranslateX(-index * width);
        }
      }

      // 加上定时器
      clearInterval(timer);
      timer = setInterval(() => {
        index++;

        addTransition();

        setTranslateX(-index * width);
      }, 3000);
      //重置参数
      startX = 0;
      distanceX = 0;
      isMove = false;
    });
  }
};
</script>

<style scoped>
/* 轮播图 */

.jd_banner {
  width: 100%;
  /* margin-bottom: 10px; */
  position: relative;
  top: -15px;
  overflow: hidden;
  z-index: 111;
}
.jd_banner ul li {
  list-style-type: none;
}

.jd_banner ul:first-child {
  width: 1000%;
  -webkit-transform: translateX(-10%);
  -moz-transform: translateX(-10%);
  -ms-transform: translateX(-10%);
  -o-transform: translateX(-10%);
  transform: translateX(-10%);
}

.jd_banner ul:first-child li {
  width: 10%;
  float: left;
}

.jd_banner ul:first-child li a {
  width: 100%;
  display: block;
}

.jd_banner ul:first-child li a img {
  width: 100%;
  display: block;
}

.jd_banner ul:last-child {
  position: absolute;
  bottom: 8px;
  left: 50%;
  margin-left: -40px;
  width: 118px;
}

.jd_banner ul:last-child li {
  width: 6px;
  height: 6px;
  border-radius: 3px;
  border: 1px solid #fff;
  float: left;
  margin-left: 10px;
}

.jd_banner ul:last-child li:first-child {
  margin-left: 0;
}

.jd_banner ul:last-child li.now {
  background: #fff;
}
</style>
