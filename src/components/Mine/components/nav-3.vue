<template>
  <div>
    <div class="style00"></div>
    <div class="acution">
      <p>我的拍卖</p>
      <span name="arrow-left">
        查看更多
        <van-icon name="arrow" />
      </span>
    </div>
    <ul>
      <li>
        <i class="iconfont icon-daifukuan"></i>
        <p>待付款</p>
      </li>
      <li>
        <i class="iconfont icon-daifahuo"></i>
        <p>代发货</p>
      </li>
      <li>
        <i class="iconfont icon-daishouhuo"></i>
        <p>待收货</p>
      </li>
      <li>
        <i class="iconfont icon-daipingjia"></i>
        <p>待评价</p>
      </li>
    </ul>
    <div class="style00"></div>
    <div class="zijin">
      <p>我的资金</p>
      <span name="arrow-left">
        ￥0.00
        <van-icon name="arrow" />
      </span>
    </div>
    <div class="style00"></div>
    <div class="img"><img src="http://res2.kongfz.com/wx/shop/image/fanli-bg.jpg" alt class="img" /></div>
    
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("../../../common/css/font.css");
.style00 {
  height: 10px;
}
.acution {
  height: 43px;
  border-bottom: 0.5px solid #eaeaea;
  width: 95%;
  margin: 0 auto;
  border-top-left-radius: 10px;
  box-shadow: 0 0px 2px #eaeaea;
  border-top-right-radius: 10px;
}
.acution > p {
  font-size: 15px;
  float: left;
  line-height: 45px;
  margin-left: 10px;
}
.acution > span {
    color: #999;
  font-size: 13px;
  float: right;
  line-height: 43px;
  margin-right: 10px;
}
ul {
  width: 95%;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  margin: 0 auto;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 2px 2px #eaeaea;
}
li {
  width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
li > i {
  font-size: 20px;
}
li > p {
  font-size: 13px;
}
.zijin {
  height: 55px;
  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0px 2px #eaeaea;
}
.zijin > p {
  font-size: 15px;
  float: left;
  line-height: 55px;
  margin-left: 10px;
}
.zijin > span {
  color: #9e100e;
  font-size: 13px;
  float: right;
  line-height: 53px;
  margin-right: 10px;
}
.img {
  width: 95%;
  height: 80px;
  border-radius: 10px;
  margin: 0 auto;
}
.img>img{width: 100%;height: 100%;}
</style>