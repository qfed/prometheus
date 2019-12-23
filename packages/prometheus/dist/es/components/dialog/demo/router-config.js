import DefaultDialog from './default-dialog'
import ImageDialog from './image-dialog'
import InputDialog from './input-dialog'

export const routerList = [
  {
    path: '/default',
    exact: true,
    className: 'link',
    activeClassName: 'selected',
    linkName: '对话框',
    component: DefaultDialog
  },
  {
    path: '/image',
    exact: false,
    className: 'link',
    activeClassName: 'selected',
    linkName: '带图片对话框',
    component: ImageDialog
  },
  {
    path: '/input',
    exact: false,
    className: 'link',
    activeClassName: 'selected',
    linkName: '输入型弹窗',
    component: InputDialog
  }
]
