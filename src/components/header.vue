<template>
  <header :class="{login: isLogin, 'no-login':!isLogin}">
    <template v-if="!isLogin">
      <h1>Let's share</h1>
      <p>分享你的博客</p>
      <div class="btns">
        <el-button>立即登录</el-button>
        <el-button>注册账号</el-button>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>Let's share</h1>
      <i class="edit el-icon-edit"></i>
      <img src="" alt="">
    </template>
  </header>
</template>

<script>
  export default {
    data(){
      return{
        isLogin:false
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/base.less";

  header{
    padding: 0 12% 30px 12%;
    background: @bgColor;
    display: grid;
    justify-content: center;
    color: @textHasBackColor;

    h1{
      font-size: 40px;
      margin: 60px 0 0 0;
      text-transform: uppercase;
    }
    p{
      margin: 15px 0 0 0;
    }
    button{
      margin: 20px 5px 0;
    }
    .btns{
      margin-top: 15px;
    }

    &.login{
      display: flex;
      align-items: center;
      padding: 0 12%;
      h1{
        margin: 0;
        flex: 1;
      }
      .edit{
        font-size: 30px;
      }
      .avatar{
        width: 40px;
        height: 40px;
        border: 1px solid @themeColor;
        margin-right: 15px;
      }
    }
  }

</style>
