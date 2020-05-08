<template>
  <el-scrollbar style="height:100%">
    <div class="bq-about-us">
      <div class="about-us-banner banxin">
        <div class="left">
          <div class="logo-box">
            <div class="logo">
              <h1>博 奇 数 据</h1>
            </div>
            <div class="eng">
              <p><span>B</span>ENCHMARK</p>
              <p><span>I</span>NNOVATION</p>
              <p><span>G</span>LOBAL STRATEGY</p>
            </div>
          </div>
          <p>
            博奇数据是一家国际化的科技公司，主要从事汽车的智能化、新能源、模块化、成本分析等方面的对标研究，
            并通过智能的数据库系统为客户提供解决方案：从性能、成本、材料、结构、供应商体系五个维度提供产品定义、
            架构开发等解决方案。
          </p>
          <p>
            拥有国内外一流的汽车数据分析和数据开发团队，能够在全球快速的对最新上市车型进行对标分析，掌握汽车发展最新动态，拥有智能的汽车数据库系统。
          </p>
        </div>
        <div class="right"></div>
      </div>
      <el-divider content-position="center" class="banxin">AUTODATAS</el-divider>
      <div class="global banxin">
        <h1>全 球 化 视 角</h1>
        <div class="global-item">
          <div class="item">
            <div class="circle">
              <div class="subcir"></div>
            </div>
            <div class="txt">
              <h3>Shanghai China/中国上海</h3>
              <p>博奇总部，拆解，成本数据研究，数据库系统</p>
            </div>
          </div>
          <div class="item">
            <div class="circle">
              <div class="subcir"></div>
            </div>
            <div class="txt">
              <h3>California USA/美国加州</h3>
              <p>智能电子，自主驾驶，新能源技术研究， Munro成本分析战略合作</p>
            </div>
          </div>
          <div class="item">
            <div class="circle">
              <div class="subcir"></div>
            </div>
            <div class="txt">
              <h3>Munich Germany/德国慕尼黑</h3>
              <p>欧洲汽车工业，模块化平台，多层次业务合作，数据合作与支持</p>
            </div>
          </div>
          <div class="item">
            <div class="circle">
              <div class="subcir"></div>
            </div>
            <div class="txt">
              <h3>Tokyo Japan/日本东京</h3>
              <p>新能源技术研究，材料测试等技术支持</p>
            </div>
          </div>
          
        </div>
      </div>
      <div class="distribute"></div>
      <a name="distribute" id="distribute">关于我们</a>
      <bq-copy-right></bq-copy-right>
    </div>
  </el-scrollbar>
</template>

<script>

import BqCopyRight from '@/components/copy-right'
export default {
  name: 'BQAboutUs',
  components: {
    BqCopyRight
  },
}
</script>

<style lang="scss">
.bq-about-us {
  margin-top: 60px;
  height: calc(100% - 60px);
  position: relative;
  .about-us-banner {
    padding: 40px 0 10px 0;
    height: 400px;
    display: flex;
    .left {
      width: 60%;
      height: 100%;
      // background-color: red;
      .logo-box {
        display: flex;
        height: 150px;
        .logo {
          width: 50%;
          height: 100%;
          background: url('~@/assets/images/banner/logo.jpg') no-repeat;
          background-size: 100%;
          padding-top: 80px;
          font-size: 30px;
          color: #59595a;
        }
        .eng {
          padding-left: 80px;
          font-size: 20px;
          color: #59595a;
          font-weight: 700;
          span {
            color: red;
          }
        }
      }
      p {
        text-align: left;
        line-height: 45px;
        font-size: 18px;
      }
    }
    .right {
      width: 40%;
      height: 100%;
      background: url('~@/assets/images/banner/solution-banner.png') top  right no-repeat;
      background-size: contain;
    }
  }
  .global {
    margin-top: 30px;
    text-align: left;
    overflow: hidden;
    h1 {
      font-size: 30px;
      margin-bottom: 20px;
    }
    .global-item {
      overflow: hidden;
    }
    .item {
      display: flex;
      float: left;
      width: 50%;
      height: 150px;
      padding-left: 40px;
      box-sizing: border-box;
      .circle {
        width:26px;
        height: 26px;
        border-radius: 50%;
        // border: 2px solid #000;
        margin-top: 40px;
        margin-right: 40px;
        background: linear-gradient(to right, #3d3393 0%, #33da9b 100%);
        .subcir {
          width:20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          margin: 3px auto;
        }
      }
      .txt {
        font-size: 18px;
        h3 {
          font-size: 20px;
          padding: 20px 0;
        }
      }
      
    }
  }
  .distribute {
    height: 400px;
    background: url('~@/assets/images/banner/distribute.png');
    background-size: cover;
  }
  .bq-copy-right  {
    color: #59595a;
  }
  a {
    display: block;
    height: 60px;
  }
}
</style>