<template>
  <div class="ModifyAnnounce-container">
    <Navigation></Navigation>
    <div class="announce-box">
      <el-input placeholder="修改公告"  :disabled="true">
      </el-input>
      <el-button type="info">发布公告</el-button>
    </div>
    <div class="contebt-box">
      <el-input
        type="textarea"
        :rows="10"
        placeholder="请输入内容"
        v-model="announceContent">
      </el-input>
    </div>
  </div>
</template>


<script>
import Navigation from "@/components/Nav.vue";
export default {
  components: {
    Navigation,
  },
  data(){
      return{
          announceContent:"测试公告"
      }
  }
};
</script>


<style  scoped>
.ModifyAnnounce-container {
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

.announce-box {
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 100px;
  left: 50%;
  width: 60%;
  height: 50px;
  margin-left: -30%;
  
}

.announce-box .el-input {
  width: 60%;
}
.announce-box .el-button {
  height: 40px;
}

.contebt-box{
    position: fixed;
    top: 160px;
    left: 50%;
    width: 52%;
    margin-left: -26%;
    height: 100px;
}
</style>