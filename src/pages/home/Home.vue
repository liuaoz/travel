<template>
<div>
  <home-header></home-header>
  <home-swiper :list="swiperList"></home-swiper>
  <home-category :list="categoryList"></home-category>
  <home-recommend :list="recommendList"></home-recommend>
  <home-weekend :list="weekendList"></home-weekend>
  <home-footer></home-footer>
</div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeFooter from './components/Footer'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import HomeCategory from './components/Category'
import axios from 'axios'
import { mapState } from 'vuex'

// 存在问题，子组件页面创建完成，ajax才请求数据，造成子组件显示问题

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeCategory,
    HomeRecommend,
    HomeWeekend,
    HomeFooter
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      categoryList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      console.info('get home info ...')
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.status && res.data) {
        this.swiperList = res.data.swiperList
        this.categoryList = res.data.categoryList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
      console.info(res)
    }
  },
  mounted () {
    console.log('【home.vue】' + 'mounted')
    this.lastCity = this.city
    this.getHomeInfo()
  },
  computed: {
    ...mapState(['city'])
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
    console.log('【home.vue】' + 'activated')
  }
}

</script>

<style scoped>

</style>
