/*
 * @Author: your name
 * @Date: 2021-03-06 09:09:36
 * @LastEditTime: 2021-03-07 20:11:58
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
   
    component: () => import( '../components/head/music.vue'),
    children:[
      {
        path: '/',
        name: 'Newhot',
       
        component: () => import( '../components/hot/newhot.vue')
      },
      {
        path: 'Newhot',
        name: 'Newhot',
       
        component: () => import( '../components/hot/newhot.vue')
      },
      {
        path: 'Recommend',
        name: 'Recommend',
       
        component: () => import( '../components/hot/recommend.vue')
      },
    ]
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
  },
  {
    path: '/Singer',
    name: 'Singer',
   
    component: () => import( '../components/center/歌手.vue')
  },
  {
    path: '/Album',
    name: 'Album',
   
    component: () => import( '../components/center/专辑.vue')
  },
  {
    path: '/Ranking',
    name: 'Ranking',
   
    component: () => import( '../components/center/排行.vue')
  },
  {
    path: '/Anchor',
    name: 'Anchor',
   
    component: () => import( '../components/center/电台.vue')
  },
  {
    path: '/Song',
    name: 'Song',
   
    component: () => import( '../components/center/歌单.vue')
  },
  {
    path: '/Register',
    name: 'Register',
   
    component: () => import( '../components/login/register.vue')
  },
  {
    path: '/Login',
    name: 'Login',
   
    component: () => import( '../components/login/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
