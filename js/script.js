
    $("button").click(function(){
      $("p").slideToggle();
    });


    var fixmeTop = $('#header').offset().top;
    $(window).scroll(function() {       
        var currentScroll = $(window).scrollTop();
        if (currentScroll >= fixmeTop) {
            $('#header').css({
                position: 'fixed',
                top: '0',
                left: '0'
            });
        } else {
            $('#header').css({
                position: 'static'
            });
        }
    });