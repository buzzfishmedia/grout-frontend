(function( $ ){
  $.fn.accordian = function() {
    var container = $('[data-menu-type="accordian"]');
    console.log(container);

    if(container) {
    	var menu = container.children("ul");
    	container.addClass('accordian');
    	container.removeClass('navbar-stacked');

    	if(menu) {
    		var activeLink = menu.children("li:first-child");
    		if(activeLink)  {
    			activeLink.addClass('active');
    		}
    		
  			var list = menu.children("li");

    		$(list).each(function(){
    			$(this).on("click", function( list ){
    				$(this).addClass('active');
    				$(this).siblings('li').removeClass('active');

    				var submenu = $(this).children("ul");
    				if(submenu) {
    					
    					var subActiveLink = submenu.children("li:first-child");
    					if(subActiveLink)  {
    						subActiveLink.addClass('active');
    						$(submenu).siblings('a', function(){
    							$(this).css("background-color", "transparent !important");
    						});
    					}

    					$(submenu).children("li").each(function(){
    						$(this).on("click", function(){
    							$(this).addClass('active');
    							$(this).siblings('li').removeClass('active');
    							var subParent = $(this).parents("li.active");
    							subParent.removeClass('active');
    							console.log(subParent);

    						});
    					});
    					console.log("submenu" + submenu);
    				}

    				//if( $(submenu))

    			})
    		});
    	}
    }
  };

  $(document).ready(function(){
  	$().accordian();
  });
})( jQuery );