<template>
  <MessageUser :data="data">
    {{ data && data.content }}
  </MessageUser>
</template>

<script>
import MessageUser from './MessageUser'
export default {
  name: 'MessageUserText',
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

<style lang="scss" scoped>

</style>
