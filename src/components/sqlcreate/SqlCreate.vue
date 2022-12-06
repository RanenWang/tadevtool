<template>
  <el-container style="width: 100%;">
    <el-form ref="form" :model="form" label-width="120px" size="mini" style="width: 100%;">
      <el-row>
        <el-col :span="6">
          <el-form-item label="分库数量">
            <el-input-number v-model="form.dbnum" controls-position="left" :min="1" :max="100"></el-input-number>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="分表数量">
            <el-input-number v-model="form.tablenum" controls-position="left" :min="1" :max="100"></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="数据库">
            <el-input type="input" controls-position="left" v-model="form.dbName" text="1"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="表名称">
            <el-input type="input" controls-position="left" v-model="form.tableName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="拼接字段">
            <el-input type="input" v-model="form.fieldStr"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="拼接条件">
            <el-input type="textarea" :row="10" v-model="form.whereStr"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="语句类型">
            <el-radio-group v-model="form.type" size="mini" @change="changeType">
              <el-radio label="select"></el-radio>
              <el-radio label="update"></el-radio>
              <el-radio label="delete"></el-radio>
              <el-radio label="truncate"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item>
            <el-tooltip class="item" effect="dark" content="点击此处，立刻生成分库分表语句" placement="top">
              <el-button type="primary" @click="onSubmit">立刻生成</el-button>
            </el-tooltip>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="23">
          <el-form-item label="生成结果">
            <prism-editor
              class="my-editor height-300"
              v-model="code"
              languages="sql"
              :highlight="highlighter"
              :line-numbers="lineNumbers"
            ></prism-editor>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>

  </el-container>
</template>
<script>
import url from "../../main";
import {PrismEditor} from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere
// import highlighting library (you can use any library you want just return html string)
import {highlight, languages} from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
export default {
  components: {
    PrismEditor
  },
  data() {
    return {
      code: '',
      lineNumbers: true,
      form: {
        dbnum: 2,
        tablenum: 16,
        dbName: 'fund60trans',
        tableName: 'tbfundtatransreq',
        fieldStr: 't.table_index, ',
        whereStr: 'where t.table_index = \'1\'',
        type: 'select',
        result: ''
      }
    }
  },
  methods: {
    changeType(val){
      if (val === 'update'){
        this.form.fieldStr = 'set t.aaa = \'111\' '
        this.form.whereStr = 'where t.table_index = \'1\''
      }
      if (val === 'select'){
        this.form.fieldStr = 't.table_index, '
        this.form.whereStr = 'where t.table_index = \'1\''
      }
      if (val === 'delete'){
        this.form.fieldStr = ''
        this.form.whereStr = 'where t.table_index = \'1\''
      }
      if (val === 'truncate'){
        this.form.fieldStr = ''
        this.form.whereStr = ''
      }

    },
    highlighter(code) {
      return highlight(code, languages.js);
    },
    onSubmit() {
      this.$axios({
        url: url + '/sql/create',
        method: 'get',
        headers: {},
        params: {
          'dbNumber': this.form.dbnum,
          'tableNumber': this.form.tablenum,
          'dbName': this.form.dbName,
          'tableName': this.form.tableName,
          'fieldStr': this.form.fieldStr,
          'whereStr': this.form.whereStr,
          'type': this.form.type
        }
      }).then(res => {
        //res为后端传回来的数据
        console.log(res)
        this.form.result = '';
        // todo

        this.code = res.data.data;
        console.log('生成成功!');
      }).catch(err=>{
        console.log("接口调用异常:" + url + '/sql/create')
        const h = this.$createElement;
        this.$notify({
          title: '提示！',
          message: h('i', { style: 'color: teal'}, "接口调用异常，请联系管理员")
        });
      })

    }
  }
}
</script>

<style>
.my-editor {
  /*background: #2d2d2d;*/
  background: #ffffff;
  color: #212121;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  border: 1px solid #e1e1e1;
  border-radius: 0.3em;

  /*border-style: groove;*/
}

.prism-editor__textarea:focus {
  outline: none;
}

/* 非必须 */
.height-300 {
  height: 400px
}
</style>
