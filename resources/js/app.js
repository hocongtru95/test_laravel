(function ( $ ) {

    var getTracking3rd = function () {
        return $('.nativeads_tracking_3rd_item').map(function() {
            return {
                key: $(this).attr('id'),
                value: $(this).val(),
            }
        }).get();
    };

    var generateNativeAds = function (format = 46) {

        const NATIVE_AD = 46;
        const NATIVE_IMAGE_VIDEO = 47;
        const NATIVE_TOPIC = 52;
        const NATIVE_TOP_300_600 = 70;

        switch (format) {
            case NATIVE_AD :
                $('.fm-video, .fm-topic, .fm-topic-36').not('.fm-ad').remove();
                break;
            case NATIVE_IMAGE_VIDEO :
                $('.fm-ad, .fm-topic, .fm-topic-36').not('.fm-video').remove();
                break;
            case NATIVE_TOPIC :
                $('.fm-ad, .fm-video, .fm-topic-36').not('.fm-topic').remove();
                break;
            case NATIVE_TOP_300_600 :
                $('.fm-ad, .fm-video, .fm-topic').not('.fm-topic-36').remove();
                break;
        }

        var prev, current, next, index;
        index = 0;
        var $dom = $('.nativead-wrap_0');

        $('.btn-next').on('click', function (e) {
            e.preventDefault();
            $dom = $('.tab-nativead .active .nativead-wrap');
            current = $dom.find('.active');
            next = current.next();
            prev = current.prev();
            if (next.length) {
                current.removeClass('active');
                next.addClass('active');
                $('#progressbar li').eq($dom.find('fieldset').index(next)).addClass('active');
                index++;
            }

            if (index === ($dom.find('fieldset').length - 1) ) {
                $('.btn-generate').show();
            }
        });

        $('.btn-prev').on('click', function (e) {
            e.preventDefault();
            $dom = $('.tab-nativead .active .nativead-wrap');
            current = $dom.find('.active');
            next = current.next();
            prev = current.prev();
            if (prev.length) {
                current.removeClass('active');
                prev.addClass('active');
                $('#progressbar li').eq($dom.find('fieldset').index(current)).removeClass('active');
                index--;
            }
        });

        $('.nav-nativead li').on('click', function () {
            var $progressbar_item = $('.progress-item');
            if ($(this).index(0) !== 0) {
                $progressbar_item.hide();
            }
            else {
                $progressbar_item.show();
            }

            setTimeout(function () {
                $dom = $('.tab-nativead .active .nativead-wrap');
                var $dom_progress = $('#progressbar li');
                let index_active = $dom.find('fieldset.active').prevAll().length;
                $dom_progress.each(function (i) {
                    $dom_progress.eq(i+1).removeClass('active');
                    if (i <= index_active) {
                        $dom_progress.eq(i).addClass('active');
                    }
                });
            }, 300);
        });

        var item_index = 2;
        $('.add-item').on('click', function () {
            if (item_index >= 4) {
                return alert("Max Item = 5");
            }
            item_index++;

            var nav_item = `<li class="nav-item-${ item_index }"><a data-toggle="tab" href="#item_${ item_index }">Item ${ item_index + 1 }</a></li>`;

            if (format === NATIVE_TOPIC) {
                var part_item = `      <div class="form-group fm-ad fm-video fm-topic">
                                            <label for="">Image 16:9</label>
                                            <input type="text" class="form-control" name="image169_${ item_index }">
                                            <small>Bạn được upload banner với kích thước: <span>640x360</span> pixel, lỗi file: <span>.jpg,.png</span>, và dung lượng tối đa <span>250 KB</span></small>
                                        </div>
                                        <div class="form-group fm-ad fm-video fm-topic">
                                            <label for="">Image 16:10</label>
                                            <input type="text" class="form-control" name="image1610_${ item_index }">
                                            <small>Bạn được upload banner với kích thước: <span>640x400</span> pixel, lỗi file: <span>.jpg,.png</span>, và dung lượng tối đa <span>250 KB</span></small>
                                        </div>
                                        <div class="form-group fm-topic">
                                            <label for="">Image 1:1</label>
                                            <input type="text" class="form-control" name="image11_${ item_index }">
                                            <small>Bạn được upload banner với kích thước: <span>240x240</span> pixel, lỗi file: <span>.jpg,.png</span>, và dung lượng tối đa <span>250 KB</span></small>
                                        </div>`;
            }
            if (format === NATIVE_TOP_300_600) {
                var part_item = `      <div class="form-group fm-topic-36">
                                            <label for="">Image 5:6</label>
                                            <input type="text" class="form-control" name="image56_${ item_index }">
                                            <small>Bạn được upload banner với kích thước: <span>300x360</span> pixel, lỗi file: <span>.jpg,.png</span>, và dung lượng tối đa <span>250 KB</span></small>
                                        </div>`;
            }

            var item = `<div id="item_${ item_index }" class="tab-pane fade">
                            <div class="row nativead-wrap nativead-wrap_${ item_index }">
                                <fieldset class="active">
                                    <div class="col-md-12">
                                        ${ part_item }
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Title</label>
                                            <textarea name="title_${ item_index }" id="" class="form-control" cols="30" rows="10" maxlength="300" style="width: 100%; height: 69px;"></textarea>
                                            <small>300 ký tự</small>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Sapo</label>
                                            <textarea name="sapo_${ item_index }" id="" class="form-control" cols="30" rows="10" maxlength="300" style="width: 100%; height: 69px;"></textarea>
                                            <small>300 ký tự</small>
                                        </div>
                                        <div class="form-group fm-topic fm-topic-36">
                                            <label for="">Landing</label>
                                            <input type="text" class="form-control" name="amdlanding_${ item_index }">
                                            <small>10000 ký tự</small>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>`;
            $('.nav-item-' + (item_index - 1) ).after(nav_item);
            $('#item_' + (item_index - 1) ).after(item);

        });

        $('.remove-item').on('click', function () {
            if (item_index <= 2) {
                return alert("Min item 3");
            }
            $('.nav-item-' + item_index ).remove();
            $('#item_' + item_index ).remove();
            item_index--;
        });

        $('.btn-generate').on('click', function () {

            let date = new Date();
            let activate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();

            var obj = {
                list_item: {
                    item_0: {
                        image_16_9: $('#nativead-frm input[name="image169"]').val() || '',
                        image_16_10: $('#nativead-frm input[name="image1610"]').val() || '',
                        image_15_7: $('#nativead-frm input[name="image157"]').val() || '',
                        title: $('#nativead-frm textarea[name="title"]').val() || '',
                        sapo: $('#nativead-frm textarea[name="sapo"]').val() || '',
                        reach: $('#nativead-frm input[name="reach"]').val() || '',
                    }
                },
                logo: $('#nativead-frm input[name="logo"]').val() || '',
                logo_transparen: $('#nativead-frm input[name="logo_transparent"]').val() || '',
                logo_mobile: $('#nativead-frm input[name="logo_mobile"]').val() || '',
                avatar: $('#nativead-frm input[name="avatar"]').val() || '',
                avatar_desc: $('#nativead-frm input[name="brand_name"]').val() || '',
                color: $('#nativead-frm input[name="bg_color"]').val() || '',
                font_color: $('#nativead-frm input[name="font_color"]').val() || '',
                config: Object.assign({}, JSON.parse($('#nativead-frm textarea[name="config"]').val() || '{}')),
                script: $('#nativead-frm input[name="script"]').val() || '',

                amdlanding: $('#nativead-frm input[name="amdlanding"]').val() || '',
                activate: activate

            };

            if (format === NATIVE_IMAGE_VIDEO) {
                obj.video = $('#nativead-frm input[name="video"]').val() || '';
                obj.vast = $('#nativead-frm input[name="vast_link"]').val() || '';
                obj.duration = $('#nativead-frm input[name="duration"]').val() || '';
                obj.true_view = $('#nativead-frm input[name="true_view"]').val() || '';
                obj.tracking_3rd = getTracking3rd();
            }

            var result = JSON.stringify(obj);
            console.log(result);
            return result;
        });
    };

    $('.show-frm-nativead').on('click', function () {
        generateNativeAds(70);
    });

}( jQuery ));
