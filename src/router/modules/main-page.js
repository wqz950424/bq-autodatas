const _import = require('@/libs/util.import.' + process.env.NODE_ENV);

export default [
    {
      path: '-',
      name: 'main',
      component: _import('system/main'),
      children:[
        {
          path: '/main/default-main',
          name: 'default-main',
          meta: {
            title: '主页-默认',
            // auth: true
          },
          component:  _import('system/main/components/default/default.vue')
        },
        // 官网拆解模块
        {
          path: '/main/teardown-main',
          name: 'teardown-main',
          meta: {
            title: '主页-拆解',
            // auth: true
          },
          component: _import('system/main/components/teardown-main/teardown-main.vue')
        },
        // 官网performance
        {
          path: '/main/performance-main',
          name: 'performance-main',
          meta: {
            title: '主页-performance',
            // auth: true
          },
          component: _import('system/main/components/performance-main/performance-main.vue')
        },
        // 官网section
        {
          path: '/main/section-main',
          name: 'section-main',
          meta: {
            title: '主页-section',
            // auth: true
          },
          component: _import('system/main/components/section-main/section-main.vue')
        },
        // 官网cost
        {
          path: '/main/cost-main',
          name: 'cost-main',
          meta: {
            title: '主页-cost',
            // auth: true
          },
          component: _import('system/main/components/cost-main/cost-main.vue')
        },
        // 官网pq
        {
          path: '/main/pq-main',
          name: 'pq-main',
          meta: {
            title: '主页-pq',
            // auth: true
          },
          component: _import('system/main/components/pq-main/pq-main.vue')
        },
        // 官网Innovation
        {
          path: '/main/innovation-main',
          name: 'innovation-main',
          meta: {
            title: '主页-innovation',
            // auth: true
          },
          component: _import('system/main/components/innovation-main/innovation-main.vue')
        },
        // 官网Statistics
        {
          path: '/main/statistics-main',
          name: 'statistics-main',
          meta: {
            title: '主页-statistics',
            // auth: true
          },
          component: _import('system/main/components/statistics-main/statistics-main.vue')
        },
        
        // 解决方案
        {
          path: '/main/solution',
          name: 'solution',
          meta: {
            title: '解决方案',
            // auth: true
          },
          component: _import('system/main/components/solution/solution.vue')
        },
        // 关于我们
        {
          path: '/main/about-us',
          name: 'about-us',
          meta: {
            title: '解决方案',
            // auth: true
          },
          component: _import('system/main/components/about-us/about-us.vue')
        },

      ]
    }
  ]