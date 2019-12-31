<template>
    <div>
      <p>首页</p>{{count}}
 <van-button type="default" >Default</van-button>
  <van-button type="primary">Primary</van-button>
  <van-switch v-model="checked" />



    </div>
</template>
<script>


export default {
  data() {
    return {
      checked: true,
      
    };
  },
  computed:{
    
    count(){
      return this.$store.state.count;
    }
  },
  methods:{}
    
  };
</script>
<style>
  p{font-size: 20px;}
</style>