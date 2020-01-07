<template>
  <div class="mine">
    <div class="top">
      <h3>书店推荐</h3>
    </div>
    <div class="first">
      <ul>
        <li>线装古籍</li>
        <li>国学古籍</li>
        <li>历史</li>
        <li>艺术</li>
        <li>艺术珍本</li>
        <li>史学典籍</li>
      </ul>
    </div>
    <div></div>
    <div class="last-t">
      <ul class="center">
      <li v-for="(itme,index) in list" :key="index">
        <div class="shop">
          <img v-lazy="itme.shop.headimage" alt=""/>
          <div class="name"><p>{{itme.shop.name}}</p><i>{{itme.shop.title}}</i></div>
          <span>进店</span>
        </div>
          
        <ul class="books">
          <li v-for="(img,dex) in itme.books" :key="dex">
            <img v-lazy="img.image" alt="">
            <div>
              <p>{{img.title}}</p>
              <i>￥{{img.price}}</i>
            </div>
            </li>
        </ul>
      </li>
    </ul>
    </div>
  </div>
</template>
<script>
import { shopnav5 } from '../../../api'
export default {
    data(){
        return{
        list:[]
        }
    },
         //从后台请求数据
     async created() {
        this.list = await shopnav5()
    }
}
</script>
<style scoped>
.mine{width: 100%; }
.center{width: 95%;margin: 0 auto;padding: 10px;box-sizing: border-box;}
.top h3{font-size:20px;color: #262626;float: left;margin-left: 10px;}
.first{width: 100%;overflow-x: auto;}
 .first  ul{width: 600px;padding-top: 10px;}
::-webkit-scrollbar{width: 0;height: 0;}
.first ul li{font-size: 16px;color: #999;float: left;padding-left: 15px;box-sizing: border-box;padding: 10px;}
.list-t{width: 100%;overflow-x: auto;}
.last-t .center li{width: 100%;background-color: #fafafa;border-radius: 5px;margin: 0 auto;margin-top: 20px;}
.center li p{width: 100%;height: 17px; overflow: hidden;}
.center li p:nth-child(1){font-size: 13px;color: #262626;margin-bottom: 3px;margin-top: 5px;}
.center li p:nth-child(2){font-size: 10px;color: #999999;}
.center li p:nth-child(3){font-size: 15px;color: #9E110E;height: 18px;}
strong{font-size: 12px;color: #9E110E;}
.shop{width: 335px;height: 44px;display: flex;justify-content: space-between;}
span{font-size: 11px;color: #999999;padding: 0px 3px;} 
.shop>img{width: 44px;height: 44px;border-radius: 5px;}
.name{line-height: 10px;padding-right: 75px;}
.name p{font-size: 13px;}
.name i{font-size: 12px;}
.shop span{color: #9E110E;display: block;width: 41px;height: 20px;border: 1px solid #e5e5e5;font-size: 13px;border-radius: 5px;text-align: center;}
.books{display: flex;flex-direction: row;justify-content: space-between;width: 100%;}
.books li{width: 30%;height: 157px;}
.books img{width: 105px;height: 105px;}
.books i{font-size: 15px;color: #9E110E;}
</style>