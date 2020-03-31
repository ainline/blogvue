import Vue from 'vue'
import Router from 'vue-router'

import Main from '~/layouts/main'
import NotFound from '../views/404'
import Content from '~/components/layouts/main/content'
import Body from '~/components/layouts/main/body'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          name: 'body',
          components: {
            body: Body
          }
        },
        {
          path: 'articles',
          name: 'articles',
          components: {
            default: '',
            content: Content
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Main
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
