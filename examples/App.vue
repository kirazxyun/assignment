<template>
  <div id="app">
    <Assignment
      owner-id="laowang"
      :messages="messages"
      :max="100"
      :loading="loading"
      @scroll-top="handleScrollTop"></Assignment>
  </div>
</template>

<script>
import getMockData from './mock'
export default {
  name: 'App',
  data () {
    return {
      messages: getMockData(25),
      loading: false
    }
  },
  methods: {
    handleScrollTop () {
      this.loading = true
      setTimeout(() => {
        this.messages.unshift(...getMockData(25))
        this.loading
      }, 3000)
    }
  }
}
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
</style>
<style lang="less" scoped>
</style>
