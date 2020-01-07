<template>
    <div>
        <div class="top">
        <van-row>
          <van-col span="14">购物车</van-col>
          <van-col span="6">编辑</van-col>
          <van-col span="3">
            <van-icon name="chat-o" />
          </van-col>
        </van-row>
      </div>
      <div class="style00"></div>
    </div>
</template>
<style  scoped>
.style00{height: 44px;background-color: white;}
.top {
  background: white;
  width: 100%;
  height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  line-height: 44px;
}
.van-col--14 {
  text-align: end;
  font-size: 18px;
}
.van-col--6 {
  text-align: end;
  font-size: 16px;
}
.van-col--3 {
  text-align: end;
  line-height: 50px;
}
</style>