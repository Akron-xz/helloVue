<template>
    <div class="user-container container">
        <userNavigation></userNavigation>
        <h1 class="title">欢迎来到图书管理系统用户界面</h1>
        <div class="box">
            <h2 class="sentence">书籍是人类进步的阶梯</h2>
            <p class="author">————高尔基</p>
        </div>

        <div class="announce-box">

            <h2>图书馆公告:</h2>
            <div class="link-top"></div>
            <p>公告时间:{{announceTimeStr}}---- 公告内容：{{ announceContent }}</p>

        </div>

    </div>

    

</template>

<script>
import userNavigation from '@/components/userNav.vue'
export default {
    components:{
        userNavigation
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    created() {
        
    },
}
</script>

<style scoped>
.user-container{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(/img/divBg/bg34.jpg);

}


.user-container .title{
    float: left;
    text-align: left;
    margin-left: 20px;
    margin-top: 0px;
    color: white;
    width: 600px;

}

.box{
    position: fixed;
    height: 1oopx;
    width: 600px;
    bottom: 1%; 
    left: 50%;
    color: white;
    
}

.box h2{
    font-size: 40px;
}

.box p{
    float: right;
    margin-right: 15px;
}
</style>