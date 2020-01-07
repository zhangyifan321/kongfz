<template>
  <div class="mdfive">
      <div class="top-t">
      <h3>书单推荐</h3>
      <p>更多<span>></span></p>
      </div>
      <div class="list-t">
  <ul>
      <li v-for="(itme,index) in list" :key="index">
         <img :src="itme.image" alt=""/>
          <p>{{itme.title}}</p>
      </li>
      <li><span>查看全部144个书单</span></li>
    </ul>
      </div>
  </div>

</template>
<script>
import {shopnav4} from "../../../api"
export default {
    data(){
        return{
        list:[]
        }
    },
         //从后台请求数据
      async created() {
        this.list = await shopnav4()
    }
}
</script>
<style scoped>
.mafive{width: 100%;}
.top-t{padding: 20px 15px;}
.top-t h3{font-size:20px;color: #262626;float: left;}
.top-t p{font-size: 13px;color: #365899;float:right;line-height: 30px;}
.list-t{width: 100%;overflow-x:auto;}
ul{width:1200px;display: flex;margin-top: 10px;}
ul li{float: left;width: 335px;height: 200px;margin-left: 15px;margin-top: 5px;box-sizing: border-box;border: 1px solid #eeeeee;border-radius:5px;overflow: hidden;}
ul li img{width: 334px;height: 155px;border-radius:5px; }
ul li p{font-size: 13px;color: #999999;margin: 10px 10px 0px 10px;width: 100%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
::-webkit-scrollbar{height: 0;width: 0;}
ul li:last-child{width: 120px;height: 200px;background: #fafafa;display: flex;}
ul li:last-child>span{width: 75px;height: 50px;display: block; font-size: 15px;color: #262626;text-align: center;margin: auto;}
</style>