<template>
  <div class="table-container">
    <table
      border="1"
      cellspacing="0"
      width="850px"
      align="center"
      class="tableBox"
    >
      <tr>
        <td align="center" colspan="6" class="msg-title">个人资料</td>
      </tr>
      <tr>
        <td class="msg-header">姓名：</td>
        <td prop="Name" >
          <input
            type="text"
            v-model="userData[0].name"
            maxlength="20"
            style="width: 190px; height: 30px"
          />
        </td>
        <td class="msg-header">性别：</td>
        <td>
          <input
            type="text"
            v-model="userData[0].sex"
            maxlength="5"
            style="width: 190px; height: 30px"
          />
        </td>
        <td class="msg-header">年龄：</td>
        <td>
          <input
            type="text"
            v-model="userData[0].age"
            maxlength="5"
            style="width: 190px; height: 30px"
          />
        </td>
      </tr>
      <tr>
        <td class="msg-header">邮箱：</td>
        <td>
          <input
            type="text"
            v-model="userData[0].email"
            maxlength="30"
            style="width: 190px; height: 30px"
          />
        </td>
        <td class="msg-header">出生年月：</td>
        <td>
          <input
            type="text"
            v-model="userData[0].birthday"
            maxlength="30"
            style="width: 190px; height: 30px"
          />
        </td>
        <td class="msg-header">联系电话：</td>
        <td>
          <input
            type="text"
            v-model="userData[0].phone"
            maxlength="30"
            style="width: 190px; height: 30px"
          />
        </td>
      </tr>
      <tr>
        <td class="msg-header">居住地址:</td>
        <td colspan="5">
          <input
            type="text"
            v-model="userData[0].address"
            maxlength="100"
            style="width: 750px; height: 30px"
          />
        </td>
      </tr>
      <tr>
        <td class="msg-header">个人描述：</td>
        <td colspan="5">
          <input
            type="text"
            v-model="userData[0].introduction"
            maxlength="100"
            style="width: 750px; height: 60px"
          />
        </td>
      </tr>
    </table>



    <br /><br />

    <div>
      <el-button type="primary" class="modify-btn">编辑</el-button>
    </div>
    <div class="modify-pasawd-box">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password">
          <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >确认</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData:[{
        name: "",
        sex: "",
        age: "",
        email: "",
        birthday: "",
        phone: "",
        address: "",
        introduction: "",
      }],

      // 获取登录的用户的session
      // user: [],

      ruleForm: {
        password: "",
      },
      rules: {
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        password2: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
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
  
  created() {
    let user = JSON.parse(sessionStorage.getItem("userSession"));
    this.userData[0].name = user.name;
    this.userData[0].sex = user.sex;
    this.userData[0].age = user.age;
    this.userData[0].email = user.email;
    this.userData[0].birthday = user.birthdayStr;
    this.userData[0].phone = user.phone;
    this.userData[0].address = user.address;
    this.userData[0].introduction = user.introduction;
    // console.log(this.user);
  },

  // 关于session，created可以使用，mounted不能用
  // mounted() {
  //   let user = JSON.parse(sessionStorage.getItem("userSession"));
  //   this.userData[0].name = user.name;
  //   this.userData[0].sex = user.sex;
  //   this.userData[0].age = user.age;
  //   this.userData[0].email = user.email;
  //   this.userData[0].birthday = user.birthdayStr;
  //   this.userData[0].phone = user.phone;
  //   this.userData[0].address = user.address;
  //   this.userData[0].introduction = user.introduction;
  //   // console.log(this.user);
  // },
};
</script>

<style scoped>
.table-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
.tableBox {
  position: fixed;
  right: 370px;
  top: 80px;
  border-color: rgb(231, 231, 231);
  background: white;


}
.tableBox input {
  border: 0;
  background: none;
}
.modify-btn {
  position: fixed;
  top: 320px;
  right: 380px;
  height: 40px;
  width: 70px;
  background-color: #409EFF;
}

button:hover {
  cursor: pointer;
}
.msg-title {
  font-size: 30px;
}
.msg-header {
  background-color: lightgray;
}
.modify-pasawd-box {
  position: fixed;
  top: 400px;
  left: 36%;
}
</style>