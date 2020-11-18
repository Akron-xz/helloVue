<template lang="html">
  <div class="admin-main-container">
    <!-- 导航栏 -->
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
          <a @click="toMain" target="_self">用户列表</a></el-menu-item
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
          <a @click="toMain" target="_self">返回主页</a></el-menu-item
        >
      </el-menu>
    </div>

    <!-- 展示表格 -->
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toMain() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.admin-main-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

a {
  font-size: 18px;
  text-decoration: none;
}
</style>
