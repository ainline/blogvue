<template>
  <div id="hot" class="hot main-box pd-10">
    <div class="hot-title">
      <font-awesome-icon class="title-icon" :icon="['fab','hotjar']" />热门文章
    </div>
    <div class="hot-body" v-for="(item,index) in articles" :key="index">
      <div class="body-sort">{{index+1}}</div>
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-hot',
  data() {
    return {
      articles: [
        { title: '排行榜第一', url: 'aaaa' },
        { title: '委屈获得第二名', url: 'aaaa' },
        { title: '第三名没什么用', url: 'aaaa' },
        { title: '更没用', url: 'aaaa' },
        { title: '全国前五名', url: 'aaaa' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#hot {
  height: 200px;
  // overflow: hidden;
  background: $list-background;
  .hot-title {
    line-height: 30px;
    padding: 0px;
    margin: 0px;
    font-size: 16px;
    color: rgb(61, 61, 61);
    border-bottom: 1px solid rgb(230, 230, 230);
    margin-bottom: 10px;
  }
  .hot-body {
    margin-top: 2px;
    height: 30px;
    width: 100%;
    float: left;
    font-size: 16px;
    line-height: 20px;
    .body-sort {
      margin-right: 10px;
      background-color: #ffe9c4;
      line-height: 20px;
      text-align: center;
      float: left;
      width: 20px;
      height: 20px;
    }
  }
}
.title-icon {
  color: red;
  margin-right: 10px;
}
</style>
