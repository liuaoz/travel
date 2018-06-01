<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="/static/images/mother-daughter.JPG">
      <div class="banner-info">
        <div class="banner-title">抽象画廊大浪淘沙(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['/static/images/mother-daughter.JPG', '/static/images/mother-daughter.JPG']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow: hidden
    height 0
    padding-bottom 55%
    .banner-img
      width: 100%
    .banner-info
      display flex
      position: absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image: linear-gradient(top, rgba(0 ,0 ,0 ,0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0, 0, 0, 0.8rem)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
