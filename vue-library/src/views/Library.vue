<template>
    <div class="library-container">
        <div>
            <el-header>Header</el-header>
        </div>
    
    <div class="select">
  <label for="">国家:
  <el-select v-model="value" clearable placeholder="请选择" >
    <el-option
      v-for="item in country"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </label>

  <label for="">类型:
  <el-select v-model="value" clearable placeholder="请选择" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </label>

  <label for="">篇幅:
  <el-select v-model="value" clearable placeholder="请选择" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </label>
  
 <label for="">主题:
  <el-select v-model="value" clearable placeholder="请选择" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select>
     </label>
    </div>

    </div>
</template>
<script>

export default {
     data() {
      return {
        country:[{
          value: '选项1',
          label: '中国'
        }, {
          value: '选项2',
          label: '外国'
        },],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
    
}
</script>>



<style  scoped>

    .library-container{
    position: fixed;
    left: 0;
    top:0;
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
  }
  .select{
      display: flex;
      flex-direction: row;
      justify-content:space-around;
      position: absolute;
      top: 80px;
      width: 100%;
      
  }
  .el-select{
      width: 200px;
    
  }
    

</style>