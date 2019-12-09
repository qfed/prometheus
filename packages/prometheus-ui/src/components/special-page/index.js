console.log('Hello passenger！')
$('body').off('click', '#test')
$('body').on('click', '#test', function() {
  alert('test')
})
