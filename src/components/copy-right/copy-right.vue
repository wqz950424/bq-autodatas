<template>
  <div class="bq-copy-right">
    <div class="police"></div>
    <span>Copyright © 2016-2020 AUTODATAS</span>
    <span class="notice"> All rights reserved. </span>
    <div class="little-logo"></div>
  </div>
</template>

<script>
export default {
  name: 'BQCopyRight'
}
</script>

<style lang="scss">
.bq-copy-right {
  position: absolute;
  width: 100%;
  height: 40px;
  vertical-align: middle;
  bottom: 0px;
  color: #59595a;
  font-size: 12px;
  display: flex;
  justify-content: center;
  span {
    display: block;
    height: 30px;
    line-height: 30px;
  }
  .notice {
    margin-left: 25px;
  }
  .little-logo, .police {
    display: block;
    width: 20px;
    height: 20px;
  }
  .police {
    background: url('~@/assets/images/icon/police.png') no-repeat;
    margin-right: 10px;
    background-size: contain;
    margin-top: 5px;
  }
  .little-logo {
    background: url('~@/assets/images/icon/little-logo.png') no-repeat;
    background-size: 100%;
    margin-top: 10px;
    margin-left: 15px;
  }
}
</style>