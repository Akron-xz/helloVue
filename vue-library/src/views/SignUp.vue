<template>
    <div class="signup-container">
      <el-header>用户注册</el-header>
      <div class="signUpBox">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="注册ID：" prop="id">
            <el-input v-model.number="ruleForm2.id"></el-input>
        </el-form-item>

        <el-form-item label="姓名：" prop="name">
            <el-input v-model="ruleForm2.name"></el-input>
        </el-form-item>

        <el-form-item label="邮箱：" prop="email">
            <el-input v-model="ruleForm2.email"></el-input>
        </el-form-item>  
        
        
        <el-form-item label="密码：" prop="password">
            <el-input 
              type="password"
              v-model="ruleForm2.password" 
              @focus.capture.native='changePasswordTip(true)'
              @blur.capture.native='changePasswordTip(false)'
              auto-complete="new-password">
            </el-input>
        </el-form-item>
        <div class="passwordTip" style="position: absolute">
          <verify-pass-word-tip 
            :password='ruleForm2.password' 
            :isShowTip='isShowTip'>
          </verify-pass-word-tip>
        </div>
        <el-form-item label="确认密码：" prop="checkPwd">
            <el-input type="password" v-model="ruleForm2.checkPwd" auto-complete="off"></el-input>
        </el-form-item>
        
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
        </el-form>
      </div>
    </div>
</template>



<script>
import axios from "axios"
import verifyPassWordTip from '@/components/verifyPassWordTip'
  export default {
    name: "VerifyPassWord",
    components:{
      verifyPassWordTip
    },
    data() {
      var checkId = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('注册ID不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数值'));
          } else {
            callback();
          }
        }, 1000);
      };
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'));
        }
         else {
            callback();
          }
      };
      var checkEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邮箱不能为空'));
        }
         else {
            callback();
          }
      };

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPwd !== '') {
            this.$refs.ruleForm2.validateField('password');
            this.$refs.ruleForm2.validateField('checkPwd');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码!!'));
        } else if (value !== this.ruleForm2.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        //password: '',
        isShowTip: false,
        ruleForm2: {
          id: '',
          name:'',
          email:'',
          password: '',
          checkPwd: '',
          
        },
        rules2: {
          id: [
            { validator: checkId, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ],
          email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' },
            { min: 8, max: 24,message: '长度应在 8 到 24 个字符', trigger: 'blur'}
          ],
          checkPwd: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(valid);
          if (valid) {
            alert("注册成功")
            axios({
              method:"post",
              url:"http://localhost:8081/user/saveUser/",
              data:{
                userId:this.ruleForm2.id,
                name:this.ruleForm2.name,
                email:this.ruleForm2.email,
                password:this.ruleForm2.password
              },
            },{emulateJSON:true})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      changePasswordTip(isShow){
        if (isShow) {
          this.isShowTip = true;
        } else{
          this.isShowTip = false;
        }
      },
    },

  }
</script>

<style scoped>
.signup-container {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
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

.demo-ruleForm{
        position: absolute;
        right: 70px;
        top: 30px;
        width: 300px;
        height: 50px;
}

.signUpBox{
  position: absolute;
  top: 100px;
  left: 50px;
  width: 400px;
  height: 410px;
  background: white;
  border-radius: 20px;

}
  

</style>