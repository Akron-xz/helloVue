<template>
    
     <div class="navigation-bar">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#34CFB3"
        text-color="#303133"
        text-font="15px"
      >
        <el-menu-item index="1">
          <a @click="toMain" target="_self" >用户列表</a></el-menu-item
        >
        <el-menu-item index="2">
          <a @click="toMain" target="_self">图书借阅与归还</a>
        </el-menu-item>
        <el-menu-item index="3"
          ><a @click="toMain" target="_self">注销用户</a></el-menu-item
        >
        <el-menu-item index="4">
          <a @click="toMain" target="_self">首页公告管理</a>
        </el-menu-item>
        <el-menu-item index="5">
          <a @click="toMain" target="_self">图书借阅统计</a></el-menu-item
        >
        <el-menu-item index="6">
          <a @click="toMain" target="_self"
            >返回主页</a
          ></el-menu-item
        >
      </el-menu>
    
    </div>
</template>

<script>
export default {
    name:"Nav",
    methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toMain(){
      this.$router.push({path:'/'});
    },

    toSearchClient(){
      this.$router.push({path:'/signup'});
    },
    toSearchFile(){
      this.$router.push({path:'/signup'});
    },
    toAnnounce(){
      this.$router.push({path:'/signup'});
    },
    toBooks(){
      this.$router.push({path:'/signup'});
    },
    toGraphReport(){
      this.$router.push({path:'/signup'});
    },


  },
    
}
</script>>

<style scoped>

</style>>