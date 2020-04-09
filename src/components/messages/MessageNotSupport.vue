<template>
  <MessageUser :data="data">
    消息暂不支持
  </MessageUser>
</template>

<script>
import MessageUser from './MessageUser'
export default {
  name: 'MessageNotSupport',
  components: {
    MessageUser
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="less" scoped>

</style>
