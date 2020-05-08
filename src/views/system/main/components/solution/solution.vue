<template>
  <el-scrollbar style="height:100%">
    <div class="bq-solution">
      <div class="solution-banner">
        <div class="search-box banxin">
          <div class="title">AUTODATAS 不但有着全球性公司的格局，极具创新与挑战一身。</div>
          <el-input
            placeholder="请输入搜索内容"
            prefix-icon="el-icon-search"
            v-model="searchVal">
          </el-input>
          <el-button type="primary" :loading="searchLoading" @click="toSearch">点击搜索</el-button>
        </div>
      </div>
      <div class="solution-content banxin">
        <h1>竞品对标业务架构</h1>
        <h3>博奇数据搭建了AUTODATAS智能数据系统，从性能、成本、材料、结构、供应商体系五个维度提供产品定义、架构开发等解决方案。</h3>
        <div class="details">
          <div class="one">
            <h2>技术服务</h2>
            <p>PQ 研究、材料测试、静态测量、性能测试扫描、拆解、总布置、3D数据、CAE、人员派遣、技术整包。</p>
          </div>
          <div class="two">
            <h2>数据研究</h2>
            <p>智能化、平台架构、新能源研究、三电系统分析、成本分析等主营业务。</p>
          </div>
          <div class="three">
            <h2>智能数据系统</h2>
            <p>数据库系统更加直观地向用户展示各类车辆对标信息和数据，避免重复拆解和行业资源浪费。可根据客户新增不同功能，适用于各种使用场景。</p>
          </div>
          <div class="four">
            <h2>车辆平台</h2>
            <p>车辆租赁、采购、销售、试驾、测试、零部件采购。</p>
          </div>
        </div>
      </div>
      <a name="platform" id="platform">对标平台</a>
      <a name="service" id="service">对标服务</a>
      <div>
        <a href=""></a>
        <a name="content-1" id="content-1">对标内容1</a>
        <a name="content-2" id="content-2">对标内容2</a>
        <a name="content-3" id="content-3">对标内容3</a>
        <a name="content-4" id="content-4">对标内容4</a>
        <a name="content-5" id="content-5">对标内容5</a>
      </div>
      <el-backtop target=".bq-main .el-scrollbar__wrap" :bottom="100">
        <div
          style="{
            height: 100%;
            width: 100%;
            background: #545c64;
            box-shadow: 3px 3px 5px 2px rgba(255,255,255, 1);
            text-align: center;
            line-height: 40px;
            color: #fff;
            border-radius: 20px;
          }"
        >
          UP
        </div>
      </el-backtop>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'BQSolution',
  data() {
    return {
      searchVal: '',
      searchLoading: false
    }
  },
  methods: {
    toSearch() {
      this.searchLoading = true
      if(! this.searchVal.trim()) {
        this.searchLoading = false
        this.$message({
          type: 'error',
          message: '请先输入您想要搜索的内容 !',
          duration: 2500
        })
        return
      }
      setTimeout(() => {
        this.searchLoading = false
      },1000)
    }
  }
}
</script>

<style lang="scss">
.bq-solution {
  margin-top: 60px;
  height: calc(100% - 60px);
  .solution-banner {
    width: 100%;
    height: 460px;
    background: url('~@/assets/images/banner/section.jpg') no-repeat;
    background-size: 100%;
    .title {
      font-size: 24px;
      color: #fff;
      font-weight: 400px;
      padding: 70px;
    }
    .el-input {
      margin-top: 20px;
      width: 50%;
      margin-right: 20px;
    }
  }
  .solution-content {
    text-align: left;
    h1 {
      font-size: 24px;
      padding: 20px 0;
    }
    h3 {
      font-size: 16px;
      padding: 20px 0;
    }
    .details {
      height: 540px;
      padding-left: 600px;
      background: url('~@/assets/images/banner/content-bg.png');
      background-size: 100% 100%;
      .one, .two, .three, .four {
        height: 130px;
        h2 {
          font-size: 20px;
          padding-top: 30px;
          margin-bottom: 15px;
        }
        p {
          font-size: 16px;
          line-height: 25px;
        }
      }
      .two,.four {
        color: #fff;
      }
    }
  }
  a {
    display: block;
    height: 100px;
    // background-color: red;
  }
}
</style>