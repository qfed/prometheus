import ErrorPage from './error-page'
import ResultPage from './result-page'

export const routerList = [
  {
    path: '/error',
    exact: true,
    className: 'link',
    activeClassName: 'selected',
    linkName: 'Error',
    component: ErrorPage
  },
  {
    path: '/result',
    exact: false,
    className: 'link',
    activeClassName: 'selected',
    linkName: 'Result',
    component: ResultPage
  }
]
