<template>
  <div class="assignment"
    @scroll.passive="handleScroll">
    <div
      v-show="messageList.length === this.max"
      class="assignment-top">最多展示{{ this.max }}条数据</div>
    <div
      v-show="messageList.length !== this.max && loading"
      class="assignment-loading">数据加载中...</div>
    <AssignmentItem
      v-for="message in messageList"
      :key="message.id"
      :data="message"
      class="assignment-item"/>
  </div>
</template>

<script>
import AssignmentItem from './AssignmentItem'
import { throttle } from './utils'
export default {
  name: 'Assignment',
  components: {
    AssignmentItem
  },
  provide () {
    return {
      ownerId: this.ownerId
    }
  },
  props: {
    // 所属用户的id
    ownerId: {
      type: String,
      required: true
    },
    // 消息队列
    messages: {
      type: Array,
      required: true
    },
    // 展示阈值
    max: {
      type: Number,
      default: 100
    },
    // 是否展示数据加载中
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    messageList () {
      // 只展示max条记录
      return this.messages.slice(-this.max)
    }
  },
  watch: {
    messageList () {
      const scrollHeight = this.$el.scrollHeight
      const scrollTop = this.$el.scrollTop
      this.$nextTick(() => {
        // 维持滚动条与底部的距离
        this.$el.scrollTop += (this.$el.scrollHeight - scrollHeight) + (scrollTop - this.$el.scrollTop)
      })
    }
  },
  mounted () {
    // 默认滚动到底部
    this.scorllBottom()
  },
  methods: {
    // 对scroll事件做节流
    handleScroll: throttle(function () {
      const scrollTop = this.$el.scrollTop
      if (scrollTop === 0) {
        this.$emit('scroll-top')
      }
    }, 300),
    // public methods
    // 滚动到底部
    scorllBottom () {
      this.$el.scrollTop = this.$el.scrollHeight
    }
  }
}
</script>

<style lang="less" scoped>

</style>
