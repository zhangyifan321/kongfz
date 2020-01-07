<template>
  <div>
    <div class="login" v-if="isShow">
      <div class="top">
        <p>登录</p>
      </div>
      <div class="center">
        <van-cell-group>
          <van-field v-model="cell" placeholder="请输入用户名" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="pwd" placeholder="请输入密码" type="password" />
        </van-cell-group>
        <p>忘记密码?</p>
        <button @click.prevent="login">登录</button>
        <div>
          <p>短信验证码登录</p>
          <span @click="register">注册</span>
        </div>
      </div>
    </div>
    <div class="mine" v-else></div>
  </div>
</template>
<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";
Vue.use(Cell).use(CellGroup);
// import getuser from "./getuser"
export default {
  data() {
    return {
      cell: "",
      pwd: ""
    };
  },
  created() {},
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("user"));
    },

    isShow() {
      if (this.user != null) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    login() {
      if (
        this.cell.length == 11 &&
        this.pwd.length >= 6 &&
        this.pwd.length <= 20
      ) {
        fetch("http://127.0.0.1:3000/login/register", {
          method: "post",
          body: JSON.stringify({ cell: this.cell, pwd: this.pwd }),
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })
          .then(data => {
            return data.json();
          })
          .then(result => {
            window.console.log(result);
            if (result.msg == "登录成功") {
              localStorage.setItem("user", JSON.stringify(result));
              this.$router.replace("/mine");
            } else {
              this.$toast({
                message: "账户或密码错误",
                position: "top"
              });
            }
          });
      } else {
        this.$toast.fail({
          message: "格式不正确"
        });
      }
    },
    register() {
      this.$router.replace("/register");
    }
  }
};
</script>
<style  scoped>
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
