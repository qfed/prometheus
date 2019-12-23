import RowIcon from './row-icon'
import RowNum from './row-num'
import ColumnIcon from './column-icon'
import ColumnNum from './column-num'

export const routerList = [
  {
    path: '/row-icon',
    exact: true,
    className: 'link',
    activeClassName: 'selected',
    linkName: '横向图标',
    component: RowIcon
  },
  {
    path: '/row-num',
    exact: false,
    className: 'link',
    activeClassName: 'selected',
    linkName: '横向数字',
    component: RowNum
  },
  {
    path: '/column-icon',
    exact: false,
    className: 'link',
    activeClassName: 'selected',
    linkName: '纵向图标',
    component: ColumnIcon
  },
  {
    path: '/column-num',
    exact: false,
    className: 'link',
    activeClassName: 'selected',
    linkName: '纵向数字',
    component: ColumnNum
  }
]
