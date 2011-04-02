$(document).ready(function(){
	styleCode();
	
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
