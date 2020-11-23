<template>
<div  class="login-container">
      <el-header>用户登陆</el-header>
      <div class="loginBox">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
           <el-input v-model="ruleForm.password" type="password" 
              oncopy="return false"
              onpaste="return false"
              oncut="return false"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-link type="warning" @click="toSignUp">立即注册</el-link>
          </el-form-item>
         
        </el-form>
      
      </div>
    

</div>
</template>


<script>
import axios from "axios"
export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
          ruleForm: {
            username: '',
            password:'',      
         
        },
        user:[],
        rules:{
            username:[
                { required: true, message: '请输入用户名', trigger: 'blur'}
            ],
             password: [
            { validator: validatePass, trigger: 'blur' },
            { min: 8, max: 24,message: '长度应在 8 到 24 个字符', trigger: 'blur'}
          ],
        }
        };
    },
      methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios({
              method:"get",
              url:"data/user.json"
            }).then(res=>{
              this.user = res.data;
              console.log(this.user)
              
                alert("登陆成功")
              
              
            })
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      toSignUp(){
            this.$router.push({path:'/SignUp'})
      },
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

.loginBox{
  margin-left: 70px;
  margin-top: 100px;
  width: 380px;
  height: 230px;
  border-radius: 20px;
  background: rgb(255, 255, 255);
}
  
.el-link{
  float: right;
}
  


</style>