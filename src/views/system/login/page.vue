<template>
  <div class="bq-login">
    <div class="login-form">
      <div class="login-left">
        <div class="login-logo" title="点击跳转到主页"></div>
        <div class="form-box">
          <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="80px">
            <el-form-item prop="username">
              <el-input prefix-icon="el-icon-search" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input prefix-icon="el-icon-search" type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="login-btn" type="primary" @click="submit" :loading="btnLoading">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="links">
          <span><a href="javascript:;" @click="$router.push({name: 'default-main'})">返回主页</a></span>
          <span><a href="javascript:;">新用户注册</a></span>
          <span><a href="javascript:;">忘记密码</a></span>
        </div>
        <div class="links">建议使用Chrome浏览器以获得最佳体验</div>
      </div>
      <div class="login-right">
        <div class="ewm-title">微信登录</div>
        <div class="erweima"></div>
        <div class="tip">
          <p>请使用微信扫描二维码登录</p>
          <p>“博奇数据”</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import util from '@/libs/util'

export default {
    name: 'BQLogin',
    data() {
      return {
        btnLoading: false,
        loginForm: {
          username: '',
          password: ''
        },
        loginRules:{
          username: [
            { required: true, message: '请输入用户名', trigger: "change" },
            { type: "email", message: "请输入正确的用户名", trigger: "change" }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      ...mapActions("bqCache/account", ["login"]),
      submit() {
        this.$refs.loginForm.validate(valid => {
          if(valid) {
            // 模拟登录
            this.btnLoading = true
            let { username, password} = this.loginForm;
            if(username&&password) {
              const user = {
                username
              }
              // 先这么设置,后面要调用后台的方法
              util.cookies.set('user', JSON.stringify(user));
              this.$notify.success({
                title: '提示',
                message: '登录成功 !',
                duration: 2000
              });
              this.$router.replace({name: 'index'})

            // this.login({ username, password})
              //   .then(res => {
              //     if (res.success) {
              //       const redirect = this.$route.query.redirect;
              //       // 重定向对象不存在则返回顶层路径
              //       if (redirect) {
              //         this.$router.replace(redirect);
              //       } else {
              //         this.$router.push("/");
              //       }
              //       setTimeout(() => {
              //         this.subLoading = false;
              //       }, 10000);
              //     } else {
              //       this.subLoading = false;
              //     }
              //   })
              //   .catch(error => error);

            } else {
              this.$notify.error({
                title: '提示',
                message: '登录失败 , 请重新登录 !'
              });
            }

            setTimeout(() => {
              this.btnLoading = false
            }, 1000)
          }
          
        })
      }
    }
}
</script>

<style lang='scss'>
  .bq-login {
    min-height: 975px;
    background: url('~@/assets/images/login/login-bg.jpg') no-repeat top center #334266;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-form {
      width: 660px;
      height: 400px;
      padding: 10px 10px 10px 0;
      display: flex;
      box-sizing: border-box;
      .el-form-item__label {
        color: #fff;
      }
      .el-form-item__content {
        margin-left: 20px !important;
        margin-right: 20px;
      }
    }
    .login-left {
      width: 360px;
      height: 100%;

      .login-logo {
        width: 100%;
        height: 70px;
        background: url('~@/assets/images/logo.png') center center no-repeat;
        background-size: auto 60px;
        cursor: pointer;
      }

      .form-box {
        margin-top: 28px;
        .login-btn {
          width: 100%;
        }
      }
      .links {
        margin-top: 36px;
        text-align: center;
        // padding-left: 66px;
        color: #7395e5;
        span {
          margin: 0 10px;
          // 链接字体颜色
          a {
            color: #7395e5;
          }
        }
      }
    }

    // 二维码
    .login-right {
      width: 280px;
      height: 100%;
      color: #fff;
      .ewm-title {
        font-size: 20px;
      }
      .erweima {
        width: 282px;
        height: 282px;
        background: url('~@/assets/images/code.jpg') no-repeat;
        background-size: 100%;
        margin: 15px 0 10px 0; 
        box-sizing: border-box;
      }
      .tip {
        p {
          line-height: 24px;
        }
      }
    }
  }
</style>