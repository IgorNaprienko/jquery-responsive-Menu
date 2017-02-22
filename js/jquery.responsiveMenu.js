/*
 *  jQuery responsive Menu v1.0
 *
 *  Copyright (c) 2017 Igor Naprienko
 *  http://naprienko.in.ua/
 *
 *  Licensed under MIT
 *
 */
(function ($) {
	        var active;
		var margin = 0;
		var Carousel = {
			// инициализация плагина
			init:function( options, el ) {
				// актуальные настройки, будут индивидуальными при каждом запуске
				var base = this;
				
				base.$elem = $(el);
				base.$menu = $(el).find('.msl-menu');
				base.$cont= $(el).find('.msl-container');
				base.$elem.addClass('msl-carousel');
                                base.$first = $(el).find('.msl-item:first-of-type');
				active =  base.$first;
				
				base.options = $.extend({}, $.fn.carouselMenu.options, base.$elem.data(), options);
				base.userOptions = options;
				
				base.customEvents();
		                base.load();
			},
			load:function(){
				var base = this;
				if ( base.$menu.outerWidth() > base.$cont.outerWidth() ) {
					base.$elem.addClass('active');
				}else{
					base.$elem.removeClass('active');
				}
			},
			// прокрутить назад
			prev:function() {
				var base = this;
				if(active.next().length != 0 && ( ( base.$menu.offset()).left  +  base.$menu.outerWidth()    > (base.$cont.offset().left) + base.$cont.outerWidth()  ) ){
				   active = active.next();
				   margin = margin + (active.offset()).left -  (base.$cont.offset()).left;
				   base.setMargin(margin);
			    }else{
				   active=base.$first;
				   margin=0;
				   base.setMargin(margin);
			    }
				
			},
			// вперед
			next:function() {
				var base = this;
				if(active.prev().length != 0 ){
					active = active.prev();
					margin = margin + (active.offset()).left -  (base.$cont.offset()).left;
					this.setMargin(margin);
			    }else{
					active=base.$first;
					margin=0;
					this.setMargin(margin);
			    }
				
			},
			customEvents : function () {
            // пользовательские вызовы
				var base = this;
				base.$elem.on("next", function () {
					base.next();
				});
				base.$elem.on("prev", function () {
					base.prev();
				});
			},
			setMargin:function (margin) {
				var base = this;
			    base.$menu
				   .animate({
				   marginLeft: '-'+margin
			   }, 500, function () {
				   // Animation complete.
			   })
			}
		};
		$.fn.carouselMenu = function( options ) {
			
			return this.each(function () {
				if ($(this).data("menu-init") === true) {
					return false;
				}
				$(this).data("menu-init", true);
				var carousel = Object.create( Carousel );
				
				carousel.init(options, this);
				$(window).on("resize",function () {
				   carousel.load();
			   });
			});
		};
		$.fn.carouselMenu.options = {
			background:"red"
		};
		
}(jQuery));
