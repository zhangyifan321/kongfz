<template>
    <div>
        <ul class="main">
            <li v-for="(item,index) in list" :key="index">
                <div><h4>{{item.title}}</h4><p>{{item.num}}</p><img v-lazy="item.images" alt=""></div>
                </li>
        </ul>
    </div>
</template>
<script>
import {auctionnav13} from "../../../api"
export default {
  data() {
    return {
         list:[]
    }
    
  },
     async created() {
        this.list = await auctionnav13()
    }
};
</script>
<style  scoped>
.main{display: flex;flex-direction: row;flex-wrap: wrap; height: 270px;width: 95%;margin: 0 auto;height: 236px;overflow: hidden;}
.main>li{width: 25%;box-sizing: border-box;border-right: 1px solid #f3f3f3;height: 125px;}
.main>li>div{box-sizing:border-box;padding: 5px;}
.main>li img{width: 68px;height: 50px;}
.main>li:nth-child(1){width: 50%;padding: 15px;border-right: 1px solid #f3f3f3;border-bottom: 1px solid #f3f3f3;height: 125px;}
.main>li:nth-child(1) img{width: 80px;height: 60px;float: right;}
.main>li:nth-child(2) img{width: 80px;height: 60px;float: right;}
.main>li:nth-child(2){width: 50%;padding: 15px;border-bottom: 1px solid #f3f3f3;border-right: none;height: 125px;}
.main>li:nth-child(6){border-right: none;}
.main>li h4{font-size: 15px;margin-left: 3px;}
.main>li p{font-size: 12px;color: #999999;margin-top: 5px;margin-left: 5px;}
</style>



    