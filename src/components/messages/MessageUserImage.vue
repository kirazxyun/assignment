<template>
  <MessageUser :data="data">
    <!-- 小图 -->
    <img
      v-show="!fullScreen"
      :src="image"
      class="placeholder-image"
      @click="handleImageClick"/>
    <!-- 大图：在click后加载 -->
    <div
      v-show="fullScreen"
      class="full-screen"
      @click="handleFullScreenClick">
      <img
        ref="fullImage"
        :src="fullImage"
        :style="fullImageStyles"
        @load="handleFullImageLoad"/>
    </div>
  </MessageUser>
</template>

<script>
import MessageUser from './MessageUser'
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
  data () {
    return {
      loaded: false,
      fullScreen: false,
      fullImage: null,
      width: 0,
      height: 0
    }
  },
  computed: {
    image () {
      return this.data && this.data.imgPlaceholder
    },
    fullImageStyles () { // 将大边设置为100%
      return this.width > this.height
        ? { width: '100% '}
        : { height: '100% '}
    }
  },
  methods: {
    handleImageClick () {
      this.fullScreen = true
      if (!this.loaded) {
        this.fullImage = this.data && this.data.content
        this.loaded = true
      }
    },
    handleFullScreenClick () {
      this.fullScreen = false
    },
    handleFullImageLoad () {
      this.width = this.$refs.fullImage.clientWidth
      this.height = this.$refs.fullImage.clientHeight
    }
  }
}
</script>

<style lang="less" scoped>
.placeholder-image {
  max-width: 200px;
}
.full-screen {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ccc;
  z-index: 999;

  img {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }
}
</style>
