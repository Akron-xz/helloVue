<template >
  <div class="library-container">
    <userNavigation></userNavigation>
    <div class="select">
      <label for=""
        >国家:
        <el-select v-model="couId" clearable placeholder="请选择">
          <el-option
            v-for="item in country"
            :key="item.countryId"
            :label="item.countryName"
            :value="item.countryId"
          >
          </el-option>
        </el-select>
      </label>

      <label for=""
        >类型:
        <el-select v-model="tyId" clearable placeholder="请选择">
          <el-option
            v-for="item in type"
            :key="item.typeId"
            :label="item.typeName"
            :value="item.typeId"
          >
          </el-option>
        </el-select>
      </label>

      <label for=""
        >篇幅:
        <el-select clearable placeholder="请选择" v-model="pagenumber">
          <el-option
            v-for="item in pages"
            :key="item.pageId"
            :label="item.pageName"
            :value="item.pageId"
          >
          </el-option>
        </el-select>
      </label>

      <label for=""
        >主题:
        <el-select v-model="thId" clearable placeholder="请选择">
          <el-option
            v-for="item in theme"
            :key="item.themeId"
            :label="item.themeName"
            :value="item.themeId"
          >
          </el-option>
        </el-select>
      </label>
      <el-button type="primary" class="query" @click="selectByLabel"
        >查询</el-button
      >
    </div>

    <div>
      <div class="keyWordQuery">
        <el-input
          placeholder="请输入关键字"
          style="width: 220px"
          class="input-with-select"
          v-model="key"
          @keyup.enter.native="selectByKey"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="selectByKey"
          ></el-button>
        </el-input>
      </div>
    </div>

    <!-- 搜索后显示 -->
    <div class="table-box" v-show="tableDisplay">
      <el-table
        :data="
          lists.slice(
            (page.currentPage - 1) * page.pageSize,
            page.currentPage * page.pageSize
          )
        "
        max-height="240"
      >
        <el-table-column label="书名" property="bookName"></el-table-column>
        <el-table-column
          label="国家"
          property="country.countryName"
        ></el-table-column>
        <el-table-column
          label="类型"
          property="type.typeName"
        ></el-table-column>
        <el-table-column
          label="主题"
          property="theme.themeName"
        ></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-button type="" @click="borrowStatus(scope.row)">详情</el-button>
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

    <!-- 进入借阅界面 -->
    <div class="borrow-box" v-show="!tableDisplay">
      <h1>书名：{{ bookname }}</h1>
      <div v-text="'简介：' + brief" class="brief"></div>
      <div class="borrow-button">
        <el-button v-if="isBorrow()" type="primary" @click="borrow" disabled>
          已借
        </el-button>
        <el-button v-else-if="this.surplusNumber >= 1" type="primary" @click="borrow">
          借阅
        </el-button>
        <el-button v-else type="primary" @click="borrow" disabled style="background-color: lack">
          无货
        </el-button>
        <el-button type="info" @click="goBack">返回</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import userNavigation from '@/components/userNav.vue';
export default {
  components:{
        userNavigation
    },
  data() {
    return {
      couId: "",
      tyId: "",
      thId: "",
      pagenumber: "",
      key: "",
      brief: "霍金写的书",
      bookname: "时间简史",
      tableDisplay: true,
      bookId:"",

      // 剩余数量
      surplusNumber:"",

      userData:[{
        userId:"",
        name: "",
          sex: "",
          age: "",
          email: "",
          birthday: "",
          phone: "",
          address: "",
          introduction: "",
          password: "",
      }],

      // 接收数据
      lists: [],
      // 分页
      page: {
        currentPage: 1, // 当前页码
        total: 20, // 总条数
        pageSize: 5, // 每页的数据条数
      },
      // 输入框内容
      inputContent: "",

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
      value: "",
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

      // 借阅历史
      borrowList:[],
      // 借阅状态：1.已借 2.有货 3.缺货
      num: 2,
      // 归还状态
      return: [],

      pages: [
        {
          pageId: 1,
          pageName: "1-500字",
        },
        {
          pageId: 2,
          pageName: "501-1000字",
        },
        {
          pageId: 3,
          pageName: "1001-1500字",
        },
        {
          pageId: 4,
          pageName: ">1500字",
        },
      ],
      theme: [
        {
          themeId: 0,
          themeName: "",
        },
      ],
    };
  },
  methods: {
    // 进入详细页面
    borrowStatus(row) {
      this.tableDisplay = !this.tableDisplay;
      this.brief = [row][0].brief;
      this.bookname = [row][0].bookName;
      this.bookId = [row][0].bookId;
      this.surplusNumber = [row][0].surplusNumber;
    },

    // 点击借阅按钮
    borrow() {
      console.log(this.bookId)
      console.log(this.userData[0].userId)
      axios({
        method:"get",
        url:"http://localhost:8081/user/borrow/",
        params:{
          userId:this.userData[0].userId,
          bookId:this.bookId,
          
        }
      }).then(res=>{
        alert(res.data);
        this.$router.go(0);
      })
     console.log(this.bookId)
      this.tableDisplay = !this.tableDisplay;
    },
     goBack() {
      this.tableDisplay = !this.tableDisplay;
    },
    // 每页多少条数据
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.page.currentPage = 1;
      this.page.pageSize = val;
    },
    // 当前页码
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.currentPage = val;
    },
   
    // 计算是否处于借阅状态
    isBorrow(){
      for (let i = 0; i < this.return.length; i++) {
        if (this.bookId == this.return[i].bookId) {
          return true;
        }
      }
      return false;
    },

    // 书籍模糊搜索
    searchContent() {
      if (this.inputContent == "") {
        alert("请输入需要查询的信息。");
        return 0;
      }
      axios
        .post(
          // 接口路径是什么？(fixed)
          "http://localhost:8081/book/list/" + this.inputContent
        )
        .then((res) => {
          console.log("搜索成功");
          let list = res.data;
          console.log(list);
        })
        .catch((err) => console.log("error...", err));
      //清空输入框
      this.inputContent = "";
    },

    // 关键字搜索
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

  created() {
    // 获取user的session
    let user = JSON.parse(sessionStorage.getItem("userSession"));
    console.log(user);
    this.userData[0].userId = user.userId;
    console.log(this.userData);
    axios
      .get("http://localhost:8081/book/list", {
        params: {
          pageNum: 1,
          pageSize: 5,
        },
      })
      .then((res) => {
        // console.log(pageInfo);
        // 使用全局lists变量来接收响应的json数据
        // 使用全局lists接受响应的json数据
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
    axios({
            method:"get",
            url:"http://localhost:8081/user/bookshelves",
            params:{
              userId:this.userData[0].userId
            }
        }).then(res=>{
            console.log("this.return");
            // for (let i = 0; i < res.data.length; i++) {
            //   this.return[i].bookId = res.data[i].bookId;
            //   console.log(this.return[i].bookId);
            // }
            this.return = res.data;
            console.log(this.return);
        })
  },

  // 计算v-if的判断值
  // computed: {
  //   isBorrow: function(){
  //     return function(){
  //       for (let i = 0; i < this.return.length; i++) {
  //         if (this.bookId == this.return[i].bookId) {
  //           return true;
  //         }
  //       }
  //       return false;
  //     }
  //   }
  // },
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
  background-image: url(/img/divBg/bg12.jpg);
  background-size: 100% 100%;
  text-align: center;
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

.keyWordQuery {
  position: fixed;
  top: 200px;
  right: 300px;
  width: 200px;
}
.table-box {
  position: fixed;
  top: 250px;
  left: 50%;
  margin-left: -400px;
  width: 800px;
}
.borrow-box {
  position: fixed;
  top: 250px;
  left: 50%;
  margin-left: -400px;
  width: 800px;
  height: 300px;
  background-color: white;
}

.brief {
  border: 1px solid black;
  width: 400px;
  height: 200px;
  margin-left: 10px;
  text-align: left;
}

.borrow-button {
  float: right;
  height: 150px;
  width: 200px;
  margin-top: -50px;
  margin-left: 40px;
}
</style>