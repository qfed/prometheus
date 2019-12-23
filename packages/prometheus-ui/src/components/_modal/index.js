$('body').on('click', '#show-modal-btn', function() {
    $('.q-modal').addClass('q-modal--show')
});
$('body').on('click', '.q-modal__wrap__icon', function() {
    $('.q-modal').removeClass('q-modal--show')
});
