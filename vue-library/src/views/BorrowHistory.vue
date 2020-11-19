<template>
<div class="history-container">
<h class="history-title">借阅历史</h>
 <el-divider></el-divider>
 <div class="search">
 <input type="text" style="width:180px;height:30px;">&nbsp;&nbsp;<input type="button" value="搜索" style="width:50px;height:30px;">
 <el-divider></el-divider>
 </div>
 <div class="table-box">
    <el-table
      :data="tableData"
      style="width: 100%">
      
      <el-table-column
        prop="BookName"
        label="书籍名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="BorrowTime"
        label="借阅时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ReturnTime"
        label="应归还时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ValidTime"
        label="借阅有效期"></el-table-column>
      <el-table-column label="操作">
      
        <el-popover
  placement="left"
  width="600"
  trigger="click">
  <el-table :data="gridData">
    <el-table-column width="100" property="UserNumber" label="用户编号"></el-table-column>
    <el-table-column width="100" property="Name" label="用户姓名"></el-table-column>
    <el-table-column width="100" property="Deadline" label="距归还还剩"></el-table-column>
    <el-table-column width="100" property="BookName" label="书籍名称"></el-table-column>
    <el-table-column width="100" property="BorrowTime" label="借阅时间"></el-table-column>
    <el-table-column width="100" property="ValidTime" label="借阅有效期"></el-table-column>

  </el-table>
  <el-button slot="reference" class="reference-btn">详情</el-button>
</el-popover>
         
      </el-table-column>
    </el-table>
 </div>
    <!-- 分页 -->
    <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
</div>
  </template>
<script>
    export default {
      data() {
        return {
          tableData: [{
            BookName: '1',
            BorrowTime: '2',
            ReturnTime: '3',
            ValidTime: '4',
          }],
          gridData:[{
            UserNumber:'1',
            Name:'',
            Deadline:'',
             BookName: '',
            BorrowTime: '',
            ValidTime: '',
          }]
        }
      }
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
.search{
 position: absolute;
 top: 12%;
 right: 10%;
}
.table-box{
  position: absolute;
  top: 20%;
  right: 10%;
  width: 80%;
  
}
.block{
  position: fixed;
  width: 200px;
  height: 50px;
  right: 160px;
  bottom: 0;

}
.reference-btn{
  color: #000;

  background-color: rgb(23, 23, 187);
}

</style>