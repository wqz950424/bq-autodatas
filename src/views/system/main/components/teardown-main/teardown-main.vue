<template>
  <div class="bq-main-teardown">
    <el-container>
      <el-aside width="200px">
        <bq-modules-list high-light="teardown"></bq-modules-list>
      </el-aside>
      <el-main class="mainpage-main">
        <bq-crumb item-name="Teardown"></bq-crumb>
        <el-divider content-position="center">AUTODATAS</el-divider>
        <div class="teardown-content">拆解模块内容</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import bqCrumb from '../breadCrumb'
import bqModulesList from '../modulesList'
export default {
  name: 'BQMainTeardown',
  components:{
    bqCrumb,
    bqModulesList
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
        background: linear-gradient(to bottom, #33da9b 0%,  #3d3393 100%);
      }
      .el-main.mainpage-main {
        margin-top: 0;
      }
    }
  }
</style>