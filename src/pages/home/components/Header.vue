<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe604;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe60b;</span>
      请输入城市名称、主题
    </div>
    <router-link to="city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">
          &#xe64a;
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  // 1rem = html hont-size = 50px
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
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
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left : -0.04rem
        font-size: .24rem
</style>
