<template>
  <div class="error-page">
    <p class="page_title">404 page not found</p>
    <el-button class="d2-mt" @click="$router.replace({ path: '/' })">
      返回主页
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  min-height: 975px;
  background: #303133;
  background-blend-mode: multiply,multiply;
  // height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .page_title {
    font-size: 20px;
    color: #FFF;
  }
}
</style>
