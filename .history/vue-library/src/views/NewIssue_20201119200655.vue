<template>
  <div class="admin-main-container" v-infinite-scroll="load">
    <!-- 导航栏 -->
    <div>
      <navigation></navigation>
    </div>
    <br />
    <!-- 展示简略表格 -->
    <div class="table-div" v-show="!dispalyInfo">
      <el-input
        placeholder="输入姓名查询"
        prefix-icon="el-icon-search"
        v-model="searchContent"
        style="width: 20%"
      >
      </el-input>
      <el-button type="primary" icon="el-icon-search" @click="search"
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
        max-height="320"
      >
        <el-table-column prop="userId" label="用户ID" width="80">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="80"> </el-table-column>
        <el-table-column prop="age" label="年龄" width="60"> </el-table-column>
        <el-table-column prop="email" label="邮箱" width="140">
        </el-table-column>
        <el-table-column label="操作">
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
        >
        </el-pagination>
      </div>
    </div>
    <!-- 个人完整信息 -->
    <div v-show="dispalyInfo">
      <br />
      <el-button type="primary" icon="el-icon-back" @click="goBack"
        >返回</el-button
      >
      <br />
      <br />
      <el-table :data="userData">
        <el-table-column prop="userId" label="用户ID" width="80">
        </el-table-column>
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
      userData: [{}],

      lists: [],

      page: {
        currentPage: 1, // 当前页码
        total: 20, // 总条数
        pageSize: 5, // 每页的数据条数
      },
    };
  },
  methods: {
    //搜索
    search() {
      //
    },
    //查看个人信息
    retrieve(row) {
      let a = row;
      this.dispalyInfo = !this.dispalyInfo;
      console.log(a);
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
        url: "/data/user.json",
      })
        .then((res) => {
          //请求数据 res 返回的数据
          console.log(res);

          let list = res.data;
          //列表数据
          this.lists = list;
          //总页数
          // this.page.total = res.total;
          //总条数
          // this.total = res.total;
          // this.page.total = 157;

          console.log("json", this.lists);
        })
        .catch(function (error) {
          //请求失败
          console.log("error...", error);
        });
    },
  },

  created() {
    this.getLists();
  },

  // mountd(){ //生命周期钩子函数  挂载完成
  //   this.getLists();
  // },
};
</script>

<style scoped>
.admin-main-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
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
</style>
