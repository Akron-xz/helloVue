<template>
    <div class="MyInformation-container container">
        <div class="exit">
        <button class="exit-login">
            退出登陆
        </button>
        </div>
        <div class="img-box">
            <div class="information-modify">
                <img src="/img/PPT11/information.jpg" class="PPT11-img" alt="" @click="toModifyMsg"><br>         
                <p>信息修改</p>
            </div>
            <div class="borrowing-history">
                <img src="/img/PPT11/history.jpg" class="PPT11-img" alt="" @click="toBorrowHistory"><br>
                <p>借阅历史</p>
            </div>
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
        toModifyMsg(){
            this.$router.push({path:'/ModifyMsg'})
        },
        toBorrowHistory(){
            this.$router.push({path:'/BorrowHistory'})

        }
    },
    created() {
        
    },
}
</script>

<style scoped>
.MyInformation-container{
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

}

.PPT11-img{
    width: 150px;
    height:150px;
    margin-top: 50px;
    border-radius: 80px;
    cursor: pointer;
    transition: width 1s, height 1s, transform 1s;
}

.PPT11-img:hover{
    width: 180px;
    height:180px;
}

.information-modify p:hover{
    cursor: pointer;
    color: blue;
}

.borrowing-history p:hover{
    cursor: pointer;
    color: blue;
}

.exit{
    position:relative;
    top: 50px;
    margin:20px;
    display: flex;
    justify-content: flex-end;
}

.exit-login{
    height: 30px;
    width: 88px;
    background:rgb(0, 253, 63);
    color: white;
    border-style:none;
    border-radius: 60px;
    cursor: pointer;
}

.img-box{
    list-style-type: none;
    float: left;
    margin: auto;
    width: 33%;
}


</style>