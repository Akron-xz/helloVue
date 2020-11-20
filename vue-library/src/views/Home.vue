<template>
  <div class="home-container">
    <div class="login box">
      <img src="/img/home/login.png" alt="" class="home-img" @click="toLogin" />
      <p class="logo-name" @click="toLogin">登陆</p>
    </div>

    <div class="admin box">
      <img
        src="/img/home/admin.png"
        alt=""
        class="home-img"
        @click="toAdmin"
      />
      <p class="logo-name" @click="toAdmin">图书管理</p>
    </div>

    <div class="signup box">
      <img
        src="/img/home/signup.png"
        alt=""
        class="home-img"
        @click="toSignUp"
      />
      <p class="logo-name" @click="toSignUp">注册</p>
    </div>

    <div class="announce-box" >
      <p>{{announceContent}}</p>
    </div>
  </div>
</template>>


<script>
import axios from "axios";
export default {
  data() {
    return {
     
      announceTime: "",
      announceContent:"",
     

      
    };
  },
  methods: {
    getAnnounce() {
      axios({
              method:"get",
              url:"http://localhost:8081/announce/list"
            }).then(res=>{
                let announceContent = res.data.announceContent;
                this.announceContent = announceContent;
              console.log(announceContent);
                    
              
            })
        .catch(function (error) {
          //请求失败
          console.log("error...", error);
        });
    },
    toLogin() {
      this.$router.push({ path: "/UserLogin" });
    },
    toAdmin() {
      this.$router.push({ path: "/admin" });
    },
    toSignUp() {
      this.$router.push({ path: "/signup" });
    },
  },
  created() {
      this.getAnnounce();
  },
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
  margin: auto;
  width: 33%;
}
.announce-box {
  position: fixed;
  bottom: 70px;
  left: 50%;
  height: 200px;
  width: 80%;
  margin-left: -40%;
  background-color: #ffffff70;
  border: 2px solid black;
}
</style>>