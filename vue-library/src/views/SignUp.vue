<template>
    <div class="signup-container">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="注册ID：" prop="id">
            <el-input v-model.number="ruleForm2.id"></el-input>
        </el-form-item>

        <el-form-item label="姓名：" prop="name">
            <el-input v-model.number="ruleForm2.name"></el-input>
        </el-form-item>

        <el-form-item label="邮箱：" prop="email">
            <el-input v-model.number="ruleForm2.email"></el-input>
        </el-form-item>
        
        <el-form-item label="密码：" prop="pwd">
            <el-input type="password" v-model="ruleForm2.pwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPwd">
            <el-input type="password" v-model="ruleForm2.checkPwd" auto-complete="off"></el-input>
        </el-form-item>
        
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>



<script>
  export default {
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
      };
      var checkEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邮箱不能为空'));
        }
      };

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPwd !== '') {
            this.$refs.ruleForm2.validateField('checkPwd');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          id: '',
          name:'',
          email:'',
          pwd: '',
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
          pwd: [
            { validator: validatePass, trigger: 'blur' }
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
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
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

    .demo-ruleForm{
        position: absolute;
        right: 70px;
        top: 80px;
        width: 300px;
        height: 50px;
    }

</style>