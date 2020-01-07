<template>
   <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in list" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
</template>

<script>
import { shopnav0 } from '../../../api';
export default {
  data() {
    return {
      list:[]
    };
  },async created() {
        this.list = await shopnav0()
    }
};
</script>

<style scoped>
.van-swipe{height: 170px;}
</style>