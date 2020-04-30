import Vue from 'vue'
import VueRouter from 'vue-router'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// import store from '@/store/index'

// import util from '@/libs/util'

// 路由数据
import baseRouter from './baseRouter'

Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: baseRouter
})

const router = createRouter()

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
  // 进度条
  NProgress.start()
//   const allAuthRoute = store.getters['hlzRisk/menu/allAuthRoute']
//   const token = util.cookies.get('token')
//   if (token && token !== 'undefined') {
//     // 限制进入登录页
//     if (to.path === '/login' || to.path === '/password-find') {
//       next(false)
//       NProgress.done()
//     } else if (to.path === '/') {
//       if (allAuthRoute.length) {
//         next({
//           name: allAuthRoute[0]
//         })
//       } else {
//         next()
//         NProgress.done()
//       }
//     } else {
//       next()
//     }
//   } else {
//     if (to.path !== '/login' && to.path !== '/password-find') {
//       next({
//         name: 'login'
//       })
//       NProgress.done()
//     } else {
//       next()
//     }
//   }

  setTimeout(() =>{
    next()
  },200)
})

router.afterEach(() => {
  // 进度条
  NProgress.done()
})

// router.onError((err) => {
//   // v
//   const isChunkLoadFailed = err.type === 'missing'
//   if (isChunkLoadFailed) {
//     // Vue.$hlzNotify({
//     //   message: '服务正在升级,刷新进行',
//     //   type: 'success'
//     // })
//     let chunkBool = sessionStorage.getItem('chunkError');
//     let nowTimes = Date.now();
//     if (chunkBool === null || chunkBool && nowTimes - parseInt(chunkBool) > 60000) {//路由跳转报错,href手动跳转
//       sessionStorage.setItem('chunkError', 'reload');
//       const targetPath = router.history.pending.fullPath;
//       window.location.href = window.location.origin + targetPath;
//     }else if(chunkBool === 'reload'){ //手动跳转后依然报错,强制刷新
//       sessionStorage.setItem('chunkError', Date.now());
//       window.location.reload(true);
//     }
//   }
// })

// export function resetRouter () {
//   const newRouter = createRouter()
//   router.options = newRouter.options
//   router.matcher = newRouter.matcher
// }

export default router
