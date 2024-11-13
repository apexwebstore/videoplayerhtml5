/*
 * HTML5 Video Player with RightSide Playlist v5.1.1
 *
 * Copyright 2012-2020, LambertGroup
 *
*/

(function(c){c.fn.vp2_html5_rightSidePlaylist_Video=function(a){var e,B=!1,ka,la,ma,na,oa,pa,W,X,qa,P,Y,R=!1,F,E,S;a=c.extend({skin:"universalBlack",initialVolume:1,showInfo:!0,autoPlayFirstMovie:!1,autoPlay:!0,loop:!0,autoHideControllers:!0,seekBarAdjust:255,borderWidth:15,borderColor:"#e9e9e9",playlistWidth:300,playlistCharactersLimit:100,numberOfThumbsPerScreen:4,isSliderInitialized:!1,isProgressInitialized:!1,responsive:!0,responsiveRelativeToBrowser:!1,centerPlugin:!1,width:0,height:0,width100Proc:!1,
height100Proc:!1,setOrigWidthHeight:!0,showPlaylistOnInit:!0,showPlaylistBut:!0,autoPlayOnMobile:!1,origWidth:0,origHeight:0,origEntirePlayerWidth:0,origPlayerWidthProc:0,origPlaylistWidthProc:0,origThumbW:0,origThumbH:0,origThumbImgW:75,origThumbImgH:75,origthumbLeftPadding:0,origthumbRightPadding:0,origthumbTopPadding:0,origthumbBottomPadding:0,origthumbTitleFont:0,origthumbRegFont:0,origthumbTitleLineHeight:0,origthumbRegLineHeight:0,origthumbsHolder_MarginTop:0,windowOrientationScreenSize0:0,
windowOrientationScreenSize90:0,windowOrientationScreenSize_90:0,windowCurOrientation:0},a);var U=function(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var c=navigator.userAgent,e=/MSIE ([0-9]{1,}[.0-9]{0,})/;null!=e.exec(c)&&(a=parseFloat(RegExp.$1))}else"Netscape"==navigator.appName&&(c=navigator.userAgent,e=/Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/,null!=e.exec(c)&&(a=parseFloat(RegExp.$1)));return parseInt(a,10)}();return this.each(function(){function T(){if(document.getElementById(e).readyState){E=
document.getElementById(e).duration;r.slider({value:0,step:.01,orientation:"horizontal",range:"min",max:E,animate:!0,slide:function(){aa=!0},stop:function(a,t){aa=!1;document.getElementById(e).currentTime=t.value},create:function(t,c){a.isSliderInitialized=!0}});var t=0;u.progressbar({value:t,create:function(t,c){a.isProgressInitialized=!0}});d.on("progress",function(){t=document.getElementById(e).buffered.end(document.getElementById(e).buffered.length-1);0<t&&u.progressbar({value:t*u.css("width").substring(0,
u.css("width").length-2)/E})});p.show()}else setTimeout(T,200)}var d=c(this);e=d.attr("id");var Z=0,C=0,m=0,ba=600,I=300,J=0;m=a.playlistWidth;var p=c('<div class="VideoControls"><a class="VideoRewind" title="Rewind"></a><a class="VideoPlay" title="Play/Pause"></a><div class="VideoBuffer"></div><div class="VideoSeek"></div><a class="VideoShowHidePlaylist" title="Show/Hide Playlist"></a><a class="VideoInfoBut" title="Info"></a><div class="VideoTimer">00:00</div><div class="VolumeAll"><div class="VolumeSlider"></div><a class="VolumeButton" title="Mute/Unmute"></a></div><a class="VideoFullScreen" title="FullScreen"></a></div> <div class="VideoInfoBox"></div>    <div class="thumbsHolderWrapper"><div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div>  <div class="slider-vertical"></div>    </div>'),
b=d.parent(".vp2_html5_rightSidePlaylist"),k=b.parent(".vp2_html5_rightSidePlaylistBorder");b.addClass(a.skin);b.append(p);p=c(".VideoControls",b);var q=c(".VideoInfoBox",b),xa=c(".VideoRewind",b),K=c(".VideoPlay",b),u=c(".VideoBuffer",b),r=c(".VideoSeek",b),ra=c(".VideoInfoBut",b),G=c(".VideoShowHidePlaylist",b);if(!a.showInfo){ra.addClass("hideElement");J+=14;var ya=G.css("right").substr(0,G.css("right").lastIndexOf("px"));G.css({right:ya-18+"px"})}a.showPlaylistBut||(G.addClass("hideElement"),
J+=27);var M=c(".VideoTimer",b),sa=c(".VolumeAll",b),ca=c(".VolumeSlider",b),z=c(".VolumeButton",b),L=c(".VideoFullScreen",b),v=navigator.userAgent.toLowerCase();p.width(d.width());k.width(d.width()+3*a.borderWidth+m);k.height(d.height()+2*a.borderWidth);k.css("background",a.borderColor);b.css({width:d.width()+"px",height:d.height()+"px",top:a.borderWidth+"px",left:a.borderWidth+"px"});!a.autoPlayOnMobile||-1==v.indexOf("ipad")&&-1==v.indexOf("iphone")&&-1==v.indexOf("ipod")&&-1==v.indexOf("webos")&&
-1==navigator.userAgent.indexOf("Android")||(document.getElementById(e).muted=!0,document.getElementById(e).setAttribute("playsinline","playsinline"),z.removeClass("VolumeButton"),z.addClass("VolumeButtonMute"));-1==(-1==navigator.userAgent.indexOf("Opera")&&navigator.userAgent.indexOf("OPR"))&&(-1!=navigator.userAgent.indexOf("Chrome")&&-1!=navigator.vendor.indexOf("Google")&&a.autoPlayFirstMovie&&(document.getElementById(e).muted=!0,z.removeClass("VolumeButton"),z.addClass("VolumeButtonMute")),
-1!=navigator.userAgent.indexOf("Safari")&&-1!=navigator.vendor.indexOf("Apple")&&-1==navigator.platform.indexOf("Win")&&(a.autoPlay=!1));0===a.initialVolume&&(document.getElementById(e).muted=!0,z.removeClass("VolumeButton"),z.addClass("VolumeButtonMute"));r.css("width",d[0].offsetWidth-a.seekBarAdjust+J+"px");u.css("width",r.css("width"));q.css("width",d[0].offsetWidth-40+"px");p.hide();a.origWidth=document.getElementById(e).offsetWidth;a.origHeight=document.getElementById(e).offsetHeight;a.width=
a.origWidth;a.height=a.origHeight;a.origEntirePlayerWidth=a.origWidth+3*a.borderWidth+m;a.origPlayerWidthProc=parseInt(100*a.origWidth/(a.origEntirePlayerWidth-3*a.borderWidth),10);a.origPlaylistWidthProc=100-a.origPlayerWidthProc-5;ka=d.css("position");la=d.css("left");ma=d.css("top");pa=b.css("position");W=b.css("left");X=b.css("top");Y=q.css("position");qa=p.css("position");na=k.css("position");oa=k.css("z-index");videoContainerOrigZIndex=b.css("z-index");P=p.css("bottom");Y=q.css("position");
a.responsive&&(a.width100Proc||a.height100Proc)&&(a.setOrigWidthHeight=!1);c("html").css("overflow");p.css("width","100%");var da=function(){return document.getElementById(e).canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')},za=function(){c(H[n]).addClass("thumbsHolder_ThumbON");N();var a=f[n].sources_webm,b=navigator.userAgent.toLowerCase();if(-1!=b.indexOf("chrome")||-1!=b.indexOf("msie")||-1!=b.indexOf("safari")||-1!=b.indexOf("android"))a=f[n].sources_mp4;if(-1!=b.indexOf("ipad")||-1!=
b.indexOf("iphone")||-1!=b.indexOf("ipod")||-1!=b.indexOf("webos"))a=f[n].sources_mp4;-1!=b.indexOf("android")&&(a=f[n].sources_mp4);-1!=U&&(a=f[n].sources_mp4);-1!=b.indexOf("opera")&&(a=f[n].sources_webm,""!=da()&&(a=f[n].sources_mp4));-1!=b.indexOf("opr/")&&(a=f[n].sources_webm,""!=da()&&(a=f[n].sources_mp4));if(-1!=b.indexOf("firefox")||-1!=b.indexOf("mozzila"))a=f[n].sources_webm,""!=da()&&(a=f[n].sources_mp4);return a},O=!1,g=c(".thumbsHolderWrapper",b),Q=c(".thumbsHolderVisibleWrapper",b),
A=c(".thumbsHolder",b),l=c(".slider-vertical",b);Q.width(m);Q.height(b.height());g.width(m);g.height(b.height());g.css("top",0);g.css("left",+d[0].offsetWidth+a.borderWidth+"px");A.width(m);A.css("top",a.borderWidth+"px");var n=0,h=0,f=[],w;c(".xplaylist",b).children().each(function(){currentElement=c(this);h++;f[h-1]=[];f[h-1].title="";f[h-1].desc="";f[h-1].thumb="";f[h-1].preview="";f[h-1].xsources_mp4="";f[h-1].xsources_ogv="";f[h-1].xsources_webm="";f[h-1].xsources_mp4v="";null!=currentElement.find(".xtitle").html()&&
(f[h-1].title=currentElement.find(".xtitle").html());null!=currentElement.find(".xdesc").html()&&(f[h-1].desc=currentElement.find(".xdesc").html());null!=currentElement.find(".xthumb").html()&&(f[h-1].thumb=currentElement.find(".xthumb").html());null!=currentElement.find(".xpreview").html()&&(f[h-1].preview=currentElement.find(".xpreview").html());null!=currentElement.find(".xsources_mp4").html()&&(f[h-1].sources_mp4=currentElement.find(".xsources_mp4").html());null!=currentElement.find(".xsources_ogv").html()&&
(f[h-1].sources_ogv=currentElement.find(".xsources_ogv").html());null!=currentElement.find(".xsources_webm").html()&&(f[h-1].sources_webm=currentElement.find(".xsources_webm").html());null!=currentElement.find(".xsources_mp4v").html()&&(f[h-1].sources_mp4v=currentElement.find(".xsources_mp4v").html());desc_aux=String(f[h-1].desc);desc_aux.length>a.playlistCharactersLimit&&(desc_aux=desc_aux.substr(0,desc_aux.indexOf(" ",a.playlistCharactersLimit))+"...");w=c('<div class="thumbsHolder_ThumbOFF" rel="'+
(h-1)+'"><div class="padding"><img src="'+f[h-1].thumb+'"><span class="title">'+f[h-1].title+'</span><span class="reg">'+desc_aux+"</span></div></div>");A.append(w);0==a.origThumbW&&(0==a.numberOfThumbsPerScreen&&(a.numberOfThumbsPerScreen=Math.floor(a.origHeight/w.height())),a.origThumbW=w.width(),a.origThumbH=w.height(),D=c(".thumbsHolder_ThumbOFF .padding",b),a.origthumbLeftPadding=D.css("padding-left").substr(0,D.css("padding-left").lastIndexOf("px")),a.origthumbRightPadding=D.css("padding-right").substr(0,
D.css("padding-left").lastIndexOf("px")),a.origthumbTopPadding=D.css("padding-top").substr(0,D.css("padding-left").lastIndexOf("px")),a.origthumbBottomPadding=D.css("padding-bottom").substr(0,D.css("padding-left").lastIndexOf("px")),C=Math.floor((g.height()-w.height()*a.numberOfThumbsPerScreen)/(a.numberOfThumbsPerScreen-1)),x=c(".thumbsHolder_ThumbOFF .title",b),y=c(".thumbsHolder_ThumbOFF .reg",b),-1!=x.css("font-size").lastIndexOf("px")?a.origthumbTitleFont=x.css("font-size").substr(0,x.css("font-size").lastIndexOf("px")):
-1!=x.css("font-size").lastIndexOf("em")&&(a.origthumbTitleFont=x.css("font-size").substr(0,x.css("font-size").lastIndexOf("em"))),-1!=x.css("line-height").lastIndexOf("px")?a.origthumbTitleLineHeight=x.css("line-height").substr(0,x.css("line-height").lastIndexOf("px")):-1!=x.css("line-height").lastIndexOf("em")&&(a.origthumbTitleLineHeight=x.css("line-height").substr(0,x.css("line-height").lastIndexOf("em"))),-1!=y.css("font-size").lastIndexOf("px")?a.origthumbRegFont=y.css("font-size").substr(0,
y.css("font-size").lastIndexOf("px")):-1!=y.css("font-size").lastIndexOf("em")&&(a.origthumbRegFont=y.css("font-size").substr(0,y.css("font-size").lastIndexOf("em"))),-1!=y.css("line-height").lastIndexOf("px")?a.origthumbRegLineHeight=y.css("line-height").substr(0,y.css("line-height").lastIndexOf("px")):-1!=y.css("line-height").lastIndexOf("em")&&(a.origthumbRegLineHeight=y.css("line-height").substr(0,y.css("line-height").lastIndexOf("em"))));1===h&&w.addClass("thumbsHolder_ThumbON");C=Math.floor((g.height()-
w.height()*a.numberOfThumbsPerScreen)/(a.numberOfThumbsPerScreen-1));A.css("height",A.height()+C+w.height()+"px");1>=h?w.css("margin-top",Math.floor((g.height()-2*a.borderWidth-(C+w.height())*(a.numberOfThumbsPerScreen-1)-w.height())/2)+"px"):w.css("margin-top",C+"px");thumbsHolder_MarginTop=parseInt((g.height()-parseInt(w.css("height").substring(0,w.css("height").length-2)))/2)});var D=c(".thumbsHolder_ThumbOFF .padding",b);var x=c(".thumbsHolder_ThumbOFF .title",b);var y=c(".thumbsHolder_ThumbOFF .reg",
b);h>a.numberOfThumbsPerScreen&&(l.slider({orientation:"vertical",range:"min",min:1,max:100,step:1,value:100,slide:function(a,b){N(b.value)}}),l.css("display","inline"),l.css("position","absolute"),l.height(g.height()-25),l.css("left",Math.floor(d[0].offsetWidth+a.borderWidth+m+(a.borderWidth-l.width())/2)+"px"),l.css("top","0px"));var N=function(t){if(h>a.numberOfThumbsPerScreen){var b=(w.height()+C)*(h-a.numberOfThumbsPerScreen),d=0;A.stop(!0,!0);c("html, body").off("touchstart touchmove").on("touchstart touchmove",
function(a){a.preventDefault()});t&&!O?(O=!0,1>=t&&(t=0),d=parseInt(a.borderWidth+b*(t-100)/100),d>a.borderWidth&&(d=a.borderWidth),A.animate({top:d+"px"},600,"easeOutQuad",function(){O=!1;c("html, body").off("touchstart touchmove").on("touchstart touchmove",function(a){})})):!O&&h>a.numberOfThumbsPerScreen&&(O=!0,A.css("opacity","0.5"),d=parseInt(a.borderWidth-(w.height()+C)*n,10),Math.abs(d)>b&&(d=a.borderWidth-b),l.slider("value",100+parseInt(100*d/b)),A.animate({opacity:1,top:d+"px"},500,"easeOutCubic",
function(){O=!1;c("html, body").off("touchstart touchmove").on("touchstart touchmove",function(a){})}))}};Q.mousewheel(function(a,b,c,d){a.preventDefault();a=l.slider("value");if(1<parseInt(a)&&-1==parseInt(b)||100>parseInt(a)&&1==parseInt(b))a+=3*b,l.slider("value",a),N(a)});g.swipe({swipeStatus:function(a,b,d,e,f,g){"up"!=d&&"down"!=d||0==e||(currentScrollVal=l.slider("value"),currentScrollVal="up"==d?currentScrollVal-1.5:currentScrollVal+1.5,l.slider("value",currentScrollVal),c("html, body").off("touchstart touchmove").on("touchstart touchmove",
function(a){a.preventDefault()}),N(currentScrollVal))},threshold:100,maxTimeThreshold:500,fingers:"all"});var H=c(".thumbsHolder_ThumbOFF",b);H.on("click",function(){var b=c(this).attr("rel");n!=b&&(c(H[n]).removeClass("thumbsHolder_ThumbON"),n=b,ea(a.autoPlay))});H.on("mouseenter",function(){var a=c(this);a.attr("rel");a.addClass("thumbsHolder_ThumbON")});H.on("mouseleave",function(){var a=c(this),b=a.attr("rel");n!=b&&a.removeClass("thumbsHolder_ThumbON")});H.on("dblclick",function(){var a=c(this);
a.attr("rel");a.addClass("thumbsHolder_ThumbON")});var ea=function(b){a.isSliderInitialized&&(r.slider("destroy"),a.isSliderInitialized=!1);a.isProgressInitialized&&(u.progressbar("destroy"),d.unbind("progress"),a.isProgressInitialized=!1);S="Infinity";document.getElementById(e).poster=f[n].preview;q.html('<p class="movieTitle">'+f[n].title+'</p><p class="movieDesc">'+f[n].desc+"</p>");document.getElementById(e).src=za();document.getElementById(e).load();var c=navigator.userAgent.toLowerCase();-1!=
c.indexOf("ipad")||-1!=c.indexOf("iphone")||-1!=c.indexOf("ipod")||-1!=c.indexOf("webos")||-1!=c.indexOf("android")?(b?(document.getElementById(e).play(),K.addClass("VideoPause")):K.removeClass("VideoPause"),T()):(clearInterval(S),S=setInterval(function(){0<document.getElementById(e).readyState&&!isNaN(document.getElementById(e).duration)&&"Infinity"!=document.getElementById(e).duration&&(E=document.getElementById(e).duration,T(),b?(document.getElementById(e).play(),K.addClass("VideoPause")):K.removeClass("VideoPause"),
clearInterval(S))},700))};ea(a.autoPlayFirstMovie);xa.on("click",function(){document.getElementById(e).currentTime=0;document.getElementById(e).play()});var fa=function(){0==document.getElementById(e).paused?document.getElementById(e).pause():document.getElementById(e).play()};K.click(fa);d.click(fa);d.on("play",function(){K.addClass("VideoPause")});d.on("pause",function(){K.removeClass("VideoPause")});-1==v.indexOf("ipad")&&-1==v.indexOf("iphone")&&-1==v.indexOf("ipod")&&-1==v.indexOf("webos")&&
(b.on("mouseover",function(){a.autoHideControllers&&p.show()}),b.on("mouseout",function(){a.autoHideControllers&&120>sa.css("height").substring(0,sa.css("height").length-2)&&p.hide()}));b.keydown(function(a){32==a.keyCode&&fa()});var ta=function(){B=!0;L.removeClass("VideoFullScreen");L.addClass("VideoFullScreenIn");c("body").css("margin",0);c(".vp2_html5_rightSidePlaylist").css("display","none");b.css("display","block");"none"!=g.css("display")&&g.height();k.css("position","fixed");k.css("top",0);
k.css("left",0);k.css("width",window.innerWidth+"px");k.css("height",window.innerHeight+"px");k.css("background","#000000");k.css("z-index","10000");b.css("position","absolute");b.css("top",0);b.css("left",0);d.css("position","fixed");"none"!=g.css("display")&&g.css({display:"none"});d.css("width",window.innerWidth+"px");q.css("width",window.innerWidth-40+"px");d.css("height",window.innerHeight+"px");d.css("top",0);d.css("left",0);p.css("position","fixed");p.css("bottom",P);p.width(d.width());r.css("width",
d.width()-a.seekBarAdjust+J+"px");u.css("width",r.css("width"));q.css("position","fixed");g.css("left",+d[0].offsetWidth+a.borderWidth+"px");g.width(a.playlistWidth);g.height(window.innerHeight);Q.height(window.innerHeight);l.height(g.height()-25);var t=(a.borderWidth-l.width())/2;0>t&&(t=a.borderWidth-l.width());l.css("left",Math.floor(d[0].offsetWidth+a.borderWidth+a.playlistWidth+t)+"px");A.children().each(function(){theThumb=c(this);theThumb.width(a.playlistWidth)})},ua=function(){B=!1;L.removeClass("VideoFullScreenIn");
L.addClass("VideoFullScreen");c("body").css("margin",void 0);c(".vp2_html5_rightSidePlaylist").css("display","block");k.css("position",na);k.css("width",a.origWidth+3*a.borderWidth+m+"px");k.css("height",a.origHeight+2*a.borderWidth+"px");k.css("background",a.borderColor);k.css("z-index",oa);d.css("position",ka);g.css({display:"block",opacity:"1"});l.css({display:"block",xopacity:"1"});var t=a.origWidth;d.css("width",t+"px");d.css("height",a.origHeight+"px");d.css("top",ma);d.css("left",la);b.css("position",
pa);b.css("width",t+"px");b.css("height",a.origHeight+"px");b.css("top",X);b.css("left",W);b.css("z-index",videoContainerOrigZIndex);b.css("top",X);b.css("left",W);g.css("left",+a.origWidth+a.borderWidth+"px");g.height(a.origHeight);Q.height(a.origHeight);l.height(a.origHeight-25);l.css("left",Math.floor(a.origWidth+a.borderWidth+m+(a.borderWidth-l.width())/2)+"px");p.css("position",qa);p.css("bottom",P);p.width(d.width());r.css("width",d.width()-a.seekBarAdjust+J+"px");u.css("width",r.css("width"));
q.css("width",t-40+"px");q.css("position",Y);a.responsive&&ha()};b.on("dblclick",function(){B||L.click()});L.on("click",function(){screenfull.enabled?(b.css("display","none"),screenfull.toggle(k[0]),screenfull.on("change",function(){a.responsive&&a.width!=a.origWidth&&!B&&(a.width=a.origWidth,a.height=a.origHeight,d.css("width",a.width+"px"),d.css("height",a.height+"px"),b.css("width",a.width+"px"),b.css("height",a.height+"px"),p.css("bottom",P),r.css("width",a.width-a.seekBarAdjust+J+"px"),u.css("width",
r.css("width")),q.css("width",a.width-40+"px"),va());setTimeout(function(){screenfull.isFullscreen?ta():ua()},500)})):(-1!=U||-1!=v.indexOf("ipad")||-1!=v.indexOf("iphone")||-1!=v.indexOf("ipod")||-1!=v.indexOf("webos"))&&a.responsive&&a.responsiveRelativeToBrowser&&a.width100Proc&&a.height100Proc||(B?ua():ta())});var ia=!1;M.on("mouseover",function(){ia=!0;F=document.getElementById(e).currentTime;E=document.getElementById(e).duration;M.text("-"+V(E-F))});M.on("mouseout",function(){ia=!1;F=document.getElementById(e).currentTime;
E=document.getElementById(e).duration;M.text(V(F))});var aa=!1;T();var V=function(a){var b=10>Math.floor(a/60)?"0"+Math.floor(a/60):Math.floor(a/60);return b+":"+(10>Math.floor(a-60*b)?"0"+Math.floor(a-60*b):Math.floor(a-60*b))};d.bind("timeupdate",function(){a.isSliderInitialized&&(F=document.getElementById(e).currentTime,E=document.getElementById(e).duration,aa||r.slider("value",F),ia?M.text("-"+V(E-F)):M.text(V(F)))});ra.on("click",function(){"giant"==a.skin?"none"==q.css("display")?q.fadeIn():
q.fadeOut():q.slideToggle(300)});G.on("click",function(){if(!R)if(R=!0,"none"!=g.css("display")){var c=d.width()+a.borderWidth+m;B&&(c=d.width()+2*a.borderWidth+a.playlistWidth);G.addClass("VideoShowHidePlaylist_onlyShow");B?(r.width(r.width()+2*a.borderWidth+a.playlistWidth),u.width(u.width()+2*a.borderWidth+a.playlistWidth),q.width(q.width()+2*a.borderWidth+a.playlistWidth)):(r.width(r.width()+a.borderWidth+m),u.width(u.width()+a.borderWidth+m),q.width(q.width()+a.borderWidth+m));l.css("display",
"none");g.animate({opacity:0},I,function(){g.css("display","none")});p.css("opacity",0);p.animate({width:c,opacity:1},I,function(){});b.css("width",c+"px");d.animate({width:c},I,function(){R=!1})}else c=d[0].offsetWidth-a.borderWidth-m,B&&(c=d[0].offsetWidth-a.borderWidth-a.playlistWidth-a.borderWidth),G.removeClass("VideoShowHidePlaylist_onlyShow"),B?(r.width(r.width()-2*a.borderWidth-a.playlistWidth),u.width(u.width()-2*a.borderWidth-a.playlistWidth),q.width(q.width()-2*a.borderWidth-a.playlistWidth),
l.css("left",Math.floor(c+a.borderWidth+a.playlistWidth+(a.borderWidth-l.width())/2)+"px")):(r.width(r.width()-a.borderWidth-m),u.width(u.width()-a.borderWidth-m),q.width(q.width()-a.borderWidth-m),l.css("left",Math.floor(c+a.borderWidth+m+(a.borderWidth-l.width())/2)+"px")),g.css("display","block"),l.css("display","block"),g.animate({opacity:1},ba,function(){R=!1;N()}),p.css("opacity",0),p.animate({width:c,opacity:1},I,function(){}),g.css("left",+c+a.borderWidth+"px"),b.css("width",c+"px"),d.animate({width:c},
I,function(){})});a.showPlaylistOnInit||(I=ba=0,G.click(),ba=600,I=300);d[0].addEventListener("ended",function(b){a.loop&&-1==v.indexOf("android")&&(c(H[n]).removeClass("thumbsHolder_ThumbON"),n==h-1?n=0:n++,ea(a.autoPlay))},!1);var wa=1;ca.slider({value:a.initialVolume,orientation:"vertical",range:"min",max:1,step:.05,animate:!0,slide:function(a,b){document.getElementById(e).muted=!1;wa=b.value;document.getElementById(e).volume=b.value}});document.getElementById(e).volume=a.initialVolume;z.click(function(){1==
document.getElementById(e).muted?(document.getElementById(e).muted=!1,ca.slider("value",wa),z.removeClass("VolumeButtonMute"),z.addClass("VolumeButton")):(document.getElementById(e).muted=!0,ca.slider("value","0"),z.removeClass("VolumeButton"),z.addClass("VolumeButtonMute"))});d.removeAttr("controls");a.centerPlugin&&k.css({margin:"0 auto"});var va=function(){g.width(m);g.css("left",+d[0].offsetWidth+a.borderWidth+"px");l.css("left",Math.floor(d[0].offsetWidth+a.borderWidth+m+(a.borderWidth-l.width())/
2)+"px");H.css({height:parseInt(a.origThumbH/(a.origWidth/a.width),10)+"px"});D.css({"padding-left":parseInt(a.origthumbLeftPadding/(a.origWidth/a.width),10)+"px","padding-right":parseInt(a.origthumbRightPadding/(a.origWidth/a.width),10)+"px","padding-top":parseInt(a.origthumbTopPadding/(a.origWidth/a.width),10)+"px","padding-bottom":parseInt(a.origthumbBottomPadding/(a.origWidth/a.width),10)+"px"});var e="px";-1!=x.css("font-size").lastIndexOf("em")&&(e="em");var f="px";-1!=x.css("line-height").lastIndexOf("em")&&
(f="em");x.css({"font-size":parseInt(a.origthumbTitleFont/(a.origWidth/a.width),10)+e,"line-height":parseInt(a.origthumbTitleLineHeight/(a.origWidth/a.width),10)+f});e="px";-1!=y.css("font-size").lastIndexOf("em")&&(e="em");f="px";-1!=y.css("line-height").lastIndexOf("em")&&(f="em");y.css({"font-size":parseInt(a.origthumbRegFont/(a.origWidth/a.width),10)+e,"line-height":parseInt(a.origthumbRegLineHeight/(a.origWidth/a.width),10)+f});c(".thumbsHolder_ThumbOFF",b).find("img:first").css({width:parseInt(a.origThumbImgW/
(a.origWidth/a.width),10)+"px",height:parseInt(a.origThumbImgH/(a.origWidth/a.width),10)+"px"});g.height(a.height);l.height(g.height()-25);C=Math.floor((g.height()-w.height()*a.numberOfThumbsPerScreen)/(a.numberOfThumbsPerScreen-1));var h=0,k;A.children().each(function(){h++;k=c(this);k.width(m);1>=h?k.css("margin-top",Math.floor((g.height()-2*a.borderWidth-(C+k.height())*(a.numberOfThumbsPerScreen-1)-k.height())/2)+"px"):k.css("margin-top",C+"px")});N()},ha=function(){if(B)(-1!=v.indexOf("ipad")||
-1!=v.indexOf("iphone")||-1!=v.indexOf("ipod")||-1!=v.indexOf("webos")||v.indexOf("android"))&&L.click();else if(responsiveWidth=k.parent().width(),responsiveHeight=k.parent().height(),a.responsiveRelativeToBrowser&&(responsiveWidth=c(window).width(),responsiveHeight=c(window).height()),k.width()!=responsiveWidth||a.width100Proc){a.origEntirePlayerWidth>responsiveWidth||a.width100Proc?(a.width=parseInt((responsiveWidth-3*a.borderWidth)*a.origPlayerWidthProc/100,10),m=responsiveWidth-3*a.borderWidth-
a.width):a.width100Proc||(a.width=a.origWidth,m=a.playlistWidth);a.height100Proc||(a.height=a.width*a.origHeight/a.origWidth);a.height=parseInt(a.height,10);var e=a.width;"none"==g.css("display")&&(e=a.width+a.borderWidth+m);d.css("width",e+"px");d.css("height",a.height+"px");b.css("width",e+"px");b.css("height",a.height+"px");p.width(e);p.css("bottom",P);r.css("width",e-a.seekBarAdjust+J+"px");u.css("width",r.css("width"));q.css("width",e-40+"px");a.setOrigWidthHeight||(a.origWidth=a.width,a.origHeight=
a.height);k.width(a.width+3*a.borderWidth+m);k.height(d.height()+2*a.borderWidth);va()}},ja=!1;c(window).on("resize",function(){doResizeNow=!0;-1!=U&&9==U&&0==Z&&(doResizeNow=!1);Z==c(window).width()?(doResizeNow=!1,a.windowCurOrientation!=window.orientation&&-1!=navigator.userAgent.indexOf("Android")&&(a.windowCurOrientation=window.orientation,doResizeNow=!0)):Z=c(window).width();a.responsive&&doResizeNow&&(!1!==ja&&clearTimeout(ja),ja=setTimeout(function(){ha()},300))});a.responsive&&ha()})};c.fn.vp2_html5_rightSidePlaylist_Video.skins=
{}})(jQuery);