<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  name: 'DetailList'
}
</script>

<style lang="stylus" scoped>
  .item
    .item-title
      font-size .32rem
      padding 0 .2rem
      line-height: .8rem
    .item-title-icon
      position: relative
      left: .06rem
      top: .06rem
      display: inline-block
      width: .36rem
      height .36rem
      background url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right .1rem
      background-size: .4rem 3rem
    .item-children
      padding: 0 .2rem
</style>
