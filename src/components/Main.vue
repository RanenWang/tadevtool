<template>

  <el-container style="height: 100%;padding: 0;">
    <el-header style="text-align: right; font-size: 12px">
      <a style="float: left;" class="color-white">TA development tool</a>
      <el-tooltip class="item" effect="dark" content="点击此处，展开或收起" placement="top">
        <i style="float: left;margin-top: 15px; color: #868686;
        margin-left: 10px;font-size:28px" class="el-icon-s-fold" @click="handleOpen"></i>
      </el-tooltip>

      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px;color: white"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>
        <el-avatar :size="30" :src="background" style="vertical-align: middle;margin-right: 10px;"></el-avatar>
      </span>

      <span class="color-white">wangpeng</span>

    </el-header>
    <!--    border-right:thick solid #ff0000;-->
    <el-container style="background-color: rgb(238, 241, 246)">
      <el-aside
        style="background-color: rgb(238, 241, 246); height: 100%;padding: 0; width: auto; box-shadow: 0px 10px 10px;">
        <el-menu :default-openeds="[]"
                 default-active="home"
                 class="el-menu-vertical"
                 :collapse="isCollapse"
                 @select="handleSelect"
        >
          <el-menu-item index="home"><i class="el-icon-s-home"></i><span>首页</span></el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-cooperation"></i><span>文件接口</span></template>
            <el-menu-item index="interfaceread">接口阅读器</el-menu-item>
            <el-menu-item index="interfacemock">接口数据mock</el-menu-item>
          </el-submenu>


          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i><span>流程设计</span></template>
            <el-menu-item-group>
              <template slot="title">ta6</template>
              <el-menu-item index="ta6flowdesign">流程设计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-s-claim"></i><span>语句生成</span></template>
            <el-menu-item index="sqlcreate">分表语句生成</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title"><i class="el-icon-s-tools"></i><span>系统设置</span></template>
            <el-menu-item index="setting">设置</el-menu-item>
            <el-menu-item index="about">关于</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container style="margin-left:8px;background-color: white;box-shadow: 0px 10px 10px;">
        <el-main style="border: 1px #111; padding: 0px;">
          <el-tabs
            v-model="activeIndex"
            type="card"
            @tab-remove="removeTab"
            @tab-click="clickTab"
          >
            <el-tab-pane
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
  </el-container>

</template>
<style>
body, p {
  margin: 0;
}
.color-white{
  color: white;
}
body, html, .parent {
  height: 100%;
}

.el-header {
  background-color: #193270;
  color: #333;
  line-height: 60px;
}

.el-submenu .el-menu-item {
  padding-left: 45px !important;
  text-align: left;
  padding: 0;
}

.el-menu {
  border: none !important;
  padding: 0;
  height: 100%;
  /* width: 200; */
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
import bg from '../assets/imgs/homebg.jpg';

export default {
  data() {
    return {
      background: bg,
      isCollapse: false,
      activeIndex: '/home',
      openTab: [
        // {
        //   title: '首页',
        //   name: '/home',
        //   closable: false
        // }
      ]
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
    handleSelect(key,keyPath){
        console.log(key,keyPath);
        this.$router.push(key)
    },
    handleOpen() {
      this.isCollapse = !this.isCollapse;
    },
    clickTab(tab) {
      this.activeIndex = tab.paneName;
      this.$router.push({ path: this.activeIndex });
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
      this.$router.push({ path: this.openTab[this.openTab.length - 1].name });
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
    this.$router.push({ path: this.openTab[this.openTab.length - 1].name });
    console.log("推送了")
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
        this.$router.push({ path: this.activeIndex });
      }
    }
  }
};
</script>
