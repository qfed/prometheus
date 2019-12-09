import ListActionSheet from './list-action-sheet'
import CellActionSheet from './cell-action-sheet'

export const routerList = [
  {
    path: '/list',
    exact: true,
    className: 'link',
    activeClassName: 'selected',
    linkName: '列表面板',
    component: ListActionSheet
  },
  {
    path: '/cell',
    exact: false,
    className: 'link',
    activeClassName: 'selected',
    linkName: '宫格面板',
    component: CellActionSheet
  }
]
