<template lang="html">
  <div class="admin-main-container">
    <!-- 导航栏 -->
    <div>
      
    </div>
    <!-- 展示表格 -->
    

  </div>
</template>

<script>
export default {
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
    toMain() {
      this.$router.push({ path: "/" });
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
</style>
