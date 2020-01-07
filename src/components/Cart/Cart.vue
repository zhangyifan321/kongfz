<template>
  <div>
   <top/>
   <mine/>
   <bo/>
  </div>
</template>
<script>
import top from "./components/top"
import bo from "./components/bo"
import mine from "./components/mine"
export default {
   components:{
       top,
       mine,
       bo,
   },
   created() {
    if (window.localStorage.getItem("user")) {
      // 已经登录
    } else {
      // 没有登录，进入登录页面
      this.$router.replace("/login");
    }
  },
}
</script>
