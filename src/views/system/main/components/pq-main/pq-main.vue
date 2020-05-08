<template>
  <div class="bq-main-pq">
    <el-container>
      <el-aside width="200px">
        <bq-modules-list high-light="pq"></bq-modules-list>
      </el-aside>
      <el-main class="mainpage-main">
        <bq-crumb item-name="PQ"></bq-crumb>
        <el-divider content-position="center">AUTODATAS</el-divider>
        <div class="pq-content">PQ内容</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import bqCrumb from '../breadCrumb'
import bqModulesList from '../modulesList'
export default {
  name: 'BQMainPQ',
  components:{
    bqCrumb,
    bqModulesList
  }
}
</script>

<style lang="scss">
  .bq-main-pq {
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