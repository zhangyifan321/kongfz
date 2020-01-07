<template>
  <div class="mdthree">
    <ul>
      <li v-for="(item,index) in list" :key="index" >
        <div class="left">
          <p>{{item.t1}}</p>
          <p>{{item.t2}}</p>
        </div>
           <img v-lazy="item.images">
      </li>
    </ul>
<div class=" blank"></div>
  </div>

</template>
<script>
import { getnav2 } from '../../../api';
export default {
  data() {
    return {
list:[]
    };
  },
      //从后台请求数据
     async created() {

        this.list = await getnav2()
    }
};
</script>
<style scoped>
.mdthree{overflow: hidden;}
.mdthree ul {padding-left: 12px;}
.mdthree ul li{width: 171px;height: 66px;float: left;padding: 10px 0px;box-sizing: border-box;background: #fafafa;margin: 3px 2px;border-radius:5px}
.mdthree ul li .left{width:90px ;height:52px;float: left;margin-left: 10px;}
.mdthree ul li img {width: 52px;height: 52px;}
.mdthree ul li p:nth-child(1) {font-size: 15px;font-weight: 700;color: #333;margin-bottom: 6px;}
.mdthree ul li p:nth-child(2) {font-size: 11px;color: #999;}
</style>