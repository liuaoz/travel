<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <div>Welcome to my home.</div>
  <home-footer></home-footer>
</div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeFooter from './components/Footer'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeFooter
  }
}

</script>

<style scoped>

</style>
