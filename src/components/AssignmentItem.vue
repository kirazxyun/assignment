<template>
  <div>
    <component
      v-if="curMessageComponent"
      :is="curMessageComponent"
      :data="data"></component>
    <MessageNotSupport v-else/>
  </div>
</template>

<script>

import components, { componentsMap } from './messages'

export default {
  name: 'AssignmentItem',
  components,
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    curMessageComponent () {
      const type = this.data && this.data.type
      if (!type || !componentsMap[type]) return null
      return componentsMap[type]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
