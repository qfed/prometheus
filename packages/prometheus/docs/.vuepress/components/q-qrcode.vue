<template>

  <div class="q-qrcode">
    <img class="q-qrcode__img" :src="imageUrl" />
  </div>

</template>

<script>
import { qrMapList } from '../public/qrcode-map'
export default {
  props: {
    name: String
  },
  // data() {
  //   return {
  //     imageUrl: qrMapList[this.name]
  //   }
  // },
  computed: {
    imageUrl: function() {
      return qrMapList[this.name]
    }
  }
};
</script>
<style lang="stylus">
.q-qrcode {
  display inline-block
  margin 0 30px
  vertical-align middle
  &__img {
    width 80px
    height 80px
  }
  &__link {
    display block
    font-size 14px
    text-align center
  }
}
</style>