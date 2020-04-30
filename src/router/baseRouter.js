import layout from '@/layout'
import teardown from "./modules/teardown"

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)


/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    component: layout,
    redirect: {name: 'index'},
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          title: '首页',
          // auth: true
        },
        component: _import('system/index')
      },
      // 其他的页面都在这里展示
      teardown
    ]
  },
  // project
];

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录(根路径)
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  },
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]
/**
 * 官网
 */
const mainPage = [
  {
    path: '/main',
    name: 'main',
    component: _import('system/main')
  }
]

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage,
  ...mainPage
]