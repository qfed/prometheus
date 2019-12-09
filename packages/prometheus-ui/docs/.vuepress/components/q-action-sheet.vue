<template>
  <button :id="id" style="display: block; text-align: center; width: 100%; border: 1px solid #D8D8D8; border-radius: 8px; height: 48px; padding: 0px; background: #FFF;" @click="showActionSheet">{{ btnText }}</button>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    btnText: {
      type: String,
      required: true
    },
    contentText: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {
    showActionSheet() {
      const clone = document.createElement('div');
      clone.classList.add('q-action-sheet');
      clone.innerHTML = `<div class="q-action-sheet__mask"></div><div class="q-action-sheet__content q-action-sheet__content--${this.theme}"></div>`;
      const mask = clone.querySelector('.q-action-sheet__mask');
      const content = clone.querySelector('.q-action-sheet__content');

      mask.classList.add('q-fade--enter');
      content.classList.add('q-slide-up--enter');
      content.innerHTML = `<div style="width: 100%; height: 200px; background: white; display: flex; justify-content: center; align-items: center;">${this.contentText}</div>`;
      document.body.appendChild(clone);

      this.eventLisenterHandle('q-fade--enter', mask);
      this.eventLisenterHandle('q-slide-up--enter', content);

      mask.addEventListener('click', () => {
        mask.classList.add('q-fade--leave');
        content.classList.add('q-slide-up--leave');

        this.eventLisenterHandle('q-fade--leave', mask, () => document.body.removeChild(document.body.querySelector('.q-action-sheet')));
        this.eventLisenterHandle('q-slide-up--leave', content);
      });
    },
    eventLisenterHandle(className, dom, cb) {
      function handle() {
        dom.classList.remove(className);
        dom.removeEventListener('animationend', handle);
        cb && cb();
      }
      dom.addEventListener('animationend', handle);
    }
  }
}
</script>
