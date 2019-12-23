console.log('Hello passenger！')

// function dragstart(ev) {
//   console.log('on dragstart', ev)
//   ev.stopPropagation()
// }

// function drag(ev) {
//   console.log('on drag', ev)
//   console.log('x = ' + ev.clientX + ', y = ' + ev.clientY)
//   console.log('a = ' + ev.offsetX + ', b = ' + ev.offsetY)
//   var x = ev.clientX
//   var y = ev.clientY
//   x += ev.offsetX
//   y += ev.offsetY
//   if (ev.offsetX !== 0 || ev.offsetY !== 0) {
//     var content = document.getElementsByClassName('drag-content')[0]
//     content.style.position = 'fixed'
//     content.style.left = x + 'px'
//     content.style.top = y + 'px'
//   }
//   ev.preventDefault()
// }

function dragend(ev) {
  console.log('on dragend', this)
  var x = ev.clientX
  var y = ev.clientY
  var content = document.getElementsByClassName('dragable-mobile')[0]
//   content.style.position = 'fixed'
  content.style.left = x + 'px'
  content.style.top = y + 'px'
  ev.stopPropagation()
}
