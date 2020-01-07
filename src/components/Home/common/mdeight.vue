<template>
  <div class="mdeight">
      <div class="top-t">
      <h3>旧书-国学经典</h3>
      <p>更多<span>></span></p>
      </div>
          <ul>
              <li v-for="(itme,index) in list" :key="index">
                  <div class="left">
                 <img v-lazy="itme.images" alt="">
                 <span>{{itme.price}}</span>
                  </div>
                  <div class="right">
                    <p>{{itme.title}}</p>
                     <p>{{itme.title1}}</p>
                     <p>{{itme.title2}}</p>
                  </div>
              </li>
        </ul>
        <div class="bottom"><span>换一换</span><i class="iconfont icon-huanyihuan"></i></div>
  </div>

</template>
<script>
import {getnav7} from "../../../api"
export default {
    data(){
        return{
     list:[]
        }
    },
             //从后台请求数据
     async created() {

        this.list = await getnav7()
    }
}
</script>
<style scoped>
.mdeight{width: 100%;}
.top-t{padding: 20px 15px;overflow: hidden;}
.top-t h3{font-size:20px;color: #262626;float: left;}
.top-t p{font-size: 13px;color: #365899;float:right;line-height: 30px;}
ul{margin-bottom: 20px;}
ul li{width: 345px;height: 150px;padding: 5px 15px;}
ul li .left{width: 100px;height: 140px;float: left;display: flex;position: relative;}
ul li .left img{margin: auto;}
ul li .left span{position: absolute;left: 0px;top:85px;width:56px;height:30px;background: brown;color: #fff;font-size: 14px;text-align: center;line-height: 30px;border-top-right-radius: 15px;border-bottom-right-radius:15px; }
ul li .right{width:230px;height: 150px;border-bottom:1px solid #f3f3f3;float: right;box-sizing: border-box;}
ul li .right p:first-child{font-size:14px;font-weight: 700;color: #262626;width: 100%;overflow: hidden;height: 20px;margin:10px 0px; }
ul li .right p:nth-child(2){color: #262626;font-size: 12px;margin:10px 0px; }
ul li .right p:last-child{color: #999999;font-size: 12px;height: 36px;overflow: hidden;margin:15px 0px; }
ul li .right span{width: 20px;height: 20px;}
.bottom{font-size: 13px;color: #365899;width: 55px;height: 20px;margin: auto;line-height: 20px;}
.bottom span{float: left;}

</style>