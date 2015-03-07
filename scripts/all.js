(function(cash) { "use strict";
  var obj;
	function center_image(){
		$('.center_img').each(function(){
			obj = $(this);
			var bg_ratio = obj.attr('data-width-img') / obj.attr('data-height-img');
			var wrapper_ratio = obj.parent().width() / obj.parent().height();
			if(bg_ratio<wrapper_ratio){
				var center = (obj.parent().width() / bg_ratio - obj.parent().height())*(-0.5);
				obj.css({'left':'0px', 'top':center, 'width':'100%', 'height':'auto'});
			}
			else{
				var center_hor = (bg_ratio*obj.parent().height() - obj.parent().width())*(-0.5);
				obj.css({'left':center_hor, 'top':'0px', 'height':'100%', 'width':'auto'});
			}
		});
	}

//////////////////////////////////////////////////////-===SLIDERS===-////////////////////////////////////////////////                 

var portfolio_container;         
		 $(function(){
			  portfolio_container = $('.portfolio-baner').swiper({
				loop:false,
				slidesPerView: 1,
                autoplay: 2000 
			});
		});

var big_block_container;         
		 $(function(){
			 big_block_container = $('.featured-baner').swiper({
				slidesPerView: 1,
                calculateHeight: true,
                roundLengths: true,
                autoplay: 3000,
                loop:true, 
                grabCursor: true, 
                onInit: function() {
                    var indexText = $('.hide-text').index(this);
                    var qIndex = big_block_container.activeLoopIndex;
                    $('.featured-text .f-title').text($('.hide-text').eq(qIndex).parent().find('h4').text());
                    $('.featured-text .f-category').text($('.hide-text').eq(qIndex).parent().find('h5').text());
                    $('.featured-text .f-text').text($('.hide-text').eq(qIndex).parent().find('p').text());
                },  
                onSlideChangeStart : function() {
					$('.number-slide span').text(big_block_container.activeLoopIndex+1);
				},
                onSlideChangeEnd: function() {
                    var indexText = $('.hide-text').index(this);
                    var qIndex = big_block_container.activeLoopIndex;
                    $('.featured-text .f-title').text($('.hide-text').eq(qIndex).parent().find('h4').text());
                    $('.featured-text .f-category').text($('.hide-text').eq(qIndex).parent().find('h5').text());
                    $('.featured-text .f-text').text($('.hide-text').eq(qIndex).parent().find('p').text());
                } 
			});
      }); 
                 
var about_container;         
		 $(function(){
			  about_container = $('.testimonial-baner').swiper({
				loop:true,
				slidesPerView: 1,
                autoplay: 2000,
                calculateHeight: true,
                grabCursor: true,  
                pagination: '.testi-points',
				paginationClickable: true,
				createPagination: true
			});
		}); 
            
     $('.featured-baner .slide-prev').on( "click", function() { 
		big_block_container.swipePrev();
		return false;
	  });
	
	  $('.featured-baner .slide-next').on( "click", function() { 
		big_block_container.swipeNext();
		return false;
	  });
                 
     $('.preview-hover img').on( "click", function() { 
			var eqIndex = $('.preview-hover img').index(this);
			big_block_container.swipeTo(eqIndex);
			big_block_container.stopAutoplay();
			return false;
		}); 
                 
//////////////////////////////////////////////////////-===CLICK===-////////////////////////////////////////////////    

$('.nav-menu-icon a').on( "click", function() { 
  if ($('.navigation').hasClass('slide')) {
      $('.navigation').removeClass('slide');
      $(this).removeClass('active');

      // $('header').removeClass('menuSelected');

  }else {
      $('.navigation').addClass('slide');
      $(this).addClass('active');
 
      // $('header').addClass('menuSelected');
  }
    return false;
 
});

  
                 
    $('.button-totop').on( "click", function() {              
        $('body,html').animate({
             scrollTop: 0
         }, 400);
           return false;
    }); 
                 
    $(window).load(function(){
         center_image();
        $('.preload').hide();
            var $container = document.querySelector('#container-masonry');
             var msnry = new Masonry( $container, {
                  itemSelector: '.news-item',
                  columnwidth: '.news-item',
                  gutter: ".gutter-sizer"
                });
    });
                 
    $(window).resize(function(){
         center_image();
    });             

})(jQuery); 