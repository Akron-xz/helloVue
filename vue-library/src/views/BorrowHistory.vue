<template>
<div class="history-container">
<h1 class="history-title">借阅历史</h1>
 <el-divider></el-divider>
 <div class="searchBox">
 <input v-model="searchContent" type="text" style="width:180px;height:30px;">&nbsp;&nbsp;
 <input type="button" value="搜索" style="width:50px;height:35px;" @click="searchByKey()">
 
 </div>
 <div class="table-box">
    <el-table
      :data="tableData.slice(
            (page.currentPage - 1) * page.pageSize,
            page.currentPage * page.pageSize
          )" >
      
      <el-table-column
        prop="book.bookName"
        label="书籍名称"
        width="180px">
      </el-table-column>
      <el-table-column
        prop="borrowTimeStr"
        label="借阅时间"
        width="180px">
      </el-table-column>
      <el-table-column
        prop="deadlineStr"
        label="应归还时间"
        width="180px">
      </el-table-column>
      <el-table-column
        prop="validTime"
        label="借阅有效期"
        width="180px"></el-table-column>
      
      
  
    </el-table>
 </div>
    <!-- 分页 -->
    <div class="pagingBox" >
        <el-pagination
          align="center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-sizes="[1, 5, 10, 20]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        >
        </el-pagination>
      </div>
</div>
  </template>
<script>
import axios from "axios"
    export default {
      data() {
        return {
          userData:[
            {userId:"",},
          ],
          searchContent:"",
          tableData: [],
          gridData:[{
            UserNumber:'1',
            Name:'',
            Deadline:'',
             BookName: '',
            BorrowTime: '',
            ValidTime: '',
          }],
          page: {
        currentPage: 1, // 当前页码
        total: 20, // 总条数
        pageSize: 5, // 每页的数据条数
      },

    
        }
      },
      methods: {
        searchByKey(){
          axios({
            method:"get",
            url:"http://localhost:8081/borrow/list/key",
            params:{
                userId:this.userData[0].userId,
                key:this.searchContent
            }
          }).then(res=>{
            this.tableData = res.data
          })

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
      },
      created() {
        let user = JSON.parse(sessionStorage.getItem("userSession"));
        console.log(user.userId);
        this.userData[0].userId = user.userId;
        axios({
          method:"get",
          url:"http://localhost:8081/user/selectBorrowHistory",
          params:{
            userId:user.userId
          }
          
        }).then(res=>{
          this.tableData = res.data
        })
      },
    }

</script>

<style scoped>
.history-container{
  position:fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
        background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
.history-title{
  font-size: 40px;
  color: darkblue;
}
.searchBox{
 position: fixed;
 top: 116px;
 right: 18%;
}
.table-box{
  position: fixed;
  top: 155px;
  right: 18%;
  width: 800px;
  
}
.pagingBox{
  position: fixed;
  width: 200px;
  height: 50px;
  right: 50%;
  bottom: 0;
  top: 565px;

}
.reference-btn{
  color: #000;

  background-color: rgb(23, 23, 187);
}

</style>