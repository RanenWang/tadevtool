<template>
    <el-tabs style="padding-left: 10px; height: 100%" tab-position="top">
      <el-tab-pane label="申请数据" name="requestData" style="padding-left: 10px; height: 100%">
        <RequestInterfaceRead/>
      </el-tab-pane>
      <el-tab-pane label="行情" name="fundData">
        <FundInterfaceRead/>
      </el-tab-pane>
      <el-tab-pane label="清算数据" name="liquidationData">
        <LiquidationInterfaceRead/>
      </el-tab-pane>
      <el-tab-pane label="客服数据" name="kfData">
        <KfData/>
      </el-tab-pane>
      <el-tab-pane label="确认数据" name="confirmData">
        <ConfirmData/>
      </el-tab-pane>
      <el-tab-pane label="集中备份" name="fourth">
        <CentralizedBackup/>
      </el-tab-pane>
    </el-tabs>
</template>

<script>
import RequestInterfaceRead from "./subpage/RequestInterfaceRead";
import FundInterfaceRead from "./subpage/FundInterfaceRead";
import LiquidationInterfaceRead from "./subpage/LiquidationInterfaceRead";
import KfData from "./subpage/KfData";
import ConfirmData from "./subpage/ConfirmData";
import CentralizedBackup from "./subpage/CentralizedBackup";

export default {
  name: "InterfaceRead",
  components: {
    RequestInterfaceRead, FundInterfaceRead, LiquidationInterfaceRead, KfData, ConfirmData, CentralizedBackup

  }
}
</script>

<style scoped>

</style>
