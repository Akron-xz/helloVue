<template>
    <div class="home-container">
        <div class="admin" @click="toAdmin">
            管理员
        </div>

        <div class="login" @click="toLogin">
            登陆
        </div>

        <div class="signup" @click="toSignUp">
            注册
        </div>
    </div>
</template>>


<script>
export default {
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

.admin{
    position: absolute;
    left:50%;
    width: 300px;
    height: 100px;
    margin-left: -150px;
    margin-top: 50px;
    background-color: red;
    cursor: pointer;
}

.login{
    position: absolute;
    left:25%;
    width: 300px;
    height: 100px;
    margin-left: -150px;
    margin-top: 250px;
    background-color: blue;
    cursor: pointer;
}

.signup{
    position: absolute;
    right:25%;
    width: 300px;
    height: 100px;
    margin-right: -150px;
    margin-top: 250px;
    background-color: black;
cursor: pointer;
}

</style>>