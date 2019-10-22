import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/template.vue'
import detail from '@/pages/detail/template.vue'
import edit from '@/pages/edit/template.vue'
import index from '@/pages/index/template.vue'
import my from '@/pages/my/template.vue'
import register from '@/pages/register/template.vue'
import user from '@/pages/user/template.vue'
import create from '@/pages/create/template.vue'

import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/detail/:blogId',
      name: 'detail',
      component: detail
    },
    {
      path: '/edit/:blogId',
      name: 'edit',
      component: edit,
      meta: {requireAuth: true}
    },
    {
      path: '/my',
      name: 'my',
      component: my,
      meta: {requireAuth: true}
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: user
    },
    {
      path: '/create',
      name: 'create',
      component: create,
      meta: {requireAuth: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

export default router
