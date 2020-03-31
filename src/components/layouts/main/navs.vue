<template>
  <div id="main-nav">
    <el-menu default-active="0" class="nav-menu">
      <el-menu-item
        class="menu-item"
        v-for="(item,index) in items"
        :key="index"
        :index="index.toString()"
      >
        <font-awesome-icon :icon="[item.iconGroup,item.iconName]" />
        <span slot="title">{{item.menuName}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'main-nav',
  data() {
    return {
      items: [
        { menuName: '回首', iconGroup: 'fas', iconName: 'feather', url: '' },
        { menuName: '码农', iconGroup: 'fab', iconName: 'mailchimp', url: '' },
        { menuName: '音乐', iconGroup: 'fab', iconName: 'teamspeak', url: '' },
        {
          menuName: '博物馆',
          iconGroup: 'fab',
          iconName: 'fort-awesome',
          url: ''
        }
      ],
      ins: 0
    }
  },
  methods: {
    clickItem(i) {
      console.log(i)
    }
  }
}
</script>

<style lang="scss" scoped>
#main-nav {
  padding: 5px;
}
.el-menu {
  border-right: 0px;
}
.nav-menu {
  background-color: transparent;
  .is-active {
    background: rgb(248, 248, 248);
  }
  .menu-item {
    height: 40px;
    line-height: 40px;
    &:hover {
      background: rgb(248, 248, 248);
    }
    svg {
      margin-right: 10px;
    }
  }
}
</style>
