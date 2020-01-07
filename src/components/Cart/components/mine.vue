<template>
  <div>
    <div class="mine" v-for="(item,index) in list" :key="index">
      <div class="style00"></div>
      <div class="wares">
        <div class="shop">
          <van-checkbox icon-size="17px" checked-color="#9e100e" v-model="item.checkbox"></van-checkbox>
          <div></div>
          <div></div>
          <div></div>
          <i class="iconfont icon-dianpu"></i>
          <p>{{item.shop}}</p>
          <van-icon name="arrow" />
          <div></div>
        </div>
        <div class="img">
          <div class="checkbox">
            <van-checkbox icon-size="17px" checked-color="#9e100e" v-model="item.checkbox"></van-checkbox>
          </div>
          <img v-lazy="item.url" alt />
          <div class="right">
            <p>{{item.title}}</p>
            <div class="p">
              <p>￥{{item.price}}</p>
              <span>仅一件</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bo">
      <van-checkbox v-model="checked" icon-size="17px" checked-color="#9e100e" @click="checkAll">全选</van-checkbox>
      <div class="pirce">
        <p>不含运费</p>
        <span>合计:</span>
        <b>￥{{total}}</b>
      </div>
      <div class="btn">
        <button>结算({{num}})</button>
      </div>
    </div>
    <div class="style03"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      list: [
        {
          url: "https://www.kfzimg.com/sw/kfzimg/356/459d8312606e7bdd_s.jpg",
          shop: "浩然文史书斋",
          title: "中国近代思想与学术的系谱（增订版）",
          num:1,
          price: 80.00,
          checkbox: true
        },{
          url: "https://www.kfzimg.com/sw/kfzimg/814/90e7dc46be87fa1d_s.jpg",
          shop: "小伍书屋",
          title: "CD 郭富城 铁幕诱惑",
          num:1,
          price: 500.00,
          checkbox: true
        },
        {
          url: "https://www.kfzimg.com/sw/kfzimg/606/74c4013e965b8e4e_s.jpg",
          shop: "浩然文史书斋",
          title: "中国近代思想与学术的系谱（增订版）",
          num:1,
          price: 80.00,
          checkbox: true
        }
      ]
    };
  },
  computed:{
    total(){
      var price=0;
      for(let h in this.list){
        if(this.list[h].checkbox){
          price+=this.list[h].num*this.list[h].price
        }
      }
      return price
    },
    num(){
      var num1=0;
      for(let n in this.list){
        if(this.list[n].checkbox){
          num1++
        }
      }
      return num1
    }
  },
  methods: {
    checkAll() {
      // this.$refs.checkboxGroup.toggleAll(true);
      
     
        for (var i in this.list) {
          window.console.log(this.list[i]);
          this.list[i].checkbox = !this.checked;
        
      }
    }
  }
};
</script>
<style scoped>
.right{width: 197px;}
.style03{height: 120px;}
.style01 {
  height: 10px;
}
.style00 {
  height: 10px;
}
.mine {
  background-color: #efefef;
}
.wares {
  background-color: white;
  width: 90%;
  height: 150px;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
}
.shop {
  display: flex;
  height: 40px;
  flex-direction: row;
  justify-content: space-around;
  width: 45%;
  margin-left: 10px;
  line-height: 40px;
}
.shop p {
  font-size: 14px;
}
.shop i {
  font-size: 16px;
  line-height: 40px;
}
.img {
  height: 90px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  padding-left: 0;
}
.img img {
  width: 85px;
  height: 85px;
}
.checkbox {
  padding-top: 30px;
  padding-right: 10px;
}
.img > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 15px;
  padding-left: 10px;
}
.img > div > p {
  font-size: 14px;
}
.p {
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.p p {
  font-size: 14px;
}
.bo {
  position: fixed;
  bottom: 50px;
  left: 0;
  width: 100%;
  height: 52px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  font-size: 12px;
  padding-left: 10px;
}
.pirce {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 50px;
}

.btn {
  width: 110px;
}
button {
  background-color: #9e100e;
  width: 80px;
  height: 40px;
  border: none;
  margin-top: 5px;
  color: white;
  font-size: 14px;
  border-radius: 5px;
}
.pirce p {
  font-size: 12px;
  color: #999999;
  padding-right: 10px;
}
.pirce b {
  color: #9e100e;
  font-size: 15px;
}
</style>