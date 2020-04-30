const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

// 拆解模块
const teardown = _import('pages/teardown')

export default {
  path: 'teardown',
  name: 'teardown',
  meta: {
  menuOf: 'teardown'
  },
  component: teardown
}