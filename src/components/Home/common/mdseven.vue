<template>
  <div class="mdseven">
      <div class="top-t">
      <h3>新书广场</h3>
      <p>更多<span>></span></p>
      </div>
          <ul>
              <li v-for="(itme,index) in list" :key="index">
                  <div class="left">
                 <img v-lazy="itme.images" alt="">
                 <span>{{itme.price}}</span>
                  </div>
                  <div class="right">
                    <p>{{itme.title1}}</p>
                    <p><span>{{itme.title2}}</span><span>{{itme.s1}}</span><span>{{itme.s2}}</span><span>{{itme.s3}}</span><span>{{itme.s4}}</span></p>
                  </div>
              </li>
        </ul>
  </div>

</template>
<script>
import { getnav6 } from '../../../api'
export default {
    data(){
        return{
      list:[]
        }
    },
         //从后台请求数据
     async created() {

        this.list = await getnav6()
    }
}
</script>
<style scoped>
.mdseven{width: 100%;;}
.top-t{padding: 20px 15px;overflow: hidden;}
.top-t h3{font-size:20px;color: #262626;float: left;}
.top-t p{font-size: 13px;color: #365899;float:right;line-height: 30px;}
ul li{width: 345px;height: 140px;padding: 5px 15px;}
ul li .left{width: 100px;height: 130px;float: left;display: flex;position: relative;}
ul li .left img{margin: auto;}
ul li .left span{position: absolute;left: 0px;top:85px;width:56px;height:30px;background: brown;color: #fff;font-size: 14px;text-align: center;line-height: 30px;border-top-right-radius: 15px;border-bottom-right-radius:15px; }
ul li .right{width:230px;height: 150px;border-bottom:1px solid #f3f3f3;float: right;box-sizing: border-box;}  
ul li .right p:first-child{font-size:14px;font-weight: 700;color: #262626;width: 100%;overflow: hidden;height: 20px;margin:10px 0px; }
ul li .right p:last-child{color: #999;font-size: 12px;  }
ul li .right span{width: 20px;height: 20px;}
</style>