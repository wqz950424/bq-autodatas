<template>
  <div class="bq-crumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ name: 'default-main' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>{{itemName}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BQCrumb',
  props: {
    itemName: {
      type: String,
      default: 'Teardown'
    }
  }
}
</script>