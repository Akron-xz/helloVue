<template>
    <div class="Bookshelves-container container">
     <div>
      <el-header>
        <router-link to="./" class="a">首页</router-link>
        /
        <router-link to="./user" class="b">我是借阅者</router-link>
        /
        <router-link to="./MyBookshelves" class="c">我的书架</router-link>
      </el-header>
    </div>

        <div class="guide">

        </div>
    
        <div class="book-first" v-for="(item, index) in list" :key="index">
            <el-input
                class="bookstatus"
                placeholder="已借入书籍"
                v-model="input"
                :disabled="true">
            </el-input>
            <el-button type="primary" round>还书</el-button>
            
                <table border="0" cellspacing="0" width="800px"  align="center" class="book-table">
                    <tr align="left" >
                        <td class="field-name" >书本名称:</td>
                        <td><input :value="item.book.bookName" type="text" name="bookName" maxlength="20" style="width:200px;height:30px;" readonly></td>
                        <td class="field-name" >国家:</td>
                        <td><input  type="text" name="contry" maxlength="20" style="width:150px;height:30px;" readonly></td>
                        <td class="field-name" >类型:</td>
                        <td><input type="text" name="type" maxlength="20" style="width:150px;height:30px;" readonly></td>
                    </tr>
                    <tr align="left">
                        <td class="field-name" >借阅时间:</td>
                        <td><input :value="item.borrowTimeStr" type="text" name="borrowTime" maxlength="20" style="width:200px;height:30px;" readonly></td>
                        <td class="field-name" >应归还时间:</td>
                        <td><input :value="item.deadlineStr" type="text" name="deadline" maxlength="20" style="width:200px;height:30px;" readonly></td>
                    </tr>
                </table>
            
        </div>

        <!-- <div class="book-second">
            <el-input
                class="bookstatus"
                placeholder="已借入书籍"
                v-model="input"
                :disabled="true">
            </el-input>
            <el-button type="primary" round>还书</el-button>
                <table border="0" cellspacing="0" width="800px"  align="center" class="book-table" >
                    <tr align="left" >
                        <td class="field-name" >书本名称:</td>
                        <td><input type="text" name="bookName" maxlength="20" style="width:200px;height:30px;" readonly></td>
                        <td class="field-name" >国家:</td>
                        <td><input type="text" name="contry" maxlength="20" style="width:150px;height:30px;" readonly></td>
                        <td class="field-name" >类型:</td>
                        <td><input type="text" name="type" maxlength="20" style="width:150px;height:30px;" readonly></td>
                    </tr>
                    <tr align="left">
                        <td class="field-name" >借阅时间:</td>
                        <td><input type="date" name="borrowTime" maxlength="20" style="width:200px;height:30px;" readonly></td>
                        <td class="field-name" >应归还时间:</td>
                        <td><input type="date" name="deadline" maxlength="20" style="width:200px;height:30px;" readonly></td>
                    </tr>
                </table>
        </div>

        <div class="book-third">
            <el-input
                class="bookstatus"
                placeholder="已借入书籍"
                v-model="input"
                :disabled="true">
            </el-input>
            <el-button type="primary" round>还书</el-button>
                <table border="0" cellspacing="0" width="800px"  align="center" class="book-table">
                    <tr align="left" >
                        <td class="field-name" >书本名称:</td>
                        <td><input v-model="bookName" type="text" name="bookName" maxlength="20" style="width:200px;height:30px;" readonly ></td>
                        <td class="field-name" >国家:</td>
                        <td><input type="text" name="contry" maxlength="20" style="width:150px;height:30px;" readonly></td>
                        <td class="field-name" >类型:</td>
                        <td><input type="text" name="type" maxlength="20" style="width:150px;height:30px;" readonly></td>
                    </tr>
                    <tr align="left">
                        <td class="field-name" >借阅时间:</td>
                        <td><input type="date" name="borrowTime" maxlength="20" style="width:200px;height:30px;" readonly></td>
                        <td class="field-name" >应归还时间:</td>
                        <td><input type="date" name="deadline" maxlength="20" style="width:200px;height:30px;" readonly></td>
                    </tr>
                </table>
        </div> -->

        

    </div>

   
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            list:[],
            input:"",
            userData:[{userId:"",},],
            index:0,
        }
    },
    created() {
    let user = JSON.parse(sessionStorage.getItem("userSession"));
    console.log(user);
    this.userData[0].userId = user.userId;
        axios({
            method:"get",
            url:"http://localhost:8081/user/bookshelves",
            params:{
                userId:this.userData[0].userId
            }
            
        }).then(res=>{
            this.list = res.data;
            console.log(this.list);
        })
    },
}
</script>

<style scoped>
.el-header {
  position: absolute;
  left: 30px;
  color: #333;
  line-height: 60px;
  width: 100%;
  height: 60px;
  text-align: left;
}
.a {
  text-decoration: none;
}
.b {
  text-decoration: none;
}
.c {
  text-decoration: none;
}

.bookstatus{
    width: 400px;
    margin-right: 66px;
}

.Bookshelves-container{
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

}

.book-table{
    height: 100px;
    width: 800px;
    margin-top: 5px;
    background: #fafafa;
    border-radius: 10px;
    text-align:right;
    
}

.field-name{
    width: fit-content;
}

.book-table input{
    border: 1px solid #00000030;
    border-radius: 4px;
    background: none;
    
}

.book-first{
    margin-top: 100px;
}

.book-second{
    margin-top: 50px;
}

.book-third{
    margin-top: 50px;
}
</style>