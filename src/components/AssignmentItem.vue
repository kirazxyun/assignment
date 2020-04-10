<template>
  <div>
    <component
      v-if="curMessageComponent"
      :is="curMessageComponent"
      :data="data"></component>
    <MessageNotSupport :data="data" v-else/>
  </div>
</template>

<script>
// components要注册的信息展示组件
// componentsMap是信息中type字段和信息展示组件的映射，可以根据这个来判断消息类型是否被支持
import components, { componentsMap } from './messages'

export default {
  name: 'AssignmentItem',
  components,
  props: {
    // 信息内容
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    curMessageComponent () {
      const type = this.data && this.data.type
      // 没有类型或者该类型找不到对应的展示组件，则返回null
      if (!type || !componentsMap[type]) return null
      return componentsMap[type]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
