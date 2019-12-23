# slider

滑块组件，包含两种形式

- 携带 controller
- 默认模式

## slider 组件

  <template>
  <h1 style="text-align: center">DEFAULT SLIDER</h1>
  <div
    class="pro-slider"
    style="background-color: rgba(0, 0, 0, 0.4); padding: 22px"
  >
    <div class="pro-slider__wrapper">
      <div class="pro-slider__rail"></div>
      <div class="pro-slider__track" style="width: 10%;"></div>
      <div
        class="pro-slider__handler"
        onTouchStart="{this.onTouchStart}"
        onTouchMove="{this.onTounchMove}"
        onTouchEnd="{this.onComplete}"
        style="left: 10%"
      >
        <i
          class="pro-slider__icon iconfont icon-slide"
          style=" font-size: 22px "
        ></i>
      </div>
    </div>
  </div>
  <h1 style="text-align: center">SLIDER WITH CONTROLLER</h1>
  <div
    class="pro-slider"
    style="background-color: rgba(0, 0, 0, 0.4); padding: 22px"
  >
    <i
      class="pro-slider__icon iconfont icon-less"
      style="font-size: 22px; margin-right: 15px; fill: #ffffff;"
    ></i>
    <div class="pro-slider__wrapper">
      <div class="pro-slider__rail"></div>
      <div class="pro-slider__track" style="width: 10%;"></div>
      <div class="pro-slider__handler" style="left: 10%">
        <i
          class="pro-slider__icon iconfont icon-slide"
          style=" font-size: 22px "
        ></i>
      </div>
    </div>
    <i
      class="pro-slider__icon iconfont icon-add"
      style="font-size: 22px; margin-left: 15px; fill: #ffffff"
    ></i>
  </div>
  </template>

```html
<template>
  <q-demo>
    <h1 style="text-align: center">DEFAULT SLIDER</h1>
    <div
      class="pro-slider"
      style="background-color: rgba(0, 0, 0, 0.4); padding: 22px"
    >
      <div class="pro-slider__wrapper">
        <div class="pro-slider__rail"></div>
        <div class="pro-slider__track" style="width: 10%;"></div>
        <div
          class="pro-slider__handler"
          onTouchStart="{this.onTouchStart}"
          onTouchMove="{this.onTounchMove}"
          onTouchEnd="{this.onComplete}"
          style="left: 10%"
        >
          <i
            class="pro-slider__icon iconfont icon-slide"
            style=" font-size: 22px "
          ></i>
        </div>
      </div>
    </div>
    <h1 style="text-align: center">SLIDER WITH CONTROLLER</h1>
    <div
      class="pro-slider"
      style="background-color: rgba(0, 0, 0, 0.4); padding: 22px"
    >
      <i
        class="pro-slider__icon iconfont icon-less"
        style="font-size: 22px; margin-right: 15px; fill: #ffffff;"
      ></i>
      <div class="pro-slider__wrapper">
        <div class="pro-slider__rail"></div>
        <div class="pro-slider__track" style="width: 10%;"></div>
        <div class="pro-slider__handler" style="left: 10%">
          <i
            class="pro-slider__icon iconfont icon-slide"
            style=" font-size: 22px "
          ></i>
        </div>
      </div>
      <i
        class="pro-slider__icon iconfont icon-add"
        style="font-size: 22px; margin-left: 15px; fill: #ffffff"
      ></i>
    </div>
  </q-demo>
</template>
```
