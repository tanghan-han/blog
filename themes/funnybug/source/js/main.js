// 导航栏监听事件，固定在顶部
window.addEventListener('scroll', function(){
	//目前监听的是整个body的滚动条距离
	let t = $('body, html').scrollTop();
	if(t>0){
		$('nav').addClass('nav-active');
	}else{
		$('nav').removeClass('nav-active');
	}
 })
