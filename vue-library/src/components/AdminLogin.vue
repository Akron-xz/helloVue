// 管理员登录界面
<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>


<style scoped>
</style>


