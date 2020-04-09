<template>
  <div class="user-message" :class="classes">
    <div class="user-message__avatar">
      <img :src="logo"/>
    </div>
    <div class="user-message__content">
      <div class="user-message__content-inner">
        <slot/>
      </div>
    </div>
    <div class="user-message__avatar">
      <img :src="logo"/>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
  name: 'MessageUser',
  inject: ['ownerId'],
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      logo
    }
  },
  computed: {
    classes () {
      return {
        'user-message--right': this.data && this.data.userId === this.ownerId
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
