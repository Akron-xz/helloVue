<template>
    <div class="user-container container">
        <div class="list" v-show="!playerVisible">
            <h1 class="title">今天你阅读了吗？</h1>
            <ul class="row user-list">
                <li class="user-item col-md-4" 
                v-for="(userViews,index) in list" 
                v-bind:key="index">
                    <img v-bind:src="userViews.img" alt="" class="user-img" v-on:click="1">
                    <p class="logo-name" v-on:click="1">{{userViews.name}}</p>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {

    data() {
        return {
            current:{
                "name":"",
                "img":"",
            },
            index:0,
            list:[],
            playerVisible:false,
        }
    },
    methods: {
        
    },
    created() {
        const url="/data/userViews.json";
        axios({
            method:"get",
            url:url
        }).then(response=>{
            let list=response.data;
            this.list=list;
        }).catch(err=>{
            console.log("err...",err)
        });
    },
}
</script>

<style scoped>
.user-container{
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

}

.user-item .user-img{
    width: 150px;
    height:150px;
    margin-top: 50px;
    border-radius: 80px;
    cursor: pointer;
    transition: width 1s, height 1s, transform 1s;
}

.user-item .user-img:hover{
    width: 180px;
    height:180px;
}

.user-item .logo-name:hover{
    cursor: pointer;
    color: blue;
}
.user-item{
    list-style-type: none;
    float: left;
    margin: auto;
    width: 33%;
    
    
}

</style>