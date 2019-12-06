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

<a href="hocongtru.site">This link to test </a>
<a href="nguyenthixuyen.site">This link to test 3</a>
<a href="hocongtru.site">This link to test 2</a>


<script src="{{ url('js/app.js') }}"></script>
<script>
    function sortSelect(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) min = j;
            }
            let t = arr[i];
            arr[i] = arr[min];
            arr[min] = t;
        }
        return arr;
    }
    //console.log(sortSelect([4, 6, 12, 18, 2, 25, 11, 5]));

    function insertionSort(array){
        let pos, x;
        for(let i = 1; i < array.length; i++){
            pos = i - 1;
            x = array[i];
            while(pos >= 0 && array[pos] > x){
                array[pos + 1] = array[pos];
                pos--;
            }
            array[pos + 1] = x;
        }
        return array;
    }

    console.log(insertionSort([4, 6, 12, 18, 2, 25, 11, 5]));

</script>

</body>
</html>
