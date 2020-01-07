<template>
  <div class="mdfive">
      <div class="top-t">
      <h3>好书推荐</h3>
      <p>更多<span>></span></p>
      </div>
      <div class="list-t">
  <ul>
      <li v-for="(itme,index) in list" :key="index">
         <img v-lazy="itme.images" alt=""/>
        <div class="list">
          <p>{{itme.title}}</p>
          <p>{{itme.author}}</p>
          <p><strong>￥</strong>{{itme.price}}<span>起</span></p>
        </div>
      </li>
    </ul>
      </div>
  </div>

</template>
<script>
import {getnav4} from "../../../api"
export default {
    data(){
        return{
    list:[]
        }
    },
         //从后台请求数据
     async created() {

        this.list = await getnav4()
    }
}
</script>
<style scoped>
.mafive{width: 100%;}
.top-t{padding: 20px 15px;}
.top-t h3{font-size:20px;color: #262626;float: left;}
.top-t p{font-size: 13px;color: #365899;float:right;line-height: 30px;}
.list-t{width: 100%;overflow-x:auto;}
ul{width:1180px;display: flex;margin-top: 10px;}
/* ul::-webkit-scrollbar{display: none;} */
ul li{float: left;width: 100px;height: 190px;margin-left: 15px;margin-top: 5px;}
ul li img{width: 100px;height: 127px;}
ul li p{width: 100%;height: 17px; overflow: hidden;}
ul li p:nth-child(1){font-size: 13px;color: #262626;margin-bottom: 3px;margin-top: 5px;}
ul li p:nth-child(2){font-size: 10px;color: #999999;}
ul li p:nth-child(3){font-size: 15px;color: #9E110E;height: 18px;}
strong{font-size: 12px;color: #9E110E;}
span{font-size: 11px;color: #999999;padding: 0px 3px;}
::-webkit-scrollbar{height: 0;width: 0;}
</style>