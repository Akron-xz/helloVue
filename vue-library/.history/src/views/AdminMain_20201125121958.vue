<template>
  <div class="admin-main-container">
    <Navigation></Navigation>
    <div class="img-container">
      <!-- <div>
        <div class="block">
          <img src="/icon/search-client.png" @click="toSearchClient"/><br/>
          <span class="demonstration">用户列表</span>
        </div>
        <div class="block">
          <img src="/icon/search-file.png" @click="toSearchFile"/><br />
          <span class="demonstration">图书借阅与归还</span>
        </div>
      </div>
      <div>
        <div class="block">
          <img src="/icon/announce.png" @click="toAnnounce"/><br />
          <span class="demonstration">首页公告管理</span>
        </div>
        <div class="block">
          <img src="/icon/books.png" @click="toBooks"/><br />
          <span class="demonstration">书库</span>
        </div>
      </div>
      <div class="block">
        <img src="/icon/graph-report.png" @click="toGraphReport"/><br />
        <span class="demonstration">图书借阅统计</span>
      </div> -->
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
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toMain(){
      this.$router.push({path:'/#'});
    },

    toSearchClient(){
      this.$router.push({path:'/newissue'});
    },
    toSearchFile(){
      this.$router.push({path:'/booksearch'});
    },
    toAnnounce(){
      this.$router.push({path:'/modifyannounce'});
    },
    toBooks(){
      this.$router.push({path:'/booksearch'});
    },
    toGraphReport(){
      this.$router.push({path:'/Statistics'});
    },


  },
};
</script>

<style scoped>
.admin-main-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

a {
  font-size: 18px;
  text-decoration: none;
}

.block {
  display: inline-block;
  padding: 25px;
  margin-left: 50px;
}

img {
  width: 100px;
  height: 100px;
  cursor: pointer;
}

</style>
