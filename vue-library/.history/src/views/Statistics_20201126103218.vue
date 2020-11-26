<template>
    <div class="statistics-container container">
    <Navigation></Navigation>
    <!-- 标题 -->
    <h1 class="statistics-title">首页公告管理</h1>
        <div class="statisticsTable" >
            <div class="lendBox">
                <div class="dayLendMod">
                    <p class="title">今日借出统计</p>
                    <h1 class="count">{{statis[0]}}</h1>
                </div>
                <div class="monthLendMod module">
                    <p class="title">本月借出统计</p>
                    <h1 class="count">{{statis[2]}}</h1>
                </div>
                <div class="yearLendMod module">
                    <p class="title">年度借出统计</p>
                    <h1 class="count">{{statis[4]}}</h1>
                </div>
            </div>

            <div class="returnBox">
                <div class="dayReturnMod">
                    <p class="title">今日归还统计</p>
                    <h1 class="count">{{statis[1]}}</h1>
                </div>
                <div class="monthReturnMod module">
                    <p class="title">本月归还统计</p>
                    <h1 class="count">{{statis[3]}}</h1>
                </div>
                <div class="yearReturnMod module">
                    <p class="title">年度归还统计</p>
                    <h1 class="count">{{statis[5]}}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from "@/components/Nav.vue";
import axios from 'axios';
export default {
      components: {
    Navigation,
  },
    data() {
        return {
            statis:[]

        }
    },
    created(){
    axios
    .get('http://192.168.3.23:8081/borrow/statistics')
    .then((res) => {
     this.statis = res.data;
    })
    .catch((err) => console.log("error...", err));
  },
}
</script>

<style scoped>

.statistics-container{
    position: fixed;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(/img/divBg/bg34.jpg);

}

.lendBox{
    display: flex;
    height: 200px;
    width: 900px;
    background: none;
    margin-left: 100px;
    margin-top: 50px;
    justify-content: space-around;
}

.returnBox{
    display: flex;
    height: 200px;
    width: 900px;
    background: none;
    margin-left: 100px;
    margin-top: 50px;
    justify-content: space-around;

}

.module{
    margin-top: 0;
    height: 80px;
    border-left: 1px solid oldlace;
    padding-left: 60px;
}

.title{
    color: white;
}

.statistics-title {
  margin-top: 0px;
  margin-left: 20px;
  text-align: left;
  font-size: 32px;
  color: white;
}

.count{
    color: white;
    font-size: 30px;
}
</style>
