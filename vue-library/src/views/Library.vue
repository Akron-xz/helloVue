<template>
  <div class="library-container">
    <div>
      <el-header>
        <router-link to="./" class="a">首页</router-link>
        /
        <router-link to="./user" class="b">我是借阅者</router-link>
        /
        <router-link to="./library" class="c">图书库</router-link>
      </el-header>
    </div>

    <div class="select">
      <label for=""
        >国家:
        <el-select v-model="country.value" clearable placeholder="请选择">
          <el-option
            v-for="item in country"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </label>

      <label for=""
        >类型:
        <el-select v-model="type.value" clearable placeholder="请选择">
          <el-option
            v-for="item in type"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </label>

      <label for=""
        >篇幅:
        <el-select clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </label>

      <label for=""
        >主题:
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </label>
    </div>
    <el-button type="primary" class="query">查询</el-button>
    <div>
      <div class="keyWordQuery">
        <el-input
          placeholder="请输入关键字"
          type="text"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <div class="table-box" v-show="tableDisplay">
      <el-table :data="tableData"  >
        <el-table-column label="书名"  property="bookname"></el-table-column>
        <el-table-column label="国家"  property="country"></el-table-column>
        <el-table-column label="类型"  property="type"></el-table-column>
        <el-table-column label="主题"  property="theme"></el-table-column>
        <el-table-column label="状态">
          <el-button type="" @click="borrowStatus">借阅</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="borrow-box" v-show="!tableDisplay">
       <h1>书名：时间简史</h1>
       <div v-text="'简介：'+brief" class="brief"></div>
       <div class="borrow-button">
       <el-button type="primary" @click="borrow">借阅</el-button>
       </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      brief:"霍金写的书",
      bookname:"时间简史",
      tableDisplay:true,
      tableData:[{
        bookname : "1",
        country : "2",
        type : "3",
        theme : "4",
        brief : "5",

      }],
      country: [
        {
          value: "中国",
          label: "中国",
        },
        {
          value: "外国",
          label: "外国",
        },
      ],
      type: [
        {
          value: "小说",
          label: "小说",
        },
        {
          value: "教辅",
          label: "教辅",
        },
      ],
      value: "",
    };
  },
  methods:{
    borrowStatus(){
      this.tableDisplay=!this.tableDisplay;
    },

    borrow(){
      this.tableDisplay=!this.tableDisplay;
    }
  }
};
</script>



<style  scoped>
.library-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  text-align: center;
}
.el-header {
  position: absolute;
  left: 30px;
  color: #333;
  line-height: 60px;
  width: 100%;
  height: 60px;
  text-align: left;
}
.a {
  text-decoration: none;
}
.b {
  text-decoration: none;
}
.c {
  text-decoration: none;
}
.select {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  top: 80px;
  width: 100%;
}
.el-select {
  width: 200px;
}

.query {
  position: fixed;
  top: 150px;
  right: 60px;
}
.keyWordQuery {
  position: fixed;
  top: 200px;
  right: 60px;
  width: 200px;
}
.table-box{
  position: fixed;
  top:250px;
  left: 50%;
  margin-left: -400px;
  width: 800px;
  
}
.borrow-box{
  position: fixed;
  top:250px;
  left: 50%;
  margin-left: -400px;
  width: 800px;
  height: 300px;
  background-color: white;
  
}

.brief{
  border: 1px solid black;
  width: 400px;
  height: 200px;
  margin-left: 10px;
  text-align: left;
}

.borrow-button{
    float: right;
    height: 150px;
    width: 200px;
    margin-top: -50px;
    margin-left: 40px;


}
</style>