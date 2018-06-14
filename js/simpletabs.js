(function($){
	$(".js-tabs-link").on("click",function(e){
		e.preventDefault();
		if($(this).closest(".js-tabs-item.active").length<1){
			$(this).closest(".js-tabs-item").addClass("active").siblings(".js-tabs-item").removeClass("active");
			var curHref = $(this).attr("href");		
			$(curHref).addClass("active").siblings(".js-tabs-content").removeClass("active");							
		}	
	})
})(jQuery);