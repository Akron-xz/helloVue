<template>
  <div class="home-container">
  <userNavigation></userNavigation>
    <!-- <div class="login box">
      <img src="/img/home/userIcon.png" alt="" class="login-img" @click="toLogin" />
      <p class="logo-name" @click="toLogin">用户登录</p>
    </div>

    <div class="admin box">
      <img src="/img/home/manageIcon.png" alt="" class="admin-img" @click="toAdmin" />
      <p class="logo-name" @click="toAdmin">管理员登录</p>
    </div>

    <div class="signup box">
      <img
        src="/img/home/signupIconWhite.png"
        alt=""
        class="signup-img"
        @click="toSignUp"
      />
      <p class="logo-name" @click="toSignUp">用户注册</p>
    </div> -->
    <div class="welcomeWord">
      <h1>欢迎来到第三小组图书管理系统</h1>
    </div>

    <div class="announce-box">
      <h2>图书馆公告:</h2>
      <div class="link-top"></div>
      <p>{{ announceContent }}</p>
    </div>
    <div class="img">
      <!-- <img src="/img/anoncementImg.svg" alt="" class="anoncementImg">  -->
    </div>
  </div>
</template>>


<script>
import axios from "axios";
import userNavigation from '@/components/homeNav.vue'
export default {
  components:{
        userNavigation
    },
  data() {
    return {
      announceTime: "",
      announceContent: "我是梁嘉文greyery",
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
  background-image: url(/img/divBg/bg11.jpg);
  background-size: 100% 100%;
  text-align: center;
}

.login-img{
  width: 150px;
  height: 150px;
  margin-top: 50px;
  opacity: .70;
}

.admin-img{
  width: 150px;
  height: 150px;
  margin-top: 50px;
  cursor: pointer;
}

.signup-img{
  width: 150px;
  height: 150px;
  margin-top: 50px;

}

.logo-name:hover {
  cursor: pointer;
  color: blue;
}

.box {
  list-style-type: none;
  float: left;
  margin-top: 10px;
  margin-left: 10px;
  width: 31%;
}

.login{
  background-image: url(/img/divBg/bg6.jpg);
  background-size: 100% 100%;
}

.admin{
  background-image: url(/img/divBg/bg2.jpg);
  background-size: 100% 100%;
}

.signup{
  background-image: url(/img/divBg/bg3.jpg);
  background-size: 100% 100%;
}

.logo-name{
  color: black;
}

.announce-box {
  position: fixed;
  top: 40%;  
  left: 50%;
  height: 200px;
  width: 400px;
  margin-left: -40%;
  background:none;
}

.welcomeWord{
  background: #00000050;
  margin-top: 0px;
}

.welcomeWord h1{
  font-size:40px;
  margin-top: 0px;
  color: white;
}

.announce-box p{
  color: white;
}

.link-top {
  width: 100%;
  height: 1px;
  border-top: solid white 2px;
}
.announce-box h2 {
  font-size:40px;
  color: white;
  margin-top: 0;
}

.anoncementImg{
  position: relative;
  bottom: 30%;
}
</style>>