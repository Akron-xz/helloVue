<template>
  <div class="ModifyAnnounce-container">
    <navigation></navigation>
    <!-- 标题 -->
    <h1 class="ModifyAnnounce-title">用户列表</h1>
    <div class="announce-box">
      <el-input placeholder="修改公告"  :disabled="true">
      </el-input>
      <el-button type="info" @click="updateAnnounce">发布公告</el-button>
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
import axios from 'axios'
import Navigation from "@/components/Nav.vue";
export default {
  components: {
    Navigation,
  },
  data(){
      return{
          announceContent:""
      }
  },

  methods:{
    updateAnnounce(){
      axios({
        method:"post",
        url:"http://localhost:8081/announce/update",
        data:{
          announceContent:this.announceContent
        }
      })
      alert("公告更新成功")
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
  background-size: 100% 100%;
  background-image: url(/img/divBg/bg34.jpg);
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

.ModifyAnnounce-title {
  margin-top: 0px;
  margin-left: 20px;
  text-align: left;
  font-size: 32px;
  color: white;
}
</style>