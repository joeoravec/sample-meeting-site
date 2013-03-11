(function(){
    var dir = "102nd";
    var aperioLink = "http://www.aperio.com/appcenter";

    var footnoteDiv = '<div id="hoverfootnote"></div>';
    var footnoteAddition = "<p class=\"footnote-return\">Click now to navigate to reference section, then Back Button to return here.</p>";
    $('document').ready(function(){
        // copy local navigation to bottom of content
        $('.case-navigation').clone().addClass('case-bottom').appendTo('.meeting-content');

        // add container for footnote; hide it
        $('.meeting-content').append(footnoteDiv);
        $('#hoverfootnote').hide();

        // replace 'bad' aperio link
        $('a.aperio-download').attr('href',aperioLink);

        // handle footnote events
        $('.referencelink').live({
            mouseover: function(e) {
                var docWidth = $(document).width();
                $('#hoverfootnote').css('top',(e.pageY+10) + 'px').css('left',(e.pageX+10) + 'px');
                var thistarget = $(this).attr('data-reference');
                var thisref = $('li#'+thistarget).html();
                thisref += footnoteAddition;
                if (e.pageX > docWidth/2) {
                    var boxwidth = $('#hoverfootnote').css('width');
                    $('#hoverfootnote').css('left',(e.pageX-10-parseInt(350)) + 'px');
                }
                $('#hoverfootnote').html(thisref).stop(true,true).fadeIn();
            },
            mouseout: function(e) {
                $('#hoverfootnote').fadeOut();
            },
            click: function(e) {
                $('#hoverfootnote').fadeOut();
            }
        });

        // handle figures
        /*
        $('.parnav').on('click', function(e) {
            e.preventDefault();
            var thisfigid = $(this).closest('figure').data('figureId');
            parnav(thisfigid);
        });
*/

        // handle figures
        $('.parnav').on('click', function(e) {
            e.preventDefault();
            var thisfigid = $(this).closest('figure').data('figureId');
            var thisfighref = $(this).attr('href').replace('.jpg','');
            var thisfigdesc = $(this).closest('figure').find('figcaption').text()
            thisfigdesc = $.trim(thisfigdesc);
            
            var slidenum = thisfighref.substr(thisfighref.lastIndexOf("/")+1);
            var desc = thisfigdesc;

            myslidepop(dir,desc,slidenum)
        });

        // handle vslide web viewer links
        $('.vslide-web').on('click', function(e) {
            e.preventDefault();
            var thisVslideHref = $(this).attr('href');
            vpopone(thisVslideHref);
        });

        $('.add-to-itinerary').on('click', function(e){
            e.preventDefault();
            var thisItinItem = $(this).data('itinItem');
            var thisItinParam = itineraryArray[thisItinItem];
            addrecord(thisItinParam.mtgid, thisItinParam.datestr, thisItinParam.st, thisItinParam.et, thisItinParam.wd, thisItinParam.evt, thisItinParam.room, thisItinParam.crs, thisItinParam.yesno, thisItinParam.conflict);
        });


    });
})();