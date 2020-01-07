<template>
  <div>
    <top/>
    <nav1/>
    <nav2/>
    <nav3/>
    <nav4/>>
    <!-- 我的订单 -->
   
 
   
  </div>
</template>
<script>
import top from "./components/top"
import nav1 from "./components/nav-1"
import nav2 from "./components/nav-2"
import nav3 from "./components/nav-3"
import nav4 from "./components/nav-4"
export default {
  data() {
    return {};
  },
  created() {
    if (window.localStorage.getItem("user")) {
      // 已经登录
    } else {
      // 没有登录，进入登录页面
      this.$router.replace("/login");
    }
  },
  methods: {},
  components:{
      top,
      nav1,
      nav2,
      nav3,
      nav4
  }
};
</script>
<style scoped>
* {
  margin: 0;
  top: 0;
}


</style>