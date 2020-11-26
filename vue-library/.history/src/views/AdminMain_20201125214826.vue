<template>
  <div class="admin-main-container">
    <Navigation></Navigation>
    <h1 class="adminMain-title">欢迎来到管理员界面</h1>
    <div class="img-container">
  
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
  background-image: url(/img/divBg/bg34.jpg);
  background-size: 100% 100%;
}

.adminMain-title{
  margin-top: 0px;
  margin-left: 20px;
  text-align: left;
  font-size: 32px;
  color: white;
}

</style>
