<template>
  <div class="new-issue-container">
    <!-- 导航栏 -->
    <div>
      <navigation></navigation>
    </div>
    <!-- 标题 -->
    <h1 class="newIssue-title">用户列表</h1>
    <!-- 展示简略表格 -->
    <!-- <div class="table-div" v-show="!dispalyInfo"> -->
    <div class="table-div">
      <el-input
        placeholder="输入姓名查询"
        prefix-icon="el-icon-search"
        v-model="searchContent"
        @keyup.enter.native="search"
        style="width: 20%"
      >
      </el-input>
      <el-button
        type="primary"
        icon="el-icon-search"
        @click="search"
        >搜索</el-button
      >
      <br />
      <br />
      <el-table
        :data="
          lists.slice(
            (page.currentPage - 1) * page.pageSize,
            page.currentPage * page.pageSize
          )
        "
        max-height="350"
        
      >
        <el-table-column prop="name" label="姓名" width="70">
        </el-table-column>
        <el-table-column prop="sexStr" label="性别" width="70">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="60"> </el-table-column>
        <el-table-column prop="email" label="邮箱" width="130">
        </el-table-column>
         <!-- <el-table-column prop="password" label="密码" width="300">
        </el-table-column> -->
        <el-table-column prop="phone" label="联系电话" width="100">
        </el-table-column>
        <el-table-column prop="birthdayStr" label="出生年月" width="100">
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="retrieve(scope.row)"
              >查看</el-button
            >
            <el-button type="primary" size="mini" @click="deleteById(scope.row)"
              >注销</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <br />
      <!-- 分页器 -->
      <div class="block" style="margin-top: 15px">
        <el-pagination
          align="center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-sizes="[1, 5, 10, 20]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="lists.length"
           style="cursor:pointer;"
            title="回车确认"
        >
        </el-pagination>
      </div>
    </div>
    <!-- 个人完整信息（第1种）v-show -->
    <div v-show="false">
      <br />
      <el-button type="primary" icon="el-icon-back" @click="goBack"
        >返回</el-button
      >
      <br />
      <br />
      <el-table :data="userData">
        <el-table-column prop="name" label="姓名" width="80"> </el-table-column>
        <el-table-column prop="sex" label="性别" width="60"> </el-table-column>
        <el-table-column prop="age" label="年龄" width="60"> </el-table-column>
        <el-table-column prop="email" label="邮箱" width="140">
        </el-table-column>
        <el-table-column prop="password" label="密码" width="140">
        </el-table-column>
        <el-table-column prop="birthday" label="出生年月" width="200">
        </el-table-column>
        <el-table-column prop="phone" label="联系电话" width="140">
        </el-table-column>
        <el-table-column prop="address" label="居住地址" width="140">
        </el-table-column>
        <el-table-column prop="introduction" label="个人描述" width="100">
        </el-table-column>
        <el-table-column prop="identity" label="身份" width="100">
        </el-table-column>
      </el-table>
    </div>

    <!-- 个人完整信息（第2种）对话框 -->
    <div>
      <el-dialog title="借阅历史" 
        :visible.sync="dispalyInfo" 
        :append-to-body="true" 
        :modal-append-to-body="false"
        :center="true">
        <el-table :data="borrowHistory">

        <el-table-column prop="book.bookName" label="书名" width="80"> </el-table-column>
        <el-table-column prop="borrowTimeStr" label="借阅时间" width="160"> </el-table-column>
        <el-table-column prop="deadlineStr" label="截止日期" width="160"> </el-table-column>
        <el-table-column prop="validTime" label="有效期" width="80"> </el-table-column>
        <el-table-column prop="returnTimeStr" label="归还时间" width="160"> </el-table-column>
        <el-table-column prop="borrowStatesStr" label="状态" width="80"> </el-table-column>
        
      </el-table>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Nav.vue";

import axios from "axios";

export default {
  name: "newIssue",

  components: {
    Navigation,
  },

  data() {
    return {
      dispalyInfo: false,
      searchContent: "",
      userData: [],
      borrowHistory:[],
      pageSize: 5,
      total: 10,
      tableData: [
        { userId: 1, name: "test1", sex: "1", age: "1", email: "111@qq.com" },
        { userId: 2, name: "test2", sex: "2", age: "2", email: "222@qq.com" },
        { userId: 3, name: "test3", sex: "3", age: "3", email: "333@qq.com" },
      ],

      lists: [],

      page: {
        currentPage: 1, // 当前页码
        total: 20, // 总条数
        pageSize: 5, // 每页的数据条数
      },
    };
  },
  methods: {

    //输入姓名模糊搜索
    search() {
      if (this.searchContent=="") {
        this.$message({
          message: '请输入需要查询的信息。',
          type: 'error'
        });
        return 0;
      }
      let searchContent = this.searchContent;
      axios({
        method: "get",
        url:
          "http://localhost:8081/user/selectUserByVagueName/" + searchContent,
      })
        .then((res) => {
          // 接收数据
          this.lists = res.data;
          console.log(this.lists)

        })
        .catch(function (error) {
          //请求失败
          console.log("error...", error);
        });
    },
    //查看个人信息
    retrieve(row) {
      // console.log(row);
      this.dispalyInfo = !this.dispalyInfo;
      this.userData = [row];
      console.log(this.userData[0].userId);
      axios({
        method:"get",
        url:"http://localhost:8081/user/selectBorrowHistory",
        params:{
          userId:this.userData[0].userId
        }
      }).then(res=>{
          this.borrowHistory=res.data;
          console.log(this.borrowHistory);
      })
    },
    //删除某个用户
    deleteById(row) {
      console.log(row);
      const userId = parseInt(row.userId);
      // const id=row.i
      // axios()
      console.log(userId);
      axios({
        method: "post",
        url: "http://localhost:8081/user/deleteUser/" + userId,
        // data() {
        //   userId : userId
        // },
      }).then(res=>{this.$message({
        message: res.data,
        
      });})
      
      
      this.getLists();
    },
    //返回
    goBack() {
      this.dispalyInfo = !this.dispalyInfo;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.page.currentPage = 1;
      this.page.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.currentPage = val;
    },
    //获取 lists json 数据
    getLists() {
      axios({
        //get方式获取数据
        method: "get",
        //接口地址
        url: "http://localhost:8081/user/selectAllUser",
      })
        .then((res) => {
          //请求数据 res 返回的数据
          console.log(res);

          let list = res.data;
          //列表数据
          this.lists = list;
          //检查数据是否能正常接受1
          // console.log("json", this.lists);
        })
        .catch(function (error) {
          //请求失败
          console.log("error...", error);
        });
    },
  },

  // created() {
  //   this.getLists();
  // },

  mounted() {
    //生命周期钩子函数  挂载完成
    this.getLists();
  },
};
</script>

<style scoped>
.new-issue-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(/img/divBg/bg34.jpg);
  background-size: 100% 100%;
}

a {
  font-size: 18px;
  text-decoration: none;
}

.table-div {
  width: 700px;
  margin: auto;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
}

.newIssue-title {
  margin-top: 0px;
  margin-left: 20px;
  text-align: left;
  font-size: 32px;
  color: white;
}

.el-table{
  border-radius: 6px;
}
.block{
  position: fixed;
  bottom: 40px;
  width: 600px;
  height: 30px;
  left: 50%;
  margin-left: -300px;
  background-color: white;
  border-radius: 5px;
}
</style>
