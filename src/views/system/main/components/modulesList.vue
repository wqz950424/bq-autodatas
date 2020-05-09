<template>
  <ul class="bq-modules-list">
    <li>
      <div ref="teardown" class="iconfont teardown" @click="toWhichSolu('teardown')"></div>
      <div>Teardown</div>  
    </li>
    <li>
      <div ref="performance" class="iconfont performance" @click="toWhichSolu('performance')"></div>
      <div>Performance</div>  
    </li>
    <li>
      <div ref="section" class="iconfont statistics" @click="toWhichSolu('section')"></div>
      <div>Section</div>  
    </li>
    <li>
      <div ref="pq" class="iconfont section" @click="toWhichSolu('pq')"></div>
      <div>PQ</div>  
    </li>
    <li>
      <div ref="costing" class="iconfont costing" @click="toWhichSolu('costing')"></div>
      <div>Costing</div>  
    </li>
    <li>
      <div ref="innovation" class="iconfont pq" @click="toWhichSolu('innovation')"></div>
      <div>Innovation</div>  
    </li>
    <li>
      <div ref="statistics" class="iconfont innovation" @click="toWhichSolu('statistics')"></div>
      <div>Statistics</div>  
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
        case "statistics":
          this.$router.push({name: 'statistics-main'})
          break;
      } 
    }
  }
}
</script>

<style lang="scss">
.bq-modules-list {
  li{
    padding: 25px 0;
    cursor: pointer;
    .iconfont {
      width: 60px;
      height: 60px;
      margin: 0 auto;
    }
    .teardown {
      background: url('~@/assets/images/main-seven-icon/teardown-02.png') center center no-repeat;
      background-size: contain;
    }
    .performance {
      background: url('~@/assets/images/main-seven-icon/performance-02.png') center center no-repeat;
      background-size: contain;
    }
    .statistics {
      background: url('~@/assets/images/main-seven-icon/statistics-02.png') center center no-repeat;
      background-size: contain;
    }
    .section {
      background: url('~@/assets/images/main-seven-icon/section-02.png') center center no-repeat;
      background-size: contain;
    }
    .costing {
      background: url('~@/assets/images/main-seven-icon/costing-02.png') center center no-repeat;
      background-size: contain;
    }
    .pq {
      background: url('~@/assets/images/main-seven-icon/PQ-02.png') center center no-repeat;
      background-size: contain;
    }
    .innovation {
      background: url('~@/assets/images/main-seven-icon/innovation-02.png') center center no-repeat;
      background-size: contain;
    }
    &:hover {
      color: #fff;
      .teardown {
        background: url('~@/assets/images/main-seven-icon/teardown-01.png') center center no-repeat;
        background-size: contain;
      }
      .performance {
        background: url('~@/assets/images/main-seven-icon/performance-01.png') center center no-repeat;
        background-size: contain;
      }
      .statistics {
        background: url('~@/assets/images/main-seven-icon/statistics-01.png') center center no-repeat;
        background-size: contain;
      }
      .section {
        background: url('~@/assets/images/main-seven-icon/section-01.png') center center no-repeat;
        background-size: contain;
      }
      .costing {
        background: url('~@/assets/images/main-seven-icon/costing-01.png') center center no-repeat;
        background-size: contain;
      }
      .pq {
        background: url('~@/assets/images/main-seven-icon/PQ-01.png') center center no-repeat;
        background-size: contain;
      }
      .innovation {
        background: url('~@/assets/images/main-seven-icon/innovation-01.png') center center no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>