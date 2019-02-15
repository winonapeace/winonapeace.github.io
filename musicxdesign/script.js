$(document).ready(function(){
	console.log("loaded");
	$(document).scroll(function(){
		var pctDone = $(document).scrollTop() / ( $(document).height() - $(window).height()  );
		var newWd = (pctDone * 100)+"vw";
		$(".progress").css("width",newWd);
	});
	$(".nav li a").each(function() {
    if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
        $(this).addClass('current');
    }
});
});