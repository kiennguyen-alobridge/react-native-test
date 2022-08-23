function admItvcInline() {
    var secureToken = "L3NlY3VyZS92ZXJpZnkveHZxcmNhZGhlYmZpMHY1dm5zM2Ywd3d3a3Y2MDdkMDgvMTAwMTAyL2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp5WldZaU9pSWlMQ0poY0hCclpYa2lPaUo0ZG5GeVkyRmthR1ZpWm1rd2RqVjJibk16WmpCM2QzZHJkall3TjJRd09DSXNJbkJzWVhsbGNpSTZJakV3TURFd01pSXNJbWxuYm05eVpVVjRjR2x5WVhScGIyNGlPblJ5ZFdVc0ltbGhkQ0k2TVRVMU9Ea3pNRGcxTWl3aVpYaHdJam94TlRVNE9UTXdPVGN5ZlEuMU5JbUx0MXkwQ09jSFlpaGpWYnB3S3dVaWlZcHRsSHYwbUJvS1k3YXJhQQ==";
    var iOS = /iPhone|iPod/.test(navigator.userAgent);

    var admPlayers = document.getElementsByClassName("player_video_inline");

    for (var i = 0; i < admPlayers.length; i++) {
        try {
            var currentElm = admPlayers[i];
            var dataAttr = JSON.parse(currentElm.getAttribute('data-src'));
            var dataVideo = dataAttr.shift();

            currentElm.innerHTML = boxVideoHtml(dataVideo);

            var fileVideo = 'kenh14cdn.com/' + dataVideo.FileName;

            if (fileVideo.indexOf('/kingcontent/') >= 0) {
                fileVideo = dataVideo.FileName;
            }

            var params = {
                vid: fileVideo,
                autoplay: false,
                onlyAds: false,
                mute: false,
                skipads: false,
                volume: 0.5,
                poster: dataVideo.Thumb,
                control: true,
                muted: true,
                adMuteToggle: false,
                noAdSkip: false,
                noAdMute: false
            };

            playerInitScript("khub-video-inline-" + dataVideo.Id, {
                params: params,
                secure: secureToken,
                plugins: {
                    adsVastPlugin: {},
                    countdownPlugin: false
                }
            }, function () {
                var player = this;
                var wrap_player_elm = this.el_.parentNode.parentNode.parentNode;

                wrap_player_elm.querySelector(".khub-item-openinap").addEventListener('click', function () {
                    var id = this.getAttribute('data-id');
                    if (/iPhone/i.test(navigator.userAgent)) {
                        window.location = 'vcc-kenh14://videok14.id' + id;
                        setTimeout(function () {
                            window.location = "https://itunes.apple.com/vn/app/kenh-14/id670518264?mt=8"
                        }, 500)
                    }
                    if (/Android/i.test(navigator.userAgent)) {
                        window.location = 'vcc-kenh14://videok14.id' + '158968';
                        setTimeout(function () {
                            window.location = "https://play.google.com/store/apps/details?id=vcc.mobilenewsreader.kenh14&hl=en"
                        }, 500)
                    }
                }, !1);

                /**
                 * Set view of video
                 */
                getJSON('https://api.kinghub.vn/video/api/v1/detailVideoByGet?FileName=' + getFileFromVid(player.mediaInfo.vid), function (json) {
                    if(parseInt(json.views) == 0){
                        wrap_player_elm.querySelector(".khub-item-view").style.display = 'none';
                    }else{
                        wrap_player_elm.querySelector(".khub-item-view").innerHTML = abbrNum(parseInt(json.views), 0);
                    }
                });

                function getFileFromVid(vid){
                    var arr = vid.split('/');
                    return vid.replace(arr[0] + '/', '');
                }

                function handleTouchScroll() {
                    if (isScrolledIntoView(player.el_)) {
                        player.play();
                    } else {
                        player.pause();
                    }
                }

                document.addEventListener("scroll", handleTouchScroll, false);
            });

        } catch (e) {
            console.log(e);
        }
    }

    var css = '.admReplayVideo .loading{ -webkit-animation: spinLoading 1.5s linear infinite; animation: spinLoading 1.5s linear infinite; z-index: 99999; position: absolute; left: 42%; width: 50px; top: 42%; display: none; } .inlinePlayer { display: inline; height: 100%; float: left;} .icon-rotate:before{content:"";position: absolute;left:0;width: 100%;height: 100%;background: #000;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-o-border-radius:50%;opacity: 0.4;z-index: 1;	}#count-loop .fix-pos:after{content: "";position: absolute;width: 100%;height: 100%;opacity: 1;background: #000;top: 1px;left: 0;z-index: 1;border-radius: 3px;-webkit-border-radius: 3px;-moz-border-radius: 3px;-o-border-radius: 3px;}#pro-video{width:0%;}.mute .fix-pos:hover:after{opacity: 0.6} .IIV::-webkit-media-controls-start-playback-button { opacity: 0; pointer-events: none; width: 5px; } .admReplayVideo { max-width: 100%; } *::-webkit-media-controls-start-playback-button { display: none!important; -webkit-appearance: none; }';
    css = css + '@-webkit-keyframes spinLoading { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }';
    css = css + '@keyframes spinLoading { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }';
    css = css + '.player_video_inline{flex: auto; -webkit-flex: auto; position: relative; border-bottom: 1px solid #ddd; border-right: 0px !important; border-left: 0px !important; margin: 0px -10px 10px -10px;} .play_video_inline{position: relative;} .player_video_inline img.poster{position: relative; width: 100%; z-index: 1;} .player_video_inline video{width: 100%; height: 100%; object-fit: contain;} .player_video_inline .khub-play-pause span{color: transparent; display: block;width: 70px;height: 70px; position: absolute; top: 50%; left: 50%;margin-top: -35px; margin-left: -35px; z-index: 99; } .player_video_inline .khub-play-pause .khub-play{background-image: url("https://adi.admicro.vn/adt/cpc/tvcads/files/others/0716/videoplayer/play_1468988097.png");} .player_video_inline .khub-play-pause .khub-pause{background-image: url("https://adi.admicro.vn/adt/cpc/tvcads/files/others/0716/mobileplayer/pause.png"); display: none;}';
    css = css + '.player_video_inline .khub-video-wrapper{ margin: auto; width: 100%; }';
    css = css + '.khub-js-progress { width: 100%; height: 2em; display: inline-block; position: absolute; z-index: 10; bottom: 0px; left: 0px; padding-top: 3px; }  .khub-js-progress-left { white-space: nowrap; height: 1.5em; line-height: 1.5em; position: relative; display: table-cell; } .khub-js-progress-center { display: table-cell; width: 100%; vertical-align: middle; } .khub-js-progress:before { display: block; width: 100%; height: 150%; position: absolute; bottom: 0; left: 0; background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)); content: ""; background-image: -webkit-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)); background-image: -moz-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)); } .khub-js-progress-right { white-space: nowrap; height: 1.5em; position: relative; line-height: 1.5em; vertical-align: middle; display: table-cell; } .js-text { font-size: 12px; color: #fff; padding: 0 .5em; } .js-rail-progress{position: relative; height: .2em; border-radius: 0; background-color: #666666;} .js-load-progress{height: .2em; border-radius: 0; background-color: #969696; position: absolute; top: 0px; left: 0px; width: 0%;} .js-play-progress{height: .2em; border-radius: 0; background-color: #ff4b00; position: absolute;top: 0px; left: 0px; width: 0%;} .js-seek-handle{position: absolute; top: -4px; width: 12px; height: 12px; background: #ff5400; border-radius: 100%; }';
    // css = css + 'img.loading{width: 40px; position: absolute; left: 50%; top: 50%; z-index: 999; margin-left: -20px; margin-top: -20px; animation: spinLoading 1.5s linear infinite; -webkit-animation: spinLoading 1.5s linear infinite;}';
    css = css + '.player_video_inline .khub-video-wrapper span.fullscreen{ display: none; position: absolute; width: 25px; height: 25px; right: 10px; top: 0; top: 10px; color: transparent; z-index: 9; background: url("https://adi.admicro.vn/adt/cpc/tvcads/files/others/1016/playerinlinek14/fullscreen.png"); }';
    css = css + '@-webkit-keyframes spinLoading { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }';
    css = css + '@keyframes spinLoading { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }';
    css = css + '::-webkit-scrollbar {display: none;} @keyframes popupFadein{ from{opacity: 0; } to{opacity: 1;} } @-webkit-keyframes popupFadein{ from{opacity: 0; } to{opacity: 1;} }';
    css = css + '.player_video_inline.inplay:after{content: ""; width: 100%; height: 800px; float: left; position: absolute; bottom: -800px; background: rgba(0,0,0,0.7); z-index: 9999;} .player_video_inline.inplay:before{content: ""; width: 100%; height: 800px; float: left; position: absolute; top: -800px; background: rgba(0,0,0,0.7); z-index: 9999;}';
    css = css + '.player_video_inline .khub-item-bottom{display: inline-block; position: relative; padding: 8px 0px 10px 0px; width: 100%; background: #f1f1f1;} .player_video_inline .khub-item-bottom .khub-item-view{display: inline-block; margin-top: 3px; background: url("https://adi.admicro.vn/adt/cpc/tvcads/files/others/1016/playerinlinek14/video-m-icon-view1.png?v=1") no-repeat left center; background-size: contain; height: 10px; line-height: 10px; padding-left: 20px; color: #222; font-size: 11px; margin-left: 8px; margin-right: 3px;}';
    css = css + '.player_video_inline .khub-item-title{font-weight: normal;padding: 10px 12px;font-size: 20px; background: #f1f1f1; border-bottom: 1px solid #ccc;} .player_video_inline .khub-item-title a{ color: #222;}';
    css = css + '.swiper-container{overflow: visible;} .player_video_inline .khub-item-share-fb{padding: 10px; color: #222; font-size: 11px;} .player_video_inline .khub-item-share-fb img{ margin-bottom: -2px; margin-right: 5px; height: 15px; width: 15px; } .player_video_inline .khub-item-openinap { display: inline-block; height: 10px; float: right; margin-top: 5px; margin-right: 10px; color: #222; font-size: 11px; letter-spacing: 0.5px; opacity: 0.6; background: url("https://adi.admicro.vn/adt/cpc/tvcads/files/others/1016/playerinlinek14/video-m-icon-cta1.png?v=1") no-repeat right center; background-size: 10px; padding-right: 18px; line-height: 9px; } .player_video_inline .openinap img{max-width: 100%;}';
    css = css + '.vast-skip-button{ width: 101px; height: 28px; border: 1px solid; border-right: 0; border-top-left-radius: 8px; border-bottom-left-radius: 8px; background-color: rgba(0,0,0,.75); text-align: center; line-height: 28px; font-weight: 700; font-size: 13px; cursor: pointer; position: absolute; top: 10%; right: 0; z-index: 99; color: #fff; } .vast-skip-button:before { content: "Bạn có thể bỏ qua sau:"; position: relative; top: 1px; position: absolute; top: -15px; width: 117px; right: inherit; height: 13px; background-color: rgba(0,0,0,.75); font-style: italic; line-height: 11px; font-size: 10px; } .vast-skip-button.skipable:before{display: none;}';
    css = css + '.player_video_inline .khub-video-wrapper .clickLink { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 9; } .khub-player-wrapper { position: relative; } .khub-play-pause span { transition-duration: 0.1s; } .khub-play-pause.khub-playing .khub-pause { display: block; } .khub-play-pause.khub-playing .khub-play{ display: none; } .khub-js-progress.khub-control-hidden {transition-delay: 2s; transition-duration: 0.1s; visibility: hidden; opacity: 0; }';

    addStyle(css);

    function boxVideoHtml(object) {
        var fixedHeight = screen.width * 360 / 640;

        var html = '<style>#khub-video-inline-' + object.Id + '{ height: ' + fixedHeight + 'px !important; width: 100%;}</style><div id="player_video_inline_' + object.Id + '" class="khub-item-wrapper">'
        html += '<div class="khub-video-wrapper">'
        html += '<div class="khub-player-wrapper">'
        html += '<video id="khub-video-inline-' + object.Id + '" class="video-inline" preload="auto" width="100%" height="100%" playsinline webkit-playsinline data-keyvideo="' + object.KeyVideo + '" type="video/mp4"></video>'
        html += '</div>'
        html += '</div>'
        html += '<h3 class="khub-item-title"><a href="' + object.Url + '" title="' + object.Name + '">' + object.Name + '</a></h3>'
        html += '<div class="khub-item-bottom">'
        html += '<span class="khub-item-view">0</span><a class="khub-item-share-fb" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://m9.channelvn.net' + object.Url + '&title=' + object.Name + '"><img src="https://adi.admicro.vn/adt/cpc/tvcads/files/others/1016/playerinlinek14/video-m-icon-share1.png?v=1" alt="' + object.Name + '"> Share</a>'
        if (iOS) {
            html += '<span class="khub-item-openinap" data-id="' + object.Id + '">Xem nhanh hơn tại app</span>'
        } else {
            html += '<a href="intent:#Intent;package=vcc.mobilenewsreader.kenh14;action=vcc.mobilenewsreader.kenh14;category=android.intent.category.DEFAULT;category=android.intent.category.BROWSABLE;S.msg_from_browser=videok14.id' + object.Id + ';end"><span class="khub-item-openinap" data-id="' + object.Id + '" >Xem nhanh hơn tại app</span></a>'
        }
        html += '</div></div>'

        return html
    }

    function formatTime(seconds) {
        minutes = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        return minutes + ":" + seconds
    }

    function addStyle(a, b, c) {
        b = void 0 == b ? null : "" + b;
        if (void 0 == c) c = 1;
        else switch (c = c.toLowerCase(), c) {
            case "overwrite":
                c = 2;
                break;
            case "append":
                c = 3;
                break;
            default:
                c = 1
        }
        var e = document.head || document.getElementsByTagName("head")[0],
            d = null;
        if (null != b)
            for (var h = e.getElementsByTagName("style"), g = 0, f = h.length; g < f; ++g)
                if (h[g].getAttribute("name") == b) {
                    if (1 == c) return !0;
                    d = h[g];
                    break
                }
        null == d && (d = document.createElement("style"), d.type = "text/css", b && d.setAttribute("name", b), e.appendChild(d), c = 2);
        d.styleSheet ? d.styleSheet.cssText = 2 == c ? a : d.styleSheet.cssText + a : (2 == c && (d.innerHTML = ""), a = document.createTextNode(a), d.appendChild(a));
        return !0
    }

    /**
     * Add class (b) to element(a)
     * @param a Element
     * @param b Class name
     */
    function addClassName(a, b) {
        var c = a.className || "";
        if ("" == c) a.className = b;
        else {
            var e = c.split(" ");
            inArray(b, e) || (a.className = c + " " + b)
        }
    }

    /**
     * Remove class (b) to e element(a)
     * @param a Element
     * @param b Class name
     */
    function removeClassName(a, b) {
        for (var c = a.className || "", e = c.split(" "), d = 0, h = e.length; d < h; ++d) e[d] == b && (e[d] = null);
        c = "";
        d = 0;
        for (h = e.length; d < h; ++d) null !== e[d] && (c += " " + e[d]);
        a.className = c.substr(1)
    }

    function inArray(a, b, c) {
        var k;
        if (c)
            for (k in b) {
                if (b[k] === a) return !0
            } else
            for (k in b)
                if (b[k] == a) return !0;
        return !1
    }

    function isScrolledIntoView(elem) {
        if (elem == null || elem == undefined) return;

        var elemTop = getElementTop(elem);
        var elemBottom = elemTop + elem.clientHeight;
        var viewportTop = window.pageYOffset;
        var viewportBottom = viewportTop + window.innerHeight;

        return ((elemBottom <= viewportBottom) && (elemTop >= viewportTop));
    }

    function getElementTop(Elem) {
        if (Elem != null) {
            yPos = Elem.offsetTop;
            tempEl = Elem.offsetParent;
            while (tempEl != null) {
                yPos += tempEl.offsetTop;
                tempEl = tempEl.offsetParent
            }
            return yPos
        } else {
            return 0
        }
    }

    function abbrNum(number, decPlaces) {
        decPlaces = Math.pow(10, decPlaces);
        var abbrev = ["k", "m", "b", "t"];
        for (var i = abbrev.length - 1; i >= 0; i--) {
            var size = Math.pow(10, (i + 1) * 3);
            if (size <= number) {
                number = Math.round(number * decPlaces / size) / decPlaces;
                if ((number == 1000) && (i < abbrev.length - 1)) {
                    number = 1;
                    i++
                }
                number += abbrev[i];
                break
            }
        }
        return number
    }

    function getJSON(url, successHandler, errorHandler) {
        var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', url, !0);
        xhr.onreadystatechange = function () {
            var status;
            var data;
            if (xhr.readyState == 4) {
                status = xhr.status;
                if (status == 200) {
                    data = JSON.parse(xhr.responseText);
                    successHandler && successHandler(data)
                } else {
                    errorHandler && errorHandler(status)
                }
            }
        };
        xhr.send()
    }
}

function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) { // only required for IE <9
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript('https://adminplayer.sohatv.vn/resource/init-script/playerInitScript.js', function () {
    admItvcInline();
});
