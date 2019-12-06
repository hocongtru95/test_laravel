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
<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

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
                <div class="row nativead-frm">
                    <fieldset class="active">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="">Image 16:9</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="">Image 16:10</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="">Image 15:7</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Title</label>
                                <div class="dropdown">
                                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Black
                                        <span class="caret"></span></button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <div class="pre-color"></div>
                                            <a href="#">Black</a>
                                        </li>
                                        <li>
                                            <div class="pre-color"></div>
                                            <a href="#">Maroon</a>
                                        </li>
                                        <li>
                                            <div class="pre-color"></div>
                                            <a href="#">Maroon</a>
                                        </li>
                                    </ul>
                                </div>
                                <textarea name="" id="" class="form-control" cols="30" rows="10" maxlength="300" style="width: 100%; height: 69px;"></textarea>
                                <small>300 ký tự</small>
                            </div>
                            <div class="form-group">
                                <label for="">Sapo</label>
                                <textarea name="" id="" class="form-control" cols="30" rows="10" maxlength="300" style="width: 100%; height: 69px;"></textarea>
                                <small>300 ký tự</small>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="">Logo</label>
                                <input type="text" class="form-control">
                                <small>Bạn được upload banner với kích thước: 140x36 pixel, và dung lượng tối đa 100KB</small>
                            </div>
                            <div class="form-group">
                                <label for="">Logo transparent</label>
                                <input type="text" class="form-control">
                                <small>Bạn được upload banner với kích thước: 140x36 pixel, và dung lượng tối đa 100KB</small>
                            </div>
                            <div class="form-group">
                                <label for="">Logo mobile</label>
                                <input type="text" class="form-control">
                                <small>Bạn được upload banner với kích thước: 900x100 pixel, và dung lượng tối đa 100KB</small>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="">Avatar</label>
                                <input type="text" class="form-control">
                                <small>Bạn được upload banner với kích thước: 200x200 pixel, lỗi file: .jpg,.png, và dung lượng tối đa 100 KB</small>
                            </div>
                            <div class="form-group">
                                <label for="">Tên nhãn hàng</label>
                                <input type="text" class="form-control">
                                <small>300 ký tự</small>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="col-md-12">
                            <label for="">Video & Vast</label>
                            <div class="form-group">
                                <label for="">File video</label>
                                <input type="text" class="form-control">
                                <small>Bạn được upload banner với kích thước: 640x360 pixel, lỗi file: .mp4,.flv,.html, và dung lượng tối đa 10240 KB</small>
                            </div>
                            <div class="form-group">
                                <label for="">Link VAST adserving</label>
                                <input type="text" class="form-control">
                                <small>350 ký tự</small>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="">Duration</label>
                                <input type="text" class="form-control">
                            </div>
                            <p>
                                <strong>Video tracking 3rd (VAST)</strong> <a href="#" data-toggle="modal" data-target="#trackingModal" data-dismiss="modal">[Xem]</a>
                            </p>
                            <div class="form-group">
                                <label for="">True view</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="">Platform</label>
                                <p>
                                    <input type="checkbox">
                                    <label for="">PC</label>
                                </p>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Mobile</label>
                                </p>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="">Vị trí PC</label>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Giữa bài</label>
                                </p>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Chân bài</label>
                                </p>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Tin liên quan</label>
                                </p>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Tin stream</label>
                                </p>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Cột phải vị trí 1</label>
                                </p>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Cột phải vị trí 2</label>
                                </p>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Chân bài trái</label>
                                </p>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Chân bài phải</label>
                                </p>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Box300x600</label>
                                </p>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="">Vị trí Mobile</label>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Giữa bài</label>
                                </p>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Chân bài</label>
                                </p>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Tin liên quan</label>
                                </p>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Tin stream</label>
                                </p>
                                <p>
                                    <input type="checkbox">
                                    <label for="">Chân trang</label>
                                </p>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="">Background Color</label>
                                <div class="minicolors minicolors-theme-default minicolors-position-bottom minicolors-focus">
                                    <input type="text" name="nativeads_color" id="nativeads_color" class="form-control minicolors-input" size="7">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="">Font Color</label>
                                <div class="minicolors minicolors-theme-default minicolors-position-bottom minicolors-focus">
                                    <input type="text" name="nativeads_color" id="nativeads_color" class="form-control minicolors-input" size="7">
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="">Config</label>
                                <input type="text" class="form-control">
                                <small>10000 ký tự</small>
                            </div>
                            <div class="form-group">
                                <label for="">Script tracking</label>
                                <input type="text" class="form-control">
                                <small>10000 ký tự</small>
                            </div>
                        </div>
                    </fieldset>
                </div>
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
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">creativeView</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">start</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">midpoint</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">firstQuartile</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">thirdQuartile</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">complete</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">mute</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">unmute</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-md-12 form-group tracking-group">
                        <label for="">pause</label>
                        <input type="text" class="form-control">
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
