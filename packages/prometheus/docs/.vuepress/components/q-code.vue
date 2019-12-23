<template>
  <div class="q-code">
    <div v-show="!isShow"  class="q-code__hd q-code__hd--show">
      <a @click="toggleShow">显示代码<span class="q-code__icon"></span></a>
    </div>
    <div v-show="isShow" class="q-code__hd q-code__hd--close">
      <a @click="toggleShow">收起代码<span class="q-code__icon"></span></a>
      <a v-show="!isShowAll" @click="toggleShowAll">全屏</a> 
      <a v-show="isShowAll" @click="toggleShowAll">关闭全屏</a>        
    </div>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"

      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
    >
      <div v-show="isShow" :class="isShowAll?'q-code__bd':'q-code__bd q-code__bd--scroll'">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      isShow: false,
      isShowAll: false
    }
  },
  methods: {
    toggleShow() {
      if(!this.isShow) {
        this.isShowAll = false
      }
      this.isShow = !this.isShow
    },
    toggleShowAll() {
      this.isShowAll = !this.isShowAll
    },
    beforeEnter(el) {
      // console.log('wl before-enter', el.className)
      el.className = el.className + ' my-transition'
      el.style.height = '0'
    },
    enter(el) {
      // console.log('wl enter', el.className)
      el.style.height = el.scrollHeight + 'px'
    },
    afterEnter(el) {
      // console.log('wl after-enter', el.className)
      el.className = el.className.replace(' my-transition', '')
      el.style.height = ''
    },
    beforeLeave(el) {
      // console.log('wl before-leave', el.className)
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      // console.log('wl leave', el.className)
      if (el.scrollHeight !== 0) {
        el.className = el.className + ' my-transition'
        el.style.height = 0
      }
    },
    afterLeave(el) {
      // console.log('wl after-leave', el.className)
      el.className = el.className.replace(' my-transition', '')
      el.style.height = ''
    }
  }
};
</script>
<style lang="stylus">
@require '../theme/styles/config'
.q-code {
  padding-left 20px
  &__icon:after {
    content ''
    width 0
    position relative
  }
  &__hd {
    display flex
    justify-content space-between
  
    &--show {
      .q-code__icon:after{
        border-left 5px solid transparent
        border-right 5px solid transparent
        border-top 5px solid $accentColor
        top 12px
      }
    }
    &--close {
      .q-code__icon:after{
        border-left 5px solid transparent
        border-right 5px solid transparent
        border-bottom 5px solid $accentColor
        top -12px
      }
    }  
  }
  &__bd {
    margin-top 20px
    overflow hidden
    &--scroll {
      max-height 400px
      overflow-y scroll
    }
  }
}
.my-transition {
  transition height .5s;
}
</style>