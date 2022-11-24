<template>

<el-container style="height: 100%;padding: 0;">
    <el-header style="text-align: right; font-size: 12px" >
        <a style="float: left;" v-on:click="handleOpen()">TA development tool</a>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>wangpeng</span>
    </el-header>

    <el-container>
        <el-aside  style="background-color: rgb(238, 241, 246); height: 100%;padding: 0; width: auto">
            <el-menu :default-openeds="[]"
            default-active="home"
            class="el-menu-vertical"
            :collapse="isCollapse"
                     unique-opened=true
                     router=true
                     collapse-transition=true
            @select="handleSelect"
            >
                <el-menu-item index="home"><i class="el-icon-s-home"></i><span>首页</span></el-menu-item>

                <el-submenu index="1" >
                    <template slot="title" >
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

        <el-container >
            <el-main style="border: 1px #111;">
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</el-container>

</template>
  <style>
    a:hover {
    text-decoration: underline;
    }
    body,p{
    margin: 0;
    }
    body,html,.parent{
    height: 100%;
    }
    .el-header {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
    }
    .el-submenu .el-menu-item{ padding-left : 45px !important;
    text-align: left;
padding: 0;}
    .el-menu{
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
    export default {
      data() {
        return {
            isCollapse: false,
        }
      },
      methods: {
        // handleSelect(key,keyPath){
        //     console.log(key,keyPath);
        //     this.$router.push(key)
        // },
        handleOpen() {
            this.isCollapse = !this.isCollapse;
        },
      }
    };
  </script>
