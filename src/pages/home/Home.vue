<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-recommend></home-recommend>
  <div>Welcome to my home.</div>
  <home-footer></home-footer>
</div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeFooter from './components/Footer'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
import HomeIcons from './components/Icons'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeFooter
  }
}

</script>

<style scoped>

</style>
