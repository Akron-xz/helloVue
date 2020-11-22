<template>
<div  class="login-container">
      <el-header>用户登陆</el-header>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户ID" prop="userId">
            <el-input v-model="ruleForm.userId"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
 
  </el-form>
</div>
</template>


<script>
import axios from "axios"
export default {
    data() {
        return {
          ruleForm: {
          userId: '',
          password:'',      
        },

        user:[],

        rules:{
            userId:[
                { required: true, message: '请输入用户名', trigger: 'blur'}
            ],
             password:[
                { required: true, message: '请输入密码', trigger: 'blur'}
            ]
        }
        };
    },
      methods: {
      //用户登录
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios({
              method:"post",
              url:"http://localhost:8081/login",
              params : {
                id : parseInt(this.ruleForm.userId),
                password : this.ruleForm.password,
              }
            }).then(res=>{
              // 获取后台返回的数据
              // 若有就得到json，若无就得到空
              this.user = res.data;
              console.log(this.user);

              // 结果是undefined
              // 应该是数组的大小被改变后length就为undefined
              console.log(this.user.length);

              if (this.user) {
                console.log("登陆成功");
                // 路由跳转
                this.$router.push({path:'/user'});

              } else {
                alert("登录失败！请检查你的账号和密码是否正确");
                this.ruleForm.userId = "";
                this.ruleForm.password = "";
              }
            })
          } else {
            console.log('错误的表单提交');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
    
}
</script>

<style scoped>
 .login-container{
    position: fixed;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
 }
 .demo-ruleForm{
        position: absolute;
        left: 70px;
        top: 180px;
        width: 300px;
        height: 50px;
       
 }
 .el-header {
    text-align: left;
    line-height: 60px;
    font-weight: 1000;
    font-size: 30px;
    color: transparent;
   -webkit-text-stroke: 1px white;
    letter-spacing: 0.04em;
    
  }

</style>