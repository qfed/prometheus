<template>

  <div
    class="dragable-mobile"
    draggable="true"
    v-on:dragend="dragend"
  >
    <div
      class="dragable-mobile__header"
      v-on:click="toggle"
    >
      拖拽移动|点击折叠
    </div>
    <iframe
      :src="url"
      v-bind:class="{ 'dragable-mobile__body': true, 'dragable-mobile__body--active': isShow }"
    ></iframe>
  </div>
  </div>

</template>

<script>
export default {
  props: {
    name: String
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    dragend(ev) {
      var x = ev.clientX;
      var y = ev.clientY;
      var content = document.getElementsByClassName("dragable-mobile")[0];
      //   content.style.position = 'fixed'
      content.style.left = x + "px";
      content.style.top = y + "px";
      ev.stopPropagation();
    }
  },
  data() {
    return {
      isShow: true
    };
  },
  computed: {
    url: function() {
      return this.name
        ? ` https://qfed.github.io/prometheus/react-demo/${this.name}/${this.name}.html`
        : ` https://qfed.github.io/prometheus/react-demo/`;
    }
  }
};
</script>

 
<style lang="stylus">

.dragable-mobile {
  position: fixed;
  z-index: 1000;
  right: 50px;
  top: 50px;
  width: 375px;

  &__header {
    text-align: center;
    line-height: 2;
    color: #fff;
    background: #333;
  }

  &__body {
    width: 100%;
    height: 50px;

    &--active {
      height: 550px;
      transition: 1s;
    }

    transition: 1s;
  }
}
</style>