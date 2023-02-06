jQuery(function() {
	initOpenClose();
});

// open-close init
function initOpenClose() {
	jQuery('.accordion .opener').click(function(e){
		e.preventDefault();
		jQuery(this).parent().toggleClass('active');
		jQuery(this).parent().find('.slide').slideToggle();
	})
}
