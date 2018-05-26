<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 1000
        }
      },
      swiperList: [
        {
          id: '001',
          url: '/static/images/mother-daughter.JPG'
        },
        {
          id: '002',
          url: '/static/images/my-parents.JPG'
        },
        {
          id: '003',
          url: '/static/images/mother-daughter.JPG'
        },
        {
          id: '004',
          url: '/static/images/with-computer.JPG'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background : #fff
  .wrapper
    overflow : hidden
    height : 0
    width :100%
    padding-bottom : 75%
    background : #eee
    .swiper-img
      width : 100%
</style>
