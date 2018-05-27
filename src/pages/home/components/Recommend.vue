<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of itemList" :key="item.id">
        <img class="item-img" :src="item.url"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      itemList: [
        {
          id: '0001',
          url: '/static/images/mother-daughter.JPG',
          title: '大澳湾海景',
          desc: '这个地方可以海上游玩'
        },
        {
          id: '0002',
          url: '/static/images/mother-daughter.JPG',
          title: '大澳湾海景',
          desc: '这个地方可以海上游玩'
        },
        {
          id: '0003',
          url: '/static/images/mother-daughter.JPG',
          title: '大澳湾海景',
          desc: '这个地方可以海上游玩'
        },
        {
          id: '0004',
          url: '/static/images/mother-daughter.JPG',
          title: '大澳湾海景',
          desc: '这个地方可以海上游玩'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top : .2rem
    line-height : .8rem
    background : #eee
    text-indent : .2rem
  .item
    display : flex
    height : 1.9rem
    .item-img
      width : 1.7rem
      height : 1.7rem
      padding : .1rem
    .item-info
      flex: 1
      padding : .1rem
      min-width : 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height : .44rem
        margin-top : .16rem
        background : #ff9300
        padding : 0 .2rem
        border-radius : .06rem
        color : #fff
</style>
