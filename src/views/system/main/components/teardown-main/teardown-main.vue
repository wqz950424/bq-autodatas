<template>
  <div class="bq-main-teardown">
    <el-container>
      <el-aside width="200px">
        <bq-modules-list high-light="teardown"></bq-modules-list>
      </el-aside>
      <el-main class="mainpage-main">
        <div class="teardown-content">
          <el-scrollbar class="teardown-content-scroll" style="height:100%">
            <video src="http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/%E5%8D%9A%E5%A5%87%E6%95%B0%E6%8D%AE%E5%AE%A3%E4%BC%A0%E7%89%87.mp4" controls="controls" autoplay controlslist="nodownload"></video>
            <img src="~@/assets/images/banner/teardown.jpg" alt="">
          </el-scrollbar>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import bqModulesList from '../modulesList'
export default {
  name: 'BQMainTeardown',
  components:{
    bqModulesList
  },
  mounted() {
    window.addEventListener('contextmenu', this.contextmenu, false)
  },
  methods: {
    contextmenu(e) {
      e.preventDefault();
      return false
    }
  },
  beforeDestroy() {
    window.removeListener('contextmenu', this.contextmenu, false)
  }
}
</script>

<style lang="scss">
  .bq-main-teardown {
    margin-top: 60px;
    height: calc(100% - 60px);
    .el-container{
      height: 100%;
      .el-aside {
        // background: linear-gradient(to bottom, #31CCB1 0%,  #364CA1 100%);
        background: linear-gradient(to bottom,   #364CA1  0%, #31CCB1 100%,);
      }
      .el-main.mainpage-main {
        margin-top: 0;
        .teardown-content {
          height: 915px;
          padding-top: 40px;
          box-sizing: border-box;
          .el-scrollbar.teardown-content-scroll {
            .el-scrollbar__bar.is-vertical>div {
              top: 0px;
            }
          }
          img {
            width: 1100px;
          }
          video {
            margin-top: 40px;
            width: 1100px;
          }
        }
      }
    }
  }
</style>