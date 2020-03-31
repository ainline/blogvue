<template>
  <div id="main-article">
    <div class="article-list">
      <div class="article-list-item main-box pd-10" v-for="(item,index) in items" :key="index">
        <div class="itemize">
          <div>原创</div>
        </div>
        <div class="item-img">
          <el-image class="item-img" :src="item.img" />
        </div>
        <div class="item-body">
          <router-link to="articles"><h5 class="item-title">{{item.title}}</h5></router-link>
          <div class="item-desc">{{item.desc}}</div>
          <div class="item-meta">
            <span class="meta-date">
              <font-awesome-icon :icon="['fas','calendar-alt']" />
              <router-link to="/content">{{item.date}}</router-link>
            </span>
            <span class="meta-views">
              <font-awesome-icon :icon="['fas','eye']" />
              <span>{{item.views}}</span>
            </span>
            <span class="meta-comments">
              <font-awesome-icon :icon="['fas','comment-dots']" />
              <span>{{item.comments}}</span>
            </span>
            <span class="meta-categories">
              <font-awesome-icon :icon="['fas','list']" />
              <span>{{item.categories}}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-article',
  data() {
    return {
      items: [
        {
          title: '标题党',
          desc:
            '我是介绍我是介绍我是介绍我是介绍我是介绍我我是介绍我是介绍我我是介绍我是介绍我我是介绍我是介绍我我是介绍我是介绍我我是介绍我是介绍我我是介绍我是介绍我我是介绍我是介绍我我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍',
          date: '2020/2/29',
          views: '10',
          comments: '15',
          categories: '21',
          img:
            'http://pics.sc.chinaz.com/Files/pic/logo9/202002/d/alogo1873.jpg',
          url: ''
        },
        {
          title: '标题党',
          desc: '我是介绍',
          date: '2020/2/29',
          views: '10',
          comments: '15',
          categories: '21',
          img:
            'http://pics.sc.chinaz.com/Files/pic/logo9/202002/d/alogo1873.jpg',
          url: ''
        },
        {
          title: '标题党',
          desc: '我是介绍',
          date: '2020/2/29',
          views: '10',
          comments: '15',
          categories: '21',
          img:
            'http://pics.sc.chinaz.com/Files/pic/logo9/202002/d/alogo1873.jpg',
          url: ''
        },
        {
          title: '标题党',
          desc: '我是介绍',
          date: '2020/2/29',
          views: '10',
          comments: '15',
          categories: '21',
          img:
            'http://pics.sc.chinaz.com/Files/pic/logo9/202002/d/alogo1873.jpg',
          url: ''
        },
        {
          title: '标题党',
          desc: '我是介绍',
          date: '2020/2/29',
          views: '10',
          comments: '15',
          categories: '21',
          img:
            'http://pics.sc.chinaz.com/Files/pic/logo9/202002/d/alogo1873.jpg',
          url: ''
        },
        {
          title: '标题党',
          desc: '我是介绍',
          date: '2020/2/29',
          views: '10',
          comments: '15',
          categories: '21',
          img:
            'http://pics.sc.chinaz.com/Files/pic/logo9/202002/d/alogo1873.jpg',
          url: ''
        },
        {
          title: '标题党',
          desc: '我是介绍',
          date: '2020/2/29',
          views: '10',
          comments: '15',
          categories: '21',
          img:
            'http://pics.sc.chinaz.com/Files/pic/logo9/202002/d/alogo1873.jpg',
          url: ''
        },
        {
          title: '标题党',
          desc: '我是介绍',
          date: '2020/2/29',
          views: '10',
          comments: '15',
          categories: '21',
          img:
            'http://pics.sc.chinaz.com/Files/pic/logo9/202002/d/alogo1873.jpg',
          url: ''
        },
        {
          title: '标题党',
          desc: '我是介绍',
          date: '2020/2/29',
          views: '10',
          comments: '15',
          categories: '21',
          img:
            'http://pics.sc.chinaz.com/Files/pic/logo9/202002/d/alogo1873.jpg',
          url: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.article-list-item {
  overflow: auto;
  background: $list-background;
  margin-bottom: 15px;
  transition: all 0.5s;
  &:hover {
    background: $list-background-hover;
    transition: all 0.5s;
    .item-img {
      opacity: 1;
      transition: all 0.5s;
    }
    .itemize {
      opacity: 1;
    }
  }
  .item-img {
    cursor: pointer;
    float: left;
    position: relative;
    left: 0;
    width: 130px;
    height: 130px;
    opacity: 0.9;
  }
  .item-body {
    word-wrap: break-word;
    margin-left: 10px;
    width: 400px;
    float: left;
    position: relative;
    right: 0px;
    height: 130px;
    .item-title {
      margin: 0px;
      font-size: 18px;
      line-height: 30px;
      height: 30px;
    }
    .item-desc {
      font-size: 16px;
      line-height: 25px;
      height: 80px;
      color: #555;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .item-meta {
      border-top: 1px solid rgb(177, 177, 177);
      color: #555;
      position: relative;
      line-height: 20px;
      font-size: 13px;
      bottom: 0;
      height: 20px;
      display: flex;
      justify-content: space-between;
    }
  }
  .itemize {
    position: absolute;
    width: 28px;
    height: 20px;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    background: rgb(64, 165, 78);
    color: rgb(209, 209, 209);
    opacity: 0.6;
    z-index: 3;
    transition: all 0.5s;
  }
}
.item-meta > span > svg {
  margin-right: 4px;
}
</style>
