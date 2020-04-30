import BqCopyRight from '@/components/copy-right/index.js'

function plugin (Vue) {
  if (plugin.installed) return
  Vue.component(BqCopyRight.name, BqCopyRight)
}

export default plugin