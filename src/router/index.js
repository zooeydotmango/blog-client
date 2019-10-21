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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/create',
      name: 'create',
      component: create
    }
  ]
})
