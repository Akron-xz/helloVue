<template>
  <div class="signup-container">
    <homeNavigation></homeNavigation>
    <el-header>图书馆管理系统  用户注册</el-header>
    <div class="signUpBox">
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- <el-form-item label="注册ID：" prop="id">
          <el-input
            v-model.number="ruleForm2.id"
            onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"
          ></el-input>
        </el-form-item> -->

        <el-form-item label="姓名：" prop="name">
          <el-input
            v-model="ruleForm2.name"
            onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="邮箱："
          prop="email"
          :rules="[
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
          ]"
        >
          <el-input
            v-model="ruleForm2.email"
            onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码：" prop="pwd">
          <el-input
            type="password"
            v-model="ruleForm2.pwd"
            auto-complete="off"
            onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPwd">
          <el-input
            type="password"
            v-model="ruleForm2.checkPwd"
            auto-complete="off"
            onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')"
            >注册</el-button
          >
          <el-button @click="resetForm('ruleForm2')">清空</el-button>
        </el-form-item>
      </el-form>
    </div>
    
  </div>
</template>



<script>
import axios from "axios";
import homeNavigation from '@/components/homeNav.vue'
export default {
  components:{
        homeNavigation
    },
  data() {
    var checkId = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("注册ID不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数值"));
        } else {
          callback();
        }
      }, 1000);
    };
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("姓名不能为空"));
      } else {
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPwd !== "") {
          this.$refs.ruleForm2.validateField("checkPwd");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码!!"));
      } else if (value !== this.ruleForm2.pwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        id: "",
        name: "",
        email: "",
        pwd: "",
        checkPwd: "",
      },
      rules2: {
        id: [{ validator: checkId, trigger: "blur" }],
        name: [{required: true,validator: checkName, trigger: "blur" }],

        pwd: [{ required: true,validator: validatePass, trigger: "blur" }],
        checkPwd: [{ required: true,validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid);
        if (valid) {
          
          axios(
            {
              method: "post",
              url: "http://localhost:8081/user/saveUser/",
              data: {
                userId: this.ruleForm2.id,
                name: this.ruleForm2.name,
                email: this.ruleForm2.email,
                password: this.ruleForm2.pwd,
              },
            },
            { emulateJSON: true }
          ).then((res) => {
            this.ruleForm2.id = "";
            this.ruleForm2.name = "";
            this.ruleForm2.email = "";
            this.ruleForm2.pwd = "";
            this.ruleForm2.checkPwd = "";
            this.$message({
              message:"注册成功，您的ID为："+res.data,
              type: "success",
              duration:5000
            });
            this.$router.push({path:'/userLogin'})
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  resetForm(formName) {
    this.$refs[formName].resetFields();
  },
};
</script>

<style scoped>
.signup-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(/img/divBg/bg32.jpg);
  background-size: 100% 100%;
}

.el-header {
  text-align: right;
  line-height: 60px;
  font-weight: 1000;
  font-size: 30px;
  color: black;
  letter-spacing: 0.04em;
}

.demo-ruleForm {
  position: absolute;
  right: 70px;
  top: 30px;
  width: 300px;
  height: 50px;
}

.signUpBox {
  position: absolute;
  top: 20%;
  left: 5%;
  width: 400px;
  height: 410px;
  background: #ffffffd7;
  border-radius: 20px;
}

</style>
