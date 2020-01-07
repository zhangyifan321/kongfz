<template>
  <div class="mdfour">
      <h3>拍卖</h3>
    <ul>
      <li v-for="(itme,index) in list" :key="index">
        <div class="left">
          <p>{{itme.t1}}</p>
          <p>{{itme.t2}}</p>
        </div>
           <img v-lazy="itme.images" >
      </li>
    </ul>
<div class=" blank"></div>
  </div>

</template>
<script>
import {getnav3} from "../../../api/index"
export default {
  data() {
    return {
        list:[]
    };
  },
       //从后台请求数据
     async created() {
        this.list = await getnav3()
    }
    
};
</script>
<style scoped>
.mdfour{overflow: hidden;margin-top: 20px;}
h3{font-size:20px;color: #262626;padding-left: 12px;margin-bottom: 10px;}
.mdfour ul {padding-left: 12px;}
.mdfour ul li:nth-child(1){width: 171px;height:136px;}
.mdfour ul li:nth-child(1)>img{width: 100%; height: 69px;padding: 0px;}
.mdfour ul li{width: 171px;height: 66px;float: left;padding: 10px 0px;box-sizing: border-box;background: #fafafa;margin: 3px 2px;border-radius:5px}
.mdfour ul li .left{width:90px ;height:52px;float: left;margin-left: 10px;}
.mdfour ul li img {width:52px;height: 52px;}
.mdfour ul li p:nth-child(1) {font-size: 15px;font-weight: 700;color: #333;margin-bottom: 6px;}
.mdfour ul li p:nth-child(2) {font-size: 11px;color: #999;}
</style>