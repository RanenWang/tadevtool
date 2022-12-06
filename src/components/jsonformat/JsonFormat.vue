<template>
  <div id = "main" class="container-main">
  <el-container class="container-main">
    <el-col :span="11" class="container-main">
      <el-input
        class="container-main"
        :rows=30
        type="textarea"
        placeholder="请输入内容"
        @input="changeData"
        v-model="jsonDataString">
      </el-input>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="12">
      <json-viewer
        class="container-main"
        :value="jsonData"
        :expand-depth=200
        copyable
        expanded

        boxed></json-viewer>
    </el-col>

  </el-container>

  </div>

</template>

<script>
export default {
  name: "JsonFormat",
  data() {
    return {
      jsonDataString: "",
      jsonData: {}
    }
  },
  methods:{
    changeData(jsonstr){
      console.log(jsonstr)
      try{
        this.jsonData = JSON.parse(jsonstr);
      }catch (error){
        console.log("json转化失败")
        const h = this.$createElement;
        this.$notify({
          title: '提示！',
          message: h('i', { style: 'color: teal'}, "不是有效的json字符串")
        });
      }

    }
  }
}
</script>

<style scoped>
#main{
  height: 100%;
}
/*.jv-container .jv-code.boxed .json-viewer{*/
/*  overflow-y: scroll;*/
/*  -webkit-overflow-scrolling: touch;*/
/*  overflow: -moz-scrollbars-none;*/
/*}*/
/*.jv-container .jv-code.boxed::-webkit-scrollbar {*/
/*  display: none;*/
/*}*/
</style>
