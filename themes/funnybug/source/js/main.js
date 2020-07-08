$(function() {
	// 页面刷新时，保留刷新前的滚动条位置
	$("html,body").scrollTop(localStorage.reduction);
	
    //当滚动条的位置处于距顶部20像素以下时，跳转链接出现，否则消失
    $(window).scroll(function() {
		localStorage.reduction = $(document).scrollTop();
		$("#reduction").val();
        if ($(window).scrollTop() > 20) {
          $("#backTop").fadeIn(200);
        } else {
          $("#backTop").fadeOut(200);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#backTop").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        250);
        return false;
    });
	// 文章单击事件
	$("article").click(function() {
		var path = $(this).attr("path");
		window.location.href = path;
	});
});