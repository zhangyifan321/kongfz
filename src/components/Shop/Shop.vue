<template>
  <div>
    <nono></nono>
    <carousel></carousel>
    <icon></icon>
  <person></person>
   <chara></chara>
  <book></book>
  <shoop1></shoop1>
 
  </div>
</template>

<script>
import nono from "./components/nono";
import carousel from "./components/carousel";
import icon from "./components/icon";
import person from "./components/person";
import chara from "./components/chara.vue";
import book from "./components/book";
import shoop1 from "./components/shoop1"


export default {
  data(){
    return{

    }
  },
  components:{
    nono,
    carousel,
    icon,
    person,
    chara,
    book,
    shoop1
    
  }
  
}
</script>

<style  scoped>

</style>