<template>
    <div>
        <div class="vangrid">
      <van-grid :column-num="3">
        <van-grid-item icon text="足迹">
          <p>0</p>
          <span>我的竞拍</span>
        </van-grid-item>
        <van-grid-item icon text="足迹">
          <p>0</p>
          <span>我的收藏</span>
        </van-grid-item>
        <van-grid-item icon text="足迹">
          <p>0</p>
          <span>足迹</span>
        </van-grid-item>
      </van-grid>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.van-grid-item__content > span {
  font-size: 14px;
}
.van-grid-item__content > p {
  font-size: 14px;
}
.vangrid{margin-top: 20px;}
</style>