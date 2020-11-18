<template>
    <div class="Bookshelves-container container">

        <div class="guide">

        </div>
    
        <div class="book-first">
            <el-input
                class="bookstatus"
                placeholder="已借入书籍"
                v-model="input"
                :disabled="true">
            </el-input>
            <el-button type="primary" round>还书</el-button>
            <div class="books-table">
                <table border="0" cellspacing="0" width="800px"  align="center" class="book-table">
                    <tr align="left" >
                        <td class="field-name" >书本名称:</td>
                        <td><input type="text" name="Name" maxlength="20" style="width:200px;height:30px;"></td>
                        <td class="field-name" >国家:</td>
                        <td><input type="text" name="Name" maxlength="20" style="width:80px;height:30px;"></td>
                        <td class="field-name" >类型:</td>
                        <td><input type="text" name="Name" maxlength="20" style="width:80px;height:30px;"></td>
                    </tr>
                    <tr align="left">
                        <td class="field-name" >借阅时间:</td>
                        <td><input type="date" name="Name" maxlength="20" style="width:200px;height:30px;"></td>
                        <td class="field-name" >应归还时间:</td>
                        <td><input type="date" name="Name" maxlength="20" style="width:200px;height:30px;"></td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="book-second">
            <el-input
                class="bookstatus"
                placeholder="已借入书籍"
                v-model="input"
                :disabled="true">
            </el-input>
            <el-button type="primary" round>还书</el-button>
            <div class="books-table">
                <table border="0" cellspacing="0" width="800px"  align="center" class="book-table">
                    <tr align="left" >
                        <td class="field-name" >书本名称:</td>
                        <td><input type="text" name="Name" maxlength="20" style="width:200px;height:30px;"></td>
                        <td class="field-name" >国家:</td>
                        <td><input type="text" name="Name" maxlength="20" style="width:80px;height:30px;"></td>
                        <td class="field-name" >类型:</td>
                        <td><input type="text" name="Name" maxlength="20" style="width:80px;height:30px;"></td>
                    </tr>
                    <tr align="left">
                        <td class="field-name" >借阅时间:</td>
                        <td><input type="date" name="Name" maxlength="20" style="width:200px;height:30px;"></td>
                        <td class="field-name" >应归还时间:</td>
                        <td><input type="date" name="Name" maxlength="20" style="width:200px;height:30px;"></td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="book-third">
            <el-input
                class="bookstatus"
                placeholder="已借入书籍"
                v-model="input"
                :disabled="true">
            </el-input>
            <el-button type="primary" round>还书</el-button>
            <div class="books-table">
                <table border="0" cellspacing="0" width="800px"  align="center" class="book-table">
                    <tr align="left" >
                        <td class="field-name" >书本名称:</td>
                        <td><input type="text" name="Name" maxlength="20" style="width:200px;height:30px;"></td>
                        <td class="field-name" >国家:</td>
                        <td><input type="text" name="Name" maxlength="20" style="width:80px;height:30px;"></td>
                        <td class="field-name" >类型:</td>
                        <td><input type="text" name="Name" maxlength="20" style="width:80px;height:30px;"></td>
                    </tr>
                    <tr align="left">
                        <td class="field-name" >借阅时间:</td>
                        <td><input type="date" name="Name" maxlength="20" style="width:200px;height:30px;"></td>
                        <td class="field-name" >应归还时间:</td>
                        <td><input type="date" name="Name" maxlength="20" style="width:200px;height:30px;"></td>
                    </tr>
                </table>
            </div>
        </div>

        

    </div>

   
</template>

<script>
export default {
    
}
</script>

<style scoped>

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

.books-table{
    width: 800px;
    
}
</style>