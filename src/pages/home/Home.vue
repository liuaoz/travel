<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <div>Welcome to my home.</div>
  <home-footer></home-footer>
</div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeFooter from './components/Footer'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeFooter
  }
}

</script>

<style scoped>

</style>
