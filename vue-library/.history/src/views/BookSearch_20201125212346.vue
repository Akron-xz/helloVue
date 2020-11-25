<template >
  <div class="search-container">
    <Navigation></Navigation>

    <div v-show="ModifyTableDisplay">
      <div v-show="InsertTableDisplay">
        <h1 class="search-title">图书借阅与归还</h1>
        <div class="choiceBox">
          <table :rules="rules" ref="ruleForm">
            <tr>
              <td class="select-header">国家</td>
              <td>
                <el-select v-model="couId" placeholder="请选择" style="width: 150px" clearable>
                  <el-option
                    v-for="item in country" :key="item.countryId" :label="item.countryName"
                    :value="item.countryId"
                  ></el-option>
                </el-select>
              </td>
              <td class="select-header">类型</td>
              <td>
                <el-select v-model="tyId" placeholder="请选择" style="width: 150px" clearable>
                  <el-option
                    v-for="item in type" :key="item.typeId" :label="item.typeName"
                    :value="item.typeId"
                  ></el-option>
                </el-select>
              </td>
              <td class="select-header">篇幅</td>
              <td>
                <el-select v-model="pagenumber" placeholder="请选择" style="width: 150px" clearable>
                  <el-option
                    v-for="item in pages" :key="item.pageId" :label="item.pageName"
                    :value="item.pageId"
                  ></el-option>
                </el-select>
              </td>
              <td class="select-header">主题</td>
              <td>
                <el-select v-model="thId" placeholder="请选择" style="width: 150px" clearable>
                  <el-option
                    v-for="item in theme" :key="item.themeId" :label="item.themeName" :value="item.themeId"
                  ></el-option>
                </el-select>
              </td>
              <td>
              <el-button type="" icon="el-icon-search" @click="selectByLabel">搜索</el-button>
                
              </td>
              
                
              
            </tr>
          </table>
        </div>
        
        
        

        <div class="searchBox">
        <el-button class="insert-btn" type="" icon="el-icon-plus"  @click="MsgInsert"></el-button>
          <el-input placeholder="请输入关键字" style="width: 220px" class="input-with-select"
          v-model="key"
          @keyup.enter.native="searchContent">      
          <el-button slot="append" icon="el-icon-search" @click="selectByKey"></el-button>
        </el-input>
        </div>

        <div class="table-box">
          <el-table
            :data="lists.slice((page.currentPage - 1) * page.pageSize,
                page.currentPage * page.pageSize)" max-height="350"
            style="width: 100%">

            <el-table-column prop="bookName" label="书籍名称" width="350">
            </el-table-column>
            <el-table-column prop="onTimeStr" label="上架时间" width="200">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="MsgModify(scope.row)" type="primary " class="edit-btn"
                  size="small">编辑</el-button>
                  <el-button @click="bookHistoryOfUser(scope.row)" type="primary " class="edit-btn"
                  size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页器 -->
        <div class="block" style="margin-top: 465px">
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
    </div>
    <!-- 添加书籍弹窗 -->
    
    <div class="MsgModify-box" v-show="!InsertTableDisplay">
    <div class="bookName-box">  
    书名<input type="text" v-model="addBookData.bookName" style="width: 752px; height: 35px"
    placeholder="请输入">
    </div>
      <table >
       <!-- <tr>
          
          <td style="font-size: 25px">书名</td>
          <td>
            <input type="text" v-model="addBookData.bookName" style="width: 210px; height: 35px"
              placeholder="请输入"
            />

          </td>
        </tr>-->
        <tr>
          <td>国家</td>
          <td>
            <el-select v-model="addBookData.country.countryId" placeholder="请选择" clearable>
              <el-option  v-for="item in country"  :key="item.countryId" :label="item.countryName"
                :value="item.countryId"
              ></el-option>
            </el-select>
          </td>
          <td>类型</td>
          <td>
            <el-select v-model="addBookData.type.typeId" placeholder="请选择" clearable
            >
              <el-option v-for="item in type" :key="item.typeId"  :label="item.typeName"
                :value="item.typeId"
              ></el-option>
            </el-select>
          </td>
          <td>上架数量</td>
          <td>
            <el-input placeholder="上架数量" v-model="addBookData.onNumber">
            </el-input>
          </td>
        </tr>
        <tr>
          <td>篇幅</td>
          <td>
            <el-select v-model="addBookData.pages" placeholder="请选择" clearable>
              <el-option
                v-for="item in pages" :key="item.pageId" :label="item.pageName"
                :value="item.pageId"
              ></el-option>
            </el-select>
          </td>
          <td>主题</td>
          <td>
            <el-select v-model="addBookData.theme.themeId" placeholder="请选择" clearable>
              <el-option
                v-for="item in theme" :key="item.themeId" :label="item.themeName"
                :value="item.themeId"
              >
              </el-option>
            </el-select>
          </td>
          <td>下架数量</td>
          <td>
            <el-input v-model="addBookData.offNumId" ></el-input> 
          </td>
        </tr>
        <tr>
          <td>简介:</td>
        </tr>
        <div class="briefBox">
          <textarea name="txt" clos="50" rows="5" warp="virtual"
            style="width: 760px;height: 150px"
            v-model="addBookData.brief"
          ></textarea>
          <div class="MsgSave-btn">
            <el-button type="primary" @click="MsgSaveI()">保存</el-button>
          </div>
        </div>
      </table>
    </div>
    <!-- 编辑弹窗 -->
    <div class="MsgModify-box" v-show="!ModifyTableDisplay">
    <div class="bookName-box">  
    书名<input type="text" v-model="bookData[0].bookName" style="width: 752px; height: 35px"
  >
    </div>
      <table>
        <!--<tr>
          <td></td>
          <td></td>
          <td style="font-size: 25px">书名</td>
          <td>
            <input
              type="text"
              v-model="bookData[0].bookName"
              style="width: 210px; height: 35px"
            />
          </td>
        </tr>-->
        <tr>
          <td>国家</td>
          <td>
            <el-select
              v-model="bookData[0].country.countryId"
              placeholder="请选择"
              clearable
            >
              <el-option
                v-for="item in country" :key="item.countryId" :label="item.countryName"
                :value="item.countryId"
              ></el-option>
            </el-select>
          </td>
          <td>类型</td>
          <td>
            <el-select v-model="bookData[0].type.typeId" placeholder="请选择" clearable>
              <el-option
                v-for="item in type" :key="item.typeId" :label="item.typeName"
                :value="item.typeId"
              ></el-option>
            </el-select>
          </td>
          <td>上架数量</td>
          <td>
           <el-input v-model="bookData[0].onNumber" placeholder="上架数量"></el-input>
            
          </td>
        </tr>
        <tr>
          <td>篇幅</td>
          <td>
            <el-select v-model="bookData[0].pages" placeholder="请选择" clearable>
              <el-option
                v-for="item in pages" :key="item.pageId" :label="item.pageName"
                :value="item.pageId"
              ></el-option>
            </el-select>
          </td>
          <td>主题</td>
          <td>
            <el-select v-model="bookData[0].theme.themeId" placeholder="请选择" clearable>
              <el-option
                v-for="item in theme"  :key="item.themeId"  :label="item.themeName"
                :value="item.themeId"
              >
              </el-option>
            </el-select>
          </td>
          <td>下架数量</td>
          <td>
           <el-input v-model="bookData[0].offNumber" placeholder="下架数量"></el-input>
           
          </td>
        </tr>
        <tr>
          <td>简介</td>
        </tr>
        
      </table>
      <div class="briefBox">
        <textarea name="txt" clos=",50" rows="5" warp="virtual"
          style="width: 760px; height: 150px"
          v-model="bookData[0].brief"
        ></textarea>
        <div class="MsgSave-btn">
          <el-button type="primary" @click="MsgSaveM">保存</el-button>
        </div>
      </div>
    </div>
    <el-dialog title="借阅用户" :visible.sync="bookHistoryIfo"
        :append-to-body="true" 
        :modal-append-to-body="false"
        :center="true">
  <el-table :data="borrowLists">
     <el-table-column property="user.name" label="用户名" width="80"></el-table-column>
     <el-table-column property="borrowTimeStr" label="借阅时间" width="150"></el-table-column>
      <el-table-column property="returnTimeStr" label="归还时间" width="150"></el-table-column>
      <el-table-column property="borrowStatesStr" label="状态" width="150">
      </el-table-column>
  </el-table>
</el-dialog>
  </div>
</template>
<script>
import Navigation from "@/components/Nav.vue";
import axios from "axios";
export default {
  components: {
    Navigation,
  },
  methods: {
    // 编辑按钮
    MsgModify(row) {
      this.ModifyTableDisplay = !this.ModifyTableDisplay;
      this.bookData = [row];
      console.log(this.bookName);
      console.log(row);
    },
    //
    bookHistoryOfUser(row){
      this.bookHistoryIfo = !this.bookHistoryIfo
      this.bookData = [row];
      axios({
        method:"get",
        url:"http://localhost:8081/book/borrows",
        params:{
          id:this.bookData[0].bookId
        }
      }).then(res=>{
        console.log(res.data);
        this.borrowLists = res.data;
        // this.borrowLists.userName = res.data.user.name;
        // this.borrowLists.borrowTime = res.data.borrowTimeStr;
        // this.borrowLists.returnTime = res.data.returnTimeStr
        // this.borrowLists.borrowStates = res.data.borrowStates ? "借出" : "归还";
        console.log(this.borrowLists);
      })
      },
    // 保存按钮
    MsgSaveM() {
      if(this.bookData[0].bookName==""){
        this.$message({
          message:"书名不能为空",
          type:"error"
        });
      }else{
               axios({
        method:"post",
        url:"http://localhost:8081/book/update/",
        data:{
         bookId:this.bookData[0].bookId,
         bookName:this.bookData[0].bookName,
         country:{
           countryId:this.bookData[0].country.countryId,
         },
         type:{
           typeId:this.bookData[0].type.typeId,
         },
         theme:{
           themeId:this.bookData[0].theme.themeId,
         },
         brief:this.bookData[0].brief,
         onNumber:this.bookData[0].onNumber,
         offNumber:this.bookData[0].offNumber,
         pages:this.bookData[0].pages,
         onTime:this.bookData[0].onTime,
         offTime:this.bookData[0].offTime,
         surplusNumber:(this.bookData[0].onNumber-this.bookData[0].offNumber),
         borrows:this.bookData[0].borrows,

        }
      }).then(res=>{
          this.$message({
          message:"图书"+res.data,
          type:"success"
        });
      })
      this.ModifyTableDisplay = !this.ModifyTableDisplay;
      }
 
    },
    MsgInsert() {
      this.InsertTableDisplay = !this.InsertTableDisplay;
    },
    MsgSaveI() {
      axios({
        method:"post",
        url:"http://localhost:8081/book/add/",
        data:{
        bookName:this.addBookData.bookName,
        country:{
        countryId:this.addBookData.country.countryId,
         },
         type:{
           typeId:this.addBookData.type.typeId,
         },
         theme:{
           themeId:this.addBookData.theme.themeId,
         },
         brief:this.addBookData.brief,
         onNumber:this.addBookData.onNumber,
         pages:this.addBookData.pages,
         offNumber:0,
         surplusNumber:this.addBookData.onNumber
        }
      })
      this.InsertTableDisplay = !this.InsertTableDisplay;
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
    selectByLabel() {
      axios
        .post(
          "http://localhost:8081/book/list/label",

          {
            countryId: this.couId,
            typeId: this.tyId,
            themeId: this.thId,
            lengthRange: this.pagenumber,
          },
          { emulateJSON: true }
        )
        .then((res) => {
          this.lists = res.data;
          console.log(this.lists);
        })
        .catch((err) => console.log("error...", err));
    },
    selectByKey() {
      axios
        .get("http://localhost:8081/book/list/key", {
          params: {
            key: this.key,
          },
        })
        .then((res) => {
          this.lists = res.data;
          this.key = "";
        })
        .catch((err) => console.log("error...", err));
    },
  },

  data() {
    return {
      couId: "",
      tyId: "",
      thId: "",
      input: "",
      onNumId: "",
      offNumId: "",
      key: "",
      pagenumber: "",
      borrowLists:[
        // {
        //   userName:"",
        //   borrowTime:"",
        //   returnTime:"",
        //   borrowStates:"",
        // }
      ],
      bookData: [
        {
          bookId:0,
          bookName: "1",
          country: {
            countryId: "",
            countryName: "",
          },
          type: {
            typeId: 0,
            typeName: "",
          },
          theme: {
            themeId: 0,
            themeName: "",
          },
          onNumber: 0,
          offNumber:0,
          pages: 0,
          brief: "暂无",
          onTime:"",
          offTime:"",
          surplusNumber:"",
          borrows:""
        },
      ],
      bookName: "",
      bookHistoryIfo:false,
      ModifyTableDisplay: true,
      InsertTableDisplay: true,
      brief: "暂无",
      book_name: "",
      lists: [],
      country: [
        {
          countryId: 0,
          countryName: "",
        },
      ],

      // 类型
      type: [
        {
          typeId: 0,
          typeName: "",
        },
      ],

      // 篇幅

      // 主题

      pages: [
        {
          pageId: 1,
          pageName: "短篇",
        },
        {
          pageId: 2,
          pageName: "中篇",
        },
        {
          pageId: 3,
          pageName: "长篇",
        },
        {
          pageId: 4,
          pageName: "超长篇",
        },
      ],

      theme: [
        {
          themeId: 0,
          themeName: "",
        },
      ],

      onNumber: [
        {
          onNumberId: 0,
          onNumber: 0,
        },
      ],

      offNumber: [
        {
          offNumberId: 0,
          offNumber: 0,
        },
      ],

      page: {
        currentPage: 1, // 当前页码
        total: 20, // 总条数
        pageSize: 5, // 每页的数据条数
      },
      tableData: [
        {
          bookName: "1",
          country: {
            countryId: 0,
            countryName: "",
          },

          type: "3",
          theme: "4",
          brief: "5",
        },
      ],
      addBookData:{
         bookName: "",
          country: {
            countryId: "",
            countryName: "",
          },
          type: {
            typeId: "",
            typeName: "",
          },
          theme: {
            themeId: "",
            themeName: "",
          },
          onNumber: 0,
          offNumber:0,
          pages: "",
          brief: "暂无",
      },
       rules: {
          bookName: [
            { required: true, message: '选择不能为空', trigger: 'change' }
          ],
       }
    };
  },
  created() {
    axios

      .get("http://localhost:8081/book/list", {})
      .then((res) => {
        this.lists = res.data;
      })
      .catch((err) => console.log("error...", err));

    axios.get("http://localhost:8081/country/list").then((res) => {
      this.country = res.data;
    });
    axios.get("http://localhost:8081/type/list").then((res) => {
      this.type = res.data;
    });
    axios.get("http://localhost:8081/theme/list").then((res) => {
      this.theme = res.data;
    });
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
  background-image: url(/img/divBg/bg34.jpg);
  background-size: 100% 100%;
}

.choiceBox{
  position: fixed;
  width: 1000px;
  right: 50%;
  margin-right: -560px;
}
.table-box {
  position: fixed;
  top: 260px;
  left: 50%;
  margin-left: -400px;
  width: 800px;
}

.search-title {
  margin-top: 0px;
  margin-left: 20px;
  text-align: left;
  font-size: 32px;
  color: white;
}
.MsgModify-box {
  position: fixed;
  top: 240px;
  right: 50%;
  margin-right: -410px;
  color: white;
}
.briefBox {
  position: fixed;
  top: 335px;
  right: 50%;
  margin-right: -410px;
}
.searchBox{
  position: fixed;
  top: 200px;
  width: 200px;
  right: 50%;
  margin-right: -380px;
}
.select-header{
  color: white;
}
.insert-btn{
  position: fixed;
  width: 60px;
  right: 50%;
  margin-right: 340px;
}
.bookName-box{
 position: fixed;
 width: 800px;
 right: 50%;
margin-right: -407px;
 top: 200px;
 font-size: 20px;
}
.block{
  position: fixed;
  bottom: 10px;
  width: 600px;
  left: 50%;
  margin-left: -300px;
  color: white
}
</style>