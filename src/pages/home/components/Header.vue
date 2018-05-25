<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe604;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe60b;</span>
      请输入城市名称、主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">
        &#xe64a;
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  // 1rem = html hont-size = 50px
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: 0.86rem
    background: $bgColor
    color: #fff
    .header-left
      width: 0.64rem
      float: left
      text-align center
      .back-icon
        font-size: .4rem
    .header-input
      flex: 1
      height : .64rem
      line-height : 0.64rem
      padding-left : .2rem
      margin-top : 0.12rem
      margin-left : 0.2rem
      background: #fff
      border-radius: .1rem
      color: darkgray
    .header-right
      width: 1.24rem
      float: right
      text-align center
      .arrow-icon
        margin-left : -0.04rem
        font-size: .24rem
</style>
