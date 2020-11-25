<template>
  <div class="home-container">
    <div class="login box">
      <img src="/img/home/login.png" alt="" class="home-img" @click="toLogin" />
      <p class="logo-name" @click="toLogin">用户登录</p>
    </div>

    <div class="admin box">
      <img src="/img/home/admin.png" alt="" class="home-img" @click="toAdmin" />
      <p class="logo-name" @click="toAdmin">管理员登录</p>
    </div>

    <div class="signup box">
      <img
        src="/img/home/signup.png"
        alt=""
        class="home-img"
        @click="toSignUp"
      />
      <p class="logo-name" @click="toSignUp">用户注册</p>
    </div>

    <div class="announce-box">
      <h1>图书馆公告:</h1>
      <p>{{ announceContent }}</p>
    </div>
    <div class="img">
      <img src="/img/anoncementImg.svg" alt="" class="anoncementImg"> 
    </div>
  </div>
</template>>


<script>
import axios from "axios";
export default {
  data() {
    return {
      announceTime: "",
      announceContent: "",
      permission: false,
    };
  },
  methods: {
    getAnnounce() {
      axios({
        method: "get",
        url: "http://localhost:8081/announce/list",
      })
        .then((res) => {
          let announceContent = res.data.announceContent;
          this.announceContent = announceContent;
          console.log(announceContent);
        })
        .catch(function (error) {
          //请求失败
          console.log("error...", error);
        });
    },
    // 登录
    toLogin() {
      this.permission = true;
      this.$router.push({ path: "/UserLogin" });
    },
    // 管理员登录
    toAdmin() {
      this.permission = true;
      this.$router.push({ path: "/admin" });
    },
    // 注册账号
    toSignUp() {
      this.permission = true;
      this.$router.push({ path: "/signup" });
    },
  },
  created() {
    this.getAnnounce();
  },

  // 只有点击上面 用户登录 或 管理员登录 或 注册 才能跳转 (导航守卫)
  // beforeRouteLeave (to, from, next) {
  //   if (this.permission) {
  //     next();
  //   }else {
  //     next(false);
  //   }
  // }
};
</script>

<style  scoped>
.home-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  text-align: center;
}

.home-img {

  width: 150px;
  height: 150px;
  margin-top: 50px;
  border-radius: 80px;
  cursor: pointer;
  transition: width 1s, height 1s, transform 1s;
}

.home-img:hover {
  width: 180px;
  height: 180px;
}

.logo-name:hover {
  cursor: pointer;
  color: blue;
}

.box {
  list-style-type: none;
  float: left;
  width: 33%;
}

.announce-box {
  position: absolute;
  bottom: 70px;
  left: 10%;
  height: 200px;
  width: 80%;
  background-color: #ffffff40;
  background-image: url(/img/anoncementImg.png);
  border: 1px solid black;
}

.announce-box h1 {
  margin-top: 0;
}

.img{
  margin-left: 100px;
  height: 100px;
  width: 1000px;
}
.anoncementImg{
  position: absolute;
  margin-left: 300px;
  height: 580px;
  width: 1000px;
}



</style>>