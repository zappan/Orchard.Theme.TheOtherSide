$(document).ready(function(){
	// -- sharethis.com
	var switchTo5x=true;
	stLight.options({publisher:'85afa442-45d2-491d-8662-b7802381b1c3', onhover: false});
	
	// -- other stuff
	styleCode();
	externalLinks();
	selectDefaultMenuItem();
	
	// -- external links
	function externalLinks() {
		$('a[rel*="external"]').click(function (e) {
			e.preventDefault();
			window.open($(this).attr('href'));
		});
	}

	// -- default selected menu item when no selected
	function selectDefaultMenuItem() {
		if ($("nav ul li.current").length == 0) {
			$("nav ul li:first-child").addClass("current");
		}
	}
	
	// -- prettify code blocks in text
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
