<template>
    
    <div class="navigation-bar">
        <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#00000080"
            text-color="#ffffff"
            text-font="15px"
            border="0"
            >

      
            <el-menu-item index="1" @click="toMain">
                <img src="/img/libraryIcon.png" alt="" target="_self" class="libraryIcon">
            </el-menu-item>

            <el-menu-item index="2" @click="toLogin">
                <a  target="_self"  >用户登陆</a>
            </el-menu-item>

            <el-menu-item index="3" @click="toAdministrator">
                <a  target="_self">管理员登陆</a>
            </el-menu-item>

            <el-menu-item index="4" @click="toSignUp">
                <a  target="_self">用户注册</a>
            </el-menu-item>

            <!-- <el-menu-item index="5" @click="toLibrary">
                <a  target="_self">图书馆</a>
            </el-menu-item> -->

            <!-- <el-menu-item index="6" class="exitIcon">
                <img src="/img/logoutIcon.png" alt="" target="_self" class="logoutIcon">
            </el-menu-item> -->

            <!-- <el-menu-item index="6" @click="toMain">
                <a  target="_self">返回主页</a>
            </el-menu-item> -->
        </el-menu>
    
    </div>
</template>

<script>
export default {
    name:"Nav",
    data() {
      return {
        activeIndex: '1'
      }
    },
    methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toMain(){
      this.$router.push({path:'/'});
    },

    toLogin(){
      this.$router.push({path:'/UserLogin'});
    },
    toAdministrator(){
      this.$router.push({path:'/Admin'});
    },
    toSignUp(){
      this.$router.push({path:'/SignUp'});
    },




  },
    
}
</script>>

<style scoped>
.libraryIcon{
  height: 60px;
  width: 60px;
}

.exitIcon{
  float: right;
}

.logoutIcon{
  height: 40px;
  width: 40px;
}

</style>>