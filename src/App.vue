<template>
  <div id="app">
    <blog-header />
    <router-view></router-view>
    <router-view name="mid"></router-view>
    <blog-footer />
  </div>
</template>

<script>
import BlogHeader from '~/layouts/header'
import BlogMain from '~/layouts/main'
import BlogFooter from '~/layouts/footer'
export default {
  name: 'App',
  components: { BlogHeader, BlogMain, BlogFooter }
}
</script>
<style lang="scss" scoped>
body {
  margin: 0px;
  padding: 0px;
}
#app {
  // background: url("./assets/images/background.jpg") no-repeat 100%;
  // background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583427467354&di=ef35af273f99a5150eaf337a6fbf0707&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c60e554b3494000001bf72b5677f.jpg") no-repeat 100%;
  background: url("http://picture.ik123.com/uploads/allimg/171114/4-1G114095307.jpg") no-repeat 100%;
  // background-image: url("./assets/images/background.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  // background-size: 100%;
  margin: 0;
}
</style>
