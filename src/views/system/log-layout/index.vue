<template>
  <div class="log-layout-page">
    <div class="logo-box">
      <!-- <img class="logo" src="~@/assets/image/once-logo.gif" alt /> -->
    </div>
    <div class="login-box">
      <div class="back-white-box" :style="backStyle">
        <transition :name="fadeName">
          <router-view></router-view>
        </transition>
      </div>
      <p class="hlz-record-box">Copyright © 2019 行列秩 All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogLayout",
  data() {
    return {
      backStyle: null
    };
  },

  watch: {
    $route: {
      handler(val) {
        if (val.name === "login") {
          this.fadeName = "fade-login";
        } else {
          this.fadeName = "fade-forget";
        }
      },
      immediate: true
    }
  },

  components: {},

  methods: {
    setActive(style) {
      this.backStyle = {
        width: style.width + "px",
        height: style.height + "px"
      };
    },
  }
};
</script>
<style lang='scss'>
.log-layout-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  position: relative;
  .logo-box {
    width: 106px;
    height: 38px;
    position: absolute;
    top: 50px;
    left: 220px;
    img {
      width: 100%;
    }
  }
  .login-box {
    .back-white-box {
      width: 450px;
      min-height: 400px;
      border-radius: 8px;
      box-sizing: border-box;
      background-color: #fff;
      // box-shadow: $shadow;
      position: relative;
      overflow: hidden;
    }
    .hlz-record-box {
      font-size: 12px;
      color: #a8acb9;
      text-align: center;
      margin-top: 38px;
    }
  }
}
</style>
