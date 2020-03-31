<template>
  <div id="tags" class="main-box pd-10">
    <el-input class="tags-input" placeholder="搜一搜" v-model="filterText"></el-input>
    <el-tree
      class="filter-tree tags-body"
      :data="data"
      :props="defaultProps"
      ref="tree"
      icon-class="el-icon-attract"
      :filter-node-method="filterNode"
      @node-click="clickNode"
    ></el-tree>
  </div>
</template>

<script>
export default {
  name: 'main-tags',
  data() {
    return {
      filterText: '',
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              url: 'aaa'
            }, {
              id: 4,
              label: '二级 1-1',
              url: 'aaa'
            }, {
              id: 4,
              label: '二级 1-1',
              url: 'aaa'
            }, {
              id: 4,
              label: '二级 1-1',
              url: 'aaa'
            }, {
              id: 4,
              label: '二级 1-1',
              url: 'aaa'
            }, {
              id: 4,
              label: '二级 1-1',
              url: 'aaa'
            }, {
              id: 4,
              label: '二级 1-1',
              url: 'aaa'
            }, {
              id: 4,
              label: '二级 1-1',
              url: 'aaa'
            }, {
              id: 4,
              label: '二级 1-1',
              url: 'aaa'
            }, {
              id: 4,
              label: '二级 1-1',
              url: 'aaa'
            }, {
              id: 4,
              label: '二级 1-1',
              url: 'aaa'
            }, {
              id: 4,
              label: '二级 1-1',
              url: 'aaa'
            }, {
              id: 4,
              label: '二级 1-1',
              url: 'aaa'
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1',
              url: 'aaa'
            },
            {
              id: 6,
              label: '二级 2-2',
              url: 'aaa'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1',
              url: 'aaa'
            },
            {
              id: 8,
              label: '二级 3-2',
              url: 'aaa'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted() {},
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    clickNode(n, e, t) {
      console.log(n)
      // console.log(e)
      // console.log(t)
    }
  }
}
</script>

<style lang="scss">
#tags {
  // position: -webkit-sticky;
  position: sticky;
  top: 60px;
  // max-height:100vh;
  // background:#ccc;
  // padding:10px 0;
  margin-top: 16px;
  background: $list-background;
  .tags-input {
    .el-input__inner {
      background-color: $list-background;
      height: 30px;
      border-radius: 0;
    }
  }
  .tags-body {
    margin-top: 5px;
    background: rgba(255, 255, 255, 0);
  }
  .el-tree-node__content {
    .el-tree-node__expand-icon{
      color: rgba(216, 112, 14, 0.911);
    }
    &:hover {
      background: rgb(206, 206, 206);
    }
  }
}
</style>
