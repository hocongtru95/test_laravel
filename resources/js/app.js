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
        current = $('.nativead-wrap .active');
        next = current.next();
        prev = current.prev();
        if (next.length) {
            current.removeClass('active');
            next.addClass('active');
            $('#progressbar li').eq($("fieldset").index(next)).addClass('active');
            index++;
        }
        if (index === ($('.nativead-wrap fieldset').length - 1) ) {
            $('.btn-generate').show();
        }
    });

    $('.btn-prev').on('click', function (e) {
        e.preventDefault();
        current = $('.nativead-wrap .active');
        next = current.next();
        prev = current.prev();
        if (prev.length) {
            current.removeClass('active');
            prev.addClass('active');
            $('#progressbar li').eq($("fieldset").index(current)).removeClass('active');
            index--;
        }
    });

    var generateNativeAds = function (format = 46) {
        var obj = {
            list_item: {
                item_0: {
                    image_16_9: $('#nativead-frm input[name="image169"]').val() || '',
                    image_16_10: $('#nativead-frm input[name="image1610"]').val() || '',
                    image_15_7: $('#nativead-frm input[name="image157"]').val() || '',
                    title: $('#nativead-frm input[name="title"]').val() || '',
                    sapo: $('#nativead-frm input[name="sapo"]').val() || '',
                    reach: $('#nativead-frm input[name="reach"]').val() || '',
                }
            },
            logo: $('#nativead-frm input[name="logo"]').val() || '',
            logo_transparen: $('#nativead-frm input[name="logo_transparent"]').val() || '',
            logo_mobile: $('#nativead-frm input[name="logo_mobile"]').val() || '',
            avatar: $('#nativead-frm input[name="avatar"]').val() || '',
            avatar_desc: $('#nativead-frm input[name="brand_name"]').val() || '',
            platform: $('#nativead-frm input[name="platform"]:checked').map(function () {
                return $(this).val();
            }).get().join(',') || '',
            color: $('#nativead-frm input[name="bg_color"]').val() || '',
            font_color: $('#nativead-frm input[name="font_color"]').val() || '',
            config: JSON.parse($('#nativead-frm input[name="config"]').val() || '{}'),
            script: $('#nativead-frm input[name="script"]').val() || '',

            amdlanding: "",
            activate: ""

        };

        // Check format Native Video/Image
        if (format === 47) {

        }

        return JSON.stringify(obj);
    };

    $('.btn-generate').on('click', function () {
        generateNativeAds();
    });


}( jQuery ));
