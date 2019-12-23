<template>
    <iframe :src="url" width="375" height="500"></iframe>
</template>

<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
    }
  },
  computed: {
  url: function () {
    return `http://qui.qufenqi.com/components/${this.name}.html`
  }
}
}
</script>
<style>
.q-color {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0px 5px;
}
</style>