<template>
  <div class="admin-login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="管理员ID：" prop="adminId">
        <el-input v-model.number="ruleForm2.adminId"></el-input>
      </el-form-item>
      <el-form-item label="你的密码：" prop="pwd">
        <el-input type="password" v-model="ruleForm2.pwd" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">确认</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
  export default {
    data() {
      var checkadminId = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字'));
          } else {
            callback();
          }
        }, 1000);
      };
      var validatepwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkpwd !== '') {
            this.$refs.ruleForm2.validateField('checkpwd');
          }
          callback();
        }
      };
      
      return {
        ruleForm2: {
          pwd: '',
          adminId: ''
        },
        rules2: {
          pwd: [
            { validator: validatepwd, trigger: 'blur' }
          ],
          adminId: [
            { validator: checkadminId, trigger: 'blur' }
          ]
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
    }
  }

</script>


<style scoped>
</style>


