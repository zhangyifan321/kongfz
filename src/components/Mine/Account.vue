<template>
  <div>
    <van-nav-bar
      title="账户管理"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"/>
      <van-cell-group>
  <van-cell title="个人资料" is-link  size="large"/>
  <van-cell title="设置登录密码" is-link size="large"/>
  <van-cell title="修改绑定手机" is-link size="large"/>
  <van-cell title="绑定邮箱" is-link size="large"/>
  <van-cell title="实名认证" is-link size="large"/>
  <van-cell title="交易提醒设置" is-link size="large"/>
  <div class="style00"></div>
  <van-cell title="关于我们" is-link size="large"/>
</van-cell-group>
<van-cell title="退出登录" is-link size="large" @click="out"/>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.replace("/mine")
    },
   out(){
       localStorage.clear("user")
       this.$router.replace("/login")
   }
  }
};
</script>
<style  scoped>
.style00{height: 15px;}
</style>