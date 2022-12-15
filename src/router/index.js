import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Setting from '@/components/setting/Setting'
import Home from '@/components/home/Home'
import Sqlcreate from '@/components/sqlcreate/Sqlcreate'
import About from "../components/about/About";
import InterfaceRead from "../components/interfaceread/InterfaceRead";
import JsonFormat from "../components/jsonformat/JsonFormat";
import JsonViewer from 'vue-json-viewer'
import FundInterfaceRead from "../components/interfaceread/subpage/FundInterfaceRead";
import RequestInterfaceRead from "../components/interfaceread/subpage/RequestInterfaceRead";
import CentralizedBackup from "../components/interfaceread/subpage/CentralizedBackup";
import ConfirmData from "../components/interfaceread/subpage/ConfirmData";
import KfData from "../components/interfaceread/subpage/KfData";
import LiquidationInterfaceRead from "../components/interfaceread/subpage/LiquidationInterfaceRead";
import FlowDesign from "../components/flowdesign/FlowDesign";
Vue.use(JsonViewer)
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
          meta: {
            name: 'setting',
            title: '设置',
          },
          path: 'setting',
          component: Setting
        },
        {
          meta: {
            name: 'home',
            title: '首页',
          },
          path: 'home',
          component: Home
        },
        {
          meta: {
            name: 'sqlcreate',
            title: '语句创建',
          },
          path: 'sqlcreate',
          component: Sqlcreate
        }, {
          meta: {
            name: 'about',
            title: '关于',
          },
          path: 'about',
          component: About
        }, {
          meta: {
            name: 'interfaceread',
            title: '接口阅读器',
          },
          path: 'interfaceread',
          component: InterfaceRead
        },
        {
          meta: {
            name: 'requestInterfaceRead',
            title: '申请数据',
          },
          path: 'requestInterfaceRead',
          component: RequestInterfaceRead
        },
        {
          meta: {
            name: 'centralizedBackup',
            title: '集中备份',
          },
          path: 'centralizedBackup',
          component: CentralizedBackup
        },{
          meta: {
            name: 'ConfirmData',
            title: '确认数据',
          },
          path: 'confirmData',
          component: ConfirmData
        },
        {
          meta: {
            name: 'FundInterfaceRead',
            title: '行情数据',
          },
          path: 'fundInterfaceRead',
          component: FundInterfaceRead
        },
        {
          meta: {
            name: 'KfData',
            title: '客服数据',
          },
          path: 'kfdata',
          component: KfData
        },
        {
          meta: {
            name: 'liquidationInterfaceRead',
            title: '清算数据',
          },
          path: 'liquidationInterfaceRead',
          component: LiquidationInterfaceRead
        },
        {
          meta: {
            name: 'jsonformat',
            title: 'Json美化',
          },
          path: 'jsonformat',
          component: JsonFormat
        },{
          meta: {
            name: 'flowDesign',
            title: '6.0流程设计',
          },
          path: 'flowDesign',
          component: FlowDesign
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

