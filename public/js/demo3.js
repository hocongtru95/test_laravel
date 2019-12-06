var _lgPassback = '';
var lk_inpage = adminfor.logging;
var _tkinpage = lk_inpage.match(/href="([^"]*)/)[1];

function removeParam(key, sourceURL) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}

_retadminpage = removeParam('re', _tkinpage);

var _admDomain=document.URL,_eva=0;
if(_admDomain.indexOf("https://eva.vn") == -1){
    document.getElementById("admbackground").style.position = "relative";
    document.getElementById("admbackground").style.zIndex = "-1";
    document.getElementById("admbackground").style.visibility = "hidden";
    document.getElementById("admbackground").style.opacity = "0";
}
else{
    _eva=1;
}

function banInpageSizmek(_inpage_width){
    ifrm = document.createElement("iframe");
    ifrm.id="ban-inpage1";
    ifrm.style.width = (_inpage_width/2)+"px";
    ifrm.style.height = (_inpage_width)+"px";
    ifrm.style.display = 'block';
    ifrm.style.border='none';
    ifrm.scrolling = "no";
    ifrm.setAttribute("allowfullscreen", "true");
    ifrm.setAttribute("webkitallowfullscreen", "true");
    ifrm.setAttribute("mozallowfullscreen", "true");
    ifrm.src = "about:blank";

    document.getElementById('adm-inpage-h').appendChild(ifrm);

    var _ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;
    _ifrm.document.open();
    _ifrm.document.write('<!DOCTYPE html><html><head><title></title><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> <script type="text/javascript">var _width='+ _frame_h_inpage+';var scaleRatio=_width/375;var css="iframe{overflow:hidden;transform:scale("+scaleRatio+");transform-origin: 0 0;-webkit-transform:scale("+scaleRatio+");-webkit-transform-origin: 0 0;}",head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css";if(!!(window.attachEvent&&!window.opera)){style.styleSheet.cssText=css;}else{style.appendChild(document.createTextNode(css));} head.appendChild(style);</script></head><body style="margin: 0" class="adsdcm"><style type="text/css">#abgc{display:none}#cbb{display:none}</style><ins class="dcmads" style="display:inline-block;width:375px;height:750px" data-dbm-deal="8211202_359511" data-dcm-resettable-device-id="" data-dcm-child-directed="" data-dcm-limit-ad-tracking="" data-dcm-publisher-url="" data-dcm-app-id="" data-dcm-click-tracker="'+encodeURIComponent(_retadminpage+"&re=")+'" data-dcm-landing-page-escapes=1 data-dcm-api-frameworks="[APIFRAMEWORKS]" data-dcm-omid-partner="[OMIDPARTNER]"> <script src="https://www.googletagservices.com/dcm/dcmads.js"><\/script> <\/ins></body></html>');
    _ifrm.document.close();
}

if (!ADM_CHECKER.isFacebookApp() && windowPrototype.wdWidth() < windowPrototype.wdHeight()) {
    window.inpagefullpage = 1;

    var _frame_w_inpage = screen.height > windowPrototype.wdHeight() ? screen.height : windowPrototype.wdHeight();
    var _frame_h_inpage = screen.width > windowPrototype.wdWidth() ? windowPrototype.wdWidth() : screen.width;



    var _padding = 20;
    var _pIH = windowPrototype.wdHeight() - windowPrototype.wdWidth() * 2;

    function gen_inpage() {
        var html_inpage = '<style>#ban-inpage1{margin:0 auto;display: block;}#adm_inpage{margin-top:20px}</style><div id="admbackground_1" style="position: absolute;width: 100%;height: ' + (_frame_w_inpage+80) + "px;clip: rect(0 " + (_frame_h_inpage) + "px " + (_frame_w_inpage+80) + "px -" + _padding + 'px);">' + '<div id="adm_inpage" style="display: inline-block;width: ' + _frame_h_inpage + "px;height: " + (_frame_w_inpage-100) + 'px;position: fixed;top: 0;left: 0;-webkit-backface-visibility: hidden;-webkit-transform: translate3d(0,0,0);">' + '<div id="adm-inpage-h" style="display: block;position: relative;"></div>' + "</div>" + "</div>";
        return html_inpage
    }
    document.getElementById("admbackground").style.margin = "0px auto";
    document.getElementById("admbackground").style.overflow = "initial";

    document.getElementById("admbackground").innerHTML = gen_inpage();
    banInpageSizmek(_frame_h_inpage);

    /*var time1=new Date().getTime();var time2=0;
    function checktimeload(){
        time2 = (new Date().getTime()) - time1;
    }

    window.setTimeout(function(){
        if(time2 == 0) banBackupHook73855();
    },3000);*/

    function doOnOrientationChange1() {
        if (window.orientation == 90 || window.orientation == -90) {
            document.getElementById("admbackground").style.display = "none";
        } else if (window.orientation == 0) {
            document.getElementById("admbackground").style.display = "block"
        }
    }

    document.getElementById("admbackground").style.height = (_frame_w_inpage+80) + "px";
    window.onorientationchange = doOnOrientationChange1;
    doOnOrientationChange1()


    window.addEventListener("message", receiveMessage, false);function receiveMessage(evt){
        if(evt.data == "passbackHookeye"){
            banBackupHook73855();
            window.removeEventListener("message", receiveMessage, false)
        }
    }

    function banBackupHook73855(){
        document.getElementById("admbackground").innerHTML='<div id="sspbid_'+adminfor.zonessp+'"></div>';

        if(typeof adminfor != 'undefined' && adminfor.loggingView){
            _lgPassback = adminfor.loggingView;
            var re_ban_id = new RegExp(adminfor.banid, "g");
            _lgPassback=_lgPassback.replace(re_ban_id, "73855");

            //admsendTracking(_lgPassback);
            document.addEventListener("touchmove", onSendLogPassback, false);
            document.addEventListener("scroll", onSendLogPassback, false);
        }

        if(typeof adminfor.sspcallback != "undefined" && adminfor.sspcallback){
            sspcallbackRedraw({zoneid:adminfor.zoneid,sspid:adminfor.zonessp,callback:adminfor.sspcallback});
        }else{
            document.getElementById("admbackground").style.display = "none";
            ADM_CHECKER.CreateStyleSheet("#admbackground{display: none !important}");

            window.parent.postMessage('passbackHookeyePopup', '*');

            document.removeEventListener("touchmove", onScrollInpageTTD73855, false);
            document.removeEventListener("scroll", onScrollInpageTTD73855, false);

            if(_eva){
                document.body.innerHTML='<iframe src="https://adi.admicro.vn/adt/cpc/tvcads/files/html/eva_inpage_061117/evainpage.html" height="750" width="375" scrolling="no" border="no" style="border: none"></iframe>';
            }
        }
    }


    var head_menu = document.getElementById("header_menu")?document.getElementById("header_menu"):'';

    var topElement = getElementTop("admbackground"),
        e_t = topElement + windowPrototype.wdHeight();

    var onScrollInpageTTD73855=function(){
        var _top = getScrollTop();
        if(document.getElementById("admbackground").style.opacity == "0"&&document.getElementById("admbackground").style.visibility == "hidden"){
            if(_top > (topElement - (windowPrototype.wdHeight()*7/4))){
                document.getElementById("admbackground").style.zIndex = "1";
                document.getElementById("admbackground").style.visibility = "visible";
                document.getElementById("admbackground").style.opacity = "1";
            }
        }
        if(document.getElementById("adm_inpage") && document.getElementById("adm_inpage").style.height != windowPrototype.wdHeight()+"px"){
            if(_top > (topElement - (windowPrototype.wdHeight()*5/4))){
                document.getElementById("adm_inpage").style.height = screen.height+"px";
                if(document.getElementById("ban-inpage1")){
                    document.getElementById("ban-inpage1").style.setProperty("height", screen.height+"px", "important");
                    document.getElementById("ban-inpage1").style.width = screen.width+"px";
                }
                document.getElementById("adm_inpage").style.marginTop = "0";
            }
        }

        if(head_menu)
            (head_menu.style.visibility = _top >= topElement - 60 && _top <= e_t ? "hidden" : "visible");

    }

    var onSendLogPassback = function(){
        var _top = getScrollTop();
        if(_lgPassback != ''){
            if(_top > (topElement - windowPrototype.wdHeight())){
                admsendTracking(_lgPassback);
                _lgPassback = '';
                document.removeEventListener("touchmove", onSendLogPassback, false);
                document.removeEventListener("scroll", onSendLogPassback, false);
            }
        }
    }

    document.addEventListener("touchmove", onScrollInpageTTD73855, false);
    document.addEventListener("scroll", onScrollInpageTTD73855, false);

}
