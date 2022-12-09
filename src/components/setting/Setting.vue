<template>
    <div class="">
  <div style="height: 100%">敬请期待…… {{ ttt }}</div>
  <div style="height: 100%">
    <el-button type="primary" @click="onSubmit">主要按钮</el-button>
  </div>
    </div>
</template>

<script>
import url from '../../main'

export default {
  data() {
    return {
      ttt: this.HOST
    }
  },
  methods: {
    onSubmit() {
      this.$axios({
        url: url + '/sql/create',
        method: 'get',
        headers: {
          //请求头，可以将token放在这里
          'key': '1'
        },
        params: {
          //需要传过去的参数
          'key': '1'
        }
      }).then(res => {
        //res为后端传回来的数据
        console.log(res)
      })
    }
  }
}
</script>
