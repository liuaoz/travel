<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.url"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperSlide from '../../../../node_modules/vue-awesome-swiper/src/slide.vue'

export default {
  components: {SwiperSlide},
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        loop: true
      },
      iconList: [
        {
          id: '0001',
          url: '/static/images/grandma-daughter.JPG',
          desc: '家乡哈哈哈哈哈哈哈'
        },
        {
          id: '0002',
          url: '/static/images/grandma-daughter.JPG',
          desc: '古城'
        },
        {
          id: '0003',
          url: '/static/images/grandma-daughter.JPG',
          desc: '抽象画廊'
        },
        {
          id: '0004',
          url: '/static/images/grandma-daughter.JPG',
          desc: '翡翠湾'
        },
        {
          id: '0005',
          url: '/static/images/grandma-daughter.JPG',
          desc: '渔港'
        },
        {
          id: '0006',
          url: '/static/images/grandma-daughter.JPG',
          desc: '风车'
        },
        {
          id: '0007',
          url: '/static/images/grandma-daughter.JPG',
          desc: '冲浪'
        },
        {
          id: '0008',
          url: '/static/images/grandma-daughter.JPG',
          desc: '大厝'
        },
        {
          id: '0009',
          url: '/static/images/grandma-daughter.JPG',
          desc: '草礁'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        console.log(item.id)
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom : 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
        background #25a4bb
        border-radius : 3rem
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height : .44rem
      line-height: .44rem
      color : $darkTextColor
      text-align : center
      ellipsis()
</style>
