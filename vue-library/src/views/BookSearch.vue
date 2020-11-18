<template>
  <div class="search-container">
 <Navigation></Navigation>
    <h class="search-title">书籍查询</h>
    <div class="choiceBox">
      <table>
        <tr>
          <td>国家</td>
          <td>
            <el-select v-model="value" placeholder="国家">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td>类型</td>
          <td>
            <el-select v-model="Class" placeholder="类型">
              <el-option
                v-for="item in optionsClass"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td>篇幅</td>
          <td>
            <el-select v-model="Length" placeholder="篇幅">
              <el-option
                v-for="item in optionsLength"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td>主题</td>
          <td>
            <el-select v-model="Theme" placeholder="主题">
              <el-option
                v-for="item in optionsTheme"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td><el-button type="" icon="el-icon-plus"></el-button></td>
          <td>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
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
    <div class="tableBox">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="BookName" label="书籍名称" width="380">
        </el-table-column>
        <el-table-column prop="LaunchTime" label="上架时间" width="380">
        </el-table-column>
        <el-table-column label="操作">
          <el>
            <el-button
              type="text"
              @click="dialogFormVisible = true"
              slot="reference"
              class="reference-btn"
              >编辑</el-button
            >
          </el>
        </el-table-column>
      </el-table>
    </div>
    <!-- 弹窗 -->
    <div class="EditBox">
      <el-dialog title="书籍名称" :visible.sync="dialogFormVisible">
        <table :model="form">
          <tr>
            <td>
              <el-select v-model="value" placeholder="国家">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </td>
           
            <td>
              <el-select v-model="Class" placeholder="类型">
                <el-option
                  v-for="item in optionsClass"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </td>
            
            <td>
              <el-select v-model="Length" placeholder="篇幅">
                <el-option
                  v-for="item in optionsLength"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </td>
           
            <td>
              <el-select v-model="OnShelve" placeholder="上架数量">
                <el-option
                  v-for="item in optionsOnShelve"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </td>
          </tr>
        </table>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >保 存</el-button
          >
        </div>
      </el-dialog>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>
  </div>
</template>
<script>
import Navigation from '@/components/Nav.vue'

export default {
  components:{
    Navigation
  },
  data() {
    return {
      input:"",
      dialogFormVisible: false,
      form: {
      },
    

      tableData: [
        {
          BookName: "1",
          LaunchTime: "2",
        },
        
      ],
      options: [
        {
          value: "选项1",
          label: "中国",
        },
        {
          value: "选项5",
          label: "其他国家",
        },
      ],
      value: "",

      optionsClass: [
        {
          value: "选项1",
          label: "a",
        },
        {
          value: "选项2",
          label: "b",
        },
      ],
      Class: "",

      optionsLength: [
        {
          value: "选项1",
          label: "1",
        },
        {
          value: "选项2",
          label: "2",
        },
      ],
      Length: "",

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
      Theme: "",
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
  top: 25%;
  right: 10%;
}
.tableBox {
  position: absolute;
  top: 32%;
  right: 10%;
  width: 80%;
}
.block {
  position: fixed;
  width: 200px;
  height: 50px;
  right: 200px;
  bottom: 0;
}
.reference-btn {
    width: 50px;
    height: 35px;
  color: #000;
  background-color: rgb(23, 23, 187);
}
</style>