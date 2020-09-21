(function($){  
     $.fn.extend({    
         uiSelect: function(options,menuID,inputID) { 
			var uiInputStyle = {
				'z-index' : 1
			}
			
			// Default Options
            var defaults = {  
                leftOffset: 0,  
                topOffset: 0
            };  
               
            var options = $.extend(defaults, options);
			
			// Creat the DIV to hold the menu
			var uiMenu = $('<div/>', {  
			       id: menuID,
			       'class': 'uiSelect',
			       css: {
			  		position: 'absolute', 
					display: 'none',
					zIndex : 1000
			       }
			  	});

			// Create the input box which will trigger the menu
			var uiInput = $('<input/>', {
				id: inputID,
				name: inputID,
				css: {
					position: 'relative'
				}
			});
			var uiOptionMenu = $('<ul/>', {
				'class': 'uiOptionMenu',
				css: {
					position: 'relative'
				}
			});

           
             return this.each(function() { 
				var obj = $(this).attr('id'); 
				var o = options;  
				// Array to hold the Select menu options
				var optionTexts = [];
				// Grab all the option itmes and push them to the optionsTexts array
				var menu = $('#' + obj + ' option').each(function() { optionTexts.push($(this).text()); });

				// add the input field for the select menu to the DOM
				$('#' + obj).after(uiInput);
				$('#' + inputID).after(uiMenu);
				$("#" + menuID).append(uiOptionMenu);
				$('#' + obj + ' option').each(function() { 
					var uiOption = $('<li><a href="#">' + $(this).text() + '</a></li>');
					$("#" + menuID + ' .uiOptionMenu').append(uiOption);
				});
				$('#' + obj).css('display','none');
				$('#' + inputID)
					.css(uiInputStyle)
					.click(function(){
							$('div.uiSelect').not("#" + menuID).slideUp('fast');
							//get the position of the placeholder element
							var position = $(this).position();  
							var uiHeight = parseInt($(this).css('height')) + 10;
							if (o.topOffset == 0){
								uiHeight = uiHeight;
							}else{
								uiHeight = uiHeight + o.topOffset;
							}
							//show the menu directly under the placeholder
							$("#" + menuID).css( { "left": (position.left + o.leftOffset) + "px", "top": (position.top + uiHeight) + "px" } );
							$("#" + menuID).slideDown();
							return false;
							}
					)
					.live('keydown',function(){
						$('#' + inputID).blur();
						$("#" + menuID).slideUp('fast');
				});
				$('*').live('click',function(){
					$("#" + menuID).slideUp('fast');
				});
				$('#' + menuID + ' a').click(function(){
					$('#' + inputID).val($(this).text());
					$("#" + menuID).fadeOut('fast');
					return false
				});
             });  
         }  
     });  
})(jQuery);