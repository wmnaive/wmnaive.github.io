// var $ = mdui.$;
	
function tip(){
	mdui.dialog({
      	title: '公告💭',
      	content: '网站还在建设中🔹🕐🕑🕒🕓🕔🕕🕖🕗',
      	buttons: [
        	{
          		text: '我知道啦',
        	}
      	]
    });
}
var theme = localStorage.getItem('theme');
if(theme=='indigo'){ 	  
    $('body').addClass('mdui-theme-primary-indigo');
    $('body').addClass('mdui-theme-accent-pink');
}else{
	$('body').addClass('mdui-theme-primary-teal');
	$('body').addClass('mdui-theme-accent-teal');
}
function changeTheme(){
   	var theme = localStorage.getItem('theme');
	// $('body').addClass('animated');
	// $('body').addClass('zoomIn');
	// setTimeout(()=>{
	// 	$('body').removeClass('animated');
	// 	$('body').removeClass('zoomIn');
	// },1000)
	if(theme == 'indigo'){
  	   	localStorage.setItem('theme', 'teal');
  	 	$('body').removeClass('mdui-theme-primary-indigo');
  	 	$('body').removeClass('mdui-theme-accent-pink');
  	 	$('body').addClass('mdui-theme-primary-teal');
  	 	$('body').addClass('mdui-theme-accent-teal');
	}else{
		localStorage.setItem('theme', 'indigo'); 
		$('body').removeClass('mdui-theme-primary-teal');
		$('body').removeClass('mdui-theme-accent-teal');
 	 	$('body').addClass('mdui-theme-primary-indigo');
 	 	$('body').addClass('mdui-theme-accent-pink');
	}
}
var second=0;
var minute=0;
var hour=0;
window.setTimeout("interval();",1000);
function interval()
{
	second++;
	if(second==60)
	{
		second=0;minute+=1;
	}
	if(minute==60)
	{
		minute=0;hour+=1;
	}
	$('#stayTime').text(minute+'分'+second+'秒');
	window.setTimeout("interval();",1000);
}
function qqShare(url,title,summary,pics){
    var urlPath = "https://connect.qq.com/widget/shareqq/index.html?url="+ encodeURI(url) +
                  "&desc=&title=" + title +
                  "&summary=" + summary +
                  "&pics=" + pics;
    window.open (urlPath, 'qq分享', 'height=637, width=1053, top=195,left=459, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no')
}
window.addEventListener('load', function () {
	let loader = document.getElementById("loading-warp");
	loader.className = "loading-animations loading-animations-out";//使用渐隐的方法淡出loading page
	setTimeout(() => {
		loader.style.opacity = "0"
	}, 1000);
	setTimeout(() => {
		loader.style.display = "none"
	}, 2000);
});