# steps

进度条，支持横向和纵向两种类型，图标可自定义。

<q-demo>
  <div class="pro-steps pro-steps--row">
    <div class="pro-steps__item">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-left pro-steps__item__hd-line--hide"></div>
        <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
        <div class="pro-steps__item__hd-right"></div>
      </div>
      <div class="pro-steps__item__content">最多显示六字</div>
    </div>
    <div class="pro-steps__item">
      <div class="pro-steps__item__hd">
          <div class="pro-steps__item__hd-left"></div>
          <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
          <div class="pro-steps__item__hd-right"></div>
        </div>
        <div class="pro-steps__item__content">最多显示六字</div>
    </div>
    <div class="pro-steps__item">
      <div class="pro-steps__item__hd">
          <div class="pro-steps__item__hd-left"></div>
          <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
          <div class="pro-steps__item__hd-right"></div>
        </div>
        <div class="pro-steps__item__content">最多显示六字</div>
    </div>
    <div class="pro-steps__item pro-steps__item--light">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-left"></div>
        <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
        <div class="pro-steps__item__hd-right pro-steps__item__hd-line--hide"></div>
      </div>
      <div class="pro-steps__item__content">最多显示六字</div>
    </div>
  </div>
  <br />

  <div class="pro-steps pro-steps--column">
    <div class="pro-steps__item">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up pro-steps__item__hd-line--hide"></div>
        <span class=" pro-steps__item__hd-idx">1</span>
        <div class="pro-steps__item__hd-down"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行超过一行</div>
      <i class="iconfont icon-selectDownRadio pro-steps__item__icon"></i>
    </div>
    <div class="pro-steps__item">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up"></div>
        <span class="pro-steps__item__hd-idx">2</span>
        <div class="pro-steps__item__hd-down"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行</div>
      <div class="pro-steps__item__tip">提示语</div>
    </div>
    <div class="pro-steps__item pro-steps__item--light">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up"></div>
        <span class="pro-steps__item__hd-idx">3</span>
        <div class="pro-steps__item__hd-down"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行</div>
      <div class="pro-steps__item__tip">提示语啊</div>
    </div>
    <div class="pro-steps__item pro-steps__item--light">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up"></div>
        <span class="pro-steps__item__hd-idx">4</span>
        <div class="pro-steps__item__hd-down pro-steps__item__hd-line--hide"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行超过一行</div>
      <i class="iconfont icon-selectDownRadio pro-steps__item__icon"></i>
    </div>
  </div>

  <div class="pro-steps pro-steps--column">
    <div class="pro-steps__item">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up pro-steps__item__hd-line--hide"></div>
        <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
        <div class="pro-steps__item__hd-down"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行超过一行</div>
      <i class="iconfont icon-selectDownRadio pro-steps__item__icon"></i>
    </div>
    <div class="pro-steps__item">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up"></div>
        <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
        <div class="pro-steps__item__hd-down"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行</div>
      <div class="pro-steps__item__tip">提示语</div>
    </div>
    <div class="pro-steps__item pro-steps__item--light">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up"></div>
        <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
        <div class="pro-steps__item__hd-down"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行</div>
      <div class="pro-steps__item__tip">提示语啊</div>
    </div>
    <div class="pro-steps__item pro-steps__item--light">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up"></div>
        <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
        <div class="pro-steps__item__hd-down pro-steps__item__hd-line--hide"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行超过一行</div>
      <i class="iconfont icon-selectDownRadio pro-steps__item__icon"></i>
    </div>
  </div>
</q-demo>

```html
<q-demo>
  <div class="pro-steps pro-steps--row">
    <div class="pro-steps__item">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-left pro-steps__item__hd-line--hide"></div>
        <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
        <div class="pro-steps__item__hd-right"></div>
      </div>
      <div class="pro-steps__item__content">最多显示六字</div>
    </div>
    <div class="pro-steps__item">
      <div class="pro-steps__item__hd">
          <div class="pro-steps__item__hd-left"></div>
          <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
          <div class="pro-steps__item__hd-right"></div>
        </div>
        <div class="pro-steps__item__content">最多显示六字</div>
    </div>
    <div class="pro-steps__item">
      <div class="pro-steps__item__hd">
          <div class="pro-steps__item__hd-left"></div>
          <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
          <div class="pro-steps__item__hd-right"></div>
        </div>
        <div class="pro-steps__item__content">最多显示六字</div>
    </div>
    <div class="pro-steps__item pro-steps__item--light">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-left"></div>
        <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
        <div class="pro-steps__item__hd-right pro-steps__item__hd-line--hide"></div>
      </div>
      <div class="pro-steps__item__content">最多显示六字</div>
    </div>
  </div>
  <br />

  <div class="pro-steps pro-steps--column">
    <div class="pro-steps__item">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up pro-steps__item__hd-line--hide"></div>
        <span class=" pro-steps__item__hd-idx">1</span>
        <div class="pro-steps__item__hd-down"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行超过一行</div>
      <i class="iconfont icon-selectDownRadio pro-steps__item__icon"></i>
    </div>
    <div class="pro-steps__item">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up"></div>
        <span class="pro-steps__item__hd-idx">2</span>
        <div class="pro-steps__item__hd-down"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行</div>
      <div class="pro-steps__item__tip">提示语</div>
    </div>
    <div class="pro-steps__item pro-steps__item--light">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up"></div>
        <span class="pro-steps__item__hd-idx">3</span>
        <div class="pro-steps__item__hd-down"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行</div>
      <div class="pro-steps__item__tip">提示语啊</div>
    </div>
    <div class="pro-steps__item pro-steps__item--light">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up"></div>
        <span class="pro-steps__item__hd-idx">4</span>
        <div class="pro-steps__item__hd-down pro-steps__item__hd-line--hide"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行超过一行</div>
      <i class="iconfont icon-selectDownRadio pro-steps__item__icon"></i>
    </div>
  </div>

  <div class="pro-steps pro-steps--column">
    <div class="pro-steps__item">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up pro-steps__item__hd-line--hide"></div>
        <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
        <div class="pro-steps__item__hd-down"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行超过一行</div>
      <i class="iconfont icon-selectDownRadio pro-steps__item__icon"></i>
    </div>
    <div class="pro-steps__item">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up"></div>
        <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
        <div class="pro-steps__item__hd-down"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行</div>
      <div class="pro-steps__item__tip">提示语</div>
    </div>
    <div class="pro-steps__item pro-steps__item--light">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up"></div>
        <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
        <div class="pro-steps__item__hd-down"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行</div>
      <div class="pro-steps__item__tip">提示语啊</div>
    </div>
    <div class="pro-steps__item pro-steps__item--light">
      <div class="pro-steps__item__hd">
        <div class="pro-steps__item__hd-up"></div>
        <i class="iconfont icon-success pro-steps__item__hd-icon"></i>
        <div class="pro-steps__item__hd-down pro-steps__item__hd-line--hide"></div>
      </div>
      <div class="pro-steps__item__content">标题最多显示一行超过一行超过一行</div>
      <i class="iconfont icon-selectDownRadio pro-steps__item__icon"></i>
    </div>
  </div>
</q-demo>
```
