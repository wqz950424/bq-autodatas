<template>
  <div class="home-layout-default">
    <el-container>
      <el-header height="100px"> 
        <top-nav></top-nav>
      </el-header>
      <el-container class="main-content">
        <el-aside width="200px" :style="toggleStyle">
          <left-search :toggle="toggle" ></left-search>
        </el-aside>
        <el-main>
          <transition name="fade-transverse">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftSearch from './components/left-search';
import topNav from './components/top-nav';

export default {
  name: 'HomeLayout',
  data () {
    return {
      // timer: null,
      toggleStyle: {
        width: '200px',
        transition: "width 0.3s ease-out"
      },
      
      toggle: false
    };
  },

  components: {
    leftSearch,
    topNav,
  },

  mounted() {
    // window.addEventListener('click', this.onClick);
  },

  methods: {
    // onMouseEnter() {
    //   clearTimeout(this.timer);
    // },

    // onClick(event) {
    //   if (event.target === this.$refs.percent || event.target === this.$refs.detailContain) {
    //     this.isOpen = true;
    //     return;
    //   }
    //   this.isOpen = false;
    // }
  }
};

</script>
<style lang='scss'>
.home-layout-default {
  width: 100%;
  min-width:1366px;
  transition: filter 0.5s;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
  display: flex;

  .el-header {
    padding: 0;
  }
  .left-search-box {
    height: 100%;
    overflow: hidden;
    transition: width .3s ease-out;
  }
  .right-contain-box {
    // background-color: #fff;
    transition: width .3s ease-out;
  }
  .view-tabs-box {
    width: 100%;
    background-color: #545c64;
  }

  .main-content {
    height: 875px;
  }
  .el-main {
    padding: 0;
    > div {
      height: 100%;
    }
  }
}
</style>
