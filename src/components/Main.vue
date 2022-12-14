<template>
  <el-container id="mainContainer" style="height: 100%; ">
    <el-header height="45px">
      <!--标题-->
      <a style="float: left;" class="color-white">TA development tool</a>
      <!--展开或收起来-->
      <el-tooltip class="item" effect="dark" content="点击此处，展开或收起" placement="top">
        <i style="float: left; color: #fff; line-height: 45px;font-size:18px;margin-left: 10px;"
           class="el-icon-s-fold"
           @click="handleOpen"></i>
      </el-tooltip>
      <!--全屏-->
      <screenfull id="screenfull" class="right-menu-item hover-effect"/>

      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px;color: white"></i>
        <el-dropdown-menu slot="dropdown">
        </el-dropdown-menu>
      </el-dropdown>
      <!--头像-->
      <span>
        <el-avatar :size="24" :src="background" style="vertical-align: middle;margin-right: 10px;"/>
      </span>
      <!--名字-->
      <span class="color-white">admin</span>

    </el-header>
    <!--    border-right:thick solid #ff0000;-->
    <!--    <el-container style="background-color: rgb(238, 241, 246)">-->
    <el-container  class="ta-maoboli" >
      <el-aside
        style=" width: auto; height: auto; box-shadow: 0px 10px 10px;">
        <el-menu
          style="background-color:#ffffff00;"
          mode="vertical"
          default-active="home"
          class="el-menu-vertical ta-no-border"
          :collapse="isCollapse"
          @select="handleSelect"
        >
          <el-menu-item index="home"><i class="el-icon-s-home"></i><span>首页</span></el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-cooperation"></i><span>文件接口</span></template>
            <el-submenu index="interfaceread">
              <template slot="title" style="float: left">
                <span>接口阅读器</span></template>
              <el-menu-item index="liquidationInterfaceRead">会计清算</el-menu-item>
              <el-menu-item index="kfdata">客服数据</el-menu-item>
              <el-menu-item index="centralizedBackup">集中备份</el-menu-item>
              <el-menu-item index="confirmData">确认数据</el-menu-item>
              <el-menu-item index="fundInterfaceRead">行情接口</el-menu-item>
              <el-menu-item index="requestInterfaceRead">申请数据</el-menu-item>
            </el-submenu>
          </el-submenu>


          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i><span>流程设计</span></template>
            <el-menu-item-group>
              <template slot="title">ta6</template>
              <el-menu-item index="ta6flowdesign">流程设计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-s-claim"></i><span>小工具</span></template>
            <el-menu-item index="sqlcreate">分表语句生成</el-menu-item>
            <el-menu-item index="jsonformat">json美化</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title"><i class="el-icon-s-tools"></i><span>系统设置</span></template>
            <el-menu-item index="setting">设置</el-menu-item>
            <el-menu-item index="about">关于</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main id="mainTab" style=" ">
        <el-tabs

          v-model="activeIndex"
          type="card"
          @tab-remove="removeTab"
          @tab-click="clickTab"
        >
          <el-tab-pane
            style="padding-left:8px;padding-right:8px;padding-bottom:8px;"
            :key="item.name"
            v-for="item in openTab"
            :label="item.title"
            :name="item.name"
            :closable="item.closable"
          >
            <router-view></router-view>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>

</template>
<style>
.el-tabs--bottom .el-tabs--left>.el-tabs__header .el-tabs__item:last-child, .el-tabs--bottom .el-tabs--right>.el-tabs__header .el-tabs__item:last-child, .el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child, .el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top .el-tabs--left>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top .el-tabs--right>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:last-child {
  padding-right: 10px
}

#mainTab {
  padding: 0px;
  margin-left: 8px;
  height: 100%;
  box-shadow: 0px 10px 10px;
}




.el-header {
  backdrop-filter: blur(10px);
  background-color: #193270ff;
  line-height: 45px;
  text-align: right;
  font-size: 14px;
}

.el-submenu .el-menu-item {
  padding-left: 45px !important;
  padding: 0;
}

.el-menu {
  padding: 0;
  height: 100%;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-tabs__content {
  height: calc(100vh - 118px);
  overflow-y: auto;
}



.el-tabs--bottom .el-tabs--left>.el-tabs__header .el-tabs__item:last-child, .el-tabs--bottom .el-tabs--right>.el-tabs__header .el-tabs__item:last-child, .el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child, .el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top .el-tabs--left>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top .el-tabs--right>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:last-child {
  padding-right: 10px
}

::v-deep .el-tabs__content {
  overflow: visible;
}
::v-deep .el-tabs__item {
  color: white;
}
::v-deep .el-tabs__item.is-active {
  color: #15cbf3;
}
::v-deep .el-icon-arrow-left {
  color: white;
}
::v-deep .el-icon-arrow-right {
  color: white;
}
::v-deep .el-tabs__nav-wrap::after {
  height: 0;
}
::v-deep .el-tabs__active-bar {
  background-color: #15cbf3;
}

</style>


<script>
import bg from '../assets/imgs/homebg.jpg';

import Screenfull from './components/Screenfull'

export default {
  components: {
    Screenfull
  },
  data() {
    return {
      background: bg,
      isCollapse: true,
      activeIndex: '/home',
      openTab: []
    }
  },
  watch: {
    $route(to, form) {
      var flag = false;
      // 当前页面菜单已打开
      for (let i = 0; i < this.openTab.length; i++) {
        if (to.path == this.openTab[i].name) {
          this.activeIndex = this.openTab[i].name;
          flag = true;
          break;
        }
      }
      // 打开新的页面
      if (!flag) {
        let obj = {
          title: to.meta.title,
          name: to.path,
          closable: true
        };
        this.activeIndex = to.path;
        this.openTab.push(obj);
      }
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(key)
    },
    handleOpen() {
      console.log(1)
      this.isCollapse = !this.isCollapse;
    },
    clickTab(tab) {
      this.activeIndex = tab.paneName;
      this.$router.push({path: this.activeIndex});
    },
    removeTab(target) {
      // 删除的是当前选中的页面
      if (this.activeIndex === target) {
        this.openTab.forEach((item, index) => {
          if (item.name == target) {
            let nextTab = item[index + 1] || item[index - 1];
            if (nextTab) {
              this.activeIndex = nextTab.name;
            }
          }
        });
      }
      var i = 0;
      this.openTab.forEach((item, index) => {
        if (item.name == target) {
          // eslint-disable-next-line no-return-assign
          return (i = index);
        }
      });
      this.openTab.splice(i, 1);

      // 更新路由
      this.$router.push({path: this.openTab[this.openTab.length - 1].name});
    }
  },
  mounted() {
    // 监听页面加载前
    window.addEventListener('beforeunload', e => {
      sessionStorage.setItem(
        'openTab',
        JSON.stringify({
          openTab: this.openTab.filter(
            item => item.name != '/home'
          ),
          openTabPath: this.openTab.filter(
            item => item.name !== '/home'
          ),
          currActiveTabs: this.activeIndex
        })
      );
    });
  },
  created() {
    this.openTab.push({
      title: "首页",
      name: "/home",
      closable: false
    })
    this.$router.push({path: this.openTab[this.openTab.length - 1].name});
    const sessionTab = JSON.parse(window.sessionStorage.getItem('openTab')) || '';
    if (sessionTab) {
      if (sessionTab.openTab.length != 0 && sessionTab.openTabPath.length != 0) {
        for (let i = 0; i < sessionTab.openTab.length; i++) {
          this.openTab.push({
            title: sessionTab.openTab[i].title,
            name: sessionTab.openTab[i].name,
            closable: true
          });
        }
        this.activeIndex = sessionTab.currActiveTabs;
        this.$router.push({path: this.activeIndex});
      }
    }
  }
};
</script>
