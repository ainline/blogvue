<template>
  <div class="main-content">
    <el-col :span="20" :offset="4" class="content">
      <div class="a">123</div>
      <div class="leavemessage">123</div>
    </el-col>
    <!-- <div class="content"></div> -->
  </div>
</template>

<script>
export default {
  name: 'main-content',
  data() {
    return {
      items: []
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  padding: 10px;
}
.content {
  min-height: 1000px;
  border: 1px solid red;
}
</style>
