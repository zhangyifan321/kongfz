<template>
  <div>
    <div class="login">
      <van-icon name="arrow-left" @click="fanhui" />
      <div class="top">
        <p>注册</p>
      </div>
      <div class="center">
        <van-cell-group>
          <van-field v-model="cell" placeholder="请输入11位手机号" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="pwd" placeholder="请输入6到20位密码" type="password" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="email" placeholder="请输入邮箱" />
        </van-cell-group>
        <button @click="register">注册</button>
      </div>
    </div>
    <div class="mine"></div>
  </div>
</template>
<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";
Vue.use(Cell).use(CellGroup);
export default {
  data() {
    return {
      cell: "",
      pwd: "",
      email: ""
    };
  },
  methods: {
    fanhui() {
      this.$router.replace("login");
    },

    register() {
      if (
        this.cell.length == 11 &&
        this.pwd.length >= 6 &&
        this.pwd.length <= 20
      ) {
        fetch("http://127.0.0.1:3000/login/post", {
        method: "post",
        body: JSON.stringify({
          cell: this.cell,
          pwd: this.pwd,
          email: this.email
        }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
        .then(data => {
          return data.json();
        })
        .then(result => {
          window.console.log(result);
          if (result.msg == "添加成功") {
            this.$toast.success({
              message: "注册成功"
            });
            this.$router.replace("/login");
          } else {
            this.$toast.fail({
              message: "该账号或邮箱已经被注册"
            });
          }
        });
      } else {
        this.$toast({
          message: "账户密码格式不正确",
          position: "top"
        });
      }

      
    }
  }
};
</script>
<style  scoped>
.van-icon {
  position: fixed;
  top: 10px;
  left: 10px;
}
* {
  margin: 0;
  padding: 0;
}
.top {
  text-align: center;
  margin-top: 15px;
}
.top i {
  float: left;
  font-size: 35px;
}
.top p {
  font-size: 18px;
}
.center {
  width: 85%;
  margin: 30px auto;
}
.van-cell {
  height: 54.85px;
  border-bottom: 1px solid black;
  line-height: 54.85px;
}
.van-cell input {
  height: 33%;
}
.center > p {
  font-size: 13px;
  float: right;
  color: gray;
  margin-top: 8px;
}
.center button {
  border-radius: 5px;
  width: 100%;
  height: 47px;
  margin-top: 10px;
  border: none;
  background-color: #9e100e;
  color: white;
  font-size: 16px;
}
.center > div {
  margin-top: 20px;
  color: gray;
}
.center > div > p {
  float: left;
  font-size: 12px;
}
.center > div > span {
  float: right;
  font-size: 12px;
}
</style>
