<template>
  <el-row :gutter="6">
    <el-col align="middle" :xs="8" :sm="6" :md="4" :lg="3" :xl="2" v-for="item in list" :key="item.path" >
      <el-card class="common-height" shadow="always" style="margin-bottom: 6px; " :style="cssVars" >
        <a :href="item.path" style="width: 100%;"  class="common-height">

          {{item.name}}

        </a>

      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "CommonApp",
  props: {
    height: String
  },
  data() {
    return {
      list: [
        {
          "path":"#/kfdata",
          "name": "客服"
        },{
          "path":"#/liquidationInterfaceRead",
          "name": "清算"
        }
      ]
    };
  },
  created() {
    console.log("common user")
    try {
      this.$http.get('/home/commonuse'
      ).then(res => {
        //res为后端传回来的数据
        console.log(res.data.data)
        console.log("解析")

        this.list = res.data.data
      }).catch(function (error) {
        console.log(error);
      })
        .finally(function () {
          // 总是会执行
        });
    } catch (err) {
      console.error(err.response.status);
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

<style scoped>
.common-height {
  height: var(--height);
  text-decoration: none;
  color: black;
}
</style>
