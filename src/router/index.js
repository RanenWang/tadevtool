import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Setting from '@/components/setting/Setting'
import Home from '@/components/home/Home'
import Sqlcreate from '@/components/sqlcreate/Sqlcreate'
import About from "../components/about/About";
import {name} from 'file-loader'

Vue.use(Router)
// 保存原来的push方法
const originPush = Router.prototype.push;

Router.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => {
    }, () => {
    })
  }
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'setting',
          component: Setting
        },
        {
          path: 'home',
          component: Home
        },
        {
          path: 'sqlcreate',
          component: Sqlcreate
        }, {
          path: 'about',
          component: About
        }
      ]
    },
    {
      path: '/404',
      component: () => import('@/components/404/NotFound'),
      hidden: true
    },
    {
      path: '*',
      redirect: '/404',
      hidden: true
    }

  ]
})

