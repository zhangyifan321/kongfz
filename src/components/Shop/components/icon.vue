<template>
  <div class="twonav">
    <ul>
      <li v-for="(itme,index) in list" :key="index" >
          <div>
          <img :src="itme.image" alt="">
          <span>{{itme.title}}</span>
          </div>  
       
      </li>
    </ul>
  </div>
</template>
<script>
import { shopnav1 } from '../../../api';
export default {
  data() {
    return {
    list:[]

    };
  },
  async created() {
        this.list = await shopnav1()
    }
};
</script>
<style scoped>
.twonav{padding:20px 20px;box-sizing: border-box;}
.twonav ul{width: 100%;display: flex;justify-content: space-around;}
.twonav ul li img{width: 44px;height: 44px;padding-bottom: 3px;}
.twonav ul li  span{color: #666666;font-size: 12px;display: block}
</style>