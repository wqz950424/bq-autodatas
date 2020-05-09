<template>
  <div class="bq-main-cost">
    <el-container>
      <el-aside width="200px">
       <bq-modules-list high-light="costing"></bq-modules-list>
      </el-aside>
      <el-main class="mainpage-main">
        <div class="cost-content">Costing内容</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import bqModulesList from '../modulesList'
export default {
  name: 'BQMainCost',
  components:{
    bqModulesList
  }
}
</script>

<style lang="scss">
  .bq-main-cost {
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