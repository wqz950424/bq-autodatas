<template>
  <el-scrollbar style="height:100%">
    <el-main>
      <!-- 焦点图 -->
      <div class="banner">
        <!-- 轮播图 -->
        <el-carousel>
          <el-carousel-item>
            <div class="carousel-item item1">
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel-item item2">
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel-item item3">
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel-item item4">
            </div>
          </el-carousel-item>
        </el-carousel>
        <div class="guide">
          <ul class="modules banxin">
            <li class="item">
              <div class="icon vehicle"></div>
              <div class="item-name">Vehicle</div>
            </li>
            <li class="item">
              <div class="icon search"></div>
              <div class="item-name">Search</div>
            </li>
            <li class="item">
              <div class="icon comparison"></div>
              <div class="item-name">Comparison</div>
            </li>
            <li class="item">
              <div class="icon report"></div>
              <div class="item-name">Report</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="content-main banxin">
        <h3 class="content-title">新鲜动态</h3>
        <ul class="fresh-dynamic">
          <li>
            <p>最新展会</p>
            <p><a href="#">了解更多</a></p>
          </li>
          <li>
            <p>最新展会</p>
            <p><a href="#">了解更多</a></p>
          </li>
          <li>
            <p>最新展会</p>
            <p><a href="#">了解更多</a></p>
          </li>
          <li>
            <p>最新展会</p>
            <p><a href="#">了解更多</a></p>
          </li>
        </ul>
        <h3 class="content-title">七大解决方案</h3>
        <ul class="solution">
          <li class="solution-item" @click="toWhichSolu('teardown')">
            <div class="iconfont teardown"></div>
            <div class="item-name">Teardown</div>
          </li>
          <li class="solution-item" @click="toWhichSolu('performance')">
            <div class="iconfont performance"></div>
            <div class="item-name">Performance</div>
          </li>
          <li class="solution-item" @click="toWhichSolu('statistics')">
            <div class="iconfont statistics"></div>
            <div class="item-name">Statistics</div>
          </li>
          <li class="solution-item" @click="toWhichSolu('section')">
            <div class="iconfont section"></div>
            <div class="item-name">Section</div>
          </li>
          <li class="solution-item" @click="toWhichSolu('costing')">
            <div class="iconfont costing"></div>
            <div class="item-name">Costing</div>
          </li>
          <li class="solution-item" @click="toWhichSolu('pq')">
            <div class="iconfont pq"></div>
            <div class="item-name">PQ</div>
          </li>
          <li class="solution-item" @click="toWhichSolu('innovation')">
            <div class="iconfont innovation"></div>
            <div class="item-name">Innovation</div>
          </li>
        </ul>
        <el-button type="primary" class="learn-more-detail">了解详细信息</el-button>
      </div>
    </el-main>
    <el-footer>
      <div class="foot-contain banxin">
        <div class="logo"></div>
        <div class="quora">
          <h4>Quora</h4>
          <ul>
            <li>行业资讯</li>
            <li>数据共享</li>
            <li>常见问题</li>
            <li>联系我们</li>
          </ul>
        </div>
        <div class="contact">
          <h4>联系我们</h4>
          <ul>
            <li>Tel : 139-1739-7985</li>
            <li>Email : service@autodatas.net</li>
            <li>Headquarter : No.33 Lushun Rd., LuYuan Industrial Park, PuDong District, Shanghai</li>
          </ul>
        </div>
        <div class="we-chat">
          <h4>WeChat</h4>
          <div class="erweima"></div>
        </div>
        <bq-copy-right></bq-copy-right>
      </div>
      <el-popover
        popper-class="tel-popover"
        placement="right"
        width="400"
        trigger="hover">
        <div>
          Tel : 139-1739-7985
        </div>
        <div slot="reference" class="tel iconfont icon-bq-dianhua"></div>
      </el-popover>
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
    </el-footer>
  </el-scrollbar>
</template>

<script>
import BqCopyRight from '@/components/copy-right'
export default {
  name: 'DefaultMain',
  components: {
    BqCopyRight
  },
  methods: {
    // 七大解决方案点击跳转
    toWhichSolu(page) {
      switch (page) {
        case "teardown":
          this.$router.push({name: 'teardown-main'})
          break;
        case "performance":
          this.$router.push({name: 'performance-main'})
          break;
        case "statistics":
          console.log('statistics')
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