/*
 * IE Alert! jQuery plugin
 * Version 2
 * Author: David Nemes | @nmsdvid
 * http://nmsdvid.com/iealert/
 */

(function($){
function initialize($obj, support, title, text, upgradeTitle, upgradeLink, overlayClose){

		var panel = "<div class='ie-l-t-c'></div>"
				  + "<div class='ie-t'></div>"
				  + "<div class='ie-r-t-c'></div>"
				  + "<div class='ie-l'></div>"
				  + "<div class='ie-c'>"
				  + "<span class='ie-span'>"+ title +"</span>"
				  + "<p class='ie-p'>"+ text +"</span>"
				  + "<div class='ie-u'>"
				  + "<div class='ie-u-l'></div>"
				  + "<a href='"+ upgradeLink +"' target='_blank'>"
				  + "<div class='ie-u-c'>"
				  + "<span class='ie-u-s'>"+ upgradeTitle +"</span>"
				  + "</div>"
				  + "</a>"
				  + "<div class='ie-u-r'></div>"
				  + "</div>"
				  + "</div>"
				  + "<div class='ie-r'></div>"
				  + "<div class='ie-l-b-c'></div>"
				  + "<div class='ie-b'></div>"
				  + "<div class='ie-r-b-c'></div>";

		var overlay = $("<div id='ie-alert-overlay'></div>");
		var iepanel = $("<div id='ie-alert-panel'>"+ panel +"</div>");

		var docHeight = $(document).height();

		overlay.css("height", docHeight);

		function active() {
	
	
				$obj.prepend(iepanel);
				$obj.prepend(overlay);
	
	
				var cHeight = $('.ie-c').css('height');
				$('.ie-l').css('height',cHeight);
				$('.ie-r').css('height',cHeight);
				var uWidth = $('.ie-u-c').width();
	           $('.ie-u').css('margin-left',-(uWidth/2+14));
	           var iePanel = $('#ie-alert-panel');
	            var ieOverlay = $('#ie-alert-overlay');
	
	            $(".ie-r-t-c").on('click', function() {
	
	      			iePanel.fadeOut(100);
	
	      			ieOverlay.fadeOut("slow");
	
				});
	
				if(overlayClose === true) {
				
					ieOverlay.on('click', function() {
				
				      iePanel.fadeOut(100);
				
				      $(this).fadeOut("slow");
				
					});
				}
	
				if ($.browser.msie  && parseInt($.browser.version, 10) === 6) {
	
					iepanel.addClass("ie6-style");
					overlay.css("background", "#d6d6d6");
					$obj.css("margin","0");
	 
				}
		}


		if (support === "ie9") { 			// the modal box will appear on IE9, IE8, IE7, IE6
			
			if ($.browser.msie  && parseInt($.browser.version, 10) < 10) {
				
				active();

			}
			
			
		} else if (support === "ie8") { 			// the modal box will appear on IE8, IE7, IE6
			
			if ($.browser.msie  && parseInt($.browser.version, 10) < 9) {
				
				active();

			}
			
		} else if (support === "ie7") { 	// the modal box will appear on IE7, IE6
			
			if ($.browser.msie  && parseInt($.browser.version, 10) < 8) {
				
				active();
			}
			
			
		} else if (support === "ie6") { 	// the modal box will appear only on IE6
			
			if ($.browser.msie  && parseInt($.browser.version, 10) < 7) {
				
				active();
				
			}
		}

}; //end initialize function


	$.fn.iealert = function(options){
		var defaults = { 
			support: "ie8",
			title: "Did you know that your Internet Explorer is out of date ?",
			text: "To get the best possible experience using our site we recommend that you upgrade to a modern web browser. To download a newer web browser click on the Upgrade button.",
			upgradeTitle: "Upgrade",
			upgradeLink: "http://www.google.com/chrome/",
			overlayClose: false
		};
		
		
		var option = $.extend(defaults, options);

			return this.each(function(){
				if ( $.browser.msie ) {
					var $this = $(this);  
					initialize($this, option.support, option.title, option.text, option.upgradeTitle, option.upgradeLink, option.overlayClose);
				} // If browser is Internet Explorer	
			});		       
	
	};
})(jQuery);
