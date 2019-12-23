# Steps <q-qrcode name='steps' />

多步骤组件，支持纵向和横向两种类型，图标和文字可自定义。

## 代码演示

<q-code>
```jsx

import Steps, { IStepsProps } from '../index'
const { Step } = Steps
const step1Props = {
  type: 'row',
  status: true,
  title: '第一步',
  isFirst: true
}
const step2Props = {
  type: 'row',
  status: true,
  title: '第二步',
}
const step3Props = {
  type: 'row',
  status: true,
  title: '第三步',
}
const step4Props = {
  type: 'row',
  status: false,
  title: '第四步',
  isLast: true
}
class StepsDemo extends React.Component {
  state = {}
  render() {
    return (
      <div style={{ padding: 20 }}>
        <Steps type='row'>
          <Step {...step1Props} />
          <Step {...step2Props} />
          <Step {...step3Props} />
          <Step {...step4Props} />
        </Steps>
      </div>
    )
  }
}

```
</q-code>

## Step API

| Option  | Description        | Type                 | Default Value |
| :------ | :----------------- | :--------------------- | :------------ |
| style   | step样式           | Object                 | {}            |
| type    | step类型           | 'row' `|` 'column'     | 'row'         |
| title   | step标题           | String                 | -             |
| idx     | step序号           | String `|` Number      | -             |
| icon    | step图标           | String `|` JSX.Element | -             |
| tip     | step提示语         | String `|` JSX.Element | -             |
| tipIcon | step提示图标       | String `|` JSX.Element | -             |
| isFirst | step是否为第一个   | Boolean                | false         |
| isLast  | step是否为最后一个 | Boolean                | false         |


## Steps API

| Option    | Description | Type             | Default Value |
| :-------- | :---------- | :----------------- | :------------ |
| className | steps类名   | String             | -             |
| style     | steps样式   | Object             | {}            |
| type      | steps类型   | 'row' `|` 'column' | 'row'         |

<q-iframe name='steps' />