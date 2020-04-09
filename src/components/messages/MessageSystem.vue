<template>
  <div class="system-message">
    {{ data && data.content }}
  </div>
</template>

<script>
export default {
  name: 'SystemMessage',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>

</style>
