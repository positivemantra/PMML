/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*(function($){
jQuery(document).ready( function(){ 
     
});
})(jQuery);*/
function rotateLeft(action) {
	var picture = jQuery('.galleria-lightbox-image .nhpGalleryZoom');
	//alert(picture.attr('src'));
	picture.guillotine({eventOnChange: 'guillotinechange'});
	var data = picture.guillotine('getData');
	//data.scale = parseFloat(data.scale.toFixed(4));
	//for(var k in data) { jQuery('#'+k).html(data[k]); }
	//alert(picture);
	//alert(data);
	for(var key in data) { jQuery('#'+key).html(data[key]); }
	
	// Bind button actions
	if(action==1) {
		picture.guillotine('rotateLeft');
	}else if(action==2) {
		picture.guillotine('zoomOut');
	} else if(action==3) {
		picture.guillotine('fit');
	} else if(action==4) {
		picture.guillotine('zoomIn');
	} else if(action==5) {
		picture.guillotine('rotateRight');
	}/*  else {
		data.scale = parseFloat(data.scale.toFixed(4));
          for(var k in data) { jQuery('#'+k).html(data[k]); }
	} */
	
      //picture.on('load', function(){	
	  /*picture.load( function(){	
		  alert('test');
        // Initialize plugin (with custom event)
        picture.guillotine({eventOnChange: 'guillotinechange'});

        // Display inital data
        var data = picture.guillotine('getData');
		alert(data);
        for(var key in data) { jQuery('#'+key).html(data[key]); }
		
		action='rotateLeft';
        // Bind button actions
		if(action=='rotateLeft') {
			picture.guillotine('zoomIn');
		}
        jQuery('#rotate_left').click(function(){ picture.guillotine('rotateLeft'); });
        jQuery('#rotate_right').click(function(){ picture.guillotine('rotateRight'); });
        jQuery('#fit').click(function(){ picture.guillotine('fit'); });
        jQuery('#zoom_in').click(function(){ alert("sanjay"); picture.guillotine('zoomIn'); });
        jQuery('#zoom_out').click(function(){ picture.guillotine('zoomOut'); });

        // Update data on change
        picture.on('guillotinechange', function(ev, data, action) {
          data.scale = parseFloat(data.scale.toFixed(4));
          for(var k in data) { jQuery('#'+k).html(data[k]); }
        });
      });*/
}