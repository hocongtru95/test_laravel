<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Adnative</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{ url('css/app.css') }}">
</head>
<body>

<!-- Trigger the modal with a button -->
<button type="button" class="btn btn-info btn-lg show-frm-nativead" data-toggle="modal" data-target="#myModal">Open Modal</button>

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Adnative</h4>
            </div>
            <div class="modal-body">
                <ul id="progressbar">
                    <li class="active"></li>
                    <li class=""></li>
                    <li class=""></li>
                    <li class=""></li>
                    <li class="video_format"></li>
                    <li class="video_format"></li>
                    <li class=""></li>
                    <li class=""></li>
                </ul>
                <form action="" id="nativead-frm">
                    <div class="row nativead-wrap">
                        <fieldset class="active">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="">Image 16:9</label>
                                    <input type="text" class="form-control" name="image169">
                                    <small>Bạn được upload banner với kích thước: <span>640x360</span> pixel, lỗi file: <span>.jpg,.png</span>, và dung lượng tối đa <span>250 KB</span></small>
                                </div>
                                <div class="form-group">
                                    <label for="">Image 16:10</label>
                                    <input type="text" class="form-control" name="image1610">
                                    <small>Bạn được upload banner với kích thước: <span>640x400</span> pixel, lỗi file: <span>.jpg,.png</span>, và dung lượng tối đa <span>250 KB</span></small>
                                </div>
                                <div class="form-group">
                                    <label for="">Image 15:7</label>
                                    <input type="text" class="form-control" name="image157">
                                    <small>Bạn được upload banner với kích thước: <span>640x280</span> pixel, lỗi file: <span>.jpg,.png</span>, và dung lượng tối đa <span>250 KB</span></small>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Title</label>
                                    <div class="dropdown select-color hidden">
                                        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Black
                                            <span class="caret"></span></button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a href="#"><span class="pre-color" style="background: black;"></span> Black</a>
                                            </li>
                                            <li>
                                                <a href="#"><span class="pre-color" style="background: silver;"></span> Silver</a>
                                            </li>
                                            <li>
                                                <a href="#"><span class="pre-color" style="background: gray;"></span> Grey</a>
                                            </li>
                                            <li>
                                                <a href="#"><span class="pre-color" style="background: maroon;"></span> Maroon</a>
                                            </li>
                                            <li>
                                                <a href="#"><span class="pre-color" style="background: red;"></span> Red</a>
                                            </li>
                                            <li>
                                                <a href="#"><span class="pre-color" style="background: purple;"></span> Purple</a>
                                            </li>
                                            <li>
                                                <a href="#"><span class="pre-color" style="background: green;"></span> Green</a>
                                            </li>
                                            <li>
                                                <a href="#"><span class="pre-color" style="background: olive;"></span> Olive</a>
                                            </li>
                                            <li>
                                                <a href="#"><span class="pre-color" style="background: navy;"></span> Navy</a>
                                            </li>
                                            <li>
                                                <a href="#"><span class="pre-color" style="background: blue;"></span> Blue</a>
                                            </li>
                                            <li>
                                                <a href="#"><span class="pre-color" style="background: orange;"></span> Orange</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <textarea name="title" id="" class="form-control" cols="30" rows="10" maxlength="300" style="width: 100%; height: 69px;"></textarea>
                                    <small>300 ký tự</small>
                                </div>
                                <div class="form-group">
                                    <label for="">Sapo</label>
                                    <textarea name="sapo" id="" class="form-control" cols="30" rows="10" maxlength="300" style="width: 100%; height: 69px;"></textarea>
                                    <small>300 ký tự</small>
                                </div>
                                <div class="form-group">
                                    <label for="">Reach</label>
                                    <input type="text" class="form-control" name="reach">
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="">Logo</label>
                                    <input type="text" class="form-control" name="logo">
                                    <small>Bạn được upload banner với kích thước: <span>140x36</span> pixel, và dung lượng tối đa <span>100KB</span></small>
                                </div>
                                <div class="form-group">
                                    <label for="">Logo transparent</label>
                                    <input type="text" class="form-control" name="logo_transparent">
                                    <small>Bạn được upload banner với kích thước: <span>140x36</span> pixel, và dung lượng tối đa <span>100KB</span></small>
                                </div>
                                <div class="form-group">
                                    <label for="">Logo mobile</label>
                                    <input type="text" class="form-control" name="logo_mobile">
                                    <small>Bạn được upload banner với kích thước: <span>900x100</span> pixel, và dung lượng tối đa <span>100KB</span></small>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="">Avatar</label>
                                    <input type="text" class="form-control" name="avatar">
                                    <small>Bạn được upload banner với kích thước: <span>200x200</span> pixel, lỗi file: .jpg,.png, và dung lượng tối đa <span>100KB</span></small>
                                </div>
                                <div class="form-group">
                                    <label for="">Tên nhãn hàng</label>
                                    <input type="text" class="form-control" name="brand_name">
                                    <small>300 ký tự</small>
                                </div>
                                <div class="form-group">
                                    <label for="">Landing</label>
                                    <input type="text" class="form-control" name="amdlanding">
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="video_format">
                            <div class="col-md-12">
                                <label for="" class="field-title">Video & Vast</label>
                                <div class="form-group">
                                    <label for="">File video</label>
                                    <input type="text" class="form-control" name="video">
                                    <small>Bạn được upload banner với kích thước: <span>640x360</span> pixel, lỗi file: .mp4,.flv,.html, và dung lượng tối đa <span>10240 KB</span></small>
                                </div>
                                <div class="form-group">
                                    <label for="">Link VAST adserving</label>
                                    <input type="text" class="form-control" name="vast_link">
                                    <small>350 ký tự</small>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="video_format">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="">Duration</label>
                                    <input type="text" class="form-control" name="duration">
                                </div>
                                <p>
                                    <strong>Video tracking 3rd (VAST)</strong> <a href="#" data-toggle="modal" data-target="#trackingModal" data-dismiss="modal">[Xem]</a>
                                </p>
                                <div class="form-group">
                                    <label for="">True view</label>
                                    <input type="text" class="form-control" name="true_view">
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="">Background Color</label>
                                    <div class="minicolors minicolors-theme-default minicolors-position-bottom minicolors-focus">
                                        <input type="text" name="bg_color" id="nativeads_color" class="form-control minicolors-input" size="7">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Font Color</label>
                                    <div class="minicolors minicolors-theme-default minicolors-position-bottom minicolors-focus">
                                        <input type="text" name="font_color" id="nativeads_color" class="form-control minicolors-input" size="7">
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="">Config</label>
                                    <textarea name="config" id="" class="form-control" cols="30" rows="10" maxlength="300" style="width: 100%; height: 69px;"></textarea>
                                    <small>10000 ký tự</small>
                                </div>
                                <div class="form-group">
                                    <label for="">Script tracking</label>
                                    <input type="text" class="form-control" name="script">
                                    <small>10000 ký tự</small>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <div class="nativead-btn-group">
                    <a href="#" class="btn btn-default btn-prev">Prev</a>
                    <a href="#" class="btn btn-success btn-generate">Generate</a>
                    <a href="#" class="btn btn-info btn-next">Next</a>
                </div>
            </div>
        </div>

    </div>
</div>
<div id="trackingModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Adnative</h4>
            </div>
            <div class="modal-body">
                <div class="row tracking-3nd">
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">Impression</label>
                        <input type="text" id="impression" class="form-control nativeads_tracking_3rd_item">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">creativeView</label>
                        <input type="text" id="creative_view" class="form-control nativeads_tracking_3rd_item">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">start</label>
                        <input type="text" id="start" class="form-control">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">midpoint</label>
                        <input type="text" id="mid_point" class="form-control nativeads_tracking_3rd_item">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">firstQuartile</label>
                        <input type="text" id="first_quartile" class="form-control nativeads_tracking_3rd_item">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">thirdQuartile</label>
                        <input type="text" id="third_quartile" class="form-control nativeads_tracking_3rd_item">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">complete</label>
                        <input type="text" id="complete" class="form-control nativeads_tracking_3rd_item">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">mute</label>
                        <input type="text" id="mute" class="form-control nativeads_tracking_3rd_item">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">unmute</label>
                        <input type="text" id="unmute" class="form-control nativeads_tracking_3rd_item">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">pause</label>
                        <input type="text" id="pause" class="form-control nativeads_tracking_3rd_item">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="#" class="btn btn-info" data-toggle="modal" data-target="#myModal" data-dismiss="modal">Save</a>
            </div>
        </div>

    </div>
</div>

<script src="{{ url('js/app.js') }}"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</body>
</html>
