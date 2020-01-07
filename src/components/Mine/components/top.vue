<template>
  <div>
    <div class="top">
      <div>
        <van-icon name="contact" />
        <van-icon name="chat-o" />
      </div>
    </div>
    <div class="style00"></div>
    <div class="mine">
      <img src="http://user.kongfz.com/data/member_pic/6550/11576550.jpg" alt  @click="account"/>
      <div class="center">
        <div><p>{{user[0].cell}}</p></div>
        <div class="p">
          <span>买家好评0</span>
          <span>|</span>
          <span>信誉0</span>
        </div>
      </div>

      <span>
        <van-icon name="shop-o" />我要卖书
      </span>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    computed: {
    user() {
      return JSON.parse(localStorage.getItem("user")).user;
    }
  },
  methods:{
    account(){
      this.$router.replace("/account")
    }
  }
}
</script>
<style  scoped>
.vant-icon{font-size: 10px;}
.top {
  width: 100%;
  margin-top: 10px;
}
.top > div {
  float: right;
}
.van-icon-contact {
  margin-right: 25px;
}
.van-icon-chat-o {
  margin-right: 10px;
}
.center{display: flex;flex-direction: column;justify-content:space-around;line-height: 10px;}
.mine {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
}
.mine img {
  width: 65px;
  height: 65px;
  border-radius: 50%;
}
.p{display: flex;flex-direction: row;justify-content: space-around;}
.p>span{font-size: 12px;}
.mine > span > .van-icon-shop-o {
  font-size: 20px;
}
.mine > span {
  margin-top: 10px;
  display: block;
  width: 100px;
  height: 29px;
  border: 1px solid #365899;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  font-size: 13px;
  color: #2e4d89;
  align-items: center;
}
</style>