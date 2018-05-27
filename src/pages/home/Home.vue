<template>
<div>
  <home-header></home-header>
  <home-swiper :swiperList="swiperList"></home-swiper>
  <home-icons></home-icons>
  <home-recommend></home-recommend>
  <home-weekend></home-weekend>
  <home-footer></home-footer>
</div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeFooter from './components/Footer'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import HomeIcons from './components/Icons'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    HomeFooter
  },
  data () {
    return {
      swiperList: []
    }
  },
  methods: {
    getHomeInfo () {
      console.info('get home info ...')
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      if (res.status && res.data) {
        this.swiperList = res.data.swiperList
      }
      console.info(res.data)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}

</script>

<style scoped>

</style>
