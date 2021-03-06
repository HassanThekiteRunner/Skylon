/*
 * @Author: your name
 * @Date: 2021-03-06 09:09:36
 * @LastEditTime: 2021-03-06 14:43:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Music from '../components/head/music.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Music',
    component: Music
  },
  {
    path: '/Music',
    name: 'Music',
   
    component: () => import( '../components/head/music.vue')
  },
  {
    path: '/Mine',
    name: 'Mine',
   
    component: () => import( '../components/head/mine.vue')
  },
 
  {
    path: '/Find',
    name: 'Find',
   
    component: () => import( '../components/head/find.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
