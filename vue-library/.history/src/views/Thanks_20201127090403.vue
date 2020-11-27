<template>
    <div class="thankBox-container">
        <homeNavigation></homeNavigation>
        <h1 class="title">特别鸣谢</h1>
        <p class="thanksWord">
        指导老师：<br>
         </p>
        <div class="thanksTeacher">
        <table class="name">
            <tr>
                <td>曹世雄</td>
                <td>张秋杨</td>
                <td>杜佳蔚</td>
                <td>朱婷婷</td>
            </tr>
            <tr>
                <td>刘长蒙</td>
                <td>邓家平</td>
                <td>虞浩</td>
                <td>王昊祁</td>
            </tr>
            <tr>
                <td>常超</td>
                <td>陈金鸿</td>
                <td>丁兆国</td>
                <td>孔祥帅</td>
            </tr>
        </table>
        </div>
        <p class="organizer">
        同时感谢在一起奋战的组员<br>
        组长:谢卓<br>
        后端:吕守淼 刘志勇 邱海鹏 朱建勇<br>
        前端:关光强 谢卓 梁嘉文 钱锦荣<br>
        测试：林海 李卓武   
        </p>

       
    </div>
</template>

<script>
import homeNavigation from "@/components/homeNav.vue";
export default {
    components: {
    homeNavigation,
  },
}
</script>

<style scoped>
.thankBox-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(/img/divBg/bg34.jpg);
  background-size: 100% 100%;
}

.title{
    margin-top: 10px;
    text-align: center;
    font-size: 32px;
    color: white;
}

.thanksWord{
    color: white;
}

.thanksTeacher{
    color: white;
    align-items: center;
    font-size: 20px;
}

.name{
    margin: auto;
}

.organizer{
     color: white;
}
</style>