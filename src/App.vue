<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import util from '@/libs/util'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {}
  },
  watch: {
    '$i18n.locale': 'i18nHandle'
  },
  created () {
    this.i18nHandle(this.$i18n.locale)
  },
  methods: {
    i18nHandle (val, oldVal) {
      this.loading = true
      util.cookies.set('lang', val)
      document.querySelector('html').setAttribute('lang', val)
      console.log(oldVal)
    }
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  background-color: #fff;
}
</style>
