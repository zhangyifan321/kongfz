<template>
  <div class="mynav">
    <img src="../images/logo.png" alt />
    <div class="dw">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="商品名称 作者 出版社 ISBN" />
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.mynav {
  height: 54px;
  font-size: 16px;
  line-height: 58px;
  overflow: hidden;
}
.mynav > img {
  width: 34px;
  height: 26px;
  float: left;
  margin-top: 12px;
  margin-left: 15px;
}

.dw{width: 300px;height: 35px;margin-left: 58px;margin-top: 10px;border-radius:20px; background: #f5f5f5;line-height: 35px; }
.dw i{font-size:20px;float: left;padding-left: 10px;}
.dw input{background: #f5f5f5;border-radius:10px;height: 25px;width: 200px;color:#AAAAAA;}
</style>