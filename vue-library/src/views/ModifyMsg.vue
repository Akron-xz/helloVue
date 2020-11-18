<template>
   <div class="table-container">
    <table border="1" cellspacing="0" width="850px"  align="center" class="tableid">
        <tr>
            <td align="center" colspan="6" class="msg-title">个人资料</td>

        </tr>
        <tr>
            <td class="msg-header">姓名：
            </td>
            <td><input type="int" name="Name" maxlength="20" style="width:180px;height:30px;"></td>
            <td class="msg-header">性别：</td>
            <td><input type="text" name="Sex" maxlength="5" style="width:180px;height:30px;" ></td>
            <td class="msg-header">
                年龄：
            </td>
            <td><input type="text" name="Age" maxlength="5" style="width:180px;height:30px;"></td>
        </tr>
        <tr>
            <td class="msg-header">邮箱： </td>
            <td><input type="text" name="Mail" maxlength="30" style="width:180px;height:30px;"></td>
            <td class="msg-header">出生年月： </td>
            <td><input type="text" name="Birthday" maxlength="30" style="width:180px;height:30px;"></td>
            <td class="msg-header">联系电话：</td>
            <td><input type="text" name="PhoneNumber" maxlength="30" style="width:180px;height:30px;"></td>
        </tr>
        <tr>
          <td class="msg-header">居住地址:</td>
          <td colspan="5"><input type="text" name="Adress" maxlength="100" style="width:720px;height:30px;" ></td>
        </tr>
        <tr >
            <td class="msg-header">个人描述：</td>
            <td colspan="5"><input type="text" name="" maxlength="100" style="width:720px;height:60px;"></td>
        </tr>
    </table><br><br>

    <div style="text-align: center;">
    <button value="submit" class="modify-btn">编辑</button>
    </div>
    <div class="modify-pasawd" style="text-align: center;">
        修改密码：<input type="text" maxlength="30"><br><br>
        确认密码：<input type="text" maxlength="30"><br><br>
        <button value="submit" class="confirm-btn" >确认</button>
    </div>

   
    
</div>
  
</template>
<script>
  export default {
    
  }
</script>

<style scoped>


 .table-container{
        position: fixed;
        width: 100%;
        height: 100%;
         background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    }
    .tableid{
      position: absolute;
      right: 370px;
        top: 80px;
      
    }
    .tableid input{
        border: 0;    
           background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

    }
.modify-btn{
  position: absolute;
  top: 320px;
  right: 380px;
    height: 40px;
    width: 70px;
    background-color: rgb(155, 247, 64);
}
.confirm-btn{
  height: 40px;
    width: 70px;
    border-radius: 15px;
    border: 0;
    background-color: rgb(35, 35, 241);
}
button:hover{
    cursor: pointer;
}
    .msg-title{
        font-size: 30px;
    }
    .msg-header{
        background-color: lightgray;
    }
    .modify-pasawd{
        position: absolute;
        top: 60%;
       left: 680px;
    }
</style>