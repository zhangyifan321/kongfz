<template>
  <div class="mine">
    <div class="top">
      <h3>特色推荐</h3>
    </div>
    <div class="first">
      <ul>
        <li>线装古籍</li>
        <li>国学古籍</li>
        <li>民国旧书</li>
        <li>名人墨迹</li>
        <li>艺术珍本</li>
        <li>史学典籍</li>
      </ul>
    </div>
    <div class="last-t">
      <ul>
      <li v-for="(itme,index) in list" :key="index">
         <img :src="itme.image" alt=""/>
        <div class="list">
          <p>{{itme.title}}</p>
          <p>{{itme.author}}</p>
          <p><strong>￥</strong>{{itme.price}}<span></span></p>
        </div>
      </li>
    </ul>
    </div>
  
  </div>
</template>
<script>
import { shopnav3 } from '../../../api'
export default {
    data(){
        return{
        list:[],
        }
        
    },
         //从后台请求数据
     async created() {
        this.list = await shopnav3()
    }
}
</script>
<style scoped>

.mine{width: 100%; }
.top{padding: 20px 15px;}
.top h3{font-size:20px;color: #262626;float: left;}
.first{width: 100%;overflow-x: auto;}
 .first  ul{width: 600px;padding-top: 10px;}
::-webkit-scrollbar{width: 0;height: 0;}
.first ul li{font-size: 16px;color: #999;float: left;padding-left: 15px;}
.list-t{width: 100%;overflow-x: auto;}
.last-t ul{display: flex;margin-top: 10px;flex-wrap: wrap;width: 100%}
.last-t ul li img{width: 116px;height:116px;float: left;} 
.last-t ul li{width: 30%;margin-top: 5px;margin-left: 10px;}

ul li p{width: 100%;height: 17px; overflow: hidden;}
ul li p:nth-child(1){font-size: 13px;color: #262626;margin-bottom: 3px;margin-top: 5px;}
ul li p:nth-child(2){font-size: 10px;color: #999999;}
ul li p:nth-child(3){font-size: 15px;color: #9E110E;height: 18px;}
strong{font-size: 12px;color: #9E110E;}
span{font-size: 11px;color: #999999;padding: 0px 3px;} 

</style>