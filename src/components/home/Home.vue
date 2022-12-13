<template>
  <div id="home" >
    <el-row :gutter="12">
      <el-col :span="16">
        <h1 class="ta-title">TA头条</h1>
        <el-card shadow="always">
          <TouTiao :height=height />
        </el-card>
      </el-col>
      <el-col :span="8">
        <h1 class="ta-title">资讯</h1>
        <el-card shadow="always">
          <InformationCarousel :height=height />
        </el-card>
      </el-col>
      <el-col :span="24">
        <h1 class="ta-title">我的常用</h1>
        <el-card shadow="always">
          <el-col :span="8">
          </el-col>
          <el-card shadow="always">
            <div style="height: 250px;"></div>
          </el-card>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style  scoped>


</style>
<script>
import InformationCarousel from "./comp/InformationCarousel";
import TouTiao from "./comp/TouTiao";

export default {
  components: {
    InformationCarousel,
    TouTiao
  },
  data() {
    return {
      height: "250px"
    }
  },
  computed: {

  }

}
</script>
