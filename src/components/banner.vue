<template>
  <div id="main-banner" class="banner">
    <el-carousel trigger="click" :interval="5000" type="card" height="150px">
      <el-carousel-item v-for="item in 6" :key="item">
        <el-image :src="src" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'main-banner',
  data() {
    return {
      src: 'http://img.sccnn.com/bimg/342/8621.jpg'
    }
  }
}
</script>

<style>
#main-banner {
  margin-bottom: 0px;
}
.el-carousel__item h3 {
  color: #0a4ca1;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  filter: blur(2px);
}
.el-carousel__item:nth-child(2n + 1) {
  filter: blur(2px);
}
.el-carousel__item.is-active {
  filter: blur(0);
}
</style>
