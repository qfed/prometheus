$.noConflict()
window.$ = window.Zepto

function bindEvent(idStr, options) {
  $('.pro-tab__bar-tab', idStr).on('click', e => {
    const { target } = e

    // 点击增加active
    const barTabs = Array.from($('.pro-tab__bar-tab', idStr))
    barTabs.forEach((item, index) => {
      const handleFuncName = index !== +(target.id) ? 'remove' : 'add'
      item.classList[handleFuncName]('pro-tab__bar-tab--active')
      if (options.color) {
        item.children[1].style.color = index === +(target.id) ? options.color : '';
        item.children[0].style.color = index === +(target.id) ? options.color : '';
      }
    })

    if (options.color) {
      $('.pro-tab__bar-underline', idStr)[0].style.backgroundColor = options.color
    }

    // 点击高亮下划线滑动
    let count = options.barTabs.length
    const { maxCount = count } = options
    count = Math.min(count, maxCount)
    const index = +(target.id)
    $('.pro-tab__bar-underline', idStr)[0].style.left = `${(index * 2 + 1) *
      ((1 / 2 / count) * 100)}%`

    // 点击content滑动
    const content = $('.pro-tab__content', idStr)[0]
    content &&
      (content.style.transform = `translate3d(${-index * 100}%, 0px, 0px)`)
  })
}

function initTab(id, options) {
  const idStr = `#${id}`
  const tab = $(idStr)[0]
  const contentItems = $('.pro-tab__content-item', idStr)
  const barTabs = $('.pro-tab__bar-tab', idStr)
  const bar = $('.pro-tab__bar', idStr)[0]
  const content = $('.pro-tab__content', idStr)[0]
  const underline = $('.pro-tab__bar-underline', idStr)[0]
  const { display } = tab.style
  tab.style.display = 'none'

  // 设置默认选中的tab
  let count = options.barTabs.length
  const { maxCount = count } = options
  count = Math.min(count, maxCount)
  let { defaultActive = 0 } = options
  defaultActive = (defaultActive + count) % count
  barTabs[defaultActive].classList.add('pro-tab__bar-tab--active')
  contentItems &&
    contentItems[defaultActive] &&
    contentItems[defaultActive].classList.add('pro-tab__content-item--active')

  // 设置默认选中的content
  content &&
    (content.style.transform = `translate3d(${-defaultActive *
      100}%, 0px, 0px)`)

  // pro-tab__bar-tab、pro-tab__bar-underline宽度
  const barTabWidth = `${(1 / count) * 100}%`
  const barUnderlineLeft = `${(defaultActive * 2 + 1) *
    ((1 / 2 / count) * 100)}%`
  barTabs.forEach(item => {
    item.style.width = barTabWidth
  })
  underline.style.left = barUnderlineLeft

  // content高度
  const { contentHeight = 'auto' } = options
  content && (content.style.height = contentHeight)

  // 动画修饰
  const { animated = true } = options
  animated && underline.classList.add('pro-tab__bar-underline--animated')
  animated && content && content.classList.add('pro-tab__content--animated')

  // bar-tab内容设置
  options.barTabs.map((html, index) => {
    barTabs[index] && (barTabs[index].innerHTML += `<span class="pro-tab__bar-tab__txt">${html}</span>`)
  })

  // content-item内容设置
  options.contentItems &&
    options.contentItems.map((html, index) => {
      contentItems[index] && (contentItems[index].innerHTML = html)
    })

  // tabPosition
  const { tabPosition = 'top' } = options
  tab.classList.add(`pro-tab--${tabPosition}`)
  bar.classList.add(`pro-tab__bar--${tabPosition}`)
  barTabs.forEach(item => {
    item.classList.add(`pro-tab__bar-tab--${tabPosition}`)
  })

  // 自定义颜色时设置默认被选中tab颜色
  if (options.color) {
    let barTabArr = Array.from($('.pro-tab__bar-tab', idStr))
    barTabArr[defaultActive].children[1].style.color = barTabArr[defaultActive].children[0].style.color = options.color
    $('.pro-tab__bar-underline', idStr)[0].style.backgroundColor = options.color
  }

  tab.style.display = display

  bindEvent(idStr, options)
}

// 基本用法
initTab('pro-tab-1', {
  barTabs: ['First Tab', 'Second Tab', 'Third Tab'],
  defaultActive: 1,
  contentItems: [
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of first tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of second tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of third tab</div>'
  ]
})

// 基本用法
initTab('pro-tab-2', {
  barTabs: ['First Tab', 'Second Tab', 'Third Tab', 'Fourth Tab'],
  defaultActive: 2,
  tabPosition: 'bottom',
  contentItems: [
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of first tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of second tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of third tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of fourth tab</div>'
  ]
})

// 无动画
initTab('pro-tab-3', {
  barTabs: ['First Tab', 'Second Tab'],
  animated: false,
  defaultActive: 1,
  contentItems: [
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of first tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of second tab</div>'
  ]
})

// 固定高度
initTab('pro-tab-4', {
  barTabs: ['First Tab', 'Second Tab', 'Third Tab'],
  defaultActive: 1,
  contentHeight: '100px',
  contentItems: [
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of first tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of second tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of third tab</div>'
  ]
})

// 自定义个数，超出界面宽度，多于5个标签
initTab('pro-tab-5', {
  barTabs: [
    'First Tab',
    'Second Tab',
    'Third Tab',
    'Fourth Tab',
    'Fifth Tab',
    'Sixth Tab'
  ],
  defaultActive: 1,
  maxCount: 4,
  contentHeight: '100px',
  contentItems: [
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of first tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of second tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of third tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of fourth tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of fifth tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of sixth tab</div>'
  ]
})

// 自定义颜色
initTab('pro-tab-6', {
  barTabs: ['First Tab1', 'Second Tab', 'Third Tab'],
  defaultActive: 1,
  contentHeight: '100px',
  color: '#4071ff',
  contentItems: [
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of first tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of second tab</div>',
    '<div style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;">Content of third tab</div>'
  ]
})
