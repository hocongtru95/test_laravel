<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Jwplayer</title>
    <script src='https://cdn.jwplayer.com/libraries/g0ISAu4j.js'></script>
    <style>
        #player {
            margin: 0 auto;
        }
    </style>
</head>
<body>
<div id="player">Loading the player...</div>
<script>
    // setup
    const player = jwplayer('player').setup({
        file: '{{ url('video/video-test.mp4') }}',
        title: 'Basic Video Embed',
        height: 300,
        width: 450,
        skin: {
            name: "vavo"
        },
        image: '{{ url('image/nha.png') }}',
        sharing: {
            sites: ["facebook","twitter","email","linkedin","pinterest"]
        },
        intl: {
            en: {
                sharing: {
                    heading: "Chia sẻ video của bạn"
                }
            }
        },
        //autostart: 'viewable',
        advertising: {
            client: 'vast',
            adscheduleid: '16543125',
            skipoffset: 1,
            skipmessage: 'Bỏ qua sau XX',
            mute: true,
            schedule: [
                {
                    //offset: '00:00:05',
                    tag: '{{ url('vast/Inline_Companion_Tag-test.xml') }}'
                }
            ]
        }
    });

    // listen to event
    player.on('pause', (event) => {
        alert('Why did my user pause their video instead of watching it?');
    });

    // call API
    const bumpIt = () => {
        const vol = player.getVolume();
        player.setVolume(vol - 10);
    };
    bumpIt();

</script>
</body>
</html>
