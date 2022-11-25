<template>
<!--  v-model="activeName" @tab-click="handleClick"-->
  <el-tabs style="padding-left: 10px;" >
    <el-tab-pane label="申请数据" name="requestData"><RequestInterfaceRead/></el-tab-pane>
    <el-tab-pane label="行情" name="fundData"><FundInterfaceRead/></el-tab-pane>
    <el-tab-pane label="清算数据" name="liquidationData"><LiquidationInterfaceRead/></el-tab-pane>
    <el-tab-pane label="客服数据" name="kfData">客服数据</el-tab-pane>
    <el-tab-pane label="确认数据" name="confirmData">确认数据</el-tab-pane>
    <el-tab-pane label="集中备份" name="fourth">集中备份</el-tab-pane>
  </el-tabs>
</template>

<script>
import RequestInterfaceRead from "./subpage/RequestInterfaceRead";
import FundInterfaceRead from "./subpage/FundInterfaceRead";
import LiquidationInterfaceRead from "./subpage/LiquidationInterfaceRead";
export default {
  name: "InterfaceRead",
  components:{
    RequestInterfaceRead,FundInterfaceRead,LiquidationInterfaceRead
  }
}
</script>

<style scoped>

</style>
