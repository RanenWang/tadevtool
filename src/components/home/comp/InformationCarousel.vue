<template>
  <el-carousel :height=height>
    <el-carousel-item v-for="item in list">
      <a :href=item.href>
        <el-image
          :src="item.path"
          fit="fill"></el-image>
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
// 咨询走马灯
import url from "../../../main";

export default {
  name: "InformationCarousel",
  created() {
    this.$axios({
      url: url + '/home/information',
      method: 'get',
      headers: {
        //请求头，可以将token放在这里
      },
      params: {
        //需要传过去的参数
      }
    }).then(res => {
      //res为后端传回来的数据
      console.log(res.data.data)
      this.list = res.data.data
    })
  },
  data() {
    return {
      list: [
        {
          "title": "test1",
          "path": require("../../../../static/demo/1.jpg"),
          "href":"https://mp.weixin.qq.com/s?__biz=Mzg2Mzg4NzcwNg==&mid=2247483665&idx=1&sn=44c7f3fe753293e8f45150f657cffc3c&chksm=ce708924f90700328b40911c9eb0d1c13929d43c57b616d30d0af876760508bcf6ab76026a9e#rd"
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
.el-carousel {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 250px;
  margin: 0;
}

.el-card__body {
  padding: 0px;
}
img{
  /*设置图片宽度和浏览器宽度一致*/
  width:100%;
  height:inherit;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
