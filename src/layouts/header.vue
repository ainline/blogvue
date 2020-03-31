<template>
  <el-header id="header" class="header">
    <div class="header-container container">
      <logo />
      <search />
    </div>
  </el-header>
</template>

<script>
import Logo from '~/components/layouts/header/logo'
import Search from '~/components/layouts/header/search'

export default {
  name: 'layout-header',
  components: { Logo, Search }
}
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
  padding:0;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  z-index: 999;

  .header-container {
    justify-content: space-between;
    display:flex;
    width: $main-width;
    margin: 0 auto;
    font-size: 50px;
  }
}
</style>
