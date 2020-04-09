<template>
  <MessageUser :data="data">
    <img :src="image"/>
  </MessageUser>
</template>

<script>
import MessageUser from './MessageUser'
import placeholderImage from '@/assets/placeholder-image.png'
export default {
  name: 'MessageUserImage',
  components: {
    MessageUser
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    image () {
      return (this.data && this.data.content) || placeholderImage
    }
  }
}
</script>

<style lang="less" scoped>

</style>
