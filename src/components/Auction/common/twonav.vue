<template>
  <div class="twonav">
    <ul>
      <li v-for="(itme,index) in list" :key="index" >
          <div>
          <img v-lazy="itme.images" alt="">
          <span>{{itme.text}}</span>
          </div>  
       
      </li>
    </ul>
  </div>
</template>
<script>
import {auctionnav1} from "../../../api"
export default {
  data() {
    return {
         list:[]
    }
    
  },
     async created() {
        this.list = await auctionnav1()
    }
};
</script>
<style scoped>
.twonav{padding:20px 20px;box-sizing: border-box;}
.twonav ul{width: 100%;display: flex;justify-content: space-around;}
.twonav ul li img{width: 44px;height: 44px;padding-bottom: 3px;}
.twonav ul li  span{color: #666666;font-size: 12px;display: block}
</style>