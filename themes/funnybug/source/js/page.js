layui.use('laypage', function(){
	var laypage = layui.laypage;

	//分页
	laypage.render({
		elem: 'page'
		,count: pageLength
		,limit: 5
	});
	//上一页
	$(document).on('click', '.layui-laypage-prev', function() {
		alert("上一页");
	});
	//下一页
	$(document).on('click', '.layui-laypage-next', function() {
		alert("下一页");
	});
});