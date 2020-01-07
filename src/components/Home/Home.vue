<template>
<div class="home">
  <mynav></mynav>
  <carousel></carousel>
  <twonav></twonav>
  <mdthree></mdthree>
  <blank></blank>
  <mdfour></mdfour>
  <blank></blank>
 <mdfive></mdfive>
  <blank></blank>
  <mdsix></mdsix>
  <blank></blank>
  <mdseven></mdseven>
  <blank></blank>
  <mdeight></mdeight>
  <blank></blank>
  <mdeight></mdeight>
   <blank></blank>
  <mdeight></mdeight>
   <blank></blank>
  <mdeight></mdeight>

</div>

</template>
<script>
//导入home下的组件
import mynav from "./common/mynav";
import carousel from "./common/carousel";
import twonav from "./common/twonav";
import mdthree from "./common/mdthree";
import blank from "./common/blank";
import mdfour from "./common/mdfour";
import mdfive from "./common/mdfive";
import mdsix from "./common/mdsix";
import mdseven from "./common/mdseven";
import mdeight from "./common/mdeight";




export default {
  data() {
    return {
      checked: true
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {},
    components: {
     mynav,
     carousel,
     twonav,
     mdthree,
     blank,
     mdfour,
     mdfive,
     mdsix,
     mdseven,
     mdeight
  }
};
</script>
<style>

</style>