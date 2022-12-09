<template>
  <div id="home">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="always" style="height: 150px;">
            我的常用
            <div>一11</div>
            <a href="#/interfaceread">interfaceread</a>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            鼠标悬浮时显示
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never">
            从不显示
          </el-card>
        </el-col>
      </el-row>
  </div>
</template>
<style>
.el-image{
  opacity:0.8;
}
#home{
    height: 100%;
}
</style>
<script>
import bg from '../../assets/imgs/homebg.jpg';
export default {
    data() {
        return {
            background: bg
        }
      }
}
</script>
