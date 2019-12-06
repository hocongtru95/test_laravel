
function checkSend(){
    if(typeof admid != 'undefined'){
        var str = admid.split('_'),
            zid = str[1];
        parent.window['adnzone'+zid].checkSend();
    }
}

function admDefault(){
    var strkey=admid.split('_');
    parent.AdmLoadDefault(strkey[0]+'_'+strkey[1]);
}

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;

    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }

    return frag;
}

function _admloadJsTracking(c, b) {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = !0;
    a.src = c;
    2 <= arguments.length && (a.onload = b, a.onreadystatechange = function() {
        4 != a.readyState && "complete" != a.readyState || b()
    });
    document.getElementsByTagName("head")[0].appendChild(a)
};

_admloadJsTracking('https://pixel.adsafeprotected.com/rjss/st/362816/40724925/skeleton.js', function() {});


function _admloadJs(c, b) {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = !0;
    a.src = c;
    2 <= arguments.length && (a.onload = b, a.onreadystatechange = function() {
        4 != a.readyState && "complete" != a.readyState || b()
    });
    document.getElementsByTagName("head")[0].appendChild(a)
};
_admloadJs('https://direct.adsrvr.org/bid/bidhelper.js', function() {

    var noFlash = 0;
    if (typeof BidHelper === 'function') {
        var bidHelper = new BidHelper();
        noFlash = !bidHelper.isFlashSupported();
    }

    var ua=(parent.navigator.userAgent+'').toLowerCase();
    var chkbr=ua.indexOf('firefox')==-1;
    if(chkbr)
    {
        var a = '<iframe id="adm_ttd_iframe" src="' + 'https://direct.adsrvr.org/bid/bidder/publisherdirect/?w=1160&h=250&did=ttdd-q3cqesz-ztfrd4r&ord=%%CACHEBUSTER%%&noflash=' + noFlash + '&admGetUrlCk='+encodeURIComponent(admGetUrlCk())+'&__admLink='+encodeURIComponent(__admLink)+'" width="1160" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" bordercolor="#000000"></iframe>';
        // var a = "<div id='div-gpt-ad-1564155132354-0' style='height:250px; width:1160px;'>";
        document.body.appendChild(create(a));

        var b = parent.document.getElementById(admid);
        b.style.width = "100%";
        if (admid.indexOf('adnzone') != -1 || admid.indexOf('cpmzone') != -1) {
            b.parentNode.style.width = '100%';
        }
        var f = b.parentNode.id;
        if (!f || f == null || f == '') {
            f = admid + '_div';
            b.parentNode.id = admid + '_div';
        }
        var a = parent.wPrototype.getElementWidth(f);
        window.setTimeout(function() {
            var a = parent.wPrototype.getElementWidth(f),
                a = 980 > a ? 980 : a,
                b = document.body,
                a = Math.floor((1160 - a) / 2);
            b.style.marginLeft = "-" + (0 > a ? 0 : a) + "px";
        }, 100);
    }
    else{
        admDefault();
    }

})


var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

eventer(messageEvent,function(e) {
    var key = e.message ? "message" : "data";
    var data = e[key];
    var str = admid.split('_'),
        zid = str[1];

    if(data == "admDefault")
    {
        admDefault();
        (new Image()).src = "//lg1.logging.admicro.vn/admt?dmn="+encodeURIComponent(parent.__admURL)+parent.__AdmsendRandom+"&cmpg=23705&items=74505&zid="+zid+"&cid=-1&tp=11&tpn=4";
    }
    if(typeof data == "object" &&  data.action != "undefined" && data.action == "clickthru")
    {
        cpmtkc();
    }

},false);
