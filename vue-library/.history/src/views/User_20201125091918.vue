<template>
    <div class="user-container container">
        <userNavigation></userNavigation>
        <h1 class="title">今天你阅读了吗？</h1>
        
        
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
    background-image: url(/img/divBg/bg29.jpg);

}


.user-container .title{
    align-items: center;
    margin-top: 0px;
    color: black;
    width: 300px;
}
</style>