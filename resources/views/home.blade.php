<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<script>
    var img = new Image();
    // img.onload = function () {
    //     if (this.width < this.height) {
    //         alert('Anh doc');
    //     }
    //     else {
    //         alert('Anh ngang');
    //     }
    // }
    img.src = '{{ url('image/hinh_anh_2.jpg') }}';

</script>

@php
    $data = list($width, $height) = getimagesize(url('image/hinh_anh_2.jpg'));
    dd($data);
@endphp

<script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="dist/jquery.watermark.min.js"></script>

</body>
</html>
