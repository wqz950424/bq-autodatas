// import router, { resetRouter } from '@/router';
import router from '@/router';
import util from '@/libs/util'
export default {
  namespaced: true,
  state: {
    // 用户信息
    userInfo: {}
  },
  getters:  {
    userInfo(state) {
      return state.userInfo
    },
  },
  mutations: {
    setUser(state, info) {
      state.userInfo = info
    },
  },
  actions: {
    /**
     * @description 设置用户数据
     * @param {Object} context
     * @param {*} info info
     */
    set ({ commit }, info) {
      return new Promise(resolve => {
        // store 赋值
        commit('setUser', info)
        // 持久化
        // end
        resolve()
      })
    },
    /**
     * @description 从数据库取用户数据
     * @param {Object} context
     */
    async load ({ commit }) {
      return new Promise( resolve => {
        // store 赋值 user
        // username, // 登录账户
        const user = util.cookies.get('user');
        const token = util.cookies.get('token');
        if (user && token) {
          const userObj = JSON.parse(user);
          const assignObj = { token };
          // store 赋值
          commit('setUser', Object.assign(userObj, assignObj))
          // end
          resolve()
        } else {
          router.push({path: '/login'})
        }
      })
    },

    /**
     * @description 清除 用户数据
     * @param {Object} state vuex state
     */
    clean () {
      return new Promise(resolve => {
        // 删除cookie // 这里后面需要传参数
        util.cookies.removeAll();
        resolve();
      })
    },
  }
}
