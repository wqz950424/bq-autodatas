import { login, logout } from '@/api/auth'
// import router from '@/router';
import util from '@/libs/util'
// import { MessageBox } from 'element-ui'

export default {
  namespaced: true,
  actions: {
    /**
     * @description 登录
     * @param {Object} param context
     * @param {Object} param orgCode {String} 商户号
     * @param {Object} param username {String} 登录名
     * @param {Object} param password {String} 密码
     * @param {Object} param route {Object} 登录成功后定向的路由对象 任何 vue-router 支持的格式
     */
    login({ dispatch}, {
      username, 
      password
    }) {
      return new Promise((resolve, reject) => {
        const req = {
          username: username.trim(),
          password: password.trim(),
        }
        
        login(req).then(async response => {
          const { success, data} = response
          if (success) {
            const {
              token
            } = data;
            const user = {
              username // 登录账户
            };
            // 设置cookie
            util.cookies.set('token', token);
            util.cookies.set('user', JSON.stringify(user));

            // 用户登录后从持久化数据加载一系列的设置
            await dispatch('load')
          } else {
            this.$notify.error({
              title: '错误',
              message: '登录失败'
            });
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    /**
     * @description 注销用户并返回登录页面
     * @param {Object} param context
     * @param {Object} param confirm {Boolean} 是否需要确认
     */
    // logout ({ rootState,  dispatch}) {
    logout ({ rootState, dispatch }) {
      /**
       * @description 注销
       */

      /* eslint-disable */
      return new Promise(async resolve => {
        // 调用退出接口
        // const operatorNo = rootState.hlzRisk.user.userInfo.operatorNo
        // const { success } = await logout(operatorNo)
        // if (success) {
        //   // 清空 所有 用户信息(vuex, cookie)
        //   await dispatch('hlzRisk/user/clean', null, { root: true })
        //   router.push({
        //     name: 'login'
        //   })
        // }

        // 获取用户名,调用退出接口
        const username = rootState.bqCache.user.userInfo.username
        const { success } = await logout(username)
        if(success) {
          // 清空 所有 用户信息(vuex, cookie)
          await dispatch('bqCache/user/clean', null, { root: true })
        } else {
          this.$notify.error({
            title: '错误',
            message: '退出失败'
          });
        }
        resolve(success)
      })
    },
    /**
     * @description 用户登录后从持久化数据加载一系列的设置
     * @param {Object} state vuex state
     */
    load ({ dispatch }) {
      return new Promise( resolve => {
        const token = util.cookies.get('token')
        // 如果登陆ed
        if (token && token !== 'undefined') {
          // cookie -> store 加载用户信息
          dispatch('bqCache/user/load', null, { root: true })
          // 获取用户有权限的pageList
          // dispatch('bqCache/menu/load', null, { root: true })
          // 初始化可访问路由和路有对象
          // dispatch('bqCache/router/load', null, { root: true })
          // end 
        }
        resolve()
      })
    },

    
  }
}