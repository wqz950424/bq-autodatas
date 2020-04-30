const _import = require('@/libs/util.import.' + process.env.NODE_ENV);

const teardown = _import('pages/teardown/index.vue')

export default [
  {
    path: 'teardown',
    name: 'teardown',
    meta: {
      menuOf: 'teardown'
    },
    component: teardown
  },
]