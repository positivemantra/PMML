/*---------------------------------------------------------------------*/
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
;(function($){

$(document).ready( function(){
	ww = document.body.clientWidth;
	$('body').removeClass('noJS').addClass("hasJS");
        
	/*Navigation */
	if( $("#nav").length) {
		$(".toggleMenu").click(function(e) {
			e.preventDefault();
			$(this).toggleClass("active");
			$("#nav").slideToggle();
			$("#nav li").removeClass("resHover")
			$(".resIcon").removeClass("active")
			return false;
		});
		$("#nav li a").each(function() {
			if ($(this).next().length) {
				$(this).parent().addClass("parent");
			};
		})
		/*$("#nav li.parent").each(function () {
            if ($(this).has(".menuIcon").length <= 0) $(this).append('<i class="menuIcon">&nbsp;</i>')
        });*/
		dropdown('nav', 'hover', 1);
		adjustMenu();
	}	
	if( $(".btnClose").length) {
		$(".btnClose").click(function(e) {
			e.preventDefault();
			$(this).parent().fadeOut('slow');
			return false;
		});
	}
	// Index Banner Slider
	if( $(".sliderSection .item").length > 1) {
		var owl = $(".sliderBanner");
		owl.owlCarousel({
			loop:true,
			autoplay:false,
			autoplayTimeout:3000,
			smartSpeed:1200,
			items : 1,                    
			//dots : false		
		});
                
                
	}
               
    
	// Content Tabing Script
	if( $(".tabbing").length) {
		$('.tabbing').responsiveTabs({
			startCollapsed: 'accordion', //accordion
			collapsible: 'accordion' //accordion

		});
	}	
	// Accordian List Script
	if( $(".accordion").length){
		   $('.accordion .accordDetail').hide();
		   $('.accordion .accTrigger').click(function(){
			  if ($(this).hasClass('active')) {
				   $(this).removeClass('active');
				   $(this).next().slideUp();
			  } else {
				   $('.accordion .accTrigger').removeClass('active');
				   $(this).addClass('active');
				   $('.accordion .accordDetail').slideUp();
				   $(this).next().slideDown();
			  }
			  return false;
		   });
	};
	
	
	
	//Recent Updates
	$('.ticker').each(function(i){
		$(this).addClass('tickerDiv'+i).attr('id', 'ticker'+i);
		$('#ticker'+i).find('.tickerDivBlock').first().addClass('newsTikker'+i).attr('id', 'newsTikker'+i);
		$('#ticker'+i).find('a').first().attr('id', 'stopNews'+i)
		$('#newsTikker'+i).vTicker({ speed: 1E3, pause: 4E3, animation: "fade", mousePause: false, showItems:1, height:60, direction: 'up' })
		$("#stopNews"+i).attr("href", "javascript:void(0)").toggle(function () {
			$(this).removeClass("stop").addClass("play").text("Play").attr('title', 'Play');
			}, function () {
			$(this).removeClass("play").addClass("stop").text("Pause").attr('title', 'pause');
		}); 
	});
	
        $("#stopNews0").click(function(){ 
            if($(this).hasClass('play')){
                $(this).text("Play");
                $(this).title("Play");
            }else{
                $(this).text("Pause");
                $(this).title("Pause");
            }           
        });
	if( $(".marqueeScrolling li").length > 1){
		var $mq = $('.marquee').marquee({
			speed: 25000,
			gap: 0,
			duplicated: true,
			pauseOnHover: true
			});
		$(".btnMPause").toggle(function(){
			$(this).addClass('play');
			$(this).text('Play');
			$mq.marquee('pause');
		},function(){
			$(this).removeClass('play');
			$(this).text('Pause');
			$mq.marquee('resume');
			return false;
		});
	}
	
	//Language Select Box
	$( ".searchSelect select" ).addClass( "customSelect" );
	$( ".form-item-lang-dropdown-select select" ).addClass( "customSelect" );

	
	if( $(".customSelect").length > 0){
		$(".customSelect").customSelect();
	};
	

	

    	// Back to Top function
    	if( $("#backtotop").length){
    		$(window).scroll(function(){
    			if ($(window).scrollTop()>120){
    			$('#backtotop').fadeIn('250').css('display','block');}
    			else {
    			$('#backtotop').fadeOut('250');}
    		});
    		$('#backtotop').click(function(){
    			$('html, body').animate({scrollTop:0}, '200');
    			return false;
    		});
    	};
	
//Table
if( $(".tableData").length > 0){
	$('.tableData').each(function(){
		$(this).find('tr').each(function(){	
		$(this).find('td:first').addClass('firstTd');								 
		$(this).find('th:first').addClass('firstTh');
		$(this).find('th:last').addClass('lastTh');
		});
		$(this).find('tr:last').addClass('lastTr');
		$(this).find('tr:even').addClass('evenRow');
		$(this).find('tr:nth-child(2)').find('th:first').removeClass('firstTh');
	});	
};
// Responsive Table
/*	if( $(".tableData").length){
		$(".tableData").each(function(){
		$(this).wrap('<div class="tableOut"></div>');
		$(this).find('td').removeAttr('width');$(this).find('td').removeAttr('align');
		var head_col_count =  $(this).find('tr th').size();
		// loop which replaces td
		for ( i=0; i <= head_col_count; i++ )  {
			// head column label extraction
			var head_col_label = $(this).find('tr th:nth-child('+ i +')').text();
			// replaces td with <div class="column" data-label="label">
			$(this).find('tr td:nth-child('+ i +')').attr("data-label", head_col_label);
		}
		});
	}*/
// 	prettyPhoto
	if( $("*[rel^='prettyPhoto']").length > 0){
		$("*[rel^='prettyPhoto']").prettyPhoto({autoplay_slideshow: false, social_tools: false, deeplinking:false});;
		$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true, social_tools: false, deeplinking:false});
		$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true, social_tools: false, deeplinking:false});
	};
	
// Video JS
	if( $("#player_a").length){
		projekktor('#player_a', {
        poster: 'videoplayer/media/intro.png',
        title: 'this is projekktor',
        playerFlashMP4: 'http://192.168.6.116/htmlcodebank/videoplayer/jarisplayer.swf',
        playerFlashMP3: 'http://192.168.6.116/htmlcodebank/videoplayer/jarisplayer.swf',
        width: 640,
        height: 385,
		fullscreen:true,
        playlist: [
            {0: {src: "videoplayer/media/intro.mp4", type: "video/mp4"}}
        ]    
        }, function(player) {} // on ready 
        );
	}

	// For device checking
	if (isMobile == false) {
	
	}
	/*if( $("#gmap").length){
		google.maps.event.addDomListener(window, 'load', function() {
		var map = new google.maps.Map(document.getElementById('gmap'), {
		zoom: 15,
		center: new google.maps.LatLng(25.460097,81.860513),
		mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		var infoWindow = new google.maps.InfoWindow;
		var onMarkerClick = function() {
		  var marker = this;
		  var latLng = marker.getPosition();
		  infoWindow.setContent('<strong>Swaraj Bhavan</strong><br>Allahabad, Uttar Pradesh');
		  infoWindow.open(map, marker);
		};
		google.maps.event.addListener(map, 'click', function() {
		  infoWindow.close();
		});
		var marker = new google.maps.Marker({
		  map: map,
		  position: new google.maps.LatLng(25.460097,81.860513)
		});
		google.maps.event.addListener(marker, 'click', onMarkerClick);
	  });
	}
	*/
	//Image Gallery
	
	
	$(function() {
		$(".imageGallerySmall").click(function() {
		var description = $(this).attr("content");
		var place = $(this).attr("title");
		var source = $(this).attr("name");
		$('#photoDescription').hide();
		$('#photoDescription').fadeIn('slow');
		$('#photoDescription').animate({left:'250px'});
		$('#Description').html(description);
		$('#Place').html(place);
		$('#Source').html(source);
		return false;
		});
	});
		
	if( $(".ad-gallery").length > 0){
		$('.ad-gallery').adGallery();
	};
	$( ".showingPhoto span" ).append( $( ".ad-info" ) );
	//End Image Gallery
	
	
	
	$(window).bind('resize', resizeBanner);
	resizeBanner();
	
	$(window).bind('resize', resizeWindow);
	resizeWindow();
	
	
	/*if($(".view-writings ul li").length > 1){
		$(".view-writings ul li").each(function( index ) {
			if((index+1)%2 == 0){
				$(this).addClass('bhaven');
			}
		});	
	}
	$(".view-writings ul:even").addClass("firstRow");
	$(".view-writings ul:odd").addClass("secondRow");
	*/

      //In Prison	 Catagory
	$(function () {
		
		var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixitup({
					targetSelector: '.portfolio',
					filterSelector: '.filter',
					effects: ['fade'],
					easing: 'snap',
					// call the hover effect
					onMixEnd: filterList.hoverEffect()
				});				
			
			},
			
			hoverEffect: function () {
			
				// Simple parallax effect
				$('#portfoliolist .portfolio').hover(
					function () {
						$(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
						$(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');				
					},
					function () {
						$(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
						$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
					}		
				);				
			
			}

		};
		
		// Run the show!
		filterList.init();
		
		
	});
	//Family tree
	  $('img[usemap]').rwdImageMaps();
	  if($('#nehru-family-tree').length){
		$('.popupBox, .popupArrow').fadeOut();
		$('#nehru-family-tree area').click(function(event){
			var nftId = "#"+$(this).attr('data-name');
			$('.popupArrow').css({'top':event.pageY-30, 'left':event.pageX})
			var nftX = event.pageX-203;
			var nftY = event.pageY-220;
			if(($(window).width() - 425) < nftX){
				nftX = $(window).width()-425;
			}
			if(nftX <= 0){nftX = 20};
			/*if($(window).width() <= 1024){
				if(nftX >= 609){nftX = 609};
				if(nftX <= 0){nftX = 0};
			}else{
				if(nftX >= 1075){nftX = 1075};
				if(nftX <= 0){nftX = 0};
			}*/
			$(nftId).css({'top':nftY, 'left':nftX});
			$('.popupBox').fadeOut();
			$(nftId).fadeIn();
			$('.popupArrow').fadeIn();
			return false;
		});
		
	}
	
	$('.closePopup').click(function(){
		$(this).parent().parent().fadeOut();
		$('.popupArrow').fadeOut();
		return false;
	})
// Internal bookmark
       /*$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});*/

	//To open alert dialog on non government link
	/*$('.nongovlink').on('click', function () {
        return confirm('This link shall take you to an external website. Do you want to continue?');
    });*/
	
	
		$('a').not(".litebox, .w3cLogos a, .videoPopupLink").filter(function() {
		return this.hostname && this.hostname !== location.hostname;
	  }).click(function(e) {  
	   e.preventDefault();
	  	var url = $(this).attr("href");		 
		 smoke.confirm("This link shall take you to an external website. Do you want to continue?", function(e){
			if (e){ 
				 window.open(url, "_blank");		
			}else{ 
				return false; 
			}
	}, {
		ok: "Yes",
		cancel: "No",
		classname: "custom-class",
		reverseButtons: true
	}); 
		  
		 /*  if(!confirm("You are about to proceed to an external website.  The IFR has no control over the content of this site. Click OK to proceed."))
		   {
				// if user clicks 'no' then dont proceed to link.
				e.preventDefault();
		   };*/
  });
		

	// To open Alert Dialogbox for language switch
	$("#lang-dropdown-select-language").change(function(e){
		return alert('This page transalating language. Do you want to continue?');
	});
	
});

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
	if (ww <= 800) {
		$('.tabbing').responsiveTabs({
			startCollapsed: 'tab', //accordion
			collapsible: 'tab' //accordion

		});	
	}
});



})(jQuery);

if($('.testimonialSection').length > 0){
	function equalHeight(group) {
	   tallest = 0;
	   group.each(function() {
		  thisHeight = $(this).height();
		  if(thisHeight > tallest) {
			 tallest = thisHeight;
		  }
	   });
	   group.height(tallest);
	}
	
	$(document).ready(function(){
	   equalHeight($('.commonTestimonial'));
	});
};

/*$(window).bind('resize', function() {
	var width1 = $(document).width();
	var width2 = $('.sliderDetailLeft').width(); 
	var width3 = $('.sliderImage').width();
	var width4 = $('.testimonialSection').width();
	var width_diff = (width1 - width2 - width3 - width4) + "px"
	alert(width_diff);
	document.getElementById('spaceDiv').style.width = width_diff; 
}).trigger('resize');*/




function resizeBanner(){
	winWidth = $(window).width();
	var boxWidth = Math.floor(winWidth/4);
	var containerHeight = $('.sliderSection').height();

	$('.testimonialSection').css({
		width: boxWidth * 2,
		height: '100%'
	});
	$('.testimonialSection ul').css({
		marginLeft: '170px',
		height: '100%'
	});
	$('.testimonialSection ul li').css({
		width: boxWidth - 85 + 'px',
		height: '50%'
	});
}

function resizeWindow(){
	if($(window).width() < 1279){
		$('.testimonialSection').each(function(){
			var maxHeight = 0;
			var $boxHeight = $(this).find('li');
			$boxHeight.each(function(){
				var thisHeight = $(this).height();
				if(thisHeight>maxHeight) maxHeight = thisHeight;
			});
			$boxHeight.height(maxHeight);
		});
	}
}

function burstCache() 
{
		if (!navigator.onLine) 
        {
				
                document.body.innerHTML = 'Loading...';
                window.location = 'http://localhost/moc/user';
         }
} 
burstCache();
