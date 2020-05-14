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
      <!-- <el-divider content-position="center" class="banxin">AUTODATAS</el-divider> -->
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
      <div class="distribute banxin"></div>
      <div class="history">
        <bq-swiper
          ref="bqSwiper"
          @subClick="pClick"
        ></bq-swiper>
        <div class="list-box banxin">
          <ul class="list" :style="liStyle">
            <li @mouseenter="enterImg(0)" @mouseleave="leaveImg(0)">
              <h1>2010</h1>
            </li>
            <li @mouseenter="enterImg(1)" @mouseleave="leaveImg(1)">
              <h1>2012</h1>
            </li>
            <li @mouseenter="enterImg(2)" @mouseleave="leaveImg(2)">
              <h1>2014</h1>
            </li>
            <li @mouseenter="enterImg(3)" @mouseleave="leaveImg(3)">
              <h1>2016</h1>
            </li>
            <li @mouseenter="enterImg(4)" @mouseleave="leaveImg(4)">
              <h1>2018</h1>
            </li>
            <li @mouseenter="enterImg(5)" @mouseleave="leaveImg(5)">
              <h1>2020</h1>
            </li>
          </ul>
        </div>
      </div>
      <div class="autograph banxin">
        <div class="left">
          <h3>我们的纪念册</h3>
          <p>学习博奇文化、探讨企业管理之道、研究技术、共创商业，互相走进属于我们创业路上的苦与乐，我们在一起！</p>
        </div>
        <div class="right">
          <div class="img-box">
            <img src="~@/assets/images/aboutus/01.jpg" alt="">
            <div class="cover-box"></div>
          </div>
          <div class="img-box">
            <img src="~@/assets/images/aboutus/02.jpg" alt="">
            <div class="cover-box"></div>
          </div>
          <div class="img-box">
            <img src="~@/assets/images/aboutus/03.jpg" alt="">
            <div class="cover-box"></div>
          </div>
          <div class="img-box">
            <img src="~@/assets/images/aboutus/04.jpg" alt="">
            <div class="cover-box"></div>
          </div>
          <div class="img-box">
            <img src="~@/assets/images/aboutus/05.jpg" alt="">
            <div class="cover-box"></div>
          </div>
          <div class="img-box">
            <img src="~@/assets/images/aboutus/06.jpg" alt="">
            <div class="cover-box"></div>
          </div>
        </div>
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
import BqSwiper from './bq-swiper'
export default {
  name: 'BQAboutUs',
  components: {
    BqSwiper
  },
  data() {
    return {
      images: [
        'http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/01.jpg',
        'http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/02.jpg',
        'http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/03.jpg',
        'http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/04.jpg',
        'http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/05.jpg',
        'http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/06.jpg',
      ],
      listStyle: {
        left: 0,
      }
    }
  },
  computed: {
    liStyle() {
      return {
        left: this.listStyle.left + 'px'
      }
    }
  },
  methods: {
    pClick(direction) {
      if(direction === 'right') {
        this.listStyle.left = this.listStyle.left - 340
      }
      if(direction === 'left') {
        this.listStyle.left = this.listStyle.left + 340
      }
    },
    enterImg(index) {
      let lis = document.querySelectorAll('.swiper-slide')
      lis.forEach((item, idx) =>{
        if(index == idx) {
          let coverBox = item.querySelector('.cover-img')
          coverBox.style = "display: none"
        }
      })
    },
    leaveImg(index) {
      let lis = document.querySelectorAll('.swiper-slide')
      lis.forEach((item, idx) =>{
        if(index == idx) {
          let coverBox = item.querySelector('.cover-img')
          coverBox.style = "display: block"
        }
      })
    }
  }
}
</script>

<style lang="scss">
.bq-about-us {
  margin-top: 60px;
  height: calc(100% - 60px);
  position: relative;
  .about-us-banner {
    padding: 40px 0 50px 0;
    height: 400px;
    display: flex;
    .left {
      width: 60%;
      height: 100%;
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
          font-size: 24px;
          color: #59595a;
          font-weight: 700;
          span {
            color: red;
          }
          p {
            text-align: left;
            line-height: 35px;
            font-size: 26px;
          }
        }
      }
      p {
        text-align: left;
        line-height: 30px;
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
    // margin-top: 30px;
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
        background: linear-gradient(to right, #364CA1 0%, #31CCB1 100%);
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
  .history {
    padding-top: 50px;
    .list-box {
      margin-top: 50px;
      // width: 100%;
      overflow: hidden;
      height: 188px;
      position: relative;
    }
    .list {
      width: 2500px;
      height: 188px;
      position: absolute;
      // left: 0px;
      transition: left .3s;
      li {
        width: 340px;
        height: 188px;
        box-sizing: border-box;
        border-left: 5px solid #000;
        float: left;
        position: relative;
        &:last-child {
          border-right: 5px solid #000;
        }
        h1 {
          position: absolute;
          left: 20px;
          bottom: 10px;
          font-size: 30px;
        }
      }
    }
  }

  .autograph {
    height: 400px;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    box-sizing: border-box;
    background-color: #f4f4f4;
    .left {
      width: calc(100% - 900px);
      box-sizing: border-box;
      padding: 0 20px;
      h3 {
        font-size: 20px;
        padding: 20px;
      }
      p {
        text-align: left;
        text-indent: 30px;
        font-size: 18px;
        line-height: 35px;
      }
    }
    .right {
      width: 900px;
      height: 400px;
      .img-box {
        width: 300px;
        height: 200px;
        float: left;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .cover-box {
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: rgba(0,0,0,.4);
          top: 0;
        }
        &:hover .cover-box {
          display: none;
        }
      }
    }
  }
  a {
    display: block;
    height: 60px;
  }
}
</style>