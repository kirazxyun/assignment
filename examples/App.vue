<template>
  <div id="app" class="app">
    <Assignment
      owner-id="laowang"
      :messages="messages"
      :max="2"></Assignment>
  </div>
</template>

<script>
import logo from './logo.png'
export default {
  name: 'App',
  data () {
    return {
      messages: [
        {
          id: '1xx',
          type: 'userText',
          content: '你好',
          userId: 'laowang',
          userName: '老王'
        },
        {
          id: '2xx',
          type: 'userImage',
          content: logo,
          userId: 'xiaoming',
          userName: '小明'
        },
        {
          id: '3xx',
          type: 'system',
          content: 'laowang撤回了一条消息'
        },
        {
          id: '4xx',
          type: 'system',
          content: 'laowang 邀请 xiaoming 进入讨论组'
        }
      ]
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
.app {
  height: 100vh;
}
</style>
