import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueI18n from 'vue-i18n'
// 路由挂载
import router from './router'
import globalComponents from '@/plugins/globalComponents'
import '@/assets/style/public_class.scss';
import 'vue-happy-scroll/docs/happy-scroll.css';

Vue.use(ElementUI);
Vue.use(VueI18n)
Vue.use(globalComponents)

Vue.config.productionTip = false



const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('@/assets/languages/zh.json'),
    'en': require('@/assets/languages/en.json')
  },
  // silentTranslationWarn: process.env.NODE_ENV === 'development'
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
