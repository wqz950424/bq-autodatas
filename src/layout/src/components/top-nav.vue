<template>
  <div class="bq-top-nav">
    <div class="logo"></div>
    <!-- <div class="logo" :style="rightStyle">logo</div> -->
    <!-- <div class="toggle-nav" :style="toggleNav"> -->
    <div class="toggle-nav">
      <div class="iconfont icon-bq-caidan" @click="toggleSearch"></div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          处理中心
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            我的工作台
          </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          消息中心
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          订单管理
        </el-menu-item>
      </el-menu>
    </div>
    <div class="admin-toggle">
      <el-dropdown trigger="click" placement="bottom"  @command="handleAdminCommand" :hide-on-click="false">
        <span class="el-dropdown-link">
          <!-- 用户名 -->
          {{ $t("common.welcome") }}
          <i class="iconfont icon-bq-yonghu"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="toggleToAdm">切换到后台</el-dropdown-item>
          <el-dropdown-item divided command="changePwd">修改密码</el-dropdown-item>
          <el-popconfirm
            confirmButtonText='确认'
            cancelButtonText='取消'
            icon="el-icon-info"
            iconColor="red"
            title="确认退出吗？"
            @onConfirm="confirmLogout"
          >
            <el-dropdown-item slot="reference" divided command="logout">退出登录</el-dropdown-item>
          </el-popconfirm>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="lang-toggle">
      <el-dropdown trigger="click" placement="bottom"  @command="handleLangCommand">
        <span class="el-dropdown-link">
         {{this.$i18n.locale === 'zh' ? '简体中文' : 'English'}}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh">简体中文</el-dropdown-item>
          <el-dropdown-item divided command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import util from '@/libs/util'
export default {
  name: 'BQTopNav',
  data(){
    return {
      toggle: false,
      activeIndex: '1',
      // rightStyle: {
      //   width: '200px'
      // },
      // toggleNav: {
      //   left: '200px'
      // }
    }
  },
  methods: {
    toggleSearch() {
      this.toggle = !this.toggle
      let target = this.$parent.$parent.$parent
      if(this.toggle) {
        target.toggle = true
        target.toggleStyle.width = '80px'
        // this.rightStyle.width = '80px'
        // this.toggleNav.left = '80px'
      }else {
        target.toggle = false
        target.toggleStyle.width = '200px'
        // this.rightStyle.width = '200px'
        // this.toggleNav.left = '200px'
      }
      // console.log(target, this.toggle, target.toggle)
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    handleAdminCommand(command) {
      switch (command) {
        case "toggleToAdm":
          console.log('切换到后台')
          break;
        case "changePwd":
          console.log('修改密码')
          break;
        case "logout":
          console.log('退出登录')
          break;
      }
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

    // 确认退出登录
    confirmLogout() {
      // 清除登录信息以及token(后期添加)
      util.cookies.remove('user');
      this.$router.replace({name: 'login'})
    }
  }
}
</script>

<style lang="scss">
.bq-top-nav {
  width: 100%;
  height: 100px;
  position: relative;
  background-color: #545c64;
  .icon-bq-caidan {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    padding: 10px;
    background-color: #434a50;
    box-shadow: 2px 2px 5px #000;
    z-index: 9;
    &:hover {
      color: #409eff;
    }
  }
  .icon-bq-yonghu {
    font-size: 20px;
  }
  .el-menu--horizontal.el-menu {
    // left: 200px;
    padding-left: 100px;
    box-sizing: border-box;
  }

  .el-menu--horizontal>.el-menu-item {
    height: 100px;
    line-height: 100px;
  }
  .el-menu--horizontal>.el-submenu .el-submenu__title {
    height: 100px;
    line-height: 100px;
  }
  .admin-toggle {
    width: 100px;
    height: 100%;
    position: absolute;
    right: 120px;
    top: 50%;
    transform: translateY(-50%);
    line-height: 100px;
    &:hover {
      background-color: #434a50;
    }
    
    .el-dropdown-link {
      color: #fff;
      cursor: pointer;
      
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
  .lang-toggle {
    width: 100px;
    height: 100%;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    line-height: 100px;
    &:hover {
      background-color: #434a50;
    }
    
    .el-dropdown-link {
      color: #fff;
      cursor: pointer;
      
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }

  .toggle-nav {
    position: absolute;
    left: 200px;
    transition: left 0.3s ease-out;
  }

  .logo {
    height: 100px;
    width: 200px;
    position: absolute;
    left: 0;
    color: #fff;
    transition: width 0.3s ease-out;
    background: url('~@/assets/images/logo.png') 5px center no-repeat;
    background-size: 100%;
  }

}
</style>