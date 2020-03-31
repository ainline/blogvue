<template>
  <div id="header-search">
    <el-input placeholder="超级智能搜索" class="input-with-select" v-model="src">
      <el-button slot="append" icon="el-icon-present"></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'header-search',
  data() {
    return {
      src: ''
    }
  }
}
</script>

<style lang="scss">
#header-search {
  height: 40px;
  padding: 10px 5px;
  display: flex;
  width: 200px;
  flex-basis: 241px;
  line-height: 30px;
  // .el-input__inner {
  //   border-radius: 0;
  // }
}
</style>
