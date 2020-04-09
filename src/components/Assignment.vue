<template>
  <div class="assignment">
    <div v-if="messageList.length === this.max">最多展示{{ this.max }}条数据</div>
    <AssignmentItem
      v-for="message in messageList"
      :key="message.id"
      :data="message"
      class="assignment-item"/>
  </div>
</template>

<script>
import AssignmentItem from './AssignmentItem'
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
    ownerId: {
      type: String,
      required: true
    },
    messages: {
      type: Array,
      required: true
    },
    max: {
      type: Number,
      default: 100
    }
  },
  computed: {
    messageList () {
      // 只展示100条记录
      return this.messages.slice(-this.max)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
