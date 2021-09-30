jQuery('document').ready(function(){
	function on_page_alert() {
		alert("Вы уже на этой странице!");
	}
	jQuery('#nav-link-active').on('click', function(){
		on_page_alert();
	});
});