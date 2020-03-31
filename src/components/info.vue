<template>
  <div id="main-info" :style="backgroundImg">
    <div class="info-list">
      <div class="info-list-item">
        <!-- <i class="info-tag el-icon-collection-tag" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import bgImg from '~/assets/images/info-bg.jpg'
export default {
  name: 'main-info',
  data() {
    return {
      backgroundImg: {
        backgroundImage: 'url(' + bgImg + ')'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#main-info {
  height: 40px;
}
.info-list-item {
  background-repeat: no-repeat;
  min-height: 30px;
  margin-bottom: 15px;
  .info-tag {
    color: #7a7a7ad8;
    font-size: 40px;
  }
}
</style>
