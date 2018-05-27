<template>
  <div>
    <div class="title">周末旅游</div>
    <ul>
      <li class="item border-bottom" v-for="item of itemList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.url"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      itemList: [
        {
          id: '0001',
          url: '/static/images/mother-daughter.JPG',
          title: '周末烧烤',
          desc: '在周末可以烧烤，优惠力度大大的。'
        },
        {
          id: '0002',
          url: '/static/images/mother-daughter.JPG',
          title: '周末烧烤',
          desc: '在周末可以烧烤，优惠力度大大的。'
        },
        {
          id: '0003',
          url: '/static/images/mother-daughter.JPG',
          title: '周末烧烤',
          desc: '在周末可以烧烤，优惠力度大大的。'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    line-height : .8rem
    background : #eee
    text-indent : .2rem
  .item-img-wrapper
    overflow : hidden
    height : 0
    padding-bottom : 33.9%
    .item-img
      width : 100%
  .item-info
    padding : .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color: #ccc
      ellipsis()
</style>
