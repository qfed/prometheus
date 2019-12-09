<template>
    <span class="q-color" :style="{'background-color':color}">
    </span>
</template>

<script>
export default {
  props: {
    color: {
      default:'#CCC'
    }
  },
  data() {
    return {
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