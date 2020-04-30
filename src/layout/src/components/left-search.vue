<template>
  <div class='left-search'>
    <!-- <el-scrollbar style="height:calc(100% - 80px)"> -->
    <el-scrollbar style="height: 100%;">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location" :class="{'is-toggle': toggle}"></i>
            <span v-show="! toggle">导航一</span>
          </template>
          <el-menu-item-group v-if="! toggle">
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2" v-if="! toggle">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4" v-if="! toggle">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航四</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航四</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航四</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航四</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航3</span>
        </el-menu-item>
        <el-menu-item index="9">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航9</span>
        </el-menu-item>
        <el-menu-item index="10">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航10</span>
        </el-menu-item>
        <el-menu-item index="11">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航11</span>
        </el-menu-item>
        <el-menu-item index="12">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航12</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location" :class="{'is-toggle': toggle}"></i>
            <span v-show="! toggle">导航一</span>
          </template>
          <el-menu-item-group v-if="! toggle">
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2" v-if="! toggle">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4" v-if="! toggle">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航四</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航四</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航四</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航四</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航3</span>
        </el-menu-item>
        <el-menu-item index="9">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航9</span>
        </el-menu-item>
        <el-menu-item index="10">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航10</span>
        </el-menu-item>
        <el-menu-item index="11">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航11</span>
        </el-menu-item>
        <el-menu-item index="12">
          <i class="el-icon-setting" :class="{'is-toggle': toggle}"></i>
          <span slot="title" v-show="! toggle">导航12</span>
        </el-menu-item>
        
      </el-menu>
    </el-scrollbar>

  </div>
</template>

<script>
// import { HappyScroll } from 'vue-happy-scroll'
export default {
  name: 'BQLeftSearch',
  props: {
    toggle: {
      type: Boolean,
      default: false
    }
  },
  components: {
    // HappyScroll
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss">
.left-search {
  // width: 200px;
  height: 100%;
  overflow: hidden;
  .el-menu{
    border-right: none;
    width: 200px;
  }
  .el-menu-item, .el-submenu__title {
    padding: 0 0 0 25px !important;
    text-align: left;
  }
  
  .is-toggle {
    font-size: 24px;
  }

  // .el-scrollbar__thumb {
  //   background-color: rgba(144,147,153,.8);
  // }
  // .el-scrollbar__bar.is-vertical {
  //   width: 8px;
  //   min-height: 20px;
  // }
}

</style>