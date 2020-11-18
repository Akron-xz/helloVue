<template>
<div class="search-container">
<h class="search-title">书籍查询</h>
<div>
<el-select v-model="value" placeholder="国家">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="value" placeholder="类型">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <el-select v-model="value" placeholder="篇幅">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <el-select v-model="value" placeholder="主题">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
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
        prop="LaunchTime"
        label="上架时间"
        width="180">
      </el-table-column>
      <el-table-column label="操作">
      
        <el-popover
  placement="left"
  width="600"
  trigger="click">
  <el-table :data="gridData">
    <el-table-column width="100" property="UserNumber" label="用户编号"></el-table-column>
    <el-table-column width="100" property="Name" label="用户姓名"></el-table-column>
    <el-table-column width="100" property="SurplusDate" label="距归还还剩"></el-table-column>
    <el-table-column width="100" property="BookName" label="书籍名称"></el-table-column>
    <el-table-column width="100" property="BorrowDate" label="借阅时间"></el-table-column>
    <el-table-column width="100" property="BorrowValidity" label="借阅有效期"></el-table-column>

  </el-table>
  <el-button slot="reference" class="reference-btn">编辑</el-button>
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
            LaunchTime: '2',
          }],
          options: [{
          value: '选项1',
          label: '中国'
        }, {
          value: '选项2',
          label: '德国'
        }, {
          value: '选项3',
          label: '美国'
        }, {
          value: '选项4',
          label: '英国'
        }, {
          value: '选项5',
          label: '其他国家'
        }],
         value: ''
        }
    },
  }
</script>

<style scoped>
.search-container{
  position:fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
        background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
.search-title{
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