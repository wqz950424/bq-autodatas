<template>
  <div class="bq-main">
    <el-container style="height: 975px;">
      <!-- <el-header :style="fixedStyle"> -->
      <el-header>
        <div class="head-nav banxin">
          <div class="logo" @click="toMain" title="回到主页"></div>
          <div class="nav">
            <el-menu 
              :default-active="activeIndex" 
              class="el-menu-demo" 
              mode="horizontal" 
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              unique-opened
            >
              <!-- 根据自定的id进行当前页面锚点跳转 -->
              <el-submenu index="solution">
                <template slot="title">解决方案</template>
                <el-menu-item index="#platform">对标平台</el-menu-item>
                <el-menu-item index="#service">对标服务</el-menu-item>
                <el-submenu index="content">
                  <template slot="title">对标内容</template>
                  <el-menu-item index="#content-1">选项1</el-menu-item>
                  <el-menu-item index="#content-2">选项2</el-menu-item>
                  <el-menu-item index="#content-3">选项3</el-menu-item>
                  <el-menu-item index="#content-4">选项4</el-menu-item>
                  <el-menu-item index="#content-5">选项5</el-menu-item>
                </el-submenu>
              </el-submenu>
              <!-- <el-submenu index="about-us">
                <template slot="title">关于我们</template>
                <el-menu-item index="#distribute">全球分布</el-menu-item>
                <el-menu-item index="2-2">CEO介绍</el-menu-item>
                <el-menu-item index="2-3">团队介绍(中外合作)</el-menu-item>
                <el-menu-item index="2-4">资质证书</el-menu-item>
              </el-submenu> -->
              <el-menu-item index="about-us">关于我们</el-menu-item>
              <el-submenu index="3">
                <template slot="title">支持</template>
                <el-menu-item index="3-1">解决方案搜索</el-menu-item>
                <el-menu-item index="3-2">下载</el-menu-item>
                <el-menu-item index="3-3">支持案例</el-menu-item>
                <el-menu-item index="3-4">通知</el-menu-item>
                <el-menu-item index="3-5">AUTODATAS支持指南</el-menu-item>
              </el-submenu>
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
      <keep-alive>
        <router-view />
      </keep-alive>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'BQMain',
  data() {
    return {
      activeIndex: '',
      fixedStyle: {
        background: 'unset'
      },
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
      this.activeIndex = key
      // 先判断在不在当前页面
      if(! this.$route.path.includes(keyPath[0])) { // 不在当前页面
        this.$router.push({name: keyPath[0]})
      } 
      this.$nextTick(() => {
        if(document.querySelector(key)) {
          document.querySelector(key).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
          })
        }
      })
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

    toMain() {
      this.$router.push({name: 'default-main'})
      this.activeIndex = ''
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.toggleFixedStyle, false)
  }
}
</script>