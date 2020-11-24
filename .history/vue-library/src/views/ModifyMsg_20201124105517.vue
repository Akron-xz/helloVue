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
        <td prop="Name">
          <input
            type="text"
            v-model="userData[0].name"
            maxlength="20"
            style="width: 190px; height: 30px"
            :readonly="isDisabled"
          />
        </td>
        <td class="msg-header">性别：</td>
        <td>
          <input
            type="text"
            v-model="userData[0].sex"
            maxlength="5"
            style="width: 190px; height: 30px"
            :readonly="isDisabled"
          />
        </td>
        <td class="msg-header">年龄：</td>
        <td>
          <input
            type="text"
            v-model="userData[0].age"
            maxlength="5"
            style="width: 190px; height: 30px"
            :readonly="isDisabled"
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
            :readonly="isDisabled"
          />
        </td>
        <td class="msg-header">出生年月：</td>
        <td>
          <input
            type="date"
            v-model="userData[0].birthday"
            maxlength="30"
            style="width: 190px; height: 30px"
            :readonly="isDisabled"
          />
        </td>
        <td class="msg-header">联系电话：</td>
        <td>
          <input
            type="text"
            v-model="userData[0].phone"
            maxlength="30"
            style="width: 190px; height: 30px"
            :readonly="isDisabled"
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
            :readonly="isDisabled"
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
            :readonly="isDisabled"
          />
        </td>
      </tr>
    </table>

    <br /><br />

    <div>
      <el-button type="primary" class="modify-btn" @click="changeMode">{{
        isEdit ? "编辑" : "保存"
      }}</el-button>
    </div>

    <div class="modify-pwd-box">
      <el-form
        v-bind:model="pwd"
        :rules="rules"
        ref="pwd"
        label-width="100px"
        class="demo-pwd"
      >
        <el-form-item label="新密码" prop="newPassword">
          <el-input
            v-model="pwd.newPassword"
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="checkPassword">
          <el-input
            v-model="pwd.checkPassword"
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('pwd')">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.pwd.checkPassword !== "") {
          this.$refs.pwd.validateField("checkPassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.pwd.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      userData: [
        {
          userId: "",
          name: "",
          sex: "",
          age: "",
          email: "",
          birthday: "",
          phone: "",
          address: "",
          introduction: "",
          password: "",
        },
      ],
      // 新密码
      pwd: {
        newPassword: "",
        checkPassword: "",
      },

      // 输入框默认禁用，只有点击编辑只有才能输入
      isDisabled: true,

      // 按钮文字： true="编辑", false="保存"
      isEdit: true,

      // 接收后端返回的消息
      msg: "",
      lists: [],


      rules: {
        newPassword: [{ validator: validatePass, trigger: "blur" }],
        checkPassword: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 编辑模式 <-> 保存模式
    changeMode() {
      // 编辑 -> 保存
      this.isEdit = !this.isEdit;
      // 输入框可编辑
      this.isDisabled = !this.isDisabled;
      // isEdit: true="编辑", false="保存"
      if (!this.isEdit) {
        this.$message("进入个人信息编辑模式");
      } else {
        console.log(this.userData[0]);
        axios({
          method: "post",
          url: "http://localhost:8081/user/updateUser",
          data: {
            userId: this.userData[0].userId,
            name: this.userData[0].name,
            sex: this.userData[0].sex,
            age: this.userData[0].age,
            email: this.userData[0].email,
            birthday: Date.parse(this.userData[0].birthday),
            phone: this.userData[0].phone,
            address: this.userData[0].address,
            introduction: this.userData[0].introduction,
            password: this.userData[0].password,
          },
        })
          .then((res) => {
            console.log(res.data);
            // session保存登录的用户信息

            // 刷新页面之后，数据变回旧数据，需要重新设置session  (fixed)
            sessionStorage.setItem(
              "userSession",
              JSON.stringify(this.userData[0])
            );
          })
          .catch((err) => console.log("error...", err));
        this.$message({
          message: "保存成功",
          type: "success",
        });
      }
    },

    // 修改密码
    submitForm(pwd) {
      this.$refs[pwd].validate((valid) => {
        if (valid) {
          axios({
            method: "get",
            url: "http://localhost:8081/user/changPwd",
            params: {
              userId: this.userData[0].userId,
              password: this.pwd.newPassword,
            },
          })
            .then((res) => {
              console.log(res.data);
              // 更新session的数据
              this.userData[0].password = this.pwd.newPassword;
              sessionStorage.setItem(
                "userSession",
                JSON.stringify(this.userData[0])
              );
              // 写一条打印新密码的语句
              // .........
              // 清空输入框的密码
              this.pwd.newPassword = "";
              this.pwd.checkPassword = "";

              this.$message({
                message: "密码修改成功",
                type: "success",
              });
            })
            .catch((err) => console.log("error...", err));
        } else {
          this.$message.error("密码修改失败");
          return false;
        }
      });
    },

    // 重置信息
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },

  // created() {
  //   let user = JSON.parse(sessionStorage.getItem("userSession"));
  //   this.userData[0].name = user.name;
  //   this.userData[0].sex = user.sex;
  //   this.userData[0].age = user.age;
  //   this.userData[0].email = user.email;
  //   this.userData[0].birthday = user.birthday;
  //   this.userData[0].phone = user.phone;
  //   this.userData[0].address = user.address;
  //   this.userData[0].introduction = user.introduction;
  //   // console.log(this.user);
  // },

  mounted() {
    let user = JSON.parse(sessionStorage.getItem("userSession"));
    // console.log("mounted...",user);
    this.userData[0].userId = user.userId;
    this.userData[0].name = user.name;
    this.userData[0].sex = user.sex;
    this.userData[0].age = user.age;
    this.userData[0].email = user.email;
    if (user.birthdayStr) {
      this.userData[0].birthday = user.birthdayStr;
    } else {
      this.userData[0].birthday = user.birthday;
    }
    this.userData[0].phone = user.phone;
    this.userData[0].address = user.address;
    this.userData[0].introduction = user.introduction;
    this.userData[0].password = user.password;
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
  background-color: #409eff;
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
.modify-pwd-box {
  position: fixed;
  top: 400px;
  left: 36%;
}

input {
  outline: none;
}
</style>