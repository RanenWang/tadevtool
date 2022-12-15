<template>
  <div id="home">
    <el-row :gutter="6">
      <el-col :xs="24" :sm="14" :md="16" :lg="16" :xl="16">
        <h1 class="ta-title">TA头条</h1>
        <el-card shadow="always" class="ta-maoboli">
          <TouTiao :height="height"/>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="10" :md="8" :lg="8" :xl="8">
        <h1 class="ta-title">资讯</h1>
        <el-card shadow="always" class="ta-maoboli">
          <InformationCarousel :height="height"/>
        </el-card>
      </el-col>


      <el-col :xs="24" :lg="24">
        <h1 class="ta-title">我的常用</h1>
        <!--        <el-card shadow="always">-->

          <CommonApp :height="appHeight"/>
        <!--        </el-card>-->
      </el-col>
      <el-col>
<!--        <div><iframe src ="http://localhost:8089/#/home" width="100%" height="500" frameborder="0"></iframe></div>-->
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>


</style>
<script>
import InformationCarousel from "./comp/InformationCarousel";
import TouTiao from "./comp/TouTiao";
import CommonApp from "./comp/CommonApp";

export default {
  components: {
    InformationCarousel,
    TouTiao,
    CommonApp
  },
  data() {
    return {
      height: "250px",
      appHeight: "50px"
    }
  },
  computed: {}

}
</script>
