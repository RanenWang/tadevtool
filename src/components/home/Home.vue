<template>
  <div id="home">
    <el-image :src="background" fit="fill"></el-image>
  </div>
</template>
<style>
.el-image{
  opacity:0.5;
  height: 100%;
}
#home{
    height: 100%;
}
</style>
<script>
import bg from '../../assets/imgs/homebg.jpg';
export default {
    data() {
        return {
            background: bg
        }
      }
}
</script>
