<template>
  <div class="search-container">
 <Navigation></Navigation>
      <div v-show="tableDisplay">
      <h1 class="search-title">书籍查询</h1>
       <div class="choiceBox" >
      <table>
        <tr>
          <td>国家</td>
          <td>
            <el-select v-model="country" placeholder="请选择">
              <el-option
                v-for="item in optionsCountry"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td>类型</td>
          <td>
            <el-select v-model="type" placeholder="请选择">
              <el-option
                v-for="item in optionsType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td>篇幅</td>
          <td>
            <el-select v-model="pages" placeholder="请选择">
              <el-option
                v-for="item in optionsPages"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td>主题</td>
          <td>
            <el-select v-model="theme" placeholder="请选择">
              <el-option
                v-for="item in optionsTheme"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td><el-button type="" icon="el-icon-plus"  @click="MsgModify"></el-button></td>
          <td>
            <el-button type="" icon="el-icon-search">搜索</el-button>
          </td>
        </tr>
      </table>
    </div>
    <div class="searchBox">
      <input type="text" style="width: 180px; height: 30px" />&nbsp;&nbsp;<input
        type="button"
        value="搜索"
        style="width: 50px; height: 30px"
      />
    </div>

    <div class="tableBox" >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="BookName" label="书籍名称" width="380">
        </el-table-column>
        <el-table-column prop="OnTime" label="上架时间" width="380">
        </el-table-column>
        <el-table-column label="操作">
          <template>
        
         <el-button  @click="MsgModify"
          type="primary "
          class="edit-btn"
          size="small">编辑</el-button>
      </template>
    
        </el-table-column>
      </el-table>
    </div>
    <div class="paging">
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>
    </div>
    <!-- 弹窗 -->
    <div class="MsgModify-box" v-show="!tableDisplay">
      
      <table>
      <tr>
      <td></td>
      <td></td>
      <td style="font-size: 25px;">书名</td>
      <td><input type="text" v-model="book_name" style="width: 180px; height: 30px"></td>
      </tr>
        <tr>
           <td>国家</td>
          <td>
            <el-select v-model="country" placeholder="国家">
              <el-option
                v-for="item in optionsCountry"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td>类型</td>
          <td>
            <el-select v-model="type" placeholder="类型">
              <el-option
                v-for="item in optionsType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td>上架数量</td>
          <td>
            <el-select v-model="on_number" placeholder="上架数量">
              <el-option
                v-for="item in optionsOn_number"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          </tr>
          <tr>
          <td>篇幅</td>
          <td>
            <el-select v-model="pages" placeholder="篇幅">
              <el-option
                v-for="item in optionsPages"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td>主题</td>
          <td>
            <el-select v-model="theme" placeholder="主题">
              <el-option
                v-for="item in optionsTheme"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td>下架数量</td>
          <td>
            <el-select v-model="off_number" placeholder="下架数量">
              <el-option
                v-for="item in optionsOff_number"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
        </tr>
        <tr>
        <td>简介:</td>
        </tr>
        <tr>
        <td colspan="6" v-text="brief" class="brief"><input
            type="text"
            name=""
            maxlength="100"
            style="width: 720px; height: 60px"
          />
        
        </td>
        </tr>
        <tr>
        <td></td><td></td><td></td><td></td><td></td>
        <td><el-button type="primary" @click="MsgSave">保存</el-button></td></tr>
        
      </table>
       <div class="MsgSave-button">
       
       </div>
    </div>
    
  </div>
</template>
<script>
import Navigation from '@/components/Nav.vue'

export default {
  components:{
    Navigation
  },
  methods: {
    MsgModify(){
      this.tableDisplay=!this.tableDisplay;
    },
     MsgSave(){
      this.tableDisplay=!this.tableDisplay;
    }
  },
  data() {
    return {
      input:"",
      tableDisplay:true,
      brief:"暂无",
      book_name:"书名",
      form: {
      },

    tableData: [
        {
          BookName: "1",
          OnTime: "2",
        },
        
      ],
      optionsCountry: [
        {
          value: "选项1",
          label: "中国",
        },
        {
          value: "选项5",
          label: "其他国家",
        },
      ],
      country: "",

      optionsType: [
        {
          value: "选项1",
          label: "a",
        },
        {
          value: "选项2",
          label: "b",
        },
      ],
      type: "",

      optionsPages: [
        {
          value: "选项1",
          label: "1",
        },
        {
          value: "选项2",
          label: "2",
        },
      ],
      pages: "",

      optionsTheme: [
        {
          value: "选项1",
          label: "主题一",
        },
        {
          value: "选项2",
          label: "主题二",
        },
      ],
      theme: "",
      optionsOff_number:[
        {
          value: "选项1",
          label: "1",
        },
        {
          value: "选项2",
          label: "2",
        },
      ],
      off_number: "",
      optionsOn_number:[
        {
          value: "选项1",
          label: "1",
        },
        {
          value: "选项2",
          label: "2",
        },
      ],
      on_number: "",
    };
  },
};
</script>

<style scoped>
.search-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
.search-title {
  font-size: 40px;
  color: darkblue;
}
.choiceBox {
  position: absolute;
  right: 10%;
}
.searchBox {
  position: absolute;
  top: 35%;
  right: 10%;
}
.tableBox {
  position: absolute;
  top: 40%;
  right: 10%;
  width: 80%;
}
.paging {
  position: fixed;
  width: 200px;
  height: 50px;
  right: 200px;
  bottom: 0;
}
.edit-btn {
  font-weight: bold;
    width: 50px;
    height: 35px;
 
}
.MsgModify-box{
  position: absolute;
  top: 25%;
  right: 25%;
}

</style>