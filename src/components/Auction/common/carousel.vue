<template>
   <van-swipe :autoplay="3000" indicator-color="#fff" >
  <van-swipe-item v-for="(image, index) in list" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
</template>

<script>
import {auctionnav0} from "../../../api"
export default {
  data() {
    return {
         list:[]
    }
    
  },
     async created() {
        this.list = await auctionnav0()
    }
};
</script>

<style scoped>
.van-swipe{height: 170px;}
.van-swipe__indicator--active{width: 10px;}
</style>