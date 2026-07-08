jQuery(function($) {
    
        $("#various1").click(function(){
            $('input:radio[name=print_option]').each(function () {
            if($(this).val() == 'current')
            {
                $(this).attr('checked', 'checked');
            }
            else
            {    
                $(this).removeAttr('checked');
            }
        });
    
        $("#page_from").val('');
        $("#page_to").val('');
        $("#custom").val('');
        $("#page_from").attr('readonly','readonly');
        $("#page_to").attr('readonly','readonly');
        $("#custom").attr('readonly','readonly');
	});

    $("#various1").fancybox({
				'titleShow' : false,
				'transitionIn'		: 'elastic',
				'transitionOut'		: 'fade'
	});
    
    $("#printCancel").click(function(){
        $.fancybox.close();
    });    
    
//    $("#downloadPdf").click(function(){
//       window.location.href = baseUrl+'/downloadPDF/'+$("#volume_number").val();
//       return false;
//    });    
});