<template>
  <ul class="bq-modules-list">
    <li>
      <i ref="teardown" class="iconfont icon-bq-caidan-copy" @click="toWhichSolu('teardown')"></i>
      <div>Teardown</div>  
    </li>
    <li>
      <i ref="performance" class="iconfont icon-bq-caidan-copy" @click="toWhichSolu('performance')"></i>
      <div>Performance</div>  
    </li>
    <li>
      <i ref="2d/3d" class="iconfont icon-bq-caidan-copy" @click="toWhichSolu('2d/3d')"></i>
      <div>2D/3D</div>  
    </li>
    <li>
      <i ref="section" class="iconfont icon-bq-caidan-copy" @click="toWhichSolu('section')"></i>
      <div>Section</div>  
    </li>
    <li>
      <i ref="costing" class="iconfont icon-bq-caidan-copy" @click="toWhichSolu('costing')"></i>
      <div>Costing</div>  
    </li>
    <li>
      <i ref="pq" class="iconfont icon-bq-caidan-copy" @click="toWhichSolu('pq')"></i>
      <div>PQ</div>  
    </li>
    <li>
      <i ref="innovation" class="iconfont icon-bq-caidan-copy" @click="toWhichSolu('innovation')"></i>
      <div>Innovation</div>  
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BQModulesList',
  props: {
    highLight: {
      type: String,
      default: 'teardown'
    }
  },
  data() {
    return {
      iconStyle: {
        // color: '#ffd04b',
        color: '#000',
      }
    }
  },
  mounted() {
    this.$refs[this.highLight].style = "color: #ffd04b"
  },
  methods: {
    // 七大解决方案点击跳转
    toWhichSolu(page) {
      if(page === this.highLight) return;
      // this.$refs[page].style = "color: #ffd04b"
      switch (page) {
        case "teardown":
          this.$router.push({name: 'teardown-main'})
          break;
        case "performance":
          this.$router.push({name: 'performance-main'})
          break;
        case "2d/3d":
          console.log('2d/3d')
          break;
        case "section":
          this.$router.push({name: 'section-main'})
          break;
        case "costing":
          this.$router.push({name: 'cost-main'})
          break;
        case "pq":
          this.$router.push({name: 'pq-main'})
          break;
        case "innovation":
          this.$router.push({name: 'innovation-main'})
          break;
      } 
    }
  }
}
</script>

<style lang="scss">
.bq-modules-list {
  li{
    .iconfont {
      font-size: 40px;
      cursor: pointer;
    }
    padding: 33px 0;
  }
}
</style>