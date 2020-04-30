<template>
  <div 
    class="index-page" 
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
  >
    这是默认首页
  </div>
</template>

<script>
export default {
  name: 'BQIndexPage',
  data () {
    return {
      loading: false
    };
  },

  created() {
    this.loading = true
  },

  mounted() {
    setTimeout(() => {
      this.loading= false
    }, 1000)
  },

  // computed: {
  //   router () {
  //     return this.$router
  //   }
  // },

  components: {},

  methods: {}
};

</script>
<style lang='scss'>
</style>