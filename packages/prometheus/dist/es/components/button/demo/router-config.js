import BigBtn from './big-btn'
import SmallBtn from './small-btn'
import BtnGroup from './btn-group'
import OtherBtn from './other-btn'

export const routerList = [
  {
    path: '/big',
    exact: true,
    className: 'link',
    activeClassName: 'selected',
    linkName: 'Default',
    component: BigBtn
  },
  {
    path: '/small',
    exact: false,
    className: 'link',
    activeClassName: 'selected',
    linkName: 'Small',
    component: SmallBtn
  },
  {
    path: '/group',
    exact: false,
    className: 'link',
    activeClassName: 'selected',
    linkName: 'Group',
    component: BtnGroup
  },
  {
    path: '/pill',
    exact: false,
    className: 'link',
    activeClassName: 'selected',
    linkName: 'Pill',
    component: OtherBtn
  }
]
