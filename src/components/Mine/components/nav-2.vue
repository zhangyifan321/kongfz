<template>
  <div >
    <div class="dingdan">
      <p>我的订单</p>
      <span name="arrow-left">
        查看更多
        <van-icon name="arrow" />
      </span>
    </div>
    <ul>
      <li>
        <i class="iconfont icon-daiqueren"></i>
        <p>待确认</p>
      </li>
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
      <li>
        <i class="iconfont icon-xiaotubiao02"></i>
        <p>退货退款</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("../../../common/css/font.css");
.dingdan {
  height: 43px;
  border-bottom: 0.5px solid #eaeaea;
  width: 95%;
  margin: 0 auto;
  border-top-left-radius: 10px;
  box-shadow: 0 0px 2px #eaeaea;
  border-top-right-radius: 10px;
}
.dingdan > p {
  font-size: 15px;
  float: left;
  line-height: 45px;
  margin-left: 10px;
}
.dingdan > span {
  color: #999;
  font-size: 13px;
  float: right;
  line-height: 43px;
  margin-right: 10px;
}
ul {
  width: 95%;
  height: 150px;
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
</style>