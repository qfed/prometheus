<template>

  <div class="q-demo">
    <slot></slot>
  </div>

</template>

<script>
export default {
  props: {
    // html: [String, Number]
  },
  data() {
    return {
      msg: 'Hello this is <Foo-Bar>'
    }
  }
}
</script>
