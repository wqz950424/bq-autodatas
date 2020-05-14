<template>
  <div class="bq-main-section">
    <el-container>
      <el-aside width="200px">
        <bq-modules-list high-light="section"></bq-modules-list>
      </el-aside>
      <el-main class="mainpage-main">
        <div class="section-content">section内容</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import bqModulesList from '../modulesList'
export default {
  name: 'BQMainSection',
  components:{
    bqModulesList
  }
}
</script>

<style lang="scss">
  .bq-main-section {
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
      }
    }
  }
</style>