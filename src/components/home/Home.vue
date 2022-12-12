<template>
  <div id="home" :style="cssVars">
    <el-row :gutter="12">
      <el-col :span="16">
        <h1>TA头条</h1>
        <el-card shadow="always">
          <a href="#/interfaceread">interfaceread</a>
        </el-card>
      </el-col>
      <el-col :span="8">
        <h1>资讯</h1>
        <el-card shadow="always">
          <InformationCarousel :height=height></InformationCarousel>
        </el-card>
      </el-col>
      <el-col :span="24">
        <h1>我的常用</h1>
        <el-card shadow="always">
          <el-col :span="8">
            <el-card shadow="always" style="height: 30px;">
              从不显示
            </el-card>
          </el-col>

        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<style vars="{ --height }" scoped>
.el-card {
  height: var(--height);
  border-radius: 18px;
}

</style>
<script>
import InformationCarousel from "./comp/InformationCarousel";

;
export default {
  components: {
    InformationCarousel
  },
  data() {
    return {
      height: "250px"
    }
  },
  computed: {
    cssVars() {
      return {
        "--height": this.height
      };
    }
  }

}
</script>
