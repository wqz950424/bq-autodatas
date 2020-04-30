<template>
  <div class="bq-main">
    <el-container style="height: 975px;">
      <!-- <el-header :style="fixedStyle"> -->
      <el-header>
        <div class="head-nav banxin">
          <div class="logo"></div>
          <div class="nav">
            <el-menu 
              :default-active="activeIndex" 
              class="el-menu-demo" 
              mode="horizontal" 
              @select="handleSelect"
              background-color="transparent"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="1">解决方案</el-menu-item>
              <el-menu-item index="2">关于我们</el-menu-item>
              <el-menu-item index="3">支持</el-menu-item>
              <el-menu-item index="4">联系我们</el-menu-item>
              <el-menu-item index="5">登陆</el-menu-item>
              <el-menu-item index="6">注册</el-menu-item>
            </el-menu>
          </div>
          <div class="lang-toggle">
            <el-dropdown trigger="click" placement="bottom"  @command="handleLangCommand">
              <span class="el-dropdown-link">
              语言（C/E）
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="zh">简体中文</el-dropdown-item>
                <el-dropdown-item divided command="en">English</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-scrollbar  style="height:100%">
        <el-main>
          <div class="banner">
            <div class="guide">
              <ul class="modules banxin">
                <li class="item">
                  <div class="iconfont icon-bq-caidan-copy"></div>
                  <div class="item-name">Vehicle</div>
                </li>
                <li class="item">
                  <div class="iconfont icon-bq-bianji"></div>
                  <div class="item-name">Vehicle</div>
                </li>
                <li class="item">
                  <div class="iconfont  icon-bq-caidan-copy"></div>
                  <div class="item-name">Vehicle</div>
                </li>
                <li class="item">
                  <div class="iconfont icon-bq-bianji"></div>
                  <div class="item-name">Vehicle</div>
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
              <li>
                <div class="iconfont icon-bq-caidan-copy"></div>
                <div class="item-name">Teardown</div>
              </li>
              <li>
                <div class="iconfont icon-bq-caidan-copy"></div>
                <div class="item-name">Teardown</div>
              </li>
              <li>
                <div class="iconfont icon-bq-caidan-copy"></div>
                <div class="item-name">Teardown</div>
              </li>
              <li>
                <div class="iconfont icon-bq-caidan-copy"></div>
                <div class="item-name">Teardown</div>
              </li>
              <li>
                <div class="iconfont icon-bq-caidan-copy"></div>
                <div class="item-name">Teardown</div>
              </li>
              <li>
                <div class="iconfont icon-bq-caidan-copy"></div>
                <div class="item-name">Teardown</div>
              </li>
              <li>
                <div class="iconfont icon-bq-caidan-copy"></div>
                <div class="item-name">Teardown</div>
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
    </el-container>
  </div>
</template>

<script>
import BqCopyRight from '@/components/copy-right'
export default {
  name: 'BQMain',
  components: {
    BqCopyRight
  },
  data() {
    return {
      activeIndex: '1',
      fixedStyle: {
        background: 'unset'
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.toggleFixedStyle, false)
  },
  methods: {
    // 顶部固定
    toggleFixedStyle () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop > 60) {
        this.fixedStyle.background = 'linear-gradient(to right, #3d58a2 0%, #33da9b 100%);'
      } else {
        this.fixedStyle.background = 'unset'
      }
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    // 切换语言
    handleLangCommand(command) {
      switch (command) {
        case "zh":
          this.$i18n.locale = 'zh'
          break;
        case "en":
          this.$i18n.locale = 'en'
          break;
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.toggleFixedStyle, false)
  }
}
</script>