<template>
  <footer>
    Ⓒ 2019 <a href="#">Zooey</a>
  </footer>
</template>
<style lang="less" scoped>
  @import "../assets/base.less";
  footer{
    background-color: @bgColor;
    color: @textHasBackColor;
    a{
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      &:hover{
        color: @textLighterColor;
      }
    }
  }
</style>
