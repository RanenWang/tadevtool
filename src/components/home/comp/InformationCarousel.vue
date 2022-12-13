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
  beforeMount() {
    console.log("组件初始化")
    this.$http({
      url: '/home/information',
      method: 'get',
    }).then(res => {
      //res为后端传回来的数据
      console.log(res.data.data)
      console.log("解析")

      this.list = res.data.data
    });
  },
  data() {
    return {
      list: []
    }
  },
  props: {
    height: String  //给组件传递的参数类型
  }
}
</script>
<style >

#title {
  text-decoration: none;
  color: black;
}
</style>
