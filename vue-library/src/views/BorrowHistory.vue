<template>
<div class="history-container">
<h class="history-title">借阅历史</h>
 <el-divider></el-divider>
 <div class="search">
 <input type="text"><input type="button" value="搜索">
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
        prop="BorrowDate"
        label="借阅时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ReturnDate"
        label="应归还时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="BorrowValidity"
        label="借阅有效期">
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
            BorrowDate: '2',
            ReturnDate: '3',
            BorrowValidity: '4',
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
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
}
.history-title{
  font-size: 40px;
  color: darkblue;
}
.search{
  float: right;
}
.block{
  position: fixed;
  width: 200px;
  height: 50px;
  right: 160px;
  bottom: 0;

}

</style>