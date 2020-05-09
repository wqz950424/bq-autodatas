<template>
  <div class="bq-main-statistics">
    <el-container>
      <el-aside width="200px">
        <bq-modules-list high-light="statistics"></bq-modules-list>
      </el-aside>
      <el-main class="mainpage-main">
        <div class="statistics-content">Statistics</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import bqModulesList from '../modulesList'
export default {
  name: 'BQMainStatistics',
  components:{
    bqModulesList
  }
}
</script>

<style lang="scss">
  .bq-main-statistics {
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