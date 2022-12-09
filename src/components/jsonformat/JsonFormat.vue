<template>
  <el-row :gutter="12">
    <el-col :span="12" class="">
      <el-input
        :rows=20
        type="textarea"
        placeholder="请输入内容"
        @input="changeData"
        v-model="jsonDataString">
      </el-input>
    </el-col>
    <el-col :span="12">
      <div style="height:600px;overflow:auto;border: 1px solid #e1e1e1;">
        <!--        <vue-json-pretty :data="jsonData"-->
        <!--                         highlightMouseoverNode-->
        <!--                         collapsedOnClickBrackets-->
        <!--                         showIcon-->
        <!--        />-->
        <json-viewer
          class="container-main"
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
        const h = this.$createElement;
        this.$notify({
          title: '提示！',
          message: h('i', {style: 'color: teal'}, "不是有效的json字符串")
        });
      }

    }
  }
}
</script>

<style>
.el-card__body {
  padding: 10px;
}
</style>
