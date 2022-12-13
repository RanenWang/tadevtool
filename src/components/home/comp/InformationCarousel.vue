<template>
  <el-carousel :height=height>
    <el-carousel-item v-for="item in list" :key="item.id">
      <a :href=item.href id="title" target="_blank">
        <el-image
          :src="item.path"
          style="height: 80%;width: 100%;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)"
          fit="fill"></el-image>
        <div style="padding: 10px;text-decoration: none;">{{ item.title }}</div>
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
// 资讯走马灯
export default {
  name: "InformationCarousel",
  method: {},
  created() {
    console.log("组件初始化")
    try {
      this.$http.get('/home/information'
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
  data() {
    return {
      list: [
        {
          "title": "loading",
          "path": "",
          "href":""
        }
      ]
    }
  },
  props: {
    height: String  //给组件传递的参数类型
  }
}
</script>
<style>

#title {
  text-decoration: none;
  color: black;
}
</style>
