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

      <el-container style="margin:10px;background-color: white;box-shadow: 0px 10px 10px;
      border-radius: 0.3em;">
        <el-main style="border: 1px #111;">
          <router-view/>
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
  }
};
</script>
