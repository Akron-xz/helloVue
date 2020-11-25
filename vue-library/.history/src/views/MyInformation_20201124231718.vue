<template>
    <div class="MyInformation-container container">
        <userNavigation></userNavigation>
        <div class="exit">
        <button class="exit-login">
            退出登陆
        </button>
        </div>
        <div class="img-box">
            <div class="information-modify">
                <img src="/img/user/modify.png" class="PPT11-img" alt="" @click="toModifyMsg"><br>         
                <p @click="toModifyMsg">信息修改</p>
            </div>
            <div class="borrowing-history">
                <img src="/img/user/books.png" class="PPT11-img" alt="" @click="toBorrowHistory"><br>
                <p @click="toBorrowHistory">借阅历史</p>
            </div>
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
    display: flex;
    list-style-type: none;
    justify-content: space-around;
}


</style>