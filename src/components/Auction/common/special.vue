<template>
  <div class="titlebox">
    <div class="style00"></div>
    <div class="top">
      <div class="lineleft"></div>
      <span>推荐专场</span>
      <div class="lineright"></div>
    </div>
    <div class="style00"></div>
    <div class="content">
      <ul class="main">
        <li v-for="(item,index) in list" :key="index">
          <img
            src="data:image/png;base64,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"
            alt
          />
          <div>
            <img v-lazy="item.url" />
            <p class="title">{{item.title}}</p>
            <div class="p">
              <p class="otherbox">{{item.date_box}}</p>
              <p class="linkto">{{item.link_to}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="style00"></div>

  </div>
</template>
<script>
import { auctionnav2 } from "../../../api";
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    this.list = await auctionnav2();
  }
};
</script>
<style scoped>
.style00 {
  height: 40px;
}
.top {
  text-align: center;
  display: flex;
  justify-content: center;
}
.titlebox span {
  font-size: 18px;
  font-weight: 800;
  color: #262626;
}
.content {
  width: 100%;
  overflow-x: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  
}
li>img{width: 30px;height: 36px;position: absolute;left: 10px;}
.main {
  width: 2200px;
  display: flex;
}
.main > li {
    position: relative;
  width: 208px;
  margin-left: 10px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0px 10px 0 rgba(75, 72, 73, 0.13);
}
.main li > div img {
  width: 100%;
  height: 122px;
}
.main li .title {
  font-size: 15px;
  color: #262626;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.otherbox {
  font-size: 12px;
  color: #999999;
  margin-left: 10px;
}
.linkto {
  font-size: 12px;
  color: #262626;
  margin-right: 10px;
}
.p {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 10px;
}
.p>p{overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;}
.title {
  margin-left: 10px;
}
</style>