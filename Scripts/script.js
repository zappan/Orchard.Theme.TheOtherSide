$(document).ready(function(){
	// -- sharethis.com
	var switchTo5x=true;
	stLight.options({publisher:'85afa442-45d2-491d-8662-b7802381b1c3', onhover: false});
	
	// -- other stuff
	styleCode();
	
	if ($("nav ul li.current").length == 0) {
		$("nav ul li:first-child").addClass("current");
	}
	
	function styleCode() {
		var shouldPrettify = false;
		$("pre code").parent().each(function() {
			if (!$(this).hasClass("prettyprint")) {
				$(this).addClass("prettyprint");
				shouldPrettify = true;
			}
		});
		if (shouldPrettify) { prettyPrint(); } 
	}
});
