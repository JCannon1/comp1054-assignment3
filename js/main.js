    $('tobutton').click(function(event){
        /* stop default anchor behavior */
        event.preventDefault();
        // animate the whole page up to the scroll top over x milliseconds 
        $('html, body').animate({scrollTop: 0}, 300);
});