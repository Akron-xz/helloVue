<template>
  <div class="admin-login-container">
    <el-header>图书馆管理系统         管理员登陆</el-header>
    <div class="adminBox">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="管理员ID：" prop="adminId">
        <el-input v-model.number="ruleForm2.adminId"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="pwd">
        <el-input type="password" v-model="ruleForm2.pwd" auto-complete="off"
            oncopy="return false"
            onpaste="return false"
            oncut="return false"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">确认</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
    </div>
    <div class="img">
      <img src="/img/adminImg.png" alt="" class="adminImg">
    </div>
  </div>
</template>


<script>
import axios from "axios"
  export default {
    data() {
      var checkadminId = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('ID不能为空'));
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
          adminId: '',
          pwd: '',
        },

        admin:[],

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
      submitForm(formName2) {
        this.$refs[formName2].validate((valid) => {
          if (valid) {
            axios({
              method:"post",
              url:"http://localhost:8081/login",
              params : {
                id : parseInt(this.ruleForm2.adminId),
                password : this.ruleForm2.pwd,
              }
            }).then(res=>{
              // 获取后台返回的数据
              // 若有就得到json，若无就得到空
              this.admin = res.data;
              console.log(this.admin);

              // 结果是undefined
              // 应该是数组的大小被改变后length就为undefined
              console.log(this.admin.length);

              if (this.admin) {
                console.log("登陆成功");
                // 路由跳转
                this.$router.push({path:'/adminmain'});
              } else {
                this.$message({
                  message: '登录失败！请检查你的账号和密码是否正确。',
                  type: 'error'
                });
                
                this.ruleForm2.adminId = "";
                this.ruleForm2.pwd = "";
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
.admin-login-container {
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
   -webkit-text-stroke: 1px black;
    letter-spacing: 0.04em;
    
}

.demo-ruleForm{
    position: absolute;
    right: 70px;
    top: 20px;
    width: 300px;
    height: 50px;
}

.adminBox{
  position: absolute;
  top: 30%;
  left: 5%;
  width: 400px;
  height: 200px;
  border-radius: 20px;
  background: white;
}

.img{
  margin-left: 100px;
  height: 100px;
  width: 1000px;
}

.adminImg{
  margin-left: 300px;
  height: 580px;
  width: 1000px;
}
</style>


