<template>
    <div class="statistics-container container">
    <Navigation></Navigation>
        
        <div class="statisticsTable" >
            <div class="lendBox">
                <div class="dayLendMod">
                    <p class="title">今日借出统计</p>
                    <h1>{{dayLend}}</h1>
                </div>
                <div class="monthLendMod module">
                    <p class="title">本月借出统计</p>
                    <h1>{{monthLend}}</h1>
                </div>
                <div class="yearLendMod module">
                    <p class="title">年度借出统计</p>
                    <h1>{{yearLend}}</h1>
                </div>
            </div>

            <div class="returnBox">
                <div class="dayReturnMod">
                    <p class="title">今日归还统计</p>
                    <h1>{{dayReturn}}</h1>
                </div>
                <div class="monthReturnMod module">
                    <p class="title">本月归还统计</p>
                    <h1>{{monthReturn}}</h1>
                </div>
                <div class="yearReturnMod module">
                    <p class="title">年度归还统计</p>
                    <h1>{{yearReturn}}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from "@/components/Nav.vue";
export default {
      components: {
    Navigation,
  },
    data() {
        return {
            dayLend:"1213",
            monthLend:"666666",
            yearLend:"8888888",

            dayReturn:"1212",
            monthReturn:"10101",
            yearReturn:"20202",

        }
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
    background-size: 100%;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

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

</style>
