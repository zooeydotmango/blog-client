import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=>import('@/pages/index/template.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/pages/login/template.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: ()=>import('@/pages/register/template.vue')
    },
    {
      path: '/detail/:blogId',
      name: 'detail',
      component: ()=>import('@/pages/detail/template.vue')
    },
    {
      path: '/edit/:blogId',
      name: 'edit',
      component: ()=>import('@/pages/edit/template.vue'),
      meta: {requireAuth: true}
    },
    {
      path: '/my',
      name: 'my',
      component: ()=>import('@/pages/my/template.vue'),
      meta: {requireAuth: true}
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: ()=>import('@/pages/user/template.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: ()=>import('@/pages/create/template.vue'),
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
