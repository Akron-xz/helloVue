<template>
    <div class="thankBox-container">
        <h1 class="title">特别鸣谢</h1>
        <p class="thanksWord">
        指导老师：<br>
         </p>
        <div class="thanksTeacher">
        <table class="name">
            <tr>
                <td>曹世雄</td>
                <td>张秋阳</td>
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
        五邑大学<br>
        IBM外包公司        
        </p>

       
    </div>
</template>

<script>
export default {
    
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
}

.name{

    margin: auto;
}
</style>