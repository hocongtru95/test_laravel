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




<div id="modal-demo" class="modal">
    <h1>Banner generate</h1>
    <form action="" id="frm-banenr">
        <table>
            <tr>
                <td>Name: </td>
                <td><input type="text" name="txt_name" class="txt_name" placeholder="Enter your banner name"></td>
            </tr>
            <tr>
                <td>Description: </td>
                <td><textarea type="textarea" name="txt_description" class="txt_description" placeholder="Enter your banner description"> </textarea></td>
            </tr>
            <tr>
                <td><input type="submit" value="Gen"></td>
            </tr>
        </table>
    </form>
    <a href="#modal-demo2" rel="modal:open">Open new modal</a>
</div>

<div id="modal-demo2" class="modal">
    this modal 2
    <a href="#modal-demo3" rel="modal:open">Open new modal</a>
</div>

<div id="modal-demo3" class="modal">
    this modal 3
</div>

<a href="#modal-demo" class="open-modal" rel="modal:open">Open Modal</a>



    <script src="{{ url('js/app.js') }}"></script>
    <script>
        $(document).ready(function () {
            $('.open-modal').click(function (event) {
                event.preventDefault();
                $(this).modal({
                    fadeDuration: 100
                });
                return false;
            });
            $('#frm-banenr').submit(function () {
                var data = $(this).serializeArray();
                var obj = {};
                for (x in data) {
                    obj[data[x].name] = data[x].value;
                }
                console.log(JSON.stringify(obj));
                return false;
            });

        });
    </script>
</body>
</html>
