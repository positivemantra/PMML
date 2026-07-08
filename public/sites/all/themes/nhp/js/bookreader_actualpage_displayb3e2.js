function print_pages(base_url, flag)
{
    var selected_print_option = $('input:radio[name=print_option]:checked').val();
    var hash_url = window.location.hash;
    var hash_array = hash_url.split("/");
    var current_page = hash_array[1];
    var current_display_layout = hash_array[3];
    var bookTitleDisplay = $("#bookTitleDisplay").val();

    var bookDisplayPath = $("#bookDisplayPath").val();
    var totalImages = $("#totalImages").val();
    var content = '<table width="100%" border="0">';

    var headercontent = "<div style='font-size:14px; color:#000;'>Nehru Heritage Portal <span style='display:block; font-size:12px; line-height:22px;'>" + bookTitleDisplay + "</span> </div>";

    var footercontent = "<div>&copy; 2014 Nehru Heritage Portal</div>";
    if (selected_print_option == "current")
    {
        var autoclose_second_limit = 1000;

        var next_filename = '';
        if (current_display_layout == '2up' && current_page > 1)
        {
            var next_page_number = parseInt(current_page) + 1;
            next_filename = next_page_number + '.jpg';
        }

        var filename = current_page + '.jpg';
        content += '<tr><td align="center">' + '<img src="' + bookDisplayPath + '/' + filename + '" alt="" width="95%" />' + '</td></tr>';
        if (next_filename != '')
        {
            content += '<tr><td align="center">'  + '<img src="' + bookDisplayPath + '/' + next_filename + '" alt="" width="95%" />'  + '</td></tr>';
        }

    }
    else if (selected_print_option == "range")
    {
        var autoclose_second_limit = 5000;
        var from_page = parseInt(($.trim($("#page_from").val())));
        var to_page = parseInt($.trim($("#page_to").val()));
        if (from_page < totalImages && to_page < totalImages) {
            if (from_page > 0 && to_page > 0)
            {
                if (to_page < from_page)
                {
                    alert("To Page number should be greater than From Page Number");
                    $("#page_to").focus();
                    return false;
                }
                else
                {
                    for (var i = from_page; i <= to_page; i++)
                    {
                        var filename = i + '.jpg';
                        content += '<tr><td align="center">' +  '<img src="' + bookDisplayPath + '/' + filename + '"alt="" width="95%" />' +  '</td></tr>';
                    }
                }
            }
            else
            {
                alert("Please Enter valid page range.");
                $("#page_from").val('');
                $("#page_to").val('');
                return false;
            }
        } else {
            alert("Can not enter more number than total count of page");
            return false;
        }
    }
    else if (selected_print_option == "custom")
    {
        var autoclose_second_limit = 20000;
        var custom_page_range = $("#custom").val();
        var comma_seperated_pages = custom_page_range.split(",");
        var total_pages = comma_seperated_pages.length;

        for (var i = 0; i < total_pages; i++)
        {
            var dash_seperaeted_pages = comma_seperated_pages[i].split("-");
            var total_dash_seperated = dash_seperaeted_pages.length;
            if (total_dash_seperated > 1)
            {
                var seperated_from_page = parseInt($.trim(dash_seperaeted_pages[0]).toUpperCase());
                var seperated_to_page = parseInt($.trim(dash_seperaeted_pages[1]).toUpperCase());

                if (seperated_from_page < totalImages && seperated_to_page < totalImages) {
                    if (seperated_from_page < seperated_to_page) {
                        if (seperated_from_page > 0 && seperated_to_page > 0)
                        {
                            for (var j = seperated_from_page; j <= seperated_to_page; j++)
                            {
                                var filename = j + '.jpg';
                                content += '<tr><td align="center">'  + '<img src="' + bookDisplayPath + '/' + filename + '" alt="" width="95%" />'  + '</td></tr>';

                            }
                        }
                    } else {
                        alert("Enter Valid Numbers");
                        return false;
                    }
                } else {
                    alert("Can not enter more number than total count of page");
                    return false;
                }
            }
            else
            {
                var newpagenumber = $.trim(comma_seperated_pages[i]).toUpperCase();
                var actual_newpagenumber = parseInt(newpagenumber);

                if (actual_newpagenumber > 0)
                {
                    var filename = actual_newpagenumber + '.jpg';
                    content += '<tr><td align="center">'  + '<img src="' + bookDisplayPath + '/' + filename + '" alt="" width="95%" />'  + '</td></tr>';

                }
            }
        }
    }
    else if (selected_print_option == "even")
    {
        var autoclose_second_limit = 50000;

        for (var ev = 1; ev <= totalImages; ev++)
        {

            if (parseInt(ev) % 2 == 0)
            {
                var filename = ev + '.jpg';
                content += '<tr><td align="center">'  + '<img src="' + bookDisplayPath + '/' + filename + '" alt="" width="95%" />'  + '</td></tr>';
            }

        }

    }
    else if (selected_print_option == "odd")
    {
        var autoclose_second_limit = 50000;
        for (var odd = 1; odd <= totalImages; odd++)
        {

            if (parseInt(odd) % 2 != 0)
            {
                var filename = odd + '.jpg';
                content += '<tr><td align="center">' + headercontent + '<img src="' + bookDisplayPath + '/' + filename + '" alt="" width="95%" />' + footercontent + '</td></tr>';
            }
        }
    }
    else {
        alert("Invalid Print Option is selected.");
        return false;
    }
    content += '</table>';
    if (navigator.appVersion.indexOf("Chrome") != -1 || navigator.appVersion.indexOf("MSIE") != -1)
    {
        if (navigator.appVersion.indexOf("Chrome") != -1)
        {
            var pwin = window.open('', 'PrintContent', 'width=600,height=600');
        }
        else
        {
            var pwin = window.open('', 'PrintContent', 'width=10,height=10');
        }
        pwin.document.open();
        pwin.document.write('<html><body onload="window.print();">' + content + '</body></html>');
        pwin.document.close();
        setTimeout(function() {
            pwin.close();
        }, autoclose_second_limit);
    }
    else
    {
        $("#printcontent").html(content);
        $("#printcontent").print();
    }
}

