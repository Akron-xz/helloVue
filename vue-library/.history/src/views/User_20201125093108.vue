<template>
    <div class="user-container container">
        <userNavigation></userNavigation>
        <h1 class="title">今天你阅读了吗？</h1>
        <h2>书籍是人类进步的阶梯</h2>
        <p>————高尔基</p>
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
    background-image: url(/img/divBg/bg28.png);

}


.user-container .title{
    float: right;
    margin-top: 0px;
    margin: auto;
    color: black;
    width: 300px;

}

.user-container .h2{
    bottom: 10%;
}
</style>