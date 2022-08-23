$(document).ready(function () {
    var zoneID = $('#hdZoneId').val(), urlAjax, keys, news = $('#hdNewsId').val(), keyword = $('#hdKeyword').val(), tag = $("#hdCatUrl").val();
    urlAjax = (tag) ? "timeline/tag.chn?keywords={0}&page={1}" : ((keyword) ? "timeline/search.chn?keywords={0}&page={1}" : ((news) ? "/timelinedetail/{0}/{1}.chn" : "/timelinelist/{0}/{1}.chn"));
    keys = (tag) ? tag : ((keyword) ? keyword : zoneID);

    $(window).scroll(function () {

        x = ($(window).scrollTop() + $(window).height());
        y = 0;
        if ($('.list__viewmore').length > 0)
            y = ($('.list__viewmore').offset().top);
        if (x >= y && y != 0 && checkScroll == true) {
            if (countScroll == 3 || news) {
                checkScroll = false;
            }
            else {
                var options = {
                    url: urlAjax,
                    keys: keys,
                    page: page
                }
                $('.list__center').css({ "display": "none" });
                $('.box-stream-item-load').css({ "display": "flex " });
                $('.box-stream-load').css({ "display": "flex " });
                timeline.GetData(options);
            }
        }
    });
    $('.list__viewmore').off('click').on('click', function () {
        var options = {
            url: urlAjax,
            keys: keys,
            page: page
        }
        $('.list__center').css({ "display": "none" });
        $('.box-stream-item-load').css({ "display": "flex " });
        $('.box-stream-load').css({ "display": "flex " });
        timeline.GetData(options);
    })
});
//Plugin Loadmore
var checkScroll = true, isLoading = true, countScroll = 0, x = 0, y = 0, page = 2;
var timeline = function () {
    var obj = {
        delaySucces: 1000
    }

    function GetData() {
        if (!isLoading)
            return;
        isLoading = false;
        $.ajax({
            url: String.format(obj.url, obj.keys, obj.page),
            method: "GET",
            async: true
        }).done(function (response) {
            countScroll++;
            page++;
            isLoading = true;
            if (response == "") {
                checkScroll = false;
                $('.box-stream-item-load').css({ "display": "none" });
                $('.box-stream-load').css({ "display": "none" });
                $('.list__center').css({ "display": "none" })
            }
            else {
                setTimeout(function () {
                    bindData(response);
                }, obj.delaySucces);
            }
        }).fail(function (response) {
            //isLoading = true;
            console.log(response);
        })
    }
    function bindData(data) {
        $('.box-stream-item-load').css({ "display": "none" });
        $('.box-stream-load').css({ "display": "none" });
        $('.list__center').css({ "display": "block" });
        $(data).insertBefore('.box-stream-item-load');
    }

    return {
        GetData: function (options) {
            obj = $.extend(obj, options);
            GetData();
        }
    };
}(jQuery);
