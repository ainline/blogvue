<template>
  <div class="main-body">
    <div :span="14" :offset="4" class="main">
      <main-banner />
      <!-- <main-info /> -->
      <main-articles />
    </div>
    <div :span="6" class="right">
      <hot />
      <tags />
    </div>
  </div>
</template>

<script>
import MainBanner from '~/components/banner'
import MainArticles from '~/components/articles'
import MainInfo from '~/components/info'
import Hot from '~/components/hot'
import Tags from '~/components/tags'
export default {
  name: 'main-body',
  components: { MainBanner, MainInfo, MainArticles, Hot, Tags }
}
</script>

<style lang="scss" scoped>
.main-body{
  margin-top:10px;
  .main{
    float:left;
    margin-left:170px;
    width:570px;
    // padding:10px;
  }
  .right{
    margin-left:15px;
    // padding:10px;
    float:left;
    width:240px;
  }
}
.main > div {
  margin-bottom: 15px;
}
</style>
