<template>
   <div>     
   <mynav></mynav>
   <carousel></carousel>
   <twonav></twonav>
  <auctionarea></auctionarea>
  <special></special>
  <todayhot/>
  <calligraphy/>
  <calligraphy2/>
  <collect/>
  <art/>
  <literature/>
  <old/>
  <seals/>
  <red/>
  <pictures/>
  </div>
</template>

<script>
import mynav from "../Auction/common/mynav";
import carousel from "../Auction/common/carousel"
import twonav from "../Auction/common/twonav";
import auctionarea from "../Auction/common/auctionArea"
import special from "../Auction/common/special"
import todayhot from "../Auction/common/todayhot"
import calligraphy from "../Auction/common/calligraphy"
import calligraphy2 from "../Auction/common/calligraphy2"
import collect from "../Auction/common/collect"
import art from "../Auction/common/art"
import literature from "../Auction/common/literature"
import old from "../Auction/common/old"
import seals from "../Auction/common/seals"
import red from "../Auction/common/red"
import pictures from "../Auction/common/pictures"
export default {
data(){
   return{

   }
},
    components: {
     mynav,
     carousel,
     twonav,
     auctionarea,
     special,
     todayhot,
     calligraphy,
     calligraphy2,
     collect,
     art,
     literature,
     old,
     seals,
     red,
     pictures
  }
}
</script>
<style scoped>

</style>
