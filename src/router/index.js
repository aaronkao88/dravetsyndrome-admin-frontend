import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta:{
      title:'登入｜Login'
    }
  },
  {
    path: '/admin/slide',
    name: 'admin.index',
    component: () => import('@/views/Index.vue'),
    meta:{
      title:'首頁｜內容管理系統'
    }
  },
  {
    path: '/admin/article',
    name: 'admin.article',
    component: () => import('@/views/Article.vue'),
    meta:{
      title:'文章管理｜內容管理系統'
    }
  },
  {
    path: '/admin/contact',
    name: 'admin.contact',
    component: () => import('@/views/Contact.vue'),
    meta:{
      title:'聯絡我們管理｜內容管理系統'
    }
  },
  {
    path: '/admin/rule',
    name: 'admin.rule',
    component: () => import('@/views/Rule.vue'),
    meta:{
      title:'章程管理｜內容管理系統'
    }
  },
  {
    path: '/admin/team',
    name: 'admin.team',
    component: () => import('@/views/Team.vue'),
    meta:{
      title:'成員管理｜內容管理系統'
    }
  },
  {
    path: '/admin/media',
    name: 'admin.media',
    component: () => import('@/views/Media.vue'),
    meta:{
      title:'影音管理｜內容管理系統'
    }
  },
  {
    path: '/admin/hospital',
    name: 'admin.hospital',
    component: () => import('@/views/Hospital.vue'),
    meta:{
      title:'醫院列表管理｜內容管理系統'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
