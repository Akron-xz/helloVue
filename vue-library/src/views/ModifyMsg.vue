<template>
  <div class="table-container">
    <table
      border="1"
      cellspacing="0"
      width="850px"
      align="center"
      class="tableid"
    >
      <tr>
        <td align="center" colspan="6" class="msg-title">个人资料</td>
      </tr>
      <tr>
        <td class="msg-header">姓名：</td>
        <td prop="Name">
          <input
            type="text"
            v-model="Name"
            maxlength="20"
            style="width: 190px; height: 30px"
          />
        </td>
        <td class="msg-header">性别：</td>
        <td>
          <input
            type="text"
            v-model="Sex"
            maxlength="5"
            style="width: 190px; height: 30px"
          />
        </td>
        <td class="msg-header">年龄：</td>
        <td>
          <input
            type="text"
            v-model="Age"
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
            v-model="Email"
            maxlength="30"
            style="width: 190px; height: 30px"
          />
        </td>
        <td class="msg-header">出生年月：</td>
        <td>
          <input
            type="text"
            v-model="Birthday"
            maxlength="30"
            style="width: 190px; height: 30px"
          />
        </td>
        <td class="msg-header">联系电话：</td>
        <td>
          <input
            type="text"
            v-model="Phone"
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
            v-model="Adress"
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
            v-model="Introduction"
            maxlength="100"
            style="width: 750px; height: 60px"
          />
        </td>
      </tr>
    </table>
<<<<<<< HEAD

=======
>>>>>>> c8980a5c851538ef251107c4639c6cd117c4fa46
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
        <el-form-item label="密码" prop="password">
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
      Name: "",
      Sex: "",
      Age: "",
      Email: "",
      Birthday: "",
      Phone: "",
      Adress: "",
      Introduction: "",
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
.tableid {
  position: absolute;
  right: 370px;
  top: 80px;
<<<<<<< HEAD
  border-color: rgb(231, 231, 231);
  background: white;
=======
>>>>>>> c8980a5c851538ef251107c4639c6cd117c4fa46
}
.tableid input {
  border: 0;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
.modify-btn {
  position: absolute;
  top: 320px;
  right: 380px;
  height: 40px;
  width: 70px;
  background-color: rgb(155, 247, 64);
}
.confirm-btn {
  height: 40px;
  width: 70px;
  border-radius: 15px;
  border: 0;
  background-color: rgb(35, 35, 241);
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
  position: absolute;
  top: 60%;
  left: 36%;
}
</style>