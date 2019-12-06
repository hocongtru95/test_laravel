import $ from 'jquery';
window.jQuery = $;
window.$ = $;
//import 'jquery-modal';
//import 'jquery-modal/jquery.modal.css';



(function ( $ ) {

    var prev, current, next, index;
    index = 0;

    $('.btn-next').on('click', function (e) {
        e.preventDefault();
        current = $('.nativead-frm .active');
        next = current.next();
        prev = current.prev();
        if (next.length) {
            current.removeClass('active');
            next.addClass('active');
            index++;
        }
        if (index === ($('.nativead-frm fieldset').length - 1) ) {
            $('.btn-generate').show();
        }
    });

    $('.btn-prev').on('click', function (e) {
        e.preventDefault();
        current = $('.nativead-frm .active');
        next = current.next();
        prev = current.prev();
        if (prev.length) {
            current.removeClass('active');
            prev.addClass('active');
            index--;
        }
    });

}( jQuery ));
