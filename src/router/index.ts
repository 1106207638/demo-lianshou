import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Activity from '@/views/Activity.vue'
import Course from '@/views/Course.vue'
import News from '@/views/News.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/activity',
    component: Activity
  },
  {
    path: '/course',
    component: Course
  },
  {
    path: '/news',
    component: News
  },
]

const router = new VueRouter({
  routes
})

export default router
