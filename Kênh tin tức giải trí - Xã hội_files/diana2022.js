var diana2022ApiUrlkenh14 = "https://static1.admicro.vn/microsite/diana2022/styles_v2.json";

var diana2022Kenh14 = {
    init: function () {
        var me = this;
        let $wrapt = $(`#diana2022`);
        $wrapt.each(function (i, v) {
            me.callData($(v));
        });
    },
    callData: function ($block) {
        let zoneId = $block.data("zoneconfig");
        let tempId = $block.data("templateid");
        var me = this;

        $.ajax({
            url: diana2022ApiUrlkenh14,
            type: "GET",
            beforeSend: function () {
            },
            success: function (res) {
                let rs = res;
                //$block.removeAttr('rel');

                let arrCss = rs.cssFiles;
                for (let i = 0; i < arrCss.length; i++) {
                    let link = document.createElement("link");
                    link.href = arrCss[i];
                    link.type = 'text/css';
                    link.rel = 'stylesheet';
                    document.getElementsByTagName("head")[0].appendChild(link);
                }

                let arrJs = rs.jsFiles;
                for (let i = 0; i < arrJs.length; i++) {
                    let flag = false;
                    if ((i + 1) === arrJs.length) flag = true;

                    $.getScriptCached(arrJs[i], function () {
                        if (flag) {
                            if (rs.Success) {
                                if ((rs.FuncInit != null) && (rs.FuncInit.length > 0)) {
                                    window[rs.FuncInit](rs, $block, zoneId, tempId);
                                }
                            }
                        }
                    });
                }
            }
        });
    },
    isMobileBrowser: function () {
        return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || typeof orientation != "undefined" || navigator.userAgent.indexOf("IEMobile") != -1 ? !0 : !1
    },
    isTabletBrowser: function () {
        const n = navigator.userAgent.toLowerCase();
        return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(n)
    },
    getCookie: function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    setCookie: function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    addCommas: function (nStr) {
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    },
};


let intervalDiana2022Kenh14 = setInterval(function () {
    if ($ !== undefined) {
        clearInterval(intervalDiana2022Kenh14);
        initDiana2022Kenh14();
    }
}, 1000);

function initDiana2022Kenh14() {
    $(document).ready(function () {
        diana2022Kenh14.init();
    });
    (function ($) { $.getScriptCached = function (url, callback) { return $.ajax({ url: url, dataType: "script", cache: true }).done(callback) } })(jQuery)
}
