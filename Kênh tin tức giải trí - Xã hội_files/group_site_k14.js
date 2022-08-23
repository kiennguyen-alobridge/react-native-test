function groupSiteK14(){
	var content_height = document.getElementById("detail_content").offsetHeight;
	if(content_height/screen.height < 6){
		var  initClass = function() {
			if (!document.getElementById('admbackground')) {
				var articleLocator = document.getElementsByClassName("news-detail-container")[0];
				
				var height_check=0;
				for(var i = 0;i<articleLocator.childNodes.length;i++){
					if(articleLocator.childNodes[i].nodeName.toLowerCase() == 'script'){
						continue;
					}
					if(articleLocator.childNodes[i].nodeName.toLowerCase() != '#text'){
						height_check = articleLocator.childNodes[i].offsetTop + articleLocator.childNodes[i].offsetHeight;
						
						if(articleLocator.childNodes[i].className == 'post-content'){
							
							var _tmp = articleLocator.childNodes[i];
							for(var j=0;j<_tmp.childNodes.length;j++){
								if(_tmp.childNodes[j].nodeName.toLowerCase() != '#text'){
									height_check = _tmp.childNodes[j].offsetTop + _tmp.childNodes[j].offsetHeight;
									if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight/2){
										findTopLength(_tmp.childNodes[j]);
										break;
									}
								}
							}
						}else if(articleLocator.childNodes[i].className && articleLocator.childNodes[i].className.indexOf("LayoutAlbumWrapper") != -1){
							
							var _tmp = articleLocator.childNodes[i].getElementsByClassName("LayoutAlbumItem");
							for(var j=0;j<_tmp.length;j++){
								height_check = _tmp[j].offsetTop + _tmp[j].offsetHeight;
								if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight/2){
									findTopLength(_tmp[j]);
									break;
								}
							}
						}else{
							if(height_check>= (document.getElementsByClassName("news-detail-container")[0].offsetTop + (document.getElementsByClassName("news-detail-container")[0].offsetHeight/2))){
								findTopLength(articleLocator.childNodes[i]);
								break;
							}
						}
					}
				}
				
				/*var _ckdiv = Math.floor(articleLocator.childElementCount * 1 / 2);
				findTopLength(articleLocator.childNodes[articleLocator.childElementCount - 1], articleLocator.childNodes[_ckdiv]);*/
			}
		};
		
	}else if(content_height/screen.height < 10){
		var initClass = function() {
			if (!document.getElementById('admbackground')) {
				var articleLocator = document.getElementsByClassName("news-detail-container")[0].childNodes;
				
				var height_check=0,_stt=0;
				for(var i = 0;i<articleLocator.length;i++){
					
					if(articleLocator[i].nodeName.toLowerCase() == 'script'){
						continue;
					}
					
					if(articleLocator[i].nodeName.toLowerCase() != '#text'){
						height_check = articleLocator[i].offsetTop + articleLocator[i].offsetHeight;
						
						if(articleLocator[i].className == 'post-content'){
							
							var _tmp = articleLocator[i];
							for(var j=0;j<_tmp.childNodes.length;j++){
								if(_tmp.childNodes[j].nodeName.toLowerCase() != '#text'){
									height_check = _tmp.childNodes[j].offsetTop + _tmp.childNodes[j].offsetHeight;
									if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight/2){
										findTopLength(_tmp.childNodes[j]);
										//break;
									}
									if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight*3/4){
										if(_tmp.childNodes[j].classList.contains('alignRight')){
											findTopLength2(_tmp.childNodes[j-1]);
										}else findTopLength2(_tmp.childNodes[j]);
										break;
									}
								}
							}
						}else if(articleLocator[i].className && articleLocator[i].className.indexOf("LayoutAlbumWrapper") != -1){
							
							var _tmp = articleLocator[i].getElementsByClassName("LayoutAlbumItem");
							for(var j=0;j<_tmp.length;j++){
								height_check = _tmp[j].offsetTop + _tmp[j].offsetHeight;
								if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight/2){
									findTopLength(_tmp[j]);
									//break;
								}
								if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight*3/4){
									findTopLength2(_tmp.childNodes[j]);
									break;
								}
							}
						}
						else {
							if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight/2){
								findTopLength(articleLocator[i]);
								_stt=i;
								break;
							}
						}
					}
				}
				for(var i = _stt;i<articleLocator.length;i++){
					if(articleLocator[i].nodeName.toLowerCase() != '#text' && articleLocator[i].nodeName.toLowerCase() != 'script'){
						height_check = articleLocator[i].offsetTop + articleLocator[i].offsetHeight;
						
						if(articleLocator[i].className.indexOf("LayoutAlbumWrapper") != -1){
							
							var _tmp = articleLocator[i].getElementsByClassName("LayoutAlbumItem");
							for(var j=0;j<_tmp.length;j++){
								height_check = _tmp[j].offsetTop + _tmp[j].offsetHeight;
								if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight*3/4){
									findTopLength2(_tmp[j]);
									break;
								}
							}
						}
						
						if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight*3/4){
							findTopLength2(articleLocator[i]);
							break;
						}
					}
				}
				
				/*var _ckdiv = Math.floor(articleLocator.childElementCount * 1 / 2);
				findTopLength(articleLocator.childNodes[articleLocator.childElementCount - 1], articleLocator.childNodes[_ckdiv]);*/
			}
		};
	}else{
		var initClass = function() {
			if (!document.getElementById('admbackground')) {
				var articleLocator = document.getElementsByClassName("news-detail-container")[0].childNodes;
				
				var height_check=0,_stt=0;
				for(var i = 0;i<articleLocator.length;i++){
					
					if(articleLocator[i].nodeName.toLowerCase() == 'script'){
						continue;
					}
					
					if(articleLocator[i].nodeName.toLowerCase() != '#text'){
						height_check = articleLocator[i].offsetTop + articleLocator[i].offsetHeight;
						
						if(articleLocator[i].className == 'post-content'){
							
							var _tmp = articleLocator[i];
							for(var j=0;j<_tmp.childNodes.length;j++){
								if(_tmp.childNodes[j].nodeName.toLowerCase() != '#text'){
									height_check = _tmp.childNodes[j].offsetTop + _tmp.childNodes[j].offsetHeight;
									if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight/3){
										findTopLength(_tmp.childNodes[j]);
										//break;
									}
									if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight*2/3){
										findTopLength2(_tmp.childNodes[j]);
										break;
									}
								}
							}
						}else if(articleLocator[i].className && articleLocator[i].className.indexOf("LayoutAlbumWrapper") != -1){
							
							var _tmp = articleLocator[i].getElementsByClassName("LayoutAlbumItem");
							for(var j=0;j<_tmp.length;j++){
								height_check = _tmp[j].offsetTop + _tmp[j].offsetHeight;
								if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight/3){
									findTopLength(_tmp[j]);
									//break;
								}
								if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight*2/3){
									findTopLength2(_tmp.childNodes[j]);
									break;
								}
							}
						}
						else {
							if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight/3){
								findTopLength(articleLocator[i]);
								_stt=i;
								break;
							}
						}
					}
				}
				for(var i = _stt;i<articleLocator.length;i++){
					if(articleLocator[i].nodeName.toLowerCase() != '#text' && articleLocator[i].nodeName.toLowerCase() != 'script'){
						height_check = articleLocator[i].offsetTop + articleLocator[i].offsetHeight;
						
						if(articleLocator[i].className.indexOf("LayoutAlbumWrapper") != -1){
							
							var _tmp = articleLocator[i].getElementsByClassName("LayoutAlbumItem");
							for(var j=0;j<_tmp.length;j++){
								height_check = _tmp[j].offsetTop + _tmp[j].offsetHeight;
								if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight*2/3){
									findTopLength2(_tmp[j]);
									break;
								}
							}
						}
						
						if(height_check>=document.getElementsByClassName("news-detail-container")[0].offsetHeight*2/3){
							findTopLength2(articleLocator[i]);
							break;
						}
					}
				}
				
				/*var _ckdiv = Math.floor(articleLocator.childElementCount * 1 / 2);
				findTopLength(articleLocator.childNodes[articleLocator.childElementCount - 1], articleLocator.childNodes[_ckdiv]);*/
			}
		};
	}

	initClass();
	
	var div = document.querySelector("#admbackground");
    if (div != null) {
        div.innerHTML = '<div class="clearfix adv-box" id="adm-slot-8889"></div>';
        'undefined' == typeof admicroMAD.show ? admicroMAD.unit.push(function () { admicroMAD.show('adm-slot-8889') }) : admicroMAD.show('adm-slot-8889');
    }
    var div2 = document.querySelector("#admbackground2");
    if (div2 != null && (document.URL).indexOf("20210420150603619") == -1 &&  (document.URL).indexOf("20210630223812466") == -1) {
        div2.innerHTML = '<div class="clearfix adv-box" id="adm-slot-496601"></div>';
        'undefined' == typeof admicroMAD.show ? admicroMAD.unit.push(function () { admicroMAD.show('adm-slot-496601') }) : admicroMAD.show('adm-slot-496601');
    }
    
};


/*add event listenner*/
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", groupSiteK14);
} else {  // `DOMContentLoaded` already fired
    groupSiteK14();
}
/*end add event listenner*/


function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function findTopLength(curNode) {
	if(document.getElementById("admbackground")) return !1;
	var el = document.createElement("div");
	el.id = "advBotton";
	el.style = "clear: both;position: relative;opacity: 0;height: 0px;display: block;overflow: hidden;margin-bottom: 0;";
	el.innerHTML = '<div id="divend" style="height: 736px;display: block; visibility: visible; opacity: 1; background-color: rgb(255, 255, 255); position: relative; z-index: 5;"></div><input type="hidden" value="0" name="hid_height" id="hid_height"><input type="hidden" value="0" name="hid_width" id="hid_width"><input type="hidden" value="0" name="hid_scrollview" id="hid_scrollview">';
	insertAfter(curNode,el);

	var el = document.createElement("div");
	el.id = "admbackground";
	el.style = "padding: 0px; z-index: 9;";
	insertAfter(curNode,el);
	
	var el = document.createElement("div");
	el.id = "advTop";
	el.style = "position: relative;height: 0px;overflow: hidden;display: block;margin-bottom: 0;";
	el.innerHTML = '<div id="divfirst" style="height:736px;"></div>';
	insertAfter(curNode,el);

	/*var html_inpage = '<div id="advTop" style="position: relative;height: 0px;overflow: hidden;display: block;"><div id="divfirst" style="height:736px;"></div></div>'+
	'<div id="admbackground" style="padding: 0px; z-index: 9;"></div>'+
	'<div id="advBotton" style="clear: both;position: relative;opacity: 0;height: 0px;display: block;overflow: hidden;"><div id="divend" style="height: 736px;display: block; visibility: visible; opacity: 1; background-color: rgb(255, 255, 255); position: relative; z-index: 5;"></div><input type="hidden" value="0" name="hid_height" id="hid_height"><input type="hidden" value="0" name="hid_width" id="hid_width"><input type="hidden" value="0" name="hid_scrollview" id="hid_scrollview"></div>';
	
	if ((curNode.offsetTop) >= (screen.height)) {
		$(html_inpage).insertAfter(curNode);
	} else {
		$(html_inpage).insertAfter(endNode);
	}*/
}

function findTopLength2(curNode) {
	if(document.getElementById("admbackground2")) return !1;
    var el = document.createElement("div");
	el.id = "admbackground2";
	el.style = "padding: 0px; z-index: 9;";
	insertAfter(curNode,el);
	/*var html_inpage = '<div id="admbackground2" style="padding: 0px; z-index: 9;"></div>';
	$(html_inpage).insertAfter(endNode);*/
}


function isFacebookApp(){
	var ua = navigator.userAgent || navigator.vendor || window.opera;
	if (typeof _banruninpagefacebook != "undefined") return false;
	else return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1
}

function createStyleSheet(a) {
  var b = document,
		  c = b.createElement("style");
  c.type = "text/css";
  b.getElementsByTagName("head")[0].appendChild(c);
  c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(b.createTextNode(a))
}

if(isFacebookApp()){
	var css_inpage_auto = '#logo-adm img{background-color:transparent !important}#divfirst{margin-top: -736px !important;}#advMidContent{position: absolute !important;left:0 !important}#more-view{position: absolute !important;}#more-view img{width: 75px !important}';
	createStyleSheet(css_inpage_auto);
}