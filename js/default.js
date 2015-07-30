$(document).ready(function(){
		
		var content = $('.content-area');
		
						if(window.innerHeight > (content.height())){
						var h = window.innerHeight-$('footer').height();

					
					   var docHeight = $(window).height();
					   var footerHeight = $('footer').height();
					   var footerTop = $('footer').position().top + footerHeight;
						
						if (footerTop < docHeight) {
							$('footer').css('margin-top', 0 + (docHeight - footerTop) + 'px');
   }
				}
});
		
