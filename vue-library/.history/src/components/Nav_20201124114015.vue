<template>
    
     <div class="navigation-bar">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#34CFB3"
        text-color="#303133"
        text-font="15px">

        <el-menu-item>
                <img src="/img/libraryIcon.png" alt="" target="_self" class="libraryIcon">
            </el-menu-item>
            
        <el-menu-item index="1" @click="toSearchClient">
          <a  target="_self"  >用户列表</a></el-menu-item
        >
        <el-menu-item index="2" @click="toBooks">
          <a  target="_self">图书借阅与归还</a>
        </el-menu-item>

        <el-menu-item index="3" @click="toAnnounce">
          <a  target="_self">首页公告管理</a>
        </el-menu-item>
        <el-menu-item index="4" @click="toStatistics">
          <a  target="_self">图书借阅统计</a></el-menu-item
        >
        <el-menu-item index="5" @click="toMain">
          <a  target="_self">返回主页</a>
            </el-menu-item>
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

    toSearchClient(){
      this.$router.push({path:'/newissue'});
    },
    toSearchFile(){
      this.$router.push({path:'/signup'});
    },
    toAnnounce(){
      this.$router.push({path:'/modifyannounce'});
    },
    toBooks(){
      this.$router.push({path:'/booksearch'});
    },
    toStatistics(){
      this.$router.push({path:'/Statistics'});
    },


  },
    
}
</script>>

<style scoped>

</style>>