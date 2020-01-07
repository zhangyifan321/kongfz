<template>
   <van-swipe :autoplay="3000" indicator-color="#fff">
  <van-swipe-item v-for="(image, index) in list" :key="index" >
    <img v-lazy="image" >
  </van-swipe-item>
</van-swipe>
</template>

<script>
import {getnav0} from "../../../api/index"
export default {
  data() {
    return {
         list:[]
    }
    
  },
     async created() {
        this.list = await getnav0()
    }
};
</script>

<style scoped>
.van-swipe{height: 170px;}
</style>