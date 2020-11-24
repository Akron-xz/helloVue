<template>
    
    <div class="navigation-bar">
        <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#34CFB3"
            text-color="#303133"
            text-font="15px">

            <div index="0" class="icon">
              <img src="/img/libraryIcon.png" alt="">
            </div>

            <el-menu-item index="1" @click="toMain">
                <a  target="_self">返回主页</a>
            </el-menu-item>

            <el-menu-item index="2" @click="toModifyMsg">
                <a  target="_self"  >个人信息</a>
            </el-menu-item>

            <el-menu-item index="3" @click="toBorrowHistory">
                <a  target="_self">借阅历史</a>
            </el-menu-item>

            <el-menu-item index="4" @click="toMyBookshelves">
                <a  target="_self">我的书架</a>
            </el-menu-item>

            <el-menu-item index="5" @click="toLibrary">
                <a  target="_self">图书馆</a>
            </el-menu-item>

            <el-menu-item index="6" @click="toMain">
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

    toModifyMsg(){
      this.$router.push({path:'/ModifyMsg'});
    },
    toBorrowHistory(){
      this.$router.push({path:'/BorrowHistory'});
    },
    toMyBookshelves(){
      this.$router.push({path:'/MyBookshelves'});
    },
    toLibrary(){
      this.$router.push({path:'/Library'});
    },



  },
    
}
</script>>

<style scoped>

</style>>