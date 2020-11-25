<template>
<div  class="login-container">
      <!-- need to change (fixed)-->
      <homeNavigation></homeNavigation>
      <el-header>图书馆管理系统  用户登陆</el-header>
      <div class="loginBox">
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
          <el-link type="warning" @click="toSignUp">立即注册</el-link>
        </el-form-item>
      </el-form>
    </div>
    

      <!-- <div class="loginBox">
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
          </el-form-item>
        </el-form>
      </div> -->

</div>
</template>


<script>
import axios from "axios"
import homeNavigation from '@/components/homeNav.vue'
export default {
    components:{
        homeNavigation
    },
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
          userId: '',
          password:'',      
        },

        user:[],

        rules:{
            userId:[
                { required: true, message: '请输入用户名', trigger: 'blur'}
            ],

             password: [
            { validator: validatePass, trigger: 'blur' },
            { min: 8, max: 24,message: '长度应在 8 到 24 个字符', trigger: 'blur'}
          ],
        },
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
                // session保存登录的用户信息
                sessionStorage.setItem("userSession", JSON.stringify(this.user));
                // console.log(JSON.parse(sessionStorage.getItem("userSession")));

                // 路由跳转
                this.$router.push({path:'/user'});

              } else {
                this.$message({
                  message: '登录失败！请检查你的账号和密码是否正确。',
                  type: 'error'
                });
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
    display: flex;
    flex-direction: column;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(/img/divBg/bg20.jpg);
}
.demo-ruleForm{
        position: absolute;
        top: 20px;
        width: 300px;
        height: 50px;
 }

.el-header {
    text-align: left;
    line-height: 60px;
    font-weight: 1000;
    font-size: 30px;
    color: black;
    letter-spacing: 0.04em;
  }

.loginBox{
  position: fixed;
  align-items: center;

  width: 380px;
  height: 230px;
  border-radius: 20px;
  background: white;
}
  
.el-link{
  float: right;
}

.img{
  margin-left: 100px;
  height: 100px;
  width: 1000px;
}

</style>