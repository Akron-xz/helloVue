<template lang="html">
  <div class="admin-main-container">
    <!-- 导航栏 -->
    <div>
      <navigation></navigation>
    </div>
    <br>
    <!-- 展示简略表格 -->
    <div class="table-div" v-show="!dispalyInfo">
      <el-input
          placeholder="输入姓名查询"
          prefix-icon="el-icon-search"
          v-model="searchContent"
          style="width: 20%">
        </el-input>
        <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        
        <br>
        <br>
        <el-table :data="tableData">
            <el-table-column prop="userId" label="用户ID" width="80">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="100">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="80">
            </el-table-column>
            <el-table-column prop="age" label="年龄" width="60">
            </el-table-column>
            <el-table-column prop="email" label="邮箱" width="140">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="retrieve(scope.row)">查看</el-button>
                    <el-button type="primary" size="mini" @click="deleteById(scope.row)">注销</el-button>
                </template>
            </el-table-column>
        </el-table>
        <br>
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="total"
            @current-change="change">
        </el-pagination>
    </div>
    <!-- 个人完整信息 -->
    <div v-show="dispalyInfo">
      <br>
      <el-button type="primary" icon="el-icon-back" @click="goBack">返回</el-button>
      <br>
      <br>
      <el-table :data="userData">
        <el-table-column prop="userId" label="用户ID" width="80">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="80">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="60">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="60">
        </el-table-column>
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

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      dispalyInfo: false,

      searchContent: '',
        pageSize: 5,
        total: 10,
        tableData:[
          {userId:1,name:"test1",sex:"1",age:"1",email:"111@qq.com"},
          {userId:2,name:"test2",sex:"2",age:"2",email:"222@qq.com"},
          {userId:3,name:"test3",sex:"3",age:"3",email:"333@qq.com"}
        ]
    };
  },
  methods:{
    //搜索
    search(){
        //
    },
    //查看个人信息
    retrieve(){
      this.dispalyInfo = !this.dispalyInfo;

    },
    //返回
    goBack(){
      this.dispalyInfo = !this.dispalyInfo;
    },

  },

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

.table-div{
  width: 700px;
  margin: auto; 
  position: absolute; 
  top: 80px; 
  left: 0; 
  right: 0; 
  bottom: 0;
}
</style>
