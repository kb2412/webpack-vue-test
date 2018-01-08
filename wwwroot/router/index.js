import Vue from 'vue'
import Router from 'vue-router'
// 引用页面模板->供路由使用
import index from 'views/index/index.vue'
import content from 'views/index/content.vue'
import member from 'views/index/member.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path: '/member',
      name: 'member',
      component: member
    }
  ]
})
