<template>
    <div class="home-container">
        <div class="admin" @click="toAdmin">
            管理员
         <div class="login box">
            <img src="/img/home/login.jpg" alt="" class="home-img" @click="toLogin">
            <p class="logo-name" @click="toLogin">登陆</p>
        </div>

        <div class="admin box" >
            <img src="/img/home/manage.jpg" alt="" class="home-img" @click="toAdmin">
            <p class="logo-name" @click="toAdmin">图书管理</p>
        </div>

        <div class="signup box">
            <img src="/img/home/signup.jpg" alt="" class="home-img" @click="toSignUp">
            <p class="logo-name" @click="toSignUp">注册</p>
        </div>
    </div>
</template>>


<script>

export default {
   data() {
        return {
            
        }
    },
    methods: {
        toLogin(){
            this.$router.push({path:'/UserLogin'})
        },
        toAdmin(){
            this.$router.push({path:'/admin'})
        },
        toSignUp(){
            this.$router.push({path:'/signup'})
        },
    },
    created() {
        
    },
}
</script>

<style  scoped>
.home-container{
    position: fixed;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    text-align: center;
}

.home-img{
    width: 150px;
    height:150px;
    margin-top: 50px;
    border-radius: 80px;
    cursor: pointer;
    transition: width 1s, height 1s, transform 1s;
}

.home-img:hover{
    width: 180px;
    height:180px;
}

.logo-name:hover{
    cursor: pointer;
    color: blue;
}

.box{
    list-style-type: none;
    float: left;
    margin: auto;
    width: 33%;
}


</style>>