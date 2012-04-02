(function($) {
	var icons = $("i.icon"), i=0;
	icons.css({
		"visibility":"hidden",
		"opacity":0
	});

	var interval = setInterval(function() {
		var icon;
		if (i < icons.length) {
			icon = $(icons[i]);
			icon.css({
				"visibility":"visible",
				"opacity":""
			});
			i += 1;
		} else {
			clearInterval(interval);
		}
	}, 300);
	
})(jQuery);