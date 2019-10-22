<template>
  <header :class="{login: isLogin, 'no-login':!isLogin}">
    <template v-if="!isLogin">
      <h1>Let's share</h1>
      <p>分享你的博客</p>
      <div class="btns">
        <router-link to="/login"><el-button>立即登录</el-button></router-link>
        <router-link to="/register"><el-button>注册账号</el-button></router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>Let's share</h1>
      <i class="edit el-icon-edit"></i>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" title="头像">
        <ul>
          <li><router-link to="/my">我的</router-link></li>
          <li><a href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
  import auth from '@/api/auth'
  window.auth = auth
  import { mapGetters, mapActions} from 'vuex'

  export default {
    created(){
      this.checkLogin()
    },
    methods:{
      ...mapActions([
        'checkLogin',
        'logout'
      ]),
      onLogout(){
        this.logout()
      }
    },
    computed:{
      ...mapGetters([
        'isLogin',
        'user'
      ])
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
    p{margin: 15px 0 0 0;}
    button{margin: 20px 5px 0;}
    .btns{margin-top: 15px;}
    &.login{
      display: flex;
      align-items: center;
      padding: 0 12%;
      h1{margin: 0;flex: 1;}
      .edit{font-size: 30px;}
      .user{
        position: relative;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 15px;
        padding-right: 15px;
        .avatar{
          width: 40px;
          height: 40px;
          border: none;
        }
        >ul{
          display: none;
          position: absolute;
          top: 100%;
          list-style: none;
          border: 1px solid @textHasBackColor;
          background: @bgColor;
          a{
            font-size: 12px;
            display: block;
            padding: 5px 10px;
            color: @textHasBackColor;
            &:hover{background: @bgLighterColor;}
          }
        }
        &:hover ul{display: block;}
      }
    }
  }

</style>
