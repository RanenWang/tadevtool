<template>
  <el-row :gutter="6">
    <el-col align="middle" :xs="8" :sm="6" :md="4" :lg="3" :xl="2" v-for="item in list" :key="item.path">
      <el-card shadow="always" style="margin-bottom: 6px;height: 50px; " :style="cssVars" class="ta-maoboli">
        <a :href="item.path" style="width: 100%;" class="common-height">
          <div style="height: 50px;width: 100%;">
<!--            <div style="height:100%;width: 50px;float: left;">-->
<!--              <i style="margin:0px 20px 10px 10px;"-->
<!--                 class="el-icon-video-camera-solid"></i>-->
<!--            </div>-->
            <img src="/static/demo/jiazaizhong.jpg" alt="" style="height:30px;width: 30px;float: left;margin:10px;border-radius: 5px;">
            <div style="height:100%;width: 70px;float: left;text-align: left">
              {{ item.name }}
            </div>
          </div>
        </a>

      </el-card>
    </el-col>
  </el-row>
</template>

<span style="float: left"></span>

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
          "path": "#/kfdata",
          "name": "客服"
        }, {
          "path": "#/liquidationInterfaceRead",
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
  text-align: center;
  line-height: var(--height);
  color: black;
}
</style>
