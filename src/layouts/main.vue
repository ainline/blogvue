<template>
  <el-main class="main-container">
    <el-row>
      <el-col :span="4" class="nav">
        <main-navs></main-navs>
      </el-col>
      <router-view name="body"></router-view>
      <router-view name="content"></router-view>
    </el-row>
  </el-main>
</template>

<script>
import MainNavs from '~/components/layouts/main/navs'
export default {
  name: 'blog-main',
  components: { MainNavs }
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  width: 170px;
  height: 400px;
  padding: 10px;
}

.main-container > .el-row > .el-col {
  padding: 5px;
}
.main-container {
  width: $main-width;
  padding: 0;
  padding-top: $header-height;
  margin-top: 60px;
  // min-height: 2000px;
  margin: 0 auto;
}
</style>
