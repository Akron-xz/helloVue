<template>
    <div class="user-container container">
        <h1 class="title">今天你阅读了吗？</h1>
        
        <div class="myInformation box">
            <img src="/img/user/MyInformation1.png" class="user-img" alt="" v-on:click="toMyInformation">
            <p class="logo-name" v-on:click="toMyInformation">我的信息</p>
        </div>
        <div class="myShelves box">
            <img src="/img/user/bookshelves.png" class="user-img" alt="" @click="toMyBookshelves">
            <p class="logo-name" @click="toMyBookshelves">我的书架</p>
        </div>
        <div class="Library box">
            <img src="/img/user/bookslibrary.png" class="user-img" alt="" @click="toLibrary">
            <p class="logo-name" @click="toLibrary">图书馆</p>
        </div>

    </div>
</template>

<script>
export default {

    data() {
        return {
            
        }
    },
    methods: {
        toMyInformation(){
            this.$router.push({path:'/MyInformation'})
        },
        toLibrary(){
            this.$router.push({path:'/library'})
        },
        toMyBookshelves(){
            this.$router.push({path:'/MyBookshelves'})
        },
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
    background-size: 100%;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

}

.user-img{
    width: 150px;
    height:150px;
    margin-top: 50px;
    border-radius: 80px;
    cursor: pointer;
    transition: width 1s, height 1s, transform 1s;
}

.user-img:hover{
    width: 180px;
    height:180px;
}

.logo-name:hover{
    cursor: pointer;
    color: blue;
}

.box{
    list-style-type: none;
    float: left;
    margin: auto;
    width: 33%;
}

.user-container .title{
    margin-top: 50px;
}
</style>