<template>
    <div class="myMsg-container">
    <h style="font-size: 30px;">我的信息</h>
    <div class="modify-box" @click="toModifyMsg">
           信息修改
        </div>
    <div class="history-box" @click="toBorrowHistory">
           借阅历史
    </div>
    </div>
</template>>
<script>
export default {
    methods: {
        toModifyMsg(){
            this.$router.push({path:'/ModifyMsg'})
        },
        toBorrowHistory(){
            this.$router.push({path:'/BorrowHistory'})

        }
    },
}
</script>>
<style scoped>
.myMsg-container{
     position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
.modify-box{
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: blue;
    top: 40%;
    right: 70%;
}
.history-box{
position: absolute;
    width: 100px;
    height: 100px;
    background-color: rgb(240, 18, 18);
    top: 40%;
    right: 30%;
}
</style>>