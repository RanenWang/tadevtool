<template>

    <el-carousel :height="height" direction="vertical" :autoplay="true">
      <el-carousel-item v-for="item in list" :key="item.id">
        <a :href=item.href id="title" target="_blank">
          <el-image
            :src="item.path"
            style="height: 80%;width: 100%;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)"
            fit="fill">
          </el-image>
          <div style="padding: 10px;text-decoration: none;">{{item.title}}</div>
        </a>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
  name: "TouTiao",
  props: {
    height: String  //给组件传递的参数类型
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
  created() {
    console.log("toutiao init")
    this.$http({
      url: '/home/toutiao',
      method: 'get',
    }).then(res => {
      //res为后端传回来的数据
      console.log(res.data.data)
      this.list = res.data.data
    });
  },
  computed: {
    // cssVars() {
    //   return {
    //     "--height": this.height
    //   };
    // }
  }
}
</script>

<style >
</style>
