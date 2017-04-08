    var navTop = $('#booknav').offset().top;
    // added the scroll function
    $(window).scroll(function(){
        // add .topfloater class after window scrolls past top of the booknav
        if ($(window).scrollTop() > navTop){
            // add class .topfloater
            $('#booknav').addClass('topfloater');
            // make the back to top button appear over 200 milliseconds
            $('#topbutton').fadeIn(200);
        }
        else {
            // remove class .topfloater
            $('#booknav').removeClass('topfloater');
            // hide the back to top button over 200 milliseconds
            $('#topbutton').fadeOut(200);
        }
    });
    
    $('#topbutton').click(function(event){
        event.preventDefault();
        // animate the whole page up to the top over 400 milliseconds 
        $('html, body').animate({scrollTop: 0}, 400);
    });

    // animate #topbutton 
    $('#topbutton').click(function(event){
        event.preventDefault();
        // made the back to top button set to 400 milliseconds 
        $('html, body').animate({scrollTop: 0}, 400);
});