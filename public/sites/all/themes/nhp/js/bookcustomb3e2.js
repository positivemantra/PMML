jQuery(function($) {


    $("#searchpagesubmit").click(function() {
        var totalImages = parseInt($("#totalImages").val());
        var pageNo = parseInt($("#searchpage").val());
        if (pageNo == '')
        {
            alert("Please enter page no");
        } else {
            if (pageNo > totalImages) {
                alert("Can not enter more number than total count of page");
                return false;
            }else if(isNaN(pageNo) || pageNo < 0){
                alert("Please enter valid no of pages");
                return false;
            } 
            else {
                br.jumpToIndex(parseInt(pageNo - 1));
            }
        }

        return false;
    });
    
    $('#ribbon').click(function() {

        var basepathval = $("#basepath").val();
        var url_hash1 = window.location.hash;
        var hash_array1 = url_hash1.split("/");
        var current_page1 = hash_array1[1];

        if (br.animating)
        {
            alert("You can set Bookmark in Two Page View mode only.");
            return false;

        }

        if (hash_array1[3] == "2up")
        {
            var ribbonval = $("#ribbonval").val();

            if (ribbonval != "")
            {

                actual_page_display = parseInt(ribbonval);
                br.jumpToIndex(actual_page_display);
                $("#ribbon").animate({
                    height: '670px',
                    opacity: 1
                }, 1800);
                $("#ribbon").css({
                    'z-index': '9'
                });
				
            }
        }
    });

    $('#bookmarkvisitvol').live('click', function() {

        var basepathval = $("#basepath").val();
        var url_hash1 = window.location.hash;
        var hash_array1 = url_hash1.split("/");
        var current_page1 = hash_array1[1];

        if (br.animating)
        {
            alert("You can see selected Bookmark in Two Page View mode only.");
            return false;
        }

        if (hash_array1[3] == "2up")
        {
            var ribbonval = $("#ribbonval").val();

            if (ribbonval != "")
            {

                actual_page_display = parseInt(ribbonval);
                br.jumpToIndex(actual_page_display);
                $("#ribbon").animate({
                    height: '670px',
                    opacity: 1
                }, 1800);
                $("#ribbon").css({
                    'z-index': '9'
                });
				
				
				
            }
        }


    });

    $('input:radio[name=print_option]').change(function() {
        if ($(this).val() == 'current')
        {
            $("#custom").val('');
            $("#page_from").val('');
            $("#page_to").val('');
            $("#page_from").attr('readonly', 'readonly');
            $("#page_to").attr('readonly', 'readonly');
            $("#custom").attr('readonly', 'readonly');
        }
        else if ($(this).val() == 'range')
        {
            $("#page_from").removeAttr('readonly');
            $("#page_to").removeAttr('readonly');
            $("#custom").val('');
            $("#custom").attr('readonly', 'readonly');
        }
        else if ($(this).val() == 'custom')
        {
            $("#page_from").val('');
            $("#page_to").val('');
            $("#page_from").attr('readonly', 'readonly');
            $("#page_to").attr('readonly', 'readonly');
            $("#custom").removeAttr('readonly');
        }
        else if ($(this).val() == 'even')
        {
            $("#custom").val('');
            $("#page_from").val('');
            $("#page_to").val('');
            $("#page_from").attr('readonly', 'readonly');
            $("#page_to").attr('readonly', 'readonly');
            $("#custom").attr('readonly', 'readonly');

        }
        else if ($(this).val() == 'odd')
        {
            $("#custom").val('');
            $("#page_from").val('');
            $("#page_to").val('');
            $("#page_from").attr('readonly', 'readonly');
            $("#page_to").attr('readonly', 'readonly');
            $("#custom").attr('readonly', 'readonly');
        }
    });

    var bookmarkAddAjaxFlag = false;
    $('#bookmarkpage').click(function() {
        if (br.mode == 2)
        {
            if (bookmarkAddAjaxFlag == false) {
                var basepathval = $("#basepath").val();

                var url_hash = window.location.hash;
                var hash_array = url_hash.split("/");
                var current_page = hash_array[1];

                if (current_page != 1)
                {
                    $("#ribbon1").attr('id', 'ribbon');
                    $("#ribbon").animate({
                        height: '670px',
                        opacity: 1
                    }, 1800);


                    $("#ribbon").css({
                        'z-index': '9'
                    });
					

                    $.ajax({
                        type: "POST",
                        url: basepathval + "/addBookmark",
                        data: {
                            baseurl: basepathval,
                            current_page: current_page,
                        },
                        beforeSend: function() {
                            bookmarkAddAjaxFlag = true;
                        },
                        success: function(data) {
                            var urlcode = current_page;
                            $("#ribbonval").val(urlcode);
                            bookmarkAddAjaxFlag = false;
                            //	window.location.reload();
                        },
                        error: function(xhr, ajaxOptions, thrownError) {
                        }
                    });
                }
            }
        }
        else
        {
            alert("You can set Bookmark in Two Page View mode only.");
            return false;
        }
    });
});

var cwmgBookmarkDeleteAjaxFlag = false;
$('#bookmarkdelete').live('click', function() {

    if (cwmgBookmarkDeleteAjaxFlag == false) {
        var ribbonval = $("#ribbonval").val();

        var basepathval = $("#basepath").val();

        $.ajax({
            type: "POST",
            url: basepathval + "/deleteBookmark",
            data: {
                ribbonval: ribbonval
            },
            beforeSend: function() {
                cwmgBookmarkDeleteAjaxFlag = true;
            },
            success: function(data) {
                $("#ribbon").hide();
                $("#ribbon1").hide();

                $("#ribbonval").val("");
                cwmgBookmarkDeleteAjaxFlag = false;

            },
            error: function(xhr, ajaxOptions, thrownError) {
            }
        });
    }
});

    

function disableEnterKey(e)
{
     var key;
     
     if(window.event)
          key = window.event.keyCode;     //IE
     else
          key = e.which;     //firefox

     if(key == 13)
          return false;
     else
          return true;
}