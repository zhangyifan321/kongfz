<template>
  <div >
      <div class="style00"></div>
    <div class="dingdan">
      <p>我的服务</p>
      <span name="arrow-left">
        查看更多
        <van-icon name="arrow" />
      </span>
    </div>
    <ul>
      <li>
        <i class="iconfont icon-shouhuodizhi"></i>
        <p>收货地址</p>
      </li>
      <li>
        <i class="iconfont icon-dingyue"></i>
        <p>我的订阅</p>
      </li>
      <li>
        <i class="iconfont icon-kefu"></i>
        <p>客服留言</p>
      </li>
      <li>
        <i class="iconfont icon-jiangbei"></i>
        <p>信誉档案</p>
      </li>
      <li>
        <i class="iconfont icon-zhongbaojiandu-feibenren"></i>
        <p>监督与建议</p>
      </li>
      <li>
        <i class="iconfont icon-yijian"></i>
        <p>意见反馈</p>
      </li>
    </ul>
    <div class="style01"></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("../../../common/css/font.css");
.style00{height: 10px;}
.style01{height: 30px;}
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