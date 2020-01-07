<template>
    <div>
        <div class="main">
            <div class="top"><div><h5>文学</h5><p>985</p></div><span>全部<van-icon name="arrow" /></span></div>
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <img v-lazy="item.url" alt="">
                    <div>
                        <div class="tit">{{item.title}}</div>
                        <div class="price">
                            <div class="price1"><div><p>当前价</p><b>{{item.currentPrice}}</b></div><span>1次出价</span></div>
                            <div class="price2"><div><p>起拍价</p><i>{{item.startingPrice}}</i></div><span>剩余09时56分23秒</span></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="style03"></div>
        <div class="style01"></div>
    </div>
</template>
<script>
import {auctionnav8} from "../../../api";
export default {
    data(){
        return{
            list:[]
        }
    },
    async created() {
    this.list = await auctionnav8();
  }
}
</script>
<style  scoped>
.style03{height: 20px;border-bottom: 1px solid #f3f3f3;width: 95%;}
.main{width: 90%;margin: 0 auto;}
.title{text-align: center;color: #262626;font-size: 18px;}
.style01{height: 40px;}
.style00{height: 40px;}
.top{display: flex;justify-content: space-between;line-height: 20px;}
.top h5{font-size: 15px;color: #262626;float: left;}
.top>div>p{font-size: 13px;color: #999999;float: right;margin-left: 5px;}
.top span{font-size: 12px;}
.top span .van-icon{color: #999999}
li{display: flex;margin-top: 20px;border-radius: 5px;overflow: hidden;justify-content: space-between;}
li>div{width: 225px;height: 100px;}
li>img{width: 98px;height: 98px;}
ul li .tit{overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;color: #262626;font-size: 14px;}
  .price1>div{float: left;}
  .price{display: flex;flex-direction: column;margin-top: 20px;}
  .price>div{display: flex;justify-content: space-between;}
.price p{font-size: 12px;color: #9E100E;float: left;}
.price span{font-size: 12px;color: #999999;float: right;}
.price b{font-size: 16px;color: #9E100E;float: right;line-height: 15px;margin-left: 5px;}
.price2 p{color: #999999;}
.price2 i{font-size: 12px;color: #999999;font-weight: 100px;float: right;margin-left: 5px;}
</style>