$(document).ready(function(){
	console.log("loaded");
	$(document).scroll(function(){
		var pctDone = $(document).scrollTop() / ( $(document).height() - $(window).height()  );
		var newWd = (pctDone * 100)+"vw";
		$(".progress").css("width",newWd);
	});
});