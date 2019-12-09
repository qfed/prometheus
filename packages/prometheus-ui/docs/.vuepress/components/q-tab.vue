<template>
  <div :id="id" :class="['pro-tab', 'pro-tab--' + tabPosition]" ref="tab">
    <div :class="['pro-tab__bar', 'pro-tab__bar--' + tabPosition, 'pro-tab__bar--' + theme]">
      <div class="pro-tab__bar-content">
        <div
          v-for="(tab, index) in barTabs"
          :class="[
            'pro-tab__bar-tab',
            index === activeIndex ? 'pro-tab__bar-tab--active': '',
            'pro-tab__bar-tab--' + tabPosition,
            'pro-tab__bar-tab--' + theme
          ]"
          :style="{width: barTabWidth}"
          @click="tabClick(index)"
        >
         <div :id="index" class="pro-tab__bar-tab__mask"></div>
         <template v-if="tabIcons.length > 0 && index  < tabIcons.length">
          <i :class="'pro-tab__bar-tab__icon iconfont '+ tabIcons[index]" :style="{color:index === activeIndex?color:''}" ></i>
         </template>
         <span class="pro-tab__bar-tab__txt" :style="{color:index === activeIndex?color:''}">
        {{ tab }}
         </span>
        
        </div>
        <span class="pro-tab__bar-underline" :class="{'pro-tab__bar-underline--animated': animated}" :style="{left: barUnderlineLeft,backgroundColor:color}"></span>
      </div>
    </div>

    <div v-if="contents && contents.length" class="pro-tab__content" :class="{'pro-tab__content--animated': animated}" :style="{transform: countentTranslate, height: contentHeight}">
      <div class="pro-tab__content-item" v-for="(content, index) in contents" v-html="content" :class="{'pro-tab__content-item--active': index === activeIndex}"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    barTabs: {
      type: Array,
      default: () => []
    },
    tabIcons: {
      type: Array,
      default: () => []
    },
    maxCount: {
      type: Number
    },
    defaultActive: {
      type: Number,
      default: 0
    },
    contentHeight: {
      type: String,
      default: 'auto'
    },
    animated: {
      type: Boolean,
      default: true
    },
    tabPosition: {
      type: String,
      default: 'top'
    },
    theme: {
      type: String,
      default: 'default'
    },
    length: {
      type: Number
    },
    color: {
      type: String,
      default:""
    }
  },
  data() {
    const count = this.getCount();
    const activeIndex = (this.defaultActive + count) % count;
    return {
      activeIndex
    }
  },
  computed: {
    count() {
      
      return this.getCount();
    },
    countentTranslate() {
      return `translate3d(${-this.activeIndex * 100}%, 0px, 0px)`
    },
    barTabWidth() {
      return `${1 / this.count * 100}%`;
    },
    barUnderlineLeft() {
      return `${(this.activeIndex * 2 + 1) * (1 / 2 / this.count * 100)}%`;
    },
    contents() {
      const { length = this.barTabs && this.barTabs.length || 0 } = this;
      const contents = [];
      for (let i = 0; i < length; i += 1) {
        contents.push(`<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of tab ${i + 1}</div>`);
      }
      return contents;
    }
  },
  methods: {
    getCount() {
      const count = this.barTabs && this.barTabs.length || 0;
      const { maxCount = count } = this;
      return Math.min(count, maxCount);
    },
    tabClick(index) {
      this.activeIndex = index;
    }
  }
}
</script>
