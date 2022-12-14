<template>
  <el-row :gutter="12">
    <el-col :span="12" >
      <el-input
        class="ta-border-radius-10"
        :rows=32
        type="textarea"
        placeholder="请输入内容"
        @input="changeData"
        v-model="jsonDataString">
      </el-input>
    </el-col>
    <el-col :span="12">
      <div style="height:680px; background: white" class="ta-border ta-border-radius-10">
<!--                <vue-json-pretty :data="jsonData"-->
<!--                                 highlightMouseoverNode-->
<!--                                 collapsedOnClickBrackets-->
<!--                                 showIcon-->
<!--                />-->
        <json-viewer
          class=" ta-border-radius-10"
          :value="jsonData"
          :expand-depth=200
          copyable
          expanded>
        </json-viewer>
      </div>

    </el-col>
  </el-row>

</template>

<script>
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

export default {
  name: "JsonFormat",
  components: {
    VueJsonPretty
  },
  data() {
    return {
      jsonDataString: "",
      jsonData: {}
    }
  },
  methods: {
    changeData(jsonstr) {
      console.log(jsonstr)
      try {
        this.jsonData = JSON.parse(jsonstr);
      } catch (error) {
        console.log("json转化失败")
        this.$message({
          duration:500,
          message:'不是有效的json字符串'
        });
      }

    }
  }
}
</script>

<style scoped>
/deep/ .el-input__inner{
  height: 600px;
}

</style>
