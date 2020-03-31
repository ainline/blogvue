<template>
  <div class="header-logo">
    <!-- <i class="el-icon-sunny"></i> -->
    <!-- <i class="el-icon-video-camera-solid"></i> -->
    rm -rf /
    <!-- <i class="el-icon-more-outline"></i> -->
  </div>
</template>

<script>
export default {
  name: 'header-logo',
  data() {
    return {
      src: 'http://pics.sc.chinaz.com/Files/pic/logo9/202002/d/alogo1873.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.header-logo {
  display: flex;
  width: 300px;
  height: 40px;
  line-height: 42px;
  padding: 10px;
  padding-left: 30px;
  font-size: 40px;
  text-align: $header-height;
  transition: 1s;
  background: -webkit-linear-gradient(
    right,
    rgba(255,255,255,0),
    #0085f1,
    #02ffd5,
    #9cbe00,
    rgba(255,255,255,0) 20%
  );
  //  background: -webkit-linear-gradient(
  //   right,
  //   rgba(255,255,255,0),
  //   #e70e0e,
  //   #ff761b,
  //   #f1ff33,
  //   rgba(255,255,255,0) 20%
  // );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  animation: masked-animation 5s infinite linear;
  // &:hover {
  //   background-size: 200% 100%;
  //   // transform: rotate(180deg);
  //   transition: 1s;
  //   animation: masked-animation 3s infinite linear;
  // }
}
@keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100%, 0;
  }
}
</style>
