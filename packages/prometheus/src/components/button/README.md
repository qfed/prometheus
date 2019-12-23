# Button <q-qrcode name='button' />

按钮，响应用户点击行为。支持三种主题（primary、default和danger），支持两种形状（默认和圆角），支持多种尺寸（default、medium、small和mini）。使用ButtonGroup组合多种按钮。

## 代码演示

### 长按钮

<q-code>
```jsx
<Button {...props}>primary</Button>
<br />
<Button type="primary" disabled={true}>primary disabled</Button>

<Button type="default" className="eee">default</Button>
<br />
<Button type="default" disabled={true}>default disabled</Button>

<Button type="danger" className="eee">danger</Button>
<br />
<Button type="danger" disabled={true}>danger disabled</Button>
```
</q-code>

### 中、小、迷你按钮

<q-code>
```jsx
<Button type="primary" size="medium" className="eee">medium default</Button>
<br />
<Button type="primary" size="medium" disabled={true}>medium default disabled</Button>

<Button type="default" size="medium" className="eee">medium default</Button>
<br />
<Button type="default" size="medium" disabled={true}>medium default disabled</Button>

<Button type="default" size="medium" className="eee" mainText="按钮主标题Normal" subText="按钮副标题文本Normal"></Button>

<Button type="primary" size="small" className="eee">primary</Button>
<br />
<Button type="primary" size="small" disabled={true}>primary disabled</Button>

<Button type="default" size="small" className="eee">default</Button>
<br />
<Button type="default" size="small" disabled={true}>default disabled</Button>

<Button type="primary" size="mini" className="eee">primary</Button>
<br />
<Button type="primary" size="mini" disabled={true}>primary disabled</Button>

<Button type="default" size="mini" className="eee">default</Button>
<br />
<Button type="default" size="mini" disabled={true}>default disabled</Button>
```
</q-code>

### 圆角按钮

<q-code>
```jsx
<Button type="primary" shape="pill" className="eee">primary pill</Button>
<br />
<Button type="primary" shape="pill" disabled={true}>primary pill disabled</Button>

<Button type="default" shape="pill" className="eee">default pill</Button>
<br />
<Button type="default" shape="pill" disabled={true}>default pill disabled</Button>

<Button
  type="default"
  size="medium"
  shape="pill"
  className="eee"
  mainText="按钮主标题Normal"
  subText="按钮副标题文本Normal"
></Button>
```
</q-code>

### button-group

<q-code>
```jsx
<ButtonGroup>
  <Button type="operate" mainText="操作" icon={<div className="q-bottom-group__item__icon"></div>}></Button>
  <Button type="operate" mainText="操作" icon={<div className="q-bottom-group__item__icon"></div>}></Button>
  <Button type="operate" mainText="操作" icon={<div className="q-bottom-group__item__icon"></div>}></Button>
  <Button type="primary" style={{ width: 210 }}>主要操作</Button>
</ButtonGroup>

<ButtonGroup>
  <Button type="operate" mainText="操作" icon={<div className="q-bottom-group__item__icon"></div>}></Button>
  <Button type="operate" mainText="操作" icon={<div className="q-bottom-group__item__icon"></div>}></Button>
  <Button type="operate" mainText="操作" icon={<div className="q-bottom-group__item__icon"></div>}></Button>
  <Button type="primary" style={{ width: 210 }} disabled>主要操作</Button>
</ButtonGroup>

<ButtonGroup>
  <Button type="operate" mainText="操作" icon={<div className="q-bottom-group__item__icon"></div>}></Button>
  <Button type="primary" style={{ width: 295 }}>主要操作</Button>
</ButtonGroup>

<ButtonGroup>
  <Button type="operate" mainText="操作" icon={<div className="q-bottom-group__item__icon"></div>}></Button>
  <Button type="primary" style={{ width: 295 }} disabled>主要操作</Button>
</ButtonGroup>

<ButtonGroup>
  <Button type="default" style={{ flex: 1, border: 'none', borderTop: '1px solid #eee', color: '#999' }}>次要操作</Button>
  <Button type="primary" style={{ flex: 2 }}>主要操作</Button>
</ButtonGroup>

<ButtonGroup>
  <Button type="default" style={{ flex: 1, margin: '0 5px' }}>重置</Button>
  <Button type="primary" style={{ flex: 1, margin: '0 5px' }}>确定</Button>
</ButtonGroup>
```
</q-code>

## API

| Option      | Description      |  Type                                             | Default Value |
| :---------- | :--------------- | :-------------------------------------------------- | :------------ |
| style       | Button的样式    | Object                                              | {}            |
| disabled    | 是否禁用         | Boolean                                             | false         |
| loading     | 是否处于加载中   | Boolean                                             | false         |
| loadingType | loading类型      | 'default' `|` 'circle'                              | 'default'     |
| type        | 按钮类型         | 'defalut'  `|` 'primary' `|` 'danger' `|` 'operate' | 'primary'     |
| size        | 按钮尺寸         | 'medium' `|` 'small' `|` 'mini'                     | -             |
| shape       | 按钮形状         | 'pill'                                              | -             |
| mainText    | 按钮主标题       | String                                              | -             |
| subText     | 按钮副标题       | String                                              | -             |
| icon        | 次要操作按钮图标 | JSX.Element                                         | -             |
| onClick     | 点击按钮的回调   | (event: any) => void `|` {}                         | -             |
| classNames  | 获取样式类名     | get() => classaNames                                | -             |

<q-iframe name="button"  />