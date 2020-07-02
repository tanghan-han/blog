$(function() {
	if ($(window).scrollTop() > 20) {
          $("#backTop").show();
        } else {
          $("#backTop").hide();
        }
    //当滚动条的位置处于距顶部20像素以下时，跳转链接出现，否则消失
    $(function() {
      $(window).scroll(function() {
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
    });
	
	$("article").click(function() {
		var path = $(this).attr("path");
		window.location.href = path;
	});
});